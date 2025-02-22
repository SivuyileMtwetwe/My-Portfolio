<template>
    <div class="not-found">
      <div class="terminal">
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <router-link to="/" class="home-link">Return to Home</router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1a1a1a;
    color: #00ff00;
    font-family: "Source Code Pro", monospace;
  }
  
  .terminal {
    text-align: center;
  }
  
  .home-link {
    color: #00ff00;
    text-decoration: none;
  }
  
  .home-link:hover {
    text-decoration: underline;
  }
  </style>