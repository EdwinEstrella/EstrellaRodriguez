import { TestimonialsColumn } from "../ui/testimonials-columns-1";
import { motion } from "motion/react";

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


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonios</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-center mt-5 opacity-75">
            Vea lo que nuestros clientes tienen que decir sobre nosotros.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;