<template>
    <button v-if="showButton" @click="scrollToTop" class="scroll-to-top">
      ↑
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showButton = window.scrollY > 200;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #00ff00;
    color: #1a1a1a;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
  
  .scroll-to-top:hover {
    background-color: #00cc00;
  }
  </style>