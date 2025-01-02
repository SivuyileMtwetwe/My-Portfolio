window.app.component('projects-section', {
    template: `
        <section class="py-20" id="projects">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-16">Projects</h2>
                
                <!-- Filter Buttons -->
                <div class="flex flex-wrap justify-center gap-4 mb-12">
                    <button 
                        v-for="filter in filters"
                        :key="filter"
                        @click="currentFilter = filter"
                        :class="['px-4 py-2 rounded-full transition duration-300',
                                currentFilter === filter 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-200 hover:bg-gray-300']"
                    >
                        {{ filter }}
                    </button>
                </div>

                <!-- Projects Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div 
                        v-for="project in filteredProjects" 
                        :key="project.id"
                        class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2"
                        @click="openProject(project)"
                    >
                        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                            <p class="text-gray-600 mb-4">{{ project.shortDescription }}</p>
                            <div class="flex gap-4">
                                <a :href="project.demo" target="_blank" class="text-blue-600 hover:text-blue-800">Live Demo</a>
                                <a :href="project.github" target="_blank" class="text-blue-600 hover:text-blue-800">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-4">
                                <h3 class="text-2xl font-bold">{{ selectedProject.title }}</h3>
                                <button @click="selectedProject = null" class="text-gray-500 hover:text-gray-700">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-64 object-cover rounded-lg mb-4">
                            <p class="text-gray-600 mb-4">{{ selectedProject.fullDescription }}</p>
                            <div class="flex gap-4">
                                <a :href="selectedProject.demo" target="_blank" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Live Demo</a>
                                <a :href="selectedProject.github" target="_blank" class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    setup() {
        const { ref, computed } = Vue;

        const projects = ref([
            {
                id: 1,
                title: "E-commerce Platform",
                shortDescription: "A modern e-commerce platform built with Vue.js",
                fullDescription: "A full-featured e-commerce platform with shopping cart, user authentication, and payment integration. Built with Vue.js, Vuex for state management, and Firebase backend.",
                image: "/api/placeholder/400/300",
                demo: "https://demo-link.com",
                github: "https://github.com/yourusername/project",
                technologies: ["Vue.js"]
            },
            // Add more projects as needed
        ]);

        const filters = ref(["All", "Vue.js", "React", "JavaScript"]);
        const currentFilter = ref("All");
        const selectedProject = ref(null);

        const filteredProjects = computed(() => {
            if (currentFilter.value === "All") return projects.value;
            return projects.value.filter(project => 
                project.technologies.includes(currentFilter.value)
            );
        });

        const openProject = (project) => {
            selectedProject.value = project;
        };

        return {
            projects,
            filters,
            currentFilter,
            selectedProject,
            filteredProjects,
            openProject
        };
    }
});