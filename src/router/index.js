import { createWebHistory, createRouter } from "vue-router";
import Home from "@/view/RegisterCustomView.vue";
import QuizView from "../view/QuizView";
// import About from "@/views/About.vue";
import SummaryView from "../view/SummaryView";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/quiz",
        name: "Quiz",
        component: QuizView,
    },
    {
        path: "/summary",
        name: "Summary",
        component: SummaryView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;