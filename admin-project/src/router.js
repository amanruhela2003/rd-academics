import { createRouter, createWebHistory } from "vue-router";
import CourseCreate from './components/course/CourseCreate.vue';
import CourseList from './components/course/CourseList.vue';
import CourseEdit from './components/course/CourseEdit.vue';
const routes = [
  {
    path: "/course/create",
    component: CourseCreate,
  },
  {
    path: "/course/list",
    component: CourseList,
  },
  {
    path: "/course/edit/:id",
    component: CourseEdit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
  