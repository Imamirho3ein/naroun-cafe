export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gold/10 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-2xl font-black mb-2">کافه نارون</div>
        <p className="text-cream/60 mb-6">یه سایت که مثل بقیه نیست.</p>
        <div className="flex justify-center gap-6 text-cream/50 text-sm">
          <a href="#" className="hover:text-gold transition">اینستاگرام</a>
          <a href="#" className="hover:text-gold transition">تلگرام</a>
          <a href="#" className="hover:text-gold transition">تماس</a>
        </div>
        <p className="mt-8 text-cream/30 text-xs">
          ساخته شده با ❤️ توسط{' '}
          <a href="https://github.com/Imamirho3ein" className="text-gold hover:underline" target="_blank" rel="noreferrer">
            امیرحسین جدیدی
          </a>{' '}
          — React & Tailwind
        </p>
      </div>
    </footer>
  )
}
