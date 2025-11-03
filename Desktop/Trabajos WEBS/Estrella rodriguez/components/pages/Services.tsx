
import React from 'react';
import { PencilIcon } from '../icons/PencilIcon';
import { BookOpenIcon } from '../icons/BookOpenIcon';
import { UsersIcon } from '../icons/UsersIcon';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; color: string }> = ({ icon, title, description, color }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up flex flex-col">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${color}`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-blue mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
    </div>
);


const Services: React.FC = () => {
    const services = [
        {
            title: "Apoyo con Tareas",
            description: "Ayudamos a los estudiantes a completar sus tareas diarias, asegurando que comprendan los conceptos y desarrollen habilidades de organización.",
            icon: <PencilIcon className="h-8 w-8 text-white" />,
            color: "bg-brand-blue"
        },
        {
            title: "Tutorías Personalizadas",
            description: "Sesiones individuales o en grupos pequeños enfocadas en las materias que más se le dificultan al estudiante, como matemáticas, ciencias o español.",
            icon: <UsersIcon className="h-8 w-8 text-white" />,
            color: "bg-brand-orange"
        },
        {
            title: "Preparación para Exámenes",
            description: "Estrategias de estudio, repasos intensivos y simulacros de exámenes para que los estudiantes enfrenten sus evaluaciones con total confianza.",
            icon: <BookOpenIcon className="h-8 w-8 text-white" />,
            color: "bg-brand-red"
        },
        {
            title: "Club de Lectura",
            description: "Fomentamos el amor por la lectura a través de actividades grupales divertidas, debates y exploración de diferentes géneros literarios.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
            color: "bg-brand-yellow"
        },
         {
            title: "Técnicas de Estudio",
            description: "Enseñamos a los estudiantes métodos efectivos para tomar notas, gestionar su tiempo y prepararse para el éxito académico a largo plazo.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
            color: "bg-gray-700"
        },
        {
            title: "Talleres de Verano",
            description: "Programas divertidos y educativos durante las vacaciones para mantener las mentes activas con ciencia, arte y tecnología.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
            color: "bg-teal-500"
        }
    ];
    return (
        <div className="bg-gray-50 py-12 md:py-20 animate-fade-in">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Nuestros Servicios</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        Ofrecemos una variedad de programas diseñados para satisfacer las necesidades individuales de cada estudiante y potenciar su aprendizaje.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                         <ServiceCard 
                            key={index} 
                            icon={service.icon} 
                            title={service.title} 
                            description={service.description}
                            color={service.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
