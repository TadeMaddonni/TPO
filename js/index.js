// Importing necessary utilities
import { handleLogin } from "./utils/handleFormSubmit.js";
import { tickets, users } from "./data/lists.js";
import { deleteInfo, getInfo, setInfo } from "./utils/handleLocalStorage.js";

// Setting user database on local storage
setInfo("users", users);
setInfo("tickets", tickets);

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
        if (password.length > 0) {
            const userData = {
                email,
                password,
            };
            const loginResult = handleLogin(userData, users);
            console.log(loginResult);
            if (loginResult) {
                isLogged = true;
                const userLogged = getInfo("userAccount");
                console.log(userLogged);
                Swal.fire({
                    title: "Sesión iniciada",
                    text: "Serás redirigido a la página de tickets",
                    icon: "success",
                    confirmButtonText: "seguir",
                });
                setTimeout(() => {
                    if (userLogged.role == "employee") {
                        window.location.href = "./pages/ticketsEmpleados.html";
                    } else if (userLogged.role == "coord") {
                        window.location.href = "./pages/ticketsCoord.html";
                    } else {
                        window.location.href = "./pages/ticketsClientes.html";
                    }
                }, 2000);
            } else {
                Swal.fire({
                    title: "Credenciales no validas",
                    text: "Por favor, intente de nuevo",
                    icon: "error",
                    confirmButtonText: "seguir",
                });
            }
            console.log(isLogged);
        }
    });

    // Logout
    const logoutBtn = $("#logout");
    if (user?.role) {
        $(".logoutContainer").show();
        $("#loginBtn").hide();
        logoutBtn.on("click", () => {
            deleteInfo("userAccount");
            $(".logoutContainer").hide();
            console.log("name");
        });
    }

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
            ticketLink.attr("href", "../index.html");
        });
    }
});
