import "./productSection.css";
export default function HowItWorks(){
    return (

        <div className="how-it-works">
        <h2 className="section-heading bg-white text-black pb-[10vh]">
            ¿Por qué trabajar con nosotros?
        </h2>
    
        <ul className="grid grid-cols-2 mt-[6vh] mb-[10vh] justify-start items-start gap-5">
            <li className="feature-item flex items-center">
                <img 
                    src="https://i.imgur.com/uAx9MVb.png" 
                    alt="Feature Icon" 
                    className="feature-icon w-[5vh] h-auto mr-1"
                />
                <span className="text-black text-lg font-medium">
                    Nuestra prioridad es hacer crecer tu negocio, no hacer software.
                </span>
            </li>
            
            <li className="feature-item flex items-center">
                <img 
                    src="https://i.imgur.com/uAx9MVb.png" 
                    alt="Feature Icon" 
                    className="feature-icon w-[5vh] h-auto mr-1"
                />
                <span className="text-black text-lg font-medium">
                    Soporte 24/7 y asistencia para todas tus necesidades.
                </span>
            </li>
    
            <li className="feature-item flex items-center">
                <img 
                    src="https://i.imgur.com/uAx9MVb.png" 
                    alt="Feature Icon" 
                    className="feature-icon w-[5vh] h-auto mr-1"
                />
                <span className="text-black text-lg font-medium">
                    Servicio hecho para vos. Nos decís que necesitas y nosotros lo hacemos.
                </span>
            </li>
    
            <li className="feature-item flex items-center">
                <img 
                    src="https://i.imgur.com/uAx9MVb.png" 
                    alt="Feature Icon" 
                    className="feature-icon w-[5vh] h-auto mr-1"
                />
                <span className="text-black text-lg font-medium">
                    Vas a ahorrar horas en entrada de datos y reducir errores.
                </span>
            </li>
    
            <li className="feature-item flex items-center">
                <img 
                    src="https://i.imgur.com/uAx9MVb.png" 
                    alt="Feature Icon" 
                    className="feature-icon w-[5vh] h-auto mr-1"
                />
                <span className="text-black text-lg font-medium">
                    Habilidad de manejar más de 100.000 llamadas al día.
                </span>
            </li>
    
            <li className="feature-item flex items-center">
                <img 
                    src="https://i.imgur.com/uAx9MVb.png" 
                    alt="Feature Icon" 
                    className="feature-icon w-[5vh] h-auto mr-1"
                />
                <span className="text-black text-lg font-medium">
                    Enfoque multicanal (Voz, Email, SMS, Whatsapp, etc.)
                </span>
            </li>
        </ul>
    </div>
    
    )
}