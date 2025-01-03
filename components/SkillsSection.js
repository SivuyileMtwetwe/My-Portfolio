window.app.component('skills-section', {
    template: `
        <section id="skills" class="py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5">Skills</h2>
                <div class="row g-4">
                    <div v-for="skill in skills" :key="skill.name" class="col-6 col-md-3 text-center">
                        <div class="progress-circle position-relative mx-auto" style="width: 120px; height: 120px;">
                            <svg class="w-100 h-100" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="55" stroke="#e6e6e6" stroke-width="10" fill="none"></circle>
                                <circle :stroke="skill.color" cx="60" cy="60" r="55" stroke-width="10" fill="none" 
                                    :stroke-dasharray="circumference" 
                                    :stroke-dashoffset="dashOffset(skill.percentage)" 
                                    class="transition-all"></circle>
                            </svg>
                            <div class="position-absolute top-50 start-50 translate-middle fw-bold">{{ skill.percentage }}%</div>
                        </div>
                        <p class="mt-3">{{ skill.name }}</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    setup() {
        const circumference = 2 * Math.PI * 55;
        const skills = [
            { name: 'HTML', percentage: 90, color: '#E34F26' },
            { name: 'CSS', percentage: 85, color: '#1572B6' },
            { name: 'JavaScript', percentage: 80, color: '#F7DF1E' },
            { name: 'Vue.js', percentage: 75, color: '#41B883' },
        ];

        const dashOffset = (percentage) => circumference - (percentage / 100) * circumference;

        return {
            skills,
            circumference,
            dashOffset,
        };
    }
});