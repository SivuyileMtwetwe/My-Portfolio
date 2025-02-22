import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Experience from "@/views/Experience.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/experience", component: Experience },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "/:pathMatch(.*)*", component: NotFound }, // Catch-all route for 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;