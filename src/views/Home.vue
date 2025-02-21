<template>
    <div class="home">
        <NavBar/>
      <Terminal />
    </div>
  </template>
  
  <script>
  import Terminal from "@/components/Terminal.vue";
  import NavBar from "@/components/NavBar.vue";
  export default {
    components: {
      Terminal,
      NavBar
    },
  };
  </script>