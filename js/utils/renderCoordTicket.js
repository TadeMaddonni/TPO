const renderCoordTicket = (ticketInfo) => {
    return `<div
                    class="p-[30px] bg-white rounded-md w-full flex flex-col gap-[20px] lg:flex-row lg:justify-between"
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
                                Email cliente
                                <span class="font-light"
                                    >${ticketInfo.email}</span
                                >
                            </p>
                                                        <p class="font-bold">
                                Dispositivo:
                                <span class="font-light">${ticketInfo.device}</span>
                            </p>
                        </div>
                        <div
                            class="flex flex-col gap-[15px] lg:flex-row lg:gap-[50px]"
                        >
                            <p class="font-bold">
                                Descripcion:
                                <span class="font-light">${ticketInfo.description}</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center gap-[30px] lg:items-center flex-wrap">
                        <a
                            class="flex bg-purple-700 px-[20px] py-[10px] h-[45px] w-[60%] text-white  rounded-md font-semibold justify-center items-center gap-[10px] lg:h-fit lg:py-[9px] lg:w-fit"
                            href="mailto:${ticketInfo.email}"
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
                        <button
                            class="verMas flex bg-purple-700 px-[20px] py-[7px] h-[45px] w-[60%] text-white  rounded-md font-semibold justify-center items-center gap-[10px] lg:h-fit lg:py-[9px] lg:w-fit"
                            href="#"
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
                        </button>
                        <button class=" verMas flex bg-purple-700 px-[20px] py-[7px] h-[45px] w-[60%] text-white rounded-md font-semibold justify-center items-center gap-[10px] lg:h-fit lg:py-[9px] lg:w-fit"
                            > Reasignar
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M15 14s1 0 1-1s-1-4-5-4s-5 3-5 4s1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276c.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4c0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904c.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724c.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"/></svg>
                        </button>
                    </div>
                </div>
    `;
};

export { renderCoordTicket };
