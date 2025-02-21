<template>
    <div class="loading-screen">
      <div class="loading-text">
        <p>Initializing portfolio...</p>
        <div class="loading-bar">
          <div class="progress"></div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .loading-text {
    color: #00ff00;
    font-family: "Source Code Pro", monospace;
    text-align: center;
  }
  
  .loading-bar {
    width: 200px;
    height: 10px;
    background-color: #333;
    margin-top: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .progress {
    width: 0;
    height: 100%;
    background-color: #00ff00;
    animation: loading 3s forwards;
  }
  
  @keyframes loading {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  </style>