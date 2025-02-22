<template>
    <div class="global-layout">
      <!-- NavBar -->
      <NavBar />
  
      <!-- Router View (for all routes) -->
      <main class="content">
        <router-view></router-view>
      </main>
  
      <!-- Terminal -->
      <div class="terminal-container">
        <Terminal />
      </div>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import Terminal from "@/components/Terminal.vue";
  import Footer from "@/components/Footer.vue";
  
  export default {
    components: {
      NavBar,
      Terminal,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  .global-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex: 1; /* Takes up remaining space */
    padding-bottom: 150px; /* Add padding to prevent content from being hidden behind the terminal */
  }
  
  .terminal-container {
    position: fixed;
    bottom: 60px; /* Position above the footer */
    left: 0;
    width: 100%;
    background-color: white;
    padding: 10px;
    z-index: 1000;
  }
  </style>