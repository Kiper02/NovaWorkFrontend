import type { IContractType } from "~/types/data/contract.type";

export const contractMock: IContractType[] = [
    {
        id: "c1",
        createdAt: "2025-03-01T10:00:00Z",
        updatedAt: "2025-03-01T10:00:00Z",
        taskId: "t1",
        serviceId: "",
        clientId: "2",
        amount: 15000
    },
    {
        id: "c2",
        createdAt: "2025-03-10T12:30:00Z",
        updatedAt: "2025-03-12T09:15:00Z",
        taskId: "t2",
        serviceId: "",
        clientId: "3",
        amount: 27500
    },
    {
        id: "c3",
        createdAt: "2025-03-15T14:20:00Z",
        updatedAt: "2025-03-15T14:20:00Z",
        taskId: "t3",
        serviceId: "",
        clientId: "1",
        amount: 5000
    }
];