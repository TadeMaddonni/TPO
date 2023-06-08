// Importing necessary utilities
import { handleLogin } from "./utils/handleFormSubmit.js";
import { tickets, users } from "./data/lists.js";
import { getInfo } from "./utils/handleLocalStorage.js";

// Flag variables
const user = getInfo("userAccount");
let isLogged = user ? true : false;

$(function () {
    // Handler for the responsive navbar
    const icon = $(".icon");
    const list = $(".list");
    const nav = $("nav");

    icon?.on("click", () => {
        console.log("hello");
        list.toggleClass("show");
        nav.toggleClass("dark");
    });

    // Login
    const form = $("#loginForm");

    form?.on("submit", (e) => {
        //Avoiding automatic reload on submit
        e.preventDefault();
        console.log("sent");

        //Getting the values from the form
        const email = $(".loginEmail").val();
        const password = $(".loginPassword").val();

        //Validating & Handling login
        if (password.length > 5) {
            const userData = {
                email,
                password,
            };
            const loginResult = handleLogin(userData, users);
            if (loginResult) {
                isLogged = true;
                const userLogged = getInfo("userAccount");
                console.log(userLogged);
                if (userLogged.role == "employee") {
                    window.location.href = "./pages/ticketsEmpleados.html";
                } else if (userLogged.role == "coord") {
                    window.location.href = "./pages/ticketsCoord.html";
                } else {
                    window.location.href = "./pages/ticketsClientes.html";
                }
            }
            console.log(isLogged);
        }
    });

    // Protected Routes
    const ticketLink = $(".linkTicket");

    if (isLogged) {
        ticketLink?.on("click", () => {
            if (user.role == "employee") {
                ticketLink.attr("href", "./pages/ticketsEmpleados.html");
            } else if (user.role == "coord") {
                ticketLink.attr("href", "./pages/ticketsCoord.html");
            } else {
                ticketLink.attr("href", "./pages/ticketsClientes.html");
            }
        });
    } else {
        ticketLink?.on("click", () => {
            ticketLink.attr("href", "./index.html");
        });
    }
});
