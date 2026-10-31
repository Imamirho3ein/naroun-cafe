import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section id="intro" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          اوکی.. <span className="gradient-text">ساختمش..</span>
        </h2>
        <p className="text-xl text-cream/80 leading-relaxed">
          نارون کافه — جایی که شیرینی‌ها همینجا پخته می‌شوند، قهوه هر هفته تازه برشته می‌شود
          و هر روز چیزی تازه برای دلت داریم.
        </p>
      </motion.div>
    </section>
  )
}
