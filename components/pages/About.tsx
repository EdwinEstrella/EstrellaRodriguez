
import React from 'react';
import { UsersIcon } from '../icons/UsersIcon';

const TeamMemberCard: React.FC<{ name: string; role: string; imageUrl: string }> = ({ name, role, imageUrl }) => (
    <div className="text-center animate-fade-in-up">
        <img className="mx-auto h-32 w-32 rounded-full object-cover shadow-lg" src={imageUrl} alt={name} />
        <h3 className="mt-4 text-xl font-semibold text-brand-blue">{name}</h3>
        <p className="text-brand-orange">{role}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <div className="bg-white py-12 md:py-20 animate-fade-in">
            <div className="container mx-auto px-6">
                {/* Our Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="animate-slide-in-left">
                        <span className="text-brand-orange font-semibold">Nuestra Historia</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-4">
                            Dedicados a la Excelencia Educativa
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Estrella Rodriguez nació del deseo de crear un espacio donde los estudiantes no solo hicieran sus tareas, sino que también desarrollaran una verdadera pasión por el aprendizaje. Creemos que cada niño tiene un potencial ilimitado, y nuestra misión es proporcionar las herramientas y el apoyo necesarios para desbloquearlo.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Desde nuestros humildes comienzos, hemos crecido hasta convertirnos en una comunidad de aprendizaje vibrante, ayudando a cientos de estudiantes a alcanzar sus metas académicas y a ganar confianza en sí mismos.
                        </p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/600/400?image=1074" alt="Interior de la sala de tareas" className="rounded-xl shadow-2xl w-full" />
                    </div>
                </div>

                {/* Mission and Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 text-center">
                    <div className="p-8 bg-brand-blue text-white rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-3 text-brand-yellow">Nuestra Misión</h3>
                        <p>
                            Proporcionar un entorno de apoyo académico personalizado que inspire a los estudiantes a ser curiosos, seguros y exitosos en su camino educativo.
                        </p>
                    </div>
                    <div className="p-8 bg-brand-orange text-white rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-3 text-brand-yellow">Nuestra Visión</h3>
                        <p>
                            Ser reconocidos como el principal centro de apoyo educativo en la comunidad, formando líderes y aprendices de por vida.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-10">Conoce a Nuestro Equipo</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        <TeamMemberCard name="Ana Rodriguez" role="Fundadora y Directora" imageUrl="https://picsum.photos/200/200?image=823" />
                        <TeamMemberCard name="Carlos Pérez" role="Tutor de Matemáticas" imageUrl="https://picsum.photos/200/200?image=669" />
                        <TeamMemberCard name="Luisa Martinez" role="Tutora de Ciencias" imageUrl="https://picsum.photos/200/200?image=996" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;