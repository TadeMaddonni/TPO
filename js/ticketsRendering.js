import { getInfo } from "./utils/handleLocalStorage.js";
import { tickets, users } from "./data/lists.js";
import { renderClientTicket } from "./utils/renderClientTIcket.js";

$(function () {
    const user = getInfo("userAccount");

    // Destructuring the name of the user & the Id
    const { email, id } = user;

    // Showing personal welcome message
    const ticketPageTitle = $("#helloText");
    ticketPageTitle.text(`${email}`);

    //Filter client tickets
    const usertickets = tickets.filter(
        (ticket) => ticket.ticketEmail === email
    );
    // Rendering tickets

    if (usertickets.length !== 0) {
        usertickets.forEach((ticket) => {
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
                    email: email,
                    description: ticket.ticketDescription,
                    employeeEmail: employee.email,
                };
            } else {
                data = {
                    id: ticket.ticketId,
                    name: ticket.ticketName,
                    lastname: ticket.ticketLastname,
                    device: ticket.ticketDevice,
                    email: email,
                    description: ticket.ticketDescription,
                    employeeEmail: "Not asigned",
                };
            }
            const div = renderClientTicket(data);
            $(".ticketSection").append(div);
        });
    } else {
        const element = document.createElement("h2");
        element.textContent = "No tickets found";
        $(".ticketSection").append(element);
    }
    console.log(usertickets);
});
