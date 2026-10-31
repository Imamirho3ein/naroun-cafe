import { motion } from 'framer-motion'

const categories = [
  { title: 'نوشیدنی', sub: 'شیر و کمپانی', emoji: '☕', items: ['اسپرسو', 'لاته', 'کاپوچینو', 'موکا'] },
  { title: 'غذا و دسر', sub: 'غذای و ساندویچ', emoji: '🥪', items: ['ساندویچ مرغ', 'کروسان', 'کیک روز', 'پارفه'] },
  { title: 'چای', sub: 'چای سیاه و چای سبز', emoji: '🍵', items: ['چای سیاه', 'چای سبز', 'چای ماسالا', 'چای یاس'] },
]

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-4"
        >
          امروز <span className="gradient-text">دلتان چه می‌خواهد؟</span>
        </motion.h2>
        <p className="text-center text-cream/60 mb-12">یه نوشیدنی، یه غذا، یه دسر — هر چی دلت خواست</p>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="card rounded-3xl p-8"
            >
              <div className="text-5xl mb-4">{c.emoji}</div>
              <h3 className="text-2xl font-black mb-1">{c.title}</h3>
              <p className="text-gold text-sm mb-4">{c.sub}</p>
              <ul className="space-y-2 text-cream/70">
                {c.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
