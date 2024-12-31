<template>
  <div>
    <HeroComp />
    <AboutComp />
    <SkillsComp />
    <ProjectsComp />
    <ContactComp />
  </div>
</template>

<script>
import HeroComp from './components/HeroComp.vue';
import AboutComp from './components/AboutComp.vue';
import SkillsComp from './components/SkillsComp.vue';
import ProjectsComp from './components/ProjectsComp.vue';
import ContactComp from './components/ContactComp.vue';

export default {
  name: 'App',
  components: {
    HeroComp,
    AboutComp,
    SkillsComp,
    ProjectsComp,
    ContactComp,
  },
};
</script>

<style>
/* Add global styles here if necessary */
</style>
