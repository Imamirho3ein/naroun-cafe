import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* background blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-rose/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center z-10"
      >
        <p className="text-gold tracking-widest text-sm mb-6">کافه نارون</p>
        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          یه سایت
          <br />
          <span className="gradient-text">که مثل بقیه نیست</span>
        </h1>
        <p className="mt-8 text-cream/70 max-w-xl mx-auto text-lg">
          اوکی.. ساختمش. 😎
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a href="#pastries" className="px-8 py-3 rounded-full bg-gold text-espresso font-bold hover:bg-gold-bright transition">شیرینی‌ها</a>
          <a href="#menu" className="px-8 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition">منو</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 text-cream/40 text-sm"
      >
        ↓ اسکرول کن
      </motion.div>
    </section>
  )
}
