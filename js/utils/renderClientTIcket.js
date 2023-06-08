const renderClientTicket = (ticketInfo) => {
    return `
        <div
                    class="p-[20px] bg-white rounded-md w-full flex flex-col gap-[20px] lg:flex-row lg:justify-between"
                >
                    <div class="flex flex-col gap-[15px] lg:gap-[25px]  w-min-[80%]">
                        <div
                            class="flex flex-col gap-[15px] lg:flex-row lg:gap-[50px]"
                        >
                            <p class="font-bold">
                                Ticket ID:
                                <span class="font-light">${ticketInfo.id}</span>
                            </p>

                            <p class="font-bold">
                                Email Empleado
                                <span class="font-light"
                                    >${ticketInfo.employeeEmail}</span
                                >
                            </p>
                        </div>
                        <div
                            class="flex flex-col gap-[15px] lg:flex-row lg:gap-[50px]"
                        >
                            <p class="font-bold">
                                Nombre:
                                <span class="font-light">${ticketInfo.name}</span>
                            </p>
                            <p class="font-bold">
                                Dispositivo:
                                <span class="font-light">${ticketInfo.device}</span>
                            </p>


                        </div>
                    </div>
                    <div class="flex justify-center gap-[30px] lg:items-center">
                        <a
                            class="flex bg-purple-700 px-[20px] py-[10px] text-white w-fit rounded-md font-semibold justify-center items-center gap-[10px] lg:h-fit lg:py-[9px]"
                            href=""
                            >Contactar
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
                                />
                            </svg>
                        </a>
                        <a
                            class="flex bg-purple-700 px-[20px] py-[7px] text-white w-fit rounded-md font-semibold justify-center items-center gap-[10px] lg:h-fit lg:py-[9px]"
                            href=""
                            >Ver más
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
    `;
};
export { renderClientTicket };
