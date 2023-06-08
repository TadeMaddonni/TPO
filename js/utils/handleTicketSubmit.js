import { users, tickets } from "../data/lists.js";
import { setInfo } from "./handleLocalStorage.js";

const handleTicketSubmit = (ticket) => {
    const availableEmployee = users.find((user) => user.role === "employee");
    const user = users.find((user) => user.email === ticket.ticketEmail);

    if (availableEmployee) {
        const newTicket = {
            ...ticket,
            ticketId: tickets[tickets.length - 1]?.ticketId + 1 || 1, // [0
            createdBy: user?.id || ticket.ticketEmail,
            treatedBy: availableEmployee.id,
        };

        // Adding tickets to the list
        tickets.push(newTicket);
        setInfo("tickets", tickets);
    } else {
        return false;
    }
};

export { handleTicketSubmit };
