import atharva from "../assets/atharva.jpeg"
import aditya from "../assets/aditya.jpeg"
import saurabh from "../assets/saurabh.jpeg"
import sanket from "../assets/sanket.jpeg"

import { motion } from "framer-motion"
const testimonials = [
  {
    name: "Atharva Pathekar",
    role: "Software Engineer at TCS",
    review: "Kaustubh is a visionary developer.",
    image: atharva,
  },
  {
    name: "Aditya Salkar",
    role: "Frontend Developer at Infosys",
    review: "Kaustubh writes clean, well-structured code and consistently delivers polished UI/UX. He’s someone you can trust to get things done efficiently.",
    image: aditya,
  },
  {
    name: "Saurabh Isankar",
    role: "Full Stack Developer at Capgemini",
    review: "Working with Kaustubh was seamless. His problem-solving skills and understanding of backend systems truly stand out.",
    image: saurabh,
  },
  {
    name: "Sanket Patil",
    role: "Cloud Engineer at Accenture",
    review: "Kaustubh quickly understands complex concepts and implements scalable solutions. A great teammate with a strong technical mindset.",
    image: sanket,
  },
];


const Testimonials = () => {
  return (
    <section id="testimonials" className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">
      <motion.h2 className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What People Say
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name + i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.4, delay: i * 0.2, type: "spring", stiffness: 250 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center"
          >
            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
              loading="lazy"
            />
            <p className="text-gray-200 italic mb-4">
              {t.review}
            </p>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-400">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
