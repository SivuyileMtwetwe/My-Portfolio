<template>
    <section class="flex flex-col items-center justify-center h-screen bg-gray-800 text-white text-center">
      <h1 class="text-5xl font-bold ">Your Name</h1>
      <h2 class="text-3xl mt-4">Front-End Developer</h2>
      <p class="mt-6 text-lg">Creating beautiful and functional web experiences.</p>
      <button
        @click="scrollToProjects"
        class="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
      >
        View Projects
      </button>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroComp',
    methods: {
      scrollToProjects() {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
      },
    },
  };
  </script>
  