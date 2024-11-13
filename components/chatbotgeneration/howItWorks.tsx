export default function HowItWorksChatBot() {
    return (
        <div className="how-it-works bg-white">
            <h2 className="section-heading bg-white text-black text-2xl font-bold py-4">
                ¿Cuál es el valor agregado de Elykia?
            </h2>

            <div className="how-it-works ">
                <div className="section-heading">
                    <ul className="grid grid-cols-1 gap-y-10 mt-6 mb-10 mx-5">
                        <div>

                        <li className="feature-item mb-4 flex items-center">
                            <img
                                src="https://i.imgur.com/uAx9MVb.png"
                                alt="Feature Icon"
                                className="feature-icon w-[5vh] h-auto mr-[1vw]"
                                />
                            <span className="text-black text-[22px] font-semibold">
                                MEJOR QUE UN HUMANO.
                            </span>
                        </li>
                        <p className="font-[17px] text-base mx-[5vw] mb-[3vh] text-left">
                            Gracias a la integración con inteligencia artificial, nuestro chatbot es capaz de
                            responder de forma inteligente y precisa, basándose en la información provista, las
                            24 horas del día y de forma inmediata.
                        </p>
                        </div>
                        <div>
                        <li className="feature-item mb-4 flex items-center">
                            <img
                                src="https://i.imgur.com/uAx9MVb.png"
                                alt="Feature Icon"
                                className="feature-icon w-[5vh] h-auto mr-[1vw]"
                            />
                            <span className="text-black text-[22px] font-semibold">
                                ESCALABILIDAD.
                            </span>
                        </li>
                        <p className="font-[17px] text-base mx-[5vw] mb-[3vh] text-left">
                            Es capaz de manejar múltiples conversaciones simultáneamente sin comprometer la calidad
                            de la respuesta, mientras que al mismo tiempo recopila y analiza los datos de las
                            interacciones para mejorar continuamente el servicio y adaptarse mejor a los usuarios.
                        </p>
                        </div>
                        <div>
                        <li className="feature-item mb-4 flex items-center">
                            <img
                                src="https://i.imgur.com/uAx9MVb.png"
                                alt="Feature Icon"
                                className="feature-icon w-[5vh] h-auto mr-[1vw]"
                            />
                            <span className="text-black text-[22px] font-semibold">
                                ADAPTABLE.
                            </span>
                        </li>
                        <p className="font-[17px] text-base mx-[5vw] mb-[3vh] text-left">
                            En caso de contar con acceso a información relacionada al usuario, el chatbot es capaz de
                            personalizar la conversación para mejorar la interacción o facilitar una venta.
                        </p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
