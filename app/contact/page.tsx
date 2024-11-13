export default function Home(){
    return (
        <>
        <div className="bg-black">
          
    <div
      className="w-layout-blockcontainer container w-container bg-black"
    >
      <div
        className="hero-box opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-100 skew-x-0 skew-y-0"
      >
        <div
          id="w-node-_9da753b1-3363-aa89-00d9-9b6bd11f6578-3a1b43b1"
          className="w-layout-layout contact-grid wf-layout-layout"
        >
          <div
            id="w-node-_9da753b1-3363-aa89-00d9-9b6bd11f6579-3a1b43b1"
            className="w-layout-cell"
          >
            <h2 className="h2 text-white">
              EL FUTURO <span className="text-[#7c6c77]">ESPERA</span>
            </h2>
            <div className="text margin-top text-white">
              La inteligencia artificial es una herramienta poderosa para llevar
              tu empresa al siguiente nivel. Al integrar IA, optimizarás
              operaciones, reducirás costos y aumentarás la productividad. No es
              solo una inversión en tecnología, sino en el futuro de tu negocio.
              Aprovecha esta oportunidad para liderar tu industria y maximizar
              resultados.
              <br /><br />
              Si tenés preguntas o simplemente querés informarte sobre lo que
              hacemos, no dudes en ponerte en contacto con nosotros. En Elykia
              estamos a su disposición para guiarlo y ayudarlo.
            </div>
          </div>

          <div
            id="w-node-_9da753b1-3363-aa89-00d9-9b6bd11f657e-3a1b43b1"
            className="w-layout-cell button-cell-top-right"
          >
            <div id="Contact-Us-Form-Block" className="contact-form w-form">
              <form
                id="email-form"
                name="email-form"
                action="https://formspree.io/f/mgveedbr"
                method="POST"
                aria-label="Email Form"
              >
                <input
                  className="bg-black w-input border border-gray-300 rounded-lg text-white font-bold"
                  maxLength={256}
                  name="Asunto"
                  placeholder="Asunto"
                  type="text"
                  id="asunto"
                  required
                />

                <div className="horizontal-div flex gap-4 mt-4">
                  <input
                    className="bg-black w-input border border-gray-300 rounded-lg text-white font-bold"
                    maxLength={256}
                    name="nombre"
                    placeholder="Nombre"
                    type="text"
                    id="nombre"
                    required
                  />
                  <input
                    className="bg-black w-input border border-gray-300 rounded-lg text-white font-bold"
                    maxLength={256}
                    name="email"
                    placeholder="Email"
                    type="email"
                    id="email"
                    required
                  />
                </div>

                <div className="contact-form-text mt-4 font-semibold text-white">
                  <strong>¿Cuál es tu presupuesto para este proyecto?</strong>
                </div>
                <select
                  id="budget"
                  name="Budget"
                  required
                  className="bg-black dropdown w-select border border-gray-300 rounded-lg text-white font-bold bg-black"
                >
                  <option value="Menos de $1,000">Menos de $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                  <option value="$20,000 +">$20,000 +</option>
                </select>

                <div className="contact-form-text mt-4 font-semibold text-white">
                  <strong>¿Qué servicio te interesa?</strong>
                </div>
                <select
                  id="service"
                  name="Service"
                  required
                  className="bg-black dropdown w-select border border-gray-300 rounded-lg text-white font-bold bg-black"
                >
                  <option value="conversationai">IA Conversacional</option>
                  <option value="chatbot">Desarrollo de chatbots</option>
                  <option value="consult">Consultoría empresarial</option>
                  <option value="chat">Consulta general</option>
                </select>

                <div className="contact-form-text mt-4 font-semibold text-white">
                  <strong>¿A qué se dedica tu empresa?</strong>
                </div>
                <input
                  className="bg-black w-input border border-gray-300 rounded-lg text-white font-bold mb-6"
                  maxLength={256}
                  name="rubro"
                  placeholder="Rubro"
                  type="text"
                  id="rubro"
                  required
                />

                <textarea
                  id="description"
                  name="How-can-we-help"
                  maxLength={5000}
                  placeholder="¿Cómo podemos ayudarte?"
                  required
                  className="bg-black large w-input border border-gray-300 rounded-lg text-white font-bold"
                ></textarea>
                
                <button
                  type="submit"
                  id="submit"
                  className="form-button w-button contact-button bg-white text-black mt-4"
                >
                  Enviar
                </button>
              </form>

              <div
                className="w-form-done mt-4"
                tabIndex={-1}
                role="region"
                aria-label="Email Form success"
              >
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className="w-form-fail mt-4"
                tabIndex={-1}
                role="region"
                aria-label="Email Form failure"
              >
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}