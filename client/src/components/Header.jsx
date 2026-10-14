import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LuBike } from "react-icons/lu"
import { FaFacebookF } from "react-icons/fa"

import logo from "../images/logo_extra.png"

const facebookUrl = "https://www.facebook.com/gardzios.istorijos"
const woltUrl = "https://wolt.com/lt/ltu/kaunas"

const links = [
  { id: "hero", label: "Titulinis" },
  { id: "about", label: "Paslaugos" },
  { id: "menu", label: "Valgiaraštis" },
  { id: "reviews", label: "Atsiliepimai" },
  { id: "contact", label: "Kontaktai" },
]

export default function Header() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    links.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col overflow-hidden bg-primary-text px-8 py-10"
    >
      <a
        href="#hero"
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <img
          src={logo}
          alt="Bistro Gardžios istorijos logotipas"
          className="w-full object-cover"
        />
      </a>

      <nav className="mt-14 flex flex-col gap-1" aria-label="Pagrindinė navigacija">
        {links.map((link) => {
          const isActive = active === link.id
          return (
            <a
              key={link.id}
              href={"#" + link.id}
              className="relative py-3 pl-5 font-secondary text-base transition-colors duration-300 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-marker"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-y-2 left-0 w-0.5 bg-accent"
                />
              )}
              <span className={isActive ? "font-semibold text-bg" : "font-normal text-bg/75"}>
                {link.label}
              </span>
            </a>
          )
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-3">
        <a
          href={woltUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-accent px-4 py-3.5 font-secondary text-sm font-semibold text-bg transition-colors duration-300 hover:bg-bg hover:text-primary-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
        >
          <LuBike className="h-4 w-4" />
          Užsakyti per Wolt
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 border border-bg px-4 py-3.5 font-secondary text-sm font-semibold text-bg transition-colors duration-300 hover:bg-bg hover:text-primary-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
        >
          <FaFacebookF className="h-4 w-4" />
          Facebook
        </a>
      </div>
    </motion.header>
  )
}