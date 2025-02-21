<template>
    <nav>
      <div class="logo">Sivuyile Mtwetwe</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li>
          <button @click="toggleDarkMode" class="dark-mode-toggle">
            {{ darkMode ? "Light Mode" : "Dark Mode" }}
          </button>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        darkMode: true, // Default to dark mode
      };
    },
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle("dark-theme", this.darkMode);
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #1a1a1a;
    color: #00ff00;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
  }
  
  .nav-links a {
    color: #00ff00;
    text-decoration: none;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  
  .dark-mode-toggle {
    background-color: #00ff00;
    color: #1a1a1a;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Source Code Pro", monospace;
  }
  
  .dark-mode-toggle:hover {
    background-color: #00cc00;
  }
  </style>