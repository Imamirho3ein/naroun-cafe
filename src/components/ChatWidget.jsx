import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="card rounded-2xl p-5 w-72 mb-3 shadow-2xl"
          >
            <div className="font-bold mb-2">Messages Now</div>
            <p className="text-cream/70 text-sm">سلام! 👋 چطور می‌تونم کمکتون کنم؟</p>
            <input
              placeholder="پیام..."
              className="mt-3 w-full bg-white/5 border border-gold/20 rounded-lg px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-gold text-espresso text-2xl shadow-lg glow flex items-center justify-center"
      >
        💬
      </motion.button>
    </div>
  )
}
