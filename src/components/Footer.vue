<template>
  <footer>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/sivuyilemtwetwe" target="_blank">
        <!-- <img src="../assets/linkedin.png" alt="LinkedIn" class="icon" /> -->
      </a>
      <a href="https://github.com/sivuyilemtwetwe" target="_blank">
        <!-- <img src="../assets/github.png" alt="GitHub" class="icon" /> -->
      </a>
    </div>
    <p>Copyright © 2024 Sivuyile Mtwetwe. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #1a1a1a;
  color: #00ff00;
  padding: 20px;
  text-align: center;
  font-family: "Source Code Pro", monospace;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Ensure footer is below the terminal */
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}

.social-links a {
  color: #00ff00;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>