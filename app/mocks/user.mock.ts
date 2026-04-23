import type { IUserEntity } from "~~/core/domain/entities/user.entity";

export const userMock: IUserEntity[] = [
    {
        id: "1",
        email: "permakovkirill925@gmail.com",
        username: "Kiper02",
        firstName: "Кирилл",
        middleName: "Андреевич",
        lastName: "Пермяков",
        avatar: "/mock/kiper.webp"
    },
    {
        id: "2",
        email: "ivanov@example.com",
        username: "IvanovI",
        firstName: "Иван",
        middleName: "Сергеевич",
        lastName: "Иванов",
        avatar: "/mock/avatar2.webp"
    },
    {
        id: "3",
        email: "petrova@example.com",
        username: "PetrovaA",
        firstName: "Анна",
        middleName: "Владимировна",
        lastName: "Петрова",
        avatar: "/mock/avatar2.webp"
    }
];