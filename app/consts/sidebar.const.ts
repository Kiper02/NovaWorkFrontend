import type {ISidebar} from "~/types/components/sidebar.type";

export const sidebarConst: ISidebar[] = [
    {
        title: "Dashboard",
        icon: "lucide:layout-dashboard",
        path: '/dashboard'
    },
    {
        title: "Главная",
        icon: "lucide:house",
        path: '/home'
    },
    {
        title: "Чаты",
        icon: "lucide:message-circle",
        path: '/chats'
    },
]