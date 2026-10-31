import { motion } from 'framer-motion'

const teas = ['چای سیاه', 'چای سبز', 'چای سیاه و چای سبز']

export default function Beans() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            دانه‌هایی که هر هفته <span className="gradient-text">برشته می‌شوند</span>
          </h2>
          <p className="text-cream/70 text-lg mb-6">
            روی هر ایستگاه، برترین روش‌های خانگی را تهیه کنید. از دانه تا فنجان، همه چیز تازه.
          </p>
          <div className="flex flex-wrap gap-3">
            {teas.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-gold/30 text-gold text-sm">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card rounded-3xl p-12 text-center glow"
        >
          <div className="text-8xl mb-4 float">🫘</div>
          <div className="text-2xl font-black">قهوه تازه برشته</div>
          <div className="text-cream/60 mt-2">هر هفته، یک برشته جدید</div>
        </motion.div>
      </div>
    </section>
  )
}
