import type { ITaskType } from "~/types/data/task.type";
import { contractMock } from "./contract.mock";

export const taskMock: ITaskType[] = [
    {
        id: "t1",
        createdAt: "2025-02-20T09:00:00Z",
        updatedAt: "2025-02-25T11:30:00Z",
        title: "Разработать лендинг для стартапа",
        description: "Нужен современный одностраничный сайт с анимациями и формой захвата лидов.",
        minPrice: 12000,
        maxPrice: 20000,
        userId: "2",
        projectId: "p1",
        workspaceId: "w1",
        status: EnumTaskStatus.ACTIVE,
        contract: contractMock[0]
    },
    {
        id: "t2",
        createdAt: "2025-03-01T10:15:00Z",
        updatedAt: "2025-03-05T16:20:00Z",
        title: "Интеграция CRM с телеграм-ботом",
        description: "Настроить webhook, синхронизацию заявок и уведомления.",
        minPrice: 25000,
        maxPrice: 35000,
        userId: "3",
        projectId: "p2",
        workspaceId: "w1",
        status: TaskStatusEnum.ACTIVE,
        contract: contractMock[1]
    },
    {
        id: "t3",
        createdAt: "2025-03-10T08:00:00Z",
        updatedAt: "2025-03-12T09:00:00Z",
        title: "Дизайн мобильного приложения",
        description: "Нарисовать UI/UX для приложения доставки еды.",
        minPrice: 8000,
        maxPrice: 12000,
        userId: "1",
        projectId: "p3",
        workspaceId: "w1",
        status: TaskStatusEnum.COMPLETED,
        contract: contractMock[2]
    },
    {
        id: "t4",
        createdAt: "2025-03-12T14:30:00Z",
        updatedAt: "2025-03-12T14:30:00Z",
        title: "Написание технической документации",
        description: "Оформить API-спецификацию и инструкцию по развертыванию.",
        minPrice: 5000,
        maxPrice: 8000,
        userId: "1",
        projectId: "p1",
        workspaceId: "w1",
        status: TaskStatusEnum.ACTIVE,
        contract: undefined
    },
    {
        id: "t5",
        createdAt: "2025-03-15T11:00:00Z",
        updatedAt: "2025-03-16T10:00:00Z",
        title: "Аудит безопасности сервера",
        description: "Проверить конфигурацию nginx, php, mysql, выдать рекомендации.",
        minPrice: 10000,
        maxPrice: 15000,
        userId: "2",
        projectId: "p4",
        workspaceId: "w1",
        status: TaskStatusEnum.IN_ARCHIVE,
        contract: undefined
    }
];