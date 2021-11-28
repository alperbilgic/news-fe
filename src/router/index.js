import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home";
import NewsDetail from "../views/NewsDetail";
import CreateNews from "../views/CreateNews";
import UpdateNews from "../views/UpdateNews";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/:id",
        name: "News Detail",
        component: NewsDetail,
    },
    {
        path: "/create",
        name: "Create News",
        component: CreateNews
    },
    {
        path: "/update/:id",
        name: "Update News",
        component: UpdateNews
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
