import {createRouter, createWebHistory} from "vue-router";
import IdCard from './components/IdCard.vue';
import main from './components/Main.vue';
import MainLoad from './components/MainLoad.vue';
import MovingPhotos from './components/MovingPhotos.vue';
import boost from './components/boost.vue';
import images from './components/images.vue';
import App from "@/App.vue";
import NotFound from './components/NotFound.vue'; // NotFound 컴포넌트 import


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/newjeans', // '/' 경로로 접근 시 '/newjeans' 경로로 리다이렉트
            component: App

        },
        {
            path: "/newjeans",
            component: MainLoad,
        },

        {
            path: "/newjeans/id-card",
            component: IdCard,
        },
        {
            path: "/newjeans/main",
            component: main,
        },
        {
            path: "/newjeans/moving-photos",
            component: MovingPhotos,
        },
        {
            path: "/newjeans/boost",
            component: boost,
        },
        {
            path: "/newjeans/boost/images",
            component: images,
        },
        // 404 페이지
        {
            path: "/:catchAll(.*)",
            component: NotFound,
        },
    ]
});

export default router; 