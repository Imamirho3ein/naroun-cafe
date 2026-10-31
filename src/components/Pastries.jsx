import { motion } from 'framer-motion'
import { useState } from 'react'

const pastries = [
  { name: 'کرم طلایی', desc: 'کرمی تازه، لایه‌های طلایی و کمی خوشحاله', emoji: '🍰' },
  { name: 'شکلاتی', desc: 'شکلات تلخ با بافت نرم', emoji: '🍫' },
  { name: 'میوه‌ای', desc: 'میوه‌های فصل روی کرم تازه', emoji: '🍓' },
  { name: 'وانیلی', desc: 'وانیل طبیعی و کرم سبک', emoji: '🍦' },
]

export default function Pastries() {
  const [active, setActive] = useState(0)
  return (
    <section id="pastries" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-4"
        >
          شیرینی‌هایی که <span className="gradient-text">همینجا پخته می‌شوند</span>
        </motion.h2>
        <p className="text-center text-cream/60 mb-12">روی هر شیرینی بزنید</p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            {pastries.map((p, i) => (
              <motion.button
                key={p.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActive(i)}
                className={`card rounded-2xl p-6 text-right transition ${active === i ? 'ring-2 ring-gold glow' : ''}`}
              >
                <div className="text-4xl mb-3">{p.emoji}</div>
                <div className="font-bold text-lg">{p.name}</div>
                <div className="text-cream/60 text-sm mt-1">{p.desc}</div>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card rounded-3xl p-10 text-center glow"
          >
            <div className="text-8xl mb-6 float">{pastries[active].emoji}</div>
            <h3 className="text-3xl font-black mb-3">{pastries[active].name}</h3>
            <p className="text-cream/70 text-lg">{pastries[active].desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
