"use client";
import React, { useState, useRef } from 'react';
import CustomUploadButton from './customUploadButton';

interface Benefit {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
}

interface Translations {
  es: {
    sectionTitle: string;
    sectionDescription: string;
    benefits: Benefit[];
    ctaTitle: string;
    ctaDescription: string;
    uploadingCV: string;
    submittingApplication: string;
    submitApplication: string;
    messages: {
      waitForUpload: string;
      selectCV: string;
      uploadingWait: string;
      fixUploadError: string;
      submittingApp: string;
      successMessage: string;
      errorMessage: string;
      cvUploaded: string;
      uploadError: string;
    };
  };
  en: {
    sectionTitle: string;
    sectionDescription: string;
    benefits: Benefit[];
    ctaTitle: string;
    ctaDescription: string;
    uploadingCV: string;
    submittingApplication: string;
    submitApplication: string;
    messages: {
      waitForUpload: string;
      selectCV: string;
      uploadingWait: string;
      fixUploadError: string;
      submittingApp: string;
      successMessage: string;
      errorMessage: string;
      cvUploaded: string;
      uploadError: string;
    };
  };
}

const translations: Translations = {
  es: {
    sectionTitle: "Únete al equipo de Elykia",
    sectionDescription: "Buscamos mentes curiosas, innovadoras y apasionadas que quieran generar un impacto real. Aun si no tienes experiencia previa, pero sí ganas de aprender, esperamos tu postulación.",
    benefits: [
      {
        id: 1,
        iconUrl: 'https://i.imgur.com/yHSIico.png',
        title: 'Innovación constante',
        description: 'Participa en el desarrollo de soluciones de IA de vanguardia y redefine lo que es posible en tu campo.',
      },
      {
        id: 2,
        iconUrl: 'https://i.imgur.com/yHSIico.png',
        title: 'Impacto real y significativo',
        description: 'Tus contribuciones ayudarán a empresas a transformarse y a optimizar sus procesos con tecnología inteligente.',
      },
      {
        id: 3,
        iconUrl: 'https://i.imgur.com/yHSIico.png',
        title: 'Crecimiento y desarrollo',
        description: 'Te ofrecemos un entorno dinámico para expandir tus habilidades, sin pretensiones de arruinar tu balance trabajo-vida.',
      },
      {
        id: 4,
        iconUrl: 'https://i.imgur.com/yHSIico.png',
        title: 'Trabajo completamente remoto',
        description: 'Disfruta de la flexibilidad de trabajar desde cualquier lugar, adaptando tu espacio y horario a tus necesidades.',
      },
    ],
    ctaTitle: "¿Listo para crear el futuro con IA?",
    ctaDescription: "Si crees que tienes lo necesario para unirte a nuestro equipo, cargá tu CV y aguarda nuestro mensaje.",
    uploadingCV: "Cargando CV...",
    submittingApplication: "Enviando Postulación...",
    submitApplication: "Enviar Postulación",
    messages: {
      waitForUpload: "Por favor, espera a que se complete la carga del CV.",
      selectCV: "Por favor, selecciona tu CV para continuar.",
      uploadingWait: "Cargando CV, por favor espera...",
      fixUploadError: "Por favor, corrige el error con la carga del CV antes de continuar.",
      submittingApp: "Enviando postulación...",
      successMessage: "¡Postulación enviada con éxito! Nos pondremos en contacto pronto.",
      errorMessage: "Error al enviar la postulación. Por favor, inténtalo de nuevo.",
      cvUploaded: "cargado correctamente",
      uploadError: "Error al cargar el archivo:"
    }
  },
  en: {
    sectionTitle: "Join the Elykia team",
    sectionDescription: "We're looking for curious, innovative, and passionate minds who want to make a real impact. Even if you don't have prior experience, but have the desire to learn, we welcome your application.",
    benefits: [
      {
        id: 1,
        iconUrl: 'https://i.imgur.com/yHSIico.png',
        title: 'Constant Innovation',
        description: 'Participate in developing cutting-edge AI solutions and redefine what\'s possible in your field.',
      },
      {
        id: 2,
        iconUrl: 'https://i.imgur.com/yHSIico.png',
        title: 'Real and Meaningful Impact',
        description: 'Your contributions will help companies transform and optimize their processes with intelligent technology.',
      },
      {
        id: 3,
        iconUrl: 'https://i.imgur.com/yHSIico.png',
        title: 'Growth and Development',
        description: 'We offer you a dynamic environment to expand your skills, without pretensions of ruining your work-life balance.',
      },
      {
        id: 4,
        iconUrl: 'https://i.imgur.com/yHSIico.png',
        title: 'Fully Remote Work',
        description: 'Enjoy the flexibility of working from anywhere, adapting your space and schedule to your needs.',
      },
    ],
    ctaTitle: "Ready to create the future with AI?",
    ctaDescription: "If you believe you have what it takes to join our team, upload your CV and await our message.",
    uploadingCV: "Uploading CV...",
    submittingApplication: "Submitting Application...",
    submitApplication: "Submit Application",
    messages: {
      waitForUpload: "Please wait for the CV upload to complete.",
      selectCV: "Please select your CV to continue.",
      uploadingWait: "Uploading CV, please wait...",
      fixUploadError: "Please fix the CV upload error before continuing.",
      submittingApp: "Submitting application...",
      successMessage: "Application submitted successfully! We'll be in touch soon.",
      errorMessage: "Error submitting application. Please try again.",
      cvUploaded: "uploaded successfully",
      uploadError: "Error uploading file:"
    }
  }
};

const WorkWithUsSection: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [message, setMessage] = useState<string>('');
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSubmittingApplication, setIsSubmittingApplication] = useState<boolean>(false);
  const [applicationStatus, setApplicationStatus] = useState<string | null>(null);
  const dropzoneRef = useRef<HTMLDivElement>(null);
  
  const t = translations[language];

  const handleLanguageToggle = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

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
    setApplicationStatus(`CV "${fileName}" ${t.messages.cvUploaded}.`);
  };

  const handleFileUploadError = (errorMessage: string) => {
    setIsUploading(false);
    setUploadError(errorMessage);
    setUploadedFileUrl(null);
    setApplicationStatus(`${t.messages.uploadError} ${errorMessage}`);
  };

  const handleSubmitApplication = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If an upload is in progress, wait for it to complete
    if (isUploading) {
      setApplicationStatus(t.messages.waitForUpload);
      return;
    }

    // If no file has been selected yet, trigger the upload button click
    if (!fileSelected && !uploadedFileUrl) {
      setApplicationStatus(t.messages.selectCV);
      return;
    }

    // If a file was selected but we don't have a URL yet, that means we need to upload it
    if (fileSelected && !uploadedFileUrl && !uploadError) {
      const btn = dropzoneRef.current?.querySelector(
        'button[data-ut-element="button"]'
      ) as HTMLButtonElement | null;

      if (btn) {
        btn.click();
        setApplicationStatus(t.messages.uploadingWait);
      }
      return;
    }

    // Don't proceed if there was an upload error
    if (uploadError) {
      setApplicationStatus(t.messages.fixUploadError);
      return;
    }

    setIsSubmittingApplication(true);
    setApplicationStatus(t.messages.submittingApp);

    try {
      console.log('Submitting application to backend:', {
        cvUrl: uploadedFileUrl,
        message: message,
      });

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

      setApplicationStatus(t.messages.successMessage);
      setMessage('');
      setFileSelected(false);
      setUploadedFileUrl(null);
    } catch (error) {
      console.error('Application submission error:', error);
      setApplicationStatus(t.messages.errorMessage);
    } finally {
      setIsSubmittingApplication(false);
    }
  };

  return (
    <section className="bg-black py-4 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLanguageToggle}
            className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            {language === 'es' ? 'English' : 'Español'}
          </button>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-2 md:mb-16">
          <h1 className="text-[25px] md:text-[40px] font-bold mb-6 xl:mb-8 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 z-30 to-purple-400">
            {t.sectionTitle}
          </h1>
          <p className="text-gray-300 text-[15px] md:text-[17px] md:text-xl max-w-2xl">
            {t.sectionDescription}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-4 md:gap-16 mb-0 md:mb-16 px-[5vw]">
          {t.benefits.map((benefit) => (
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
            {t.ctaTitle}
          </h2>
          <p className="text-gray-300 sm:text-lg md:text-xl mb-8">
            {t.ctaDescription}
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

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-200 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={isUploading || isSubmittingApplication}
              >
                {isUploading ? t.uploadingCV : 
                 isSubmittingApplication ? t.submittingApplication : 
                 t.submitApplication}
              </button>
            </div>
            
            {applicationStatus && (
              <p className={`mt-4 text-sm ${
                applicationStatus.includes('Error') || applicationStatus.includes('error') ? 'text-red-400' : 
                applicationStatus.includes('éxito') || applicationStatus.includes('successfully') ? 'text-green-400' : 
                applicationStatus.includes('cargado correctamente') || applicationStatus.includes('uploaded successfully') ? 'text-green-400' :
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