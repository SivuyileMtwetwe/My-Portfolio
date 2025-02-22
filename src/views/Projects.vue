<template>
    <div class="projects">
      <div class="terminal">
        <p class="typing-animation">Loading projects.log...</p>
        <div class="file-content">
          <h2>Projects</h2>
          <div class="project-list">
            <div class="project" v-for="project in projects" :key="project.id">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <a :href="project.github" target="_blank">GitHub</a>
              <a :href="project.demo" target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Message Submitter",
            description: "A simple message submission app.",
            github: "https://github.com/SivuyileMtwetwe/My-Work",
            demo: "https://messsub.netlify.app",
          },
          {
            id: 2,
            title: "Digital Recipe Cookbook",
            description: "A digital cookbook for recipes.",
            github: "https://github.com/SivuyileMtwetwe/recipe-api",
            demo: "https://digitalrecipebook.netlify.app",
          },
          {
            id: 3,
            title: "Zamikhaya",
            description: "A platform for social entrepreneurship.",
            github: "#",
            demo: "https://zamikhaya.vercel.app",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .projects {
    padding: 20px;
  }
  
  .terminal {
    background-color: #1a1a1a;
    color: #00ff00;
    padding: 20px;
    border-radius: 5px;
    font-family: "Source Code Pro", monospace;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .typing-animation {
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3s steps(40, end);
  }
  
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  
  .file-content {
    margin-top: 20px;
  }
  
  .file-content h2 {
    color: #00ff00;
  }
  
  .project-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .project {
    background-color: #000;
    padding: 10px;
    border-radius: 5px;
  }
  
  .project h3 {
    color: #00ff00;
  }
  
  .project a {
    color: #00ff00;
    text-decoration: none;
    margin-right: 10px;
  }
  
  .project a:hover {
    text-decoration: underline;
  }
  </style>