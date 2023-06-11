import { getInfo } from "../utils/handleLocalStorage.js";

const tickets = getInfo("tickets") || [];

const users = [
    {
        role: "employee",
        email: "tade@gmail.com",
        password: "tade123",
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
    {
        role: "coord",
        email: "nrios@uade.edu.ar",
        password: "profe",
        id: 4,
    },
    {
        role: "employee",
        email: "tmaddonni@uade.edu.ar",
        password: "tade",
        id: 5,
    },
    {
        role: "coord",
        email: "mgalluzzo@gmail.com",
        password: "mate",
        id: 6,
    },
];

export { tickets, users };
