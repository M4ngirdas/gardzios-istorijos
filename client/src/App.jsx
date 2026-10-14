import Header from "./components/Header.jsx"
import Hero from "./components/sections/Hero.jsx"
import Services from "./components/sections/Services.jsx"
import Menu from "./components/sections/Menu.jsx"
import Reviews from "./components/sections/Reviews.jsx"
import Contact from "./components/sections/Contact.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="lg:ml-64 pt-20 lg:pt-0 min-h-screen flex flex-col justify-between">
        <div className="w-full flex flex-col items-center">
          <Hero />
          <Services />
          <Menu />
          <Reviews />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  )
}