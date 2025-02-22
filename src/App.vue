<template>
  <div>
    <LoadingScreen v-if="isLoading" />
    <GlobalLayout v-else />
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
import GlobalLayout from "@/layouts/GlobalLayout.vue";

export default {
  components: {
    LoadingScreen,
    GlobalLayout,
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