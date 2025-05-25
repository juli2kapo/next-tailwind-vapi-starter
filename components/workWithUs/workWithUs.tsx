"use client";
import React, { useState, useRef } from 'react';
import CustomUploadButton from './customUploadButton';

interface Benefit {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
}

const workBenefits: Benefit[] = [
  {
    id: 1,
    iconUrl: 'https://i.imgur.com/yHSIico.png',
    title: 'Innovación Constante',
    description: 'Participa en el desarrollo de soluciones de IA de vanguardia y redefine lo que es posible en tu campo.',
  },
  {
    id: 2,
    iconUrl: 'https://i.imgur.com/yHSIico.png',
    title: 'Impacto Real y Significativo',
    description: 'Tus contribuciones ayudarán a empresas a transformarse y a optimizar sus procesos con tecnología inteligente.',
  },
  {
    id: 3,
    iconUrl: 'https://i.imgur.com/yHSIico.png',
    title: 'Crecimiento y Desarrollo',
    description: 'Te ofrecemos un entorno dinámico para expandir tus habilidades, con mentoría y constantes nuevos desafíos.',
  },
  {
    id: 4,
    iconUrl: 'https://i.imgur.com/yHSIico.png',
    title: 'Cultura Colaborativa y Ágil',
    description: 'Sé parte de un equipo talentoso y apasionado, donde la colaboración, la creatividad y las nuevas ideas son valoradas.',
  },
];

const WorkWithUsSection: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSubmittingApplication, setIsSubmittingApplication] = useState<boolean>(false);
  const [applicationStatus, setApplicationStatus] = useState<string | null>(null);
  const dropzoneRef = useRef<HTMLDivElement>(null);
  
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleFileUploadStart = () => {
    setIsUploading(true);
    setUploadError(null);
    setApplicationStatus(null);
  };

  const handleFileUploadComplete = (fileUrl: string, fileName: string) => {
    setIsUploading(false);
    setUploadedFileUrl(fileUrl);
    setApplicationStatus(`CV "${fileName}" cargado correctamente.`);
  };

  const handleFileUploadError = (errorMessage: string) => {
    setIsUploading(false);
    setUploadError(errorMessage);
    setUploadedFileUrl(null);
    setApplicationStatus(`Error al cargar el archivo: ${errorMessage}`);
  };

  const handleSubmitApplication = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If an upload is in progress, wait for it to complete
    if (isUploading) {
      setApplicationStatus('Por favor, espera a que se complete la carga del CV.');
      return;
    }

    // If no file has been selected yet, trigger the upload button click
    if (!fileSelected && !uploadedFileUrl) {
      setApplicationStatus('Por favor, selecciona tu CV para continuar.');
      return;
    }

    // If a file was selected but we don't have a URL yet, that means we need to upload it
    if (fileSelected && !uploadedFileUrl && !uploadError) {
      const btn = dropzoneRef.current?.querySelector(
        'button[data-ut-element="button"]'
      ) as HTMLButtonElement | null;

      if (btn) {
        btn.click();
        setApplicationStatus('Cargando CV, por favor espera...');
      }
      return;
    }

    // Don't proceed if there was an upload error
    if (uploadError) {
      setApplicationStatus('Por favor, corrige el error con la carga del CV antes de continuar.');
      return;
    }

    setIsSubmittingApplication(true);
    setApplicationStatus('Enviando postulación...');

    try {
      console.log('Submitting application to backend:', {
        cvUrl: uploadedFileUrl,
        message: message,
      });

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

      setApplicationStatus('¡Postulación enviada con éxito! Nos pondremos en contacto pronto.');
      setMessage('');
      setFileSelected(false);
      setUploadedFileUrl(null);
    } catch (error) {
      console.error('Application submission error:', error);
      setApplicationStatus('Error al enviar la postulación. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmittingApplication(false);
    }
  };

  return (
    <section className="bg-black py-4 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-2 md:mb-16">
          <h1 className="text-[25px] md:text-[40px] font-bold mb-6 xl:mb-8 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 z-30 to-purple-400">
            Únete a Nuestro Equipo
          </h1>
          <p className="text-gray-300 text-[15px] md:text-[17px] md:text-xl max-w-2xl">
            En Elykia, estamos construyendo el futuro con inteligencia artificial. Buscamos mentes curiosas, innovadoras y apasionadas que quieran generar un impacto real. Si te entusiasma la tecnología y los desafíos, ¡este es tu lugar!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-4 md:gap-16 mb-0 md:mb-16 px-[5vw]">
          {workBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center p-6 bg-gray-900/10 rounded-xl transition-all duration-300 md:hover:scale-105 md:hover:bg-gray-800/40 "
            >
              <div className="h-[50px] flex items-center justify-center mb-4">
                <img
                  src={benefit.iconUrl}
                  loading="lazy"
                  alt={`${benefit.title} icon`}
                  width="45"
                  className="h-[45px] w-[45px]"
                />
              </div>
              <h3 className="text-white text-xl xl:text-[22px] font-semibold mb-2 mt-0 flex items-center justify-center">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-[16px] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action & CV Upload Form */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para Crear el Futuro con IA?
          </h2>
          <p className="text-gray-300 sm:text-lg md:text-xl mb-8">
            Si crees que tienes lo necesario para unirte a nuestro equipo innovador, carga tu CV y envíanos un breve mensaje a continuación.
          </p>

          <form onSubmit={handleSubmitApplication} className="w-full max-w-lg mx-auto space-y-6">
            <div>
              <CustomUploadButton 
                ref={dropzoneRef} 
                setFileSelected={setFileSelected}
                onUploadStart={handleFileUploadStart}
                onUploadComplete={handleFileUploadComplete}
                onUploadError={handleFileUploadError}
              />
              {uploadError && (
                <p className="mt-2 text-sm text-red-400">{uploadError}</p>
              )}
            </div>

            {/* <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 text-left mb-1">
                Mensaje Adicional (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors duration-300 placeholder-gray-500"
                value={message}
                onChange={handleMessageChange}
                placeholder="Breve presentación o información relevante que quieras compartir..."
              />
            </div> */}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-200 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={isUploading || isSubmittingApplication}
              >
                {isUploading ? 'Cargando CV...' : 
                 isSubmittingApplication ? 'Enviando Postulación...' : 
                 'Enviar Postulación'}
              </button>
            </div>
            
            {applicationStatus && (
              <p className={`mt-4 text-sm ${
                applicationStatus.includes('Error') ? 'text-red-400' : 
                applicationStatus.includes('éxito') ? 'text-green-400' : 
                applicationStatus.includes('cargado correctamente') ? 'text-green-400' :
                'text-purple-400'
              }`}>
                {applicationStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;