<template>
    <div class="contact">
      <div class="terminal">
        <p class="typing-animation">Loading contact.sh...</p>
        <div class="file-content">
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:sivuyilemtwetwe@gmail.com">sivuyilemtwetwe@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/sivuyilemtwetwe" target="_blank">LinkedIn Profile</a></p>
          <p>GitHub: <a href="https://github.com/sivuyilemtwetwe" target="_blank">GitHub Profile</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact {
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
  
  .file-content a {
    color: #00ff00;
    text-decoration: none;
  }
  
  .file-content a:hover {
    text-decoration: underline;
  }
  </style>