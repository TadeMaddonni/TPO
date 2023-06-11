import { users, tickets } from "../data/lists.js";
import { setInfo } from "./handleLocalStorage.js";

const handleTicketSubmit = (ticket) => {
    const availableEmployees = users.filter((user) => user.role === "employee");
    const user = users.find((user) => user.email === ticket.ticketEmail);

    if (availableEmployees) {
        // Assigning a random employee to the ticket
        const employeePosition = Math.floor(
            Math.random() * availableEmployees.length
        );
        const employee = availableEmployees[employeePosition];

        // Creating the ticket
        const newTicket = {
            ...ticket,
            ticketId: tickets[tickets.length - 1]?.ticketId + 1 || 1, // [0
            createdBy: user?.id || ticket.ticketEmail,
            treatedBy: employee.id,
        };

        // Adding tickets to the list
        tickets.push(newTicket);
        setInfo("tickets", tickets);
        return true;
    } else {
        return false;
    }
};

export { handleTicketSubmit };
