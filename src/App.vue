<template>
  <div>
    <LoadingScreen v-if="isLoading" />
    <router-view v-else />
    <!-- <Footer /> -->
    <ScrollToTop />
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
// import Footer from "@/components/Footer.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
  components: {
    LoadingScreen,
    // Footer,
    ScrollToTop,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Hide the loading screen after 3 seconds
  },
};
</script>