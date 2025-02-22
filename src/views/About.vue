<template>
    <div class="about">
        <NavBar/>
        <terminal/>
        
      <div class="terminal">
        <p class="typing-animation">Loading about.txt...</p>
        <div class="file-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Sivuyile Mtwetwe, a full-stack MEAN developer passionate
            about creating efficient and user-friendly web applications. I enjoy
            the creative challenge of transforming ideas into reality, from
            front-end design to back-end architecture.
          </p>
          <h3>Skills</h3>
          <pre>
  [Languages]
  JavaScript: Enabled
  Python: Enabled
  HTML/CSS: Enabled
  
  [Frameworks]
  Vue.js: Enabled
  Angular: Enabled
  Node.js: Enabled
          </pre>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about {
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
  
  .file-content h2,
  .file-content h3 {
    color: #00ff00;
  }
  
  .file-content pre {
    background-color: #000;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  <script>
//   import NavBar from './NavBar.vue';
</script>