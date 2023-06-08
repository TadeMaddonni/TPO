import { getInfo } from "../utils/handleLocalStorage.js";

const tickets = getInfo("tickets") || [];

const users = [
    {
        role: "employee",
        email: "tade@gmail.com",
        password: "tade",
        id: 1,
    },
    {
        role: "coord",
        email: "galluzzo@gmail.com",
        password: "gallu123",
        id: 2,
    },
    {
        email: "asd@gmail.com",
        password: "asd123",
        role: "client",
        id: 3,
    },
];

export { tickets, users };
