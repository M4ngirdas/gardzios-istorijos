import { motion } from "framer-motion"
import { LuCoffee, LuSoup, LuHeart, LuMapPin, LuPhone, LuMail, LuArrowUp } from "react-icons/lu"
import { FaFacebookF } from "react-icons/fa"

const links = [
    { href: "#hero", label: "Pradžia" },
    { href: "#about", label: "Mūsų istorija" },
    { href: "#menu", label: "Meniu" },
    { href: "#reviews", label: "Atsiliepimai" },
    { href: "#contact", label: "Kontaktai" },
]

const highlights = [
    { icon: LuCoffee, text: "Pusryčiai kasdien" },
    { icon: LuSoup, text: "Dienos pietūs" },
    { icon: LuHeart, text: "Gaminta su meile" },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="relative overflow-hidden rounded-t-[4rem] bg-primary-text px-8 pb-10 pt-20 text-bg lg:px-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-accent/30" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-44 w-44 rounded-t-full bg-accent/10" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-14 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        <p className="font-primary text-4xl font-light italic leading-tight text-bg sm:text-5xl">
                            Gardžios istorijos
                        </p>
                        <p className="mt-2 font-secondary text-base italic text-accent">bistro Senamiestyje</p>
                        <p className="mt-6 max-w-sm font-secondary text-base leading-relaxed text-bg/75">
                            Pusryčiai, pietūs ir kitos gardžios istorijos Kauno senamiestyje.
                        </p>

                        <ul className="mt-8 flex flex-wrap gap-3">
                            {highlights.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.li
                                        key={item.text}
                                        whileHover={{ scale: 1.06, rotate: 0 }}
                                        animate={{ rotate: index % 2 === 0 ? -2 : 2 }}
                                        className="flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 font-secondary text-sm text-bg"
                                    >
                                        <Icon className="h-4 w-4 text-accent" />
                                        {item.text}
                                    </motion.li>
                                )
                            })}
                        </ul>
                    </motion.div>

                    <motion.nav
                        aria-label="Poraštės navigacija"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="lg:col-span-3"
                    >
                        <h2 className="font-primary text-2xl font-normal text-bg">Naršyti</h2>
                        <ul className="mt-6 flex flex-col gap-3">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="inline-block font-secondary text-base text-bg/80 transition-all duration-300 hover:translate-x-2 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-4"
                    >
                        <h2 className="font-primary text-2xl font-normal text-bg">Susisiekite</h2>
                        <ul className="mt-6 flex flex-col gap-4 font-secondary text-base text-bg/80">
                            <li className="flex items-start gap-3">
                                <LuMapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                                <span>A. Jakšto g. 6, Kaunas, Lietuva</span>
                            </li>
                            <li>
                                <a
                                    href="tel:+37067552883"
                                    className="flex items-center gap-3 transition-colors duration-300 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                                >
                                    <LuPhone className="h-5 w-5 shrink-0 text-accent" />
                                    +370 675 52883
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:ievos@maistotarnyba.lt"
                                    className="flex items-center gap-3 break-all transition-colors duration-300 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                                >
                                    <LuMail className="h-5 w-5 shrink-0 text-accent" />
                                    ievos@maistotarnyba.lt
                                </a>
                            </li>
                        </ul>

                        <motion.a
                            href="https://www.facebook.com/gardzios.istorijos"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Gardžios istorijos Facebook puslapis"
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-secondary text-sm font-semibold text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
                        >
                            <FaFacebookF className="h-4 w-4" />
                            Sekite mus Facebook
                        </motion.a>
                    </motion.div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-dashed border-accent/40 pt-8 sm:flex-row">
                    <p className="font-secondary text-sm text-bg/60">
                        {year} Bistro Gardžios Istorijos. Visos teisės saugomos.
                    </p>
                    <motion.a
                        href="#hero"
                        whileHover={{ y: -4 }}
                        className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-5 py-2.5 font-secondary text-sm text-bg transition-colors duration-300 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        <LuArrowUp className="h-4 w-4" />
                        Į viršų
                    </motion.a>
                </div>
            </div>
        </footer>
    )
}