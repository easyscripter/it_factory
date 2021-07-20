import Vue from 'vue'
import VueRouter from 'vue-router'
import TeacherList from '../views/TeacherList.vue'
import TeacherProfile from "../views/TeacherProfile.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/teacher-list',
    name: 'Список репититоров',
    component: TeacherList
  },
  {
    path: '/teacher-profile/:id',
    name: "Профиль репититора",
    component: TeacherProfile,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
