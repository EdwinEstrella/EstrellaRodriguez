
import React from 'react';
import type { Page } from '../../types';
import Testimonials from './Testimonials';

interface HomeProps {
    setCurrentPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/Herofoto.jpg')", backgroundPosition: 'center -55px' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto px-6 py-32 md:py-48 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Transformando Tareas en Triunfos
                    </h1>
                    <p className="text-lg md:text-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Apoyo académico personalizado para que cada estudiante alcance su máximo potencial.
                    </p>
                    <button
                        onClick={() => setCurrentPage('Inscripciones')}
                        className="bg-brand-orange hover:bg-brand-red text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg animate-fade-in-up"
                        style={{ animationDelay: '0.6s' }}
                    >
                        ¡Inscríbete Ahora!
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">¿Por qué elegir Estrella Rodriguez?</h2>
                         <p className="text-gray-600 mt-2">Ofrecemos un ambiente de aprendizaje único y efectivo.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-yellow mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Tutores Expertos</h3>
                            <p className="text-gray-600">
                                Un equipo de profesionales apasionados por la enseñanza y el éxito de los estudiantes.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-yellow mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Ambiente Motivador</h3>
                            <p className="text-gray-600">
                                Un espacio seguro, positivo y estimulante que fomenta la curiosidad y el aprendizaje.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-yellow mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Resultados Comprobados</h3>
                            <p className="text-gray-600">
                                Ayudamos a los estudiantes a mejorar sus calificaciones y a desarrollar hábitos de estudio sólidos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Home;