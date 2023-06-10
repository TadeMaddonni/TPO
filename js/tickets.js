import { handleTicketSubmit } from "./utils/handleTicketSubmit.js";
import { tickets, users } from "./data/lists.js";
import { deleteInfo, getInfo } from "./utils/handleLocalStorage.js";

$(function () {
    const ticketForm = $("#ticketForm");

    ticketForm?.on("submit", (e) => {
        e.preventDefault();

        const ticketName = $(".ticketName").val();
        const ticketLastname = $(".ticketLastname").val();
        const ticketDevice = $(".ticketDevice").val();
        const ticketEmail = $(".ticketMail").val();
        const ticketDescription = $(".ticketDescription").val();

        console.log(
            ticketName,
            ticketLastname,
            ticketDevice,
            ticketEmail,
            ticketDescription
        );
        if (
            ticketName.length > 0 &&
            ticketLastname.length > 0 &&
            ticketDevice.length > 0 &&
            ticketEmail.length > 0 &&
            ticketDescription.length > 0
        ) {
            const ticket = {
                ticketName,
                ticketLastname,
                ticketDevice,
                ticketEmail,
                ticketDescription,
            };
            const res = handleTicketSubmit(ticket, tickets);
            if (res) {
                Swal.fire({
                    title: "Ticket enviado",
                    text: "Podrás visualizar el estado del mismo, iniciando sesión con el mail ingresado",
                    icon: "success",
                    confirmButtonText: "Continuar",
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: "No se pudo enviar el ticket",
                    icon: "error",
                    confirmButtonText: "Continuar",
                });
            }
        }
    });

    // Protected routes in different directory level
    const ticketLink = $(".linkTicket");
    const isLogged = getInfo("userAccount") ? true : false;
    if (isLogged) {
        ticketLink?.on("click", () => {
            const user = getInfo("userAccount");
            if (user.role == "employee") {
                ticketLink.attr("href", "./ticketsEmpleados.html");
            } else if (user.role == "coord") {
                ticketLink.attr("href", "./ticketsCoord.html");
            } else {
                ticketLink.attr("href", "./ticketsClientes.html");
            }
        });
    } else {
        ticketLink?.on("click", () => {
            ticketLink.attr("href", "../index.html");
        });
    }
    // Logout
    const logoutBtn = $("#logout");
    console.log(logoutBtn);
    if (isLogged) {
        $(".logoutContainer").show();
        logoutBtn.on("click", () => {
            deleteInfo("userAccount");
            window.location.href = "../index.html";
        });
    }
});
