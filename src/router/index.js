import { createRouter, createWebHistory } from 'vue-router'
import RestaurantView from "../views/RestaurantView.vue";
import RestaurantsView from "../views/RestaurantsView.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RestaurantsView
  },

  {
    path: "/restaurants/:slug",
    name: "Restaurant",
    component: RestaurantView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
