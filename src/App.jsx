import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Pastries from './components/Pastries.jsx'
import Menu from './components/Menu.jsx'
import Beans from './components/Beans.jsx'
import Footer from './components/Footer.jsx'
import ChatWidget from './components/ChatWidget.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <Intro />
      <Pastries />
      <Menu />
      <Beans />
      <Footer />
      <ChatWidget />
    </div>
  )
}
