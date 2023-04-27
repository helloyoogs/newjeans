import {createRouter, createWebHashHistory} from "vue-router";
import IdCard from './components/IdCard.vue';
import main from './components/Main.vue';
import MainLoad from './components/MainLoad.vue';
import MovingPhotos from './components/MovingPhotos.vue';
import boost from './components/boost.vue';
import images from './components/images.vue';



const router = createRouter({
  mode: "history",
  history: createWebHashHistory('/newjeans/'),
  routes: [
    {
      path: "/",
      component: MainLoad,
    },
  
        {
          path: "/id-card",
          component: IdCard,
        },
        {
          path: "/main",
          component: main,
        },
        {
          path: "/moving-photos",
          component: MovingPhotos,
        },
        {
          path: "/boost",
          component: boost,
        },
        {
          path: "/boost/images",
          component: images,
        },
      ]
});

export default router; 