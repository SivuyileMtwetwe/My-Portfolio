<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-text">
        <h1 class="hero-title">Hello, I'm Sivuyile Mtwetwe</h1>
        <p class="hero-subtitle">Full-Stack MEAN Developer</p>
        <p class="hero-description">
          Passionate about building efficient and user-friendly web applications.
          Transforming ideas into reality, one line of code at a time.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollToAbout">About Me</button>
          <button class="btn btn-secondary" @click="scrollToProjects">My Projects</button>
        </div>
      </div>
      <div class="hero-image">
        <!-- <img
          src="../assets/your-image.jpg"
          alt="Sivuyile Mtwetwe"
          class="profile-image"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToAbout() {
      this.$router.push("/about");
    },
    scrollToProjects() {
      this.$router.push("/projects");
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px); /* Adjust height to account for terminal and footer */
  padding: 20px;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 40px;
}

.hero-text {
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  color: #00ff00;
  margin-bottom: 20px;
  animation: flicker-4 4s linear infinite both;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #00ff00;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 1.2rem;
  color: #00ff00;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: "Source Code Pro", monospace;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #00ff00;
  color: #1a1a1a;
}

.btn-primary:hover {
  background-color: #00cc00;
}

.btn-secondary {
  background-color: transparent;
  border: 2px solid #00ff00;
  color: #00ff00;
}

.btn-secondary:hover {
  background-color: #00ff00;
  color: #1a1a1a;
}

.hero-image {
  max-width: 400px;
}

.profile-image {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}
</style>