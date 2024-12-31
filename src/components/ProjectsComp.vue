<template>
    <section id="projects" class="py-20 bg-gray-100">
      <h2 class="text-3xl font-bold text-center mb-6">Projects</h2>
      <div class="flex justify-center mb-6 space-x-4">
        <button
          v-for="tech in technologies"
          :key="tech"
          @click="filterByTechnology(tech)"
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg"
        >
          {{ tech }}
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img :src="project.image" alt="Project Image" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-700 mb-4">{{ project.description }}</p>
            <div class="flex justify-between">
              <a
                :href="project.liveDemo"
                target="_blank"
                class="text-blue-500 hover:underline"
              >
                Live Demo
              </a>
              <a
                :href="project.github"
                target="_blank"
                class="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProjectsComp',
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Portfolio Website',
            description: 'A modern portfolio website built with Vue.js.',
            image: 'path/to/image1.jpg',
            liveDemo: '#',
            github: '#',
            technology: ['Vue.js', 'HTML', 'CSS'],
          },
          {
            id: 2,
            title: 'Task Manager',
            description: 'A task management app with real-time updates.',
            image: 'path/to/image2.jpg',
            liveDemo: '#',
            github: '#',
            technology: ['React', 'JavaScript'],
          },
        ],
        technologies: ['All', 'Vue.js', 'React', 'HTML', 'CSS'],
        filter: 'All',
      };
    },
    computed: {
      filteredProjects() {
        return this.filter === 'All'
          ? this.projects
          : this.projects.filter((project) =>
              project.technology.includes(this.filter)
            );
      },
    },
    methods: {
      filterByTechnology(tech) {
        this.filter = tech;
      },
    },
  };
  </script>
  