window.app.component('skills-section', {
    template: `
        <section class="py-20 bg-gray-100" id="skills">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-16">Skills</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center">
                        <div class="relative w-32 h-32">
                            <svg class="transform -rotate-90 w-32 h-32">
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="60"
                                    stroke="#e6e6e6"
                                    stroke-width="8"
                                    fill="none"
                                />
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="60"
                                    :stroke="skill.color"
                                    stroke-width="8"
                                    fill="none"
                                    :stroke-dasharray="circumference"
                                    :stroke-dashoffset="dashOffset(skill.percentage)"
                                    class="transition-all duration-1000"
                                />
                            </svg>
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                                {{ skill.percentage }}%
                            </div>
                        </div>
                        <p class="mt-4 text-lg font-semibold">{{ skill.name }}</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    setup() {
        const { ref, computed } = Vue;

        const circumference = 2 * Math.PI * 60;
        
        const skills = ref([
            { name: 'Vue.js', percentage: 90, color: '#41B883' },
            { name: 'JavaScript', percentage: 85, color: '#F7DF1E' },
            { name: 'HTML5', percentage: 95, color: '#E34F26' },
            { name: 'CSS3', percentage: 85, color: '#1572B6' },
            { name: 'Git', percentage: 80, color: '#F05032' },
            { name: 'Tailwind', percentage: 88, color: '#38B2AC' },
        ]);

        const dashOffset = (percentage) => {
            return circumference - (percentage / 100 * circumference);
        };

        return {
            skills,
            circumference,
            dashOffset
        };
    }
});