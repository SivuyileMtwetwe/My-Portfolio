import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
// import NotFound from "@/components/NotFound.vue";
import Footer from "@/components/Footer.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/experience", component: Experience },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "/footer", component: Footer },
  // { path: "/:pathMatch(.*)*", component: NotFound }, // Catch-all route for 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;