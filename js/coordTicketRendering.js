import { tickets, users } from "./data/lists.js";
import { getInfo } from "./utils/handleLocalStorage.js";
import { renderCoordTicket } from "./utils/renderCoordTicket.js";

$(function () {
    // Employee Tickets Rendering
    const user = getInfo("userAccount");
    console.log(user);
    // Destructuring the name of the user & the Id
    const { email, id } = user;

    // Showing personal welcome message
    const ticketPageTitle = $("#helloText");
    ticketPageTitle.text(`${email}`);

    // Obtaining tickets asigned to the employee
    const employeeTickets = tickets.filter((ticket) => ticket.treatedBy === id);
    console.log(employeeTickets);
    // Rendering personal info

    // Rendering tickets
    if (tickets.length > 0) {
        tickets.forEach((ticket) => {
            const employee = users.find(
                (user) => user.id === parseInt(ticket.treatedBy)
            );
            let data;
            if (employee) {
                data = {
                    id: ticket.ticketId,
                    name: ticket.ticketName,
                    lastname: ticket.ticketLastname,
                    device: ticket.ticketDevice,
                    email: ticket.ticketEmail,
                    description: ticket.ticketDescription,
                    employeeEmail: employee.email,
                };
            } else {
                data = {
                    id: ticket.ticketId,
                    name: ticket.ticketName,
                    lastname: ticket.ticketLastname,
                    device: ticket.ticketDevice,
                    email: ticket.ticketEmail,
                    description: ticket.ticketDescription,
                    employeeEmail: "Not asigned",
                };
            }
            const div = renderCoordTicket(data);
            $(".ticketSection").append(div);
        });
    } else {
        const element = document.createElement("h2");
        element.textContent = "No tickets found";
        $(".ticketSection").append(element);
    }
});