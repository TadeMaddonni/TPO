import { getInfo } from "../utils/handleLocalStorage.js";

const tickets = getInfo("tickets") || [
    {
        createdBy: "asd@gmail.com",
        ticketDescription: "asdasdasd",
        ticketDevice: "celular",
        ticketEmail: "asd@gmail.com",
        ticketId: 1,
        ticketLastname: "tade",
        ticketName: "taade",
        treatedBy: 1,
    },
    {
        createdBy: "asd@gmail.com",
        ticketDescription: "asdasdasd",
        ticketDevice: "computadora",
        ticketEmail: "asd@gmail.com",
        ticketId: 2,
        ticketLastname: "tade",
        ticketName: "taade",
        treatedBy: 5,
    },
    {
        createdBy: "asd@gmail.com",
        ticketDescription: "asdasdasd",
        ticketDevice: "otro",
        ticketEmail: "asd@gmail.com",
        ticketId: 3,
        ticketLastname: "tade",
        ticketName: "taade",
        treatedBy: 5,
    },
];

const users = [
    {
        role: "employee",
        email: "tade@gmail.com",
        password: "tade123",
        id: 1,
    },
    {
        role: "coord",
        email: "magalluzzo@uade.edu.ar",
        password: "mate123",
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
        password: "tade123",
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
