import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-black pb-6">
      <div className="container mx-auto px-4">
        <div
          className="hero-box main-hero opacity-100 transform scale-100 rotate-0 translate-y-0"
        >
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://i.imgur.com/yHSIico.png"
              loading="lazy"
              alt="star"
              className=""
              width="40"
            />
            <div className="text-white text-lg">ELYKIA</div>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="flex justify-center items-center mx-auto text-center">
              <h1 className="text-white text-lg md:text-xl lg:text-2xl uppercase">
                <span className="text-[#7C6C77] uppercase">
                  Lo que antes era imposible de automatizar
                </span>
                <br />
                hoy es posible gracias a nuestros modelos de voz y texto impulsados
                <br />
                con inteligencia artificial.
              </h1>
            </div>

            {/* <div className="mt-6 flex flex-row justify-between md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4"> */}
            <div className="flex flex-row justify-around px-[20vw]  w-full">
              <Link
                href="/conversationai"
                className="contact-button nav-link rounded text-center"
              >
                IA Conversacional
              </Link>
              <Link
                href="/chatbotgeneration"
                className="contact-button nav-link rounded text-center"
              >
                Desarrollo de chatbot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
