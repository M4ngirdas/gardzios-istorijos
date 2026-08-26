import Header from "./components/Header.jsx"
import Hero from "./components/sections/Hero.jsx"
import About from "./components/sections/About.jsx"
import Menu from "./components/sections/Menu.jsx"
import Reviews from "./components/sections/Reviews.jsx"
import Contact from "./components/sections/Contact.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
    return (
        <div className="flex min-h-screen bg-white">
            <Header />
            <main className="flex-1 md:pl-72">
                <Hero />
                <About />
                <Menu />
                <Reviews />
                <Contact />
                <Footer />
            </main>
        </div>
    )
}