<template>
  <div>
    <HeroComp />
    <ProjectsComp />
    <AboutComp />
    <ContactComp />
  </div>
</template>

<script>
import HeroComp from '@/components/HeroComp.vue';
import ProjectsComp from '@/components/ProjectsComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ContactComp from '@/components/ContactsComp.vue';

export default {
  components: {
    HeroComp,
    ProjectsComp,
    AboutComp,
    ContactComp
  },
};
</script>
