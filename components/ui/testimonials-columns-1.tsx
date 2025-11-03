"use client";
import React from "react";
import { motion } from "motion/react";


export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "La sala de tareas de Estrella Rodriguez ha sido un cambio radical para mi hijo. Ha mejorado sus calificaciones y su confianza en sí mismo.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Ana García",
    role: "Madre de estudiante",
  },
  {
    text: "El ambiente de aprendizaje es increíble. Los tutores son pacientes y muy conocedores. Mi hija ahora disfruta hacer sus tareas.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Carlos Pérez",
    role: "Padre de estudiante",
  },
  {
    text: "El equipo de Estrella Rodriguez es excepcional. Siempre están dispuestos a ayudar y a asegurarse de que cada niño reciba la atención que necesita.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Laura Martinez",
    role: "Madre de estudiante",
  },
  {
    text: "La integración de la tecnología en el proceso de aprendizaje es fantástica. Mis hijos están más comprometidos y aprenden más rápido.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Javier Fernandez",
    role: "Padre de estudiante",
  },
  {
    text: "Las herramientas y el apoyo que ofrecen han transformado la forma en que mi hija ve sus estudios. ¡Estamos muy agradecidos!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Sofia Lopez",
    role: "Madre de estudiante",
  },
  {
    text: "La implementación de su método de enseñanza superó nuestras expectativas. Ha mejorado el rendimiento académico de mi hijo.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Isabella Gonzalez",
    role: "Madre de estudiante",
  },
  {
    text: "El diseño de la sala de tareas es muy amigable y motivador. Mi hijo se siente cómodo y feliz de ir cada día.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "David Rodriguez",
    role: "Padre de estudiante",
  },
  {
    text: "Entendieron perfectamente las necesidades de mi hija y le brindaron una solución a su medida. ¡Su progreso ha sido asombroso!",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Valentina Sanchez",
    role: "Madre de estudiante",
  },
  {
    text: "Gracias a la sala de tareas, mi hijo ha mejorado significativamente su rendimiento y ahora tiene más tiempo para otras actividades.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Martin Gomez",
    role: "Padre de estudiante",
  },
];
