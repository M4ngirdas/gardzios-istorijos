import { useState } from "react"
import { motion } from "framer-motion"
import { LuMapPin, LuPhone, LuMail, LuClock, LuNavigation, LuCopy, LuCheck } from "react-icons/lu"

const mapsUrl = "https://www.google.com/maps/place/Bistro+%22Gard%C5%BEios+istorijos%22+-+Senamiestis/@54.8982393,23.8842702,17z/data=!4m6!3m5!1s0x46e723ff0e3fef99:0xfa32da8a9b5282e7!8m2!3d54.8982362!4d23.8868451!16s%2Fg%2F11h00d4p8v?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"

const embedUrl = "https://maps.google.com/maps?q=54.8982362,23.8868451&z=17&output=embed"

const hours = [
    { label: "Pirmadienis - Penktadienis", time: "8:00 - 17:00", days: [1, 2, 3, 4, 5] },
    { label: "Šeštadienis - Sekmadienis", time: "9:00 - 16:00", days: [0, 6] },
]

const tile = {
    hidden: { opacity: 0, y: 40, rotate: -1.5 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" },
    }),
}

function CopyButton({ value, label }) {
    const [copied, setCopied] = useState(false)

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(value)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            setCopied(false)
        }
    }

    return (
        <button
            onClick={handleCopy}
            aria-label={label}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 text-primary-text transition-colors duration-300 hover:bg-accent hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
            {copied ? <LuCheck className="h-4 w-4" /> : <LuCopy className="h-4 w-4" />}
            {copied && (
                <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-9 whitespace-nowrap rounded-full bg-primary-text px-3 py-1 font-secondary text-xs text-bg"
                >
                    Nukopijuota
                </motion.span>
            )}
        </button>
    )
}

export default function Contact() {
    const today = new Date().getDay()

    return (
        <section id="contact" className="relative overflow-hidden bg-bg px-8 py-28 lg:px-16">
            <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full border border-dashed border-accent/50" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h2 className="font-primary text-4xl font-light leading-[1.1] text-primary-text sm:text-5xl xl:text-6xl">
                        Raskite mus senamiesčio gatvelėse
                    </h2>
                    <p className="mt-6 max-w-xl font-secondary text-lg leading-relaxed text-primary-text/80">
                        Užeikite be iš anksto, paskambinkite dėl staliuko arba parašykite laišką. Visada džiaugiamės svečiais.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-12">
                    <motion.article
                        custom={0}
                        variants={tile}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="relative min-h-[26rem] overflow-hidden rounded-[2.5rem] rounded-tl-[8rem] border border-accent p-2 md:col-span-6 lg:col-span-7 lg:row-span-2"
                    >
                        <iframe
                            title="Bistro Gardžios Istorijos vieta žemėlapyje"
                            src={embedUrl}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-full min-h-[25rem] w-full rounded-[2.2rem] rounded-tl-[7.7rem] border-0 grayscale transition-all duration-700 hover:grayscale-0"
                        />
                    </motion.article>

                    <motion.a
                        custom={1}
                        variants={tile}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        href={mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.02, rotate: -1 }}
                        className="group flex flex-col justify-between rounded-[2.5rem] rounded-tr-[6rem] bg-accent p-8 text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-text md:col-span-3 lg:col-span-5"
                    >
                        <LuMapPin className="h-9 w-9" />
                        <div className="mt-10">
                            <h3 className="font-primary text-3xl font-normal">A. Jakšto g. 6</h3>
                            <p className="mt-2 font-secondary text-base text-bg/95">Kaunas, Lietuva</p>
                            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-text px-6 py-2.5 font-secondary text-sm font-semibold text-bg">
                                <LuNavigation className="h-4 w-4" />
                                Kaip atvykti
                            </span>
                        </div>
                    </motion.a>

                    <motion.article
                        custom={2}
                        variants={tile}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="flex flex-col justify-between rounded-[2.5rem] border border-accent bg-bg p-8 md:col-span-3 lg:col-span-5"
                    >
                        <div className="flex items-start justify-between">
                            <LuClock className="h-9 w-9 text-accent" />
                            <h3 className="font-primary text-2xl font-normal text-primary-text">Darbo laikas</h3>
                        </div>
                        <ul className="mt-8 flex flex-col gap-3">
                            {hours.map((h) => {
                                const isToday = h.days.includes(today)
                                return (
                                    <li
                                        key={h.label}
                                        className={
                                            "flex flex-wrap items-center justify-between gap-2 rounded-full px-5 py-3 font-secondary text-base " +
                                            (isToday ? "bg-primary-text text-bg" : "bg-accent/10 text-primary-text")
                                        }
                                    >
                                        <span>{h.label}</span>
                                        <span className="font-semibold">{h.time}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.article>

                    <motion.article
                        custom={3}
                        variants={tile}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="flex items-center justify-between gap-4 rounded-[2.5rem] rounded-bl-[5rem] bg-accent/15 p-8 md:col-span-3 lg:col-span-6"
                    >
                        <a
                            href="tel:+37067552883"
                            className="group flex items-center gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-text text-bg transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                                <LuPhone className="h-6 w-6" />
                            </span>
                            <span>
                                <span className="block font-secondary text-sm italic text-primary-text/70">Skambinkite</span>
                                <span className="block font-primary text-2xl font-normal text-primary-text">+370 675 52883</span>
                            </span>
                        </a>
                        <CopyButton value="+370 675 52883" label="Nukopijuoti telefono numerį" />
                    </motion.article>

                    <motion.article
                        custom={4}
                        variants={tile}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="flex items-center justify-between gap-4 rounded-[2.5rem] rounded-br-[5rem] border border-dashed border-accent p-8 md:col-span-3 lg:col-span-6"
                    >
                        <a
                            href="mailto:ievos@maistotarnyba.lt"
                            className="group flex min-w-0 items-center gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-bg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                                <LuMail className="h-6 w-6" />
                            </span>
                            <span className="min-w-0">
                                <span className="block font-secondary text-sm italic text-primary-text/70">Rašykite</span>
                                <span className="block break-all font-primary text-xl font-normal text-primary-text sm:text-2xl">
                                    ievos@maistotarnyba.lt
                                </span>
                            </span>
                        </a>
                        <CopyButton value="ievos@maistotarnyba.lt" label="Nukopijuoti el. pašto adresą" />
                    </motion.article>
                </div>
            </div>
        </section>
    )
}