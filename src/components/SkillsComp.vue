<template>
  <section class="py-20 bg-white text-center">
    <h2 class="text-3xl font-bold mb-6">Skills</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="flex flex-col items-center space-y-2"
      >
        <div
          class="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold"
        >
          {{ skill.percentage }}%
        </div>
        <p class="text-lg">{{ skill.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsComp',
  data() {
    return {
      skills: [
        { name: 'Vue.js', percentage: 90 },
        { name: 'HTML', percentage: 95 },
        { name: 'CSS', percentage: 85 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'Git', percentage: 75 },
      ],
    };
  },
};
</script>
