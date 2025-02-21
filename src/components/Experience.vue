<template>
    <div class="experience">
      <div class="terminal">
        <p class="typing-animation">Loading experience.log...</p>
        <div class="file-content">
          <h2>Experience</h2>
          <pre>
  [2023-10-01] Project: Portfolio Website
  [2023-09-15] Project: E-commerce Platform
  [2023-08-20] Project: Weather App
          </pre>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .experience {
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
  
  .file-content pre {
    background-color: #000;
    padding: 10px;
    border-radius: 5px;
  }
  </style>