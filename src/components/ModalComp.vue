<template>
    <div
      v-if="show"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative">
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <img :src="project.image" alt="Project Image" class="w-full rounded-lg mb-4" />
        <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
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
  </template>
  
  <script>
  export default {
    name: 'ModalComp',
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      project: {
        type: Object,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  