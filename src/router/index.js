import { createWebHistory, createRouter } from "vue-router";
import Notes from "@/views/Notes.vue";
import NotFound from "@/views/NotFound.vue";
import User from "@/views/User.vue";
import notesEdit from "@/views/notesEdit.vue";
import notesAdd from "@/views/notesAdd.vue";
import register from "@/views/register.vue";
const routes = [
    {
        path: "/",
        name: "user",
        component: User,
    },
    {
        path: "/register",
        name: "register",
        component: register,
    },
    {
        path: "/notes",
        name: "notes",
        component: Notes,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: NotFound,
    },
    {
        path: "/notes/:id",
        name: "note.edit",
        component: notesEdit,
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/notes/add",
        name: "note.add",
        component: notesAdd,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;