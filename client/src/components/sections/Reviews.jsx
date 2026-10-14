import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LuStar, LuQuote, LuPenLine, LuMessageCircleHeart } from "react-icons/lu"

const reviewsUrl = "https://www.google.com/maps/place/Bistro+%22Gard%C5%BEios+istorijos%22+-+Senamiestis/@54.8982393,23.8842702,17z/data=!4m8!3m7!1s0x46e723ff0e3fef99:0xfa32da8a9b5282e7!8m2!3d54.8982362!4d23.8868451!9m1!1b1!16s%2Fg%2F11h00d4p8v?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"

const reviews = [
  {
    name: "Rūta K.",
    when: "Šeštadienio pusryčiai",
    text: "Šakšuka buvo tobula, o kava atėjo dar tada, kai pirmą kąsnį tik skanavau. Sėdėjome prie lango ir nesinorėjo išeiti.",
    tilt: "-rotate-2",
  },
  {
    name: "Mantas V.",
    when: "Dienos pietūs",
    text: "Atėjau pietų per pertrauką ir gavau tikrą namų skonį. Sriuba karšta, porcijos sočios, aptarnavimas šiltas.",
    tilt: "rotate-1",
  },
  {
    name: "Austėja P.",
    when: "Rytas su drauge",
    text: "Pyragas buvo šviežias, limonadas gaivus, o atmosfera labai jauki. Vieta, į kurią norisi grįžti su visais draugais.",
    tilt: "-rotate-1",
  },
  {
    name: "Tomas G.",
    when: "Turistas iš Vilniaus",
    text: "Radome atsitiktinai vaikštant senamiesčiu ir nesigailime. Skanu, ramu ir be jokio pompastiškumo.",
    tilt: "rotate-2",
  },
]

function Stars() {
  return (
    <div className="flex gap-1" aria-label="Penkios žvaigždutės iš penkių">
      {[0, 1, 2, 3, 4].map((n) => (
        <LuStar key={n} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const featured = reviews[current]

  return (
    <section id="reviews" className="relative overflow-hidden bg-primary-text px-8 py-28 lg:px-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-accent/30" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-accent/10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="font-primary text-4xl font-light leading-[1.1] text-bg sm:text-5xl xl:text-6xl">
            Ką apie mus pasakoja svečiai
          </h2>
          <p className="mt-6 max-w-xl font-secondary text-lg leading-relaxed text-bg/75">
            Pasirinkite vardą ir perskaitykite jo istoriją. Jūsų nuomonė mums svarbi, todėl savo žodį galite palikti ir patys.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <LuQuote className="absolute -left-2 -top-10 h-20 w-20 rotate-180 text-accent/50" />
            <div className="relative min-h-[20rem] rounded-[3rem] rounded-bl-[1rem] bg-bg px-8 py-10 sm:px-12 sm:py-14">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <Stars />
                  <p className="mt-6 font-primary text-2xl font-light italic leading-snug text-primary-text sm:text-3xl">
                    {featured.text}
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-primary text-xl text-bg">
                      {featured.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-secondary text-base font-semibold text-primary-text">
                        {featured.name}
                      </p>
                      <p className="font-secondary text-sm italic text-primary-text/60">
                        {featured.when}
                      </p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Svečių atsiliepimai">
              {reviews.map((r, index) => {
                const isActive = index === current
                return (
                  <motion.button
                    key={r.name}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setCurrent(index)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    animate={{ rotate: isActive ? 0 : index % 2 === 0 ? -3 : 3 }}
                    className={
                      "flex items-center gap-2.5 rounded-full border px-5 py-3 font-secondary text-base font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
                      (isActive
                        ? "border-accent bg-accent text-bg"
                        : "border-bg/30 text-bg hover:border-accent")
                    }
                  >
                    <LuMessageCircleHeart className="h-4 w-4" />
                    {r.name}
                  </motion.button>
                )
              })}
            </div>

            <motion.a
              href={reviewsUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] border border-accent bg-primary-text p-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-accent/20 transition-transform duration-500 group-hover:scale-150" />
              <LuPenLine className="relative h-8 w-8 text-accent" />
              <p className="relative mt-5 font-primary text-2xl font-normal leading-snug text-bg">
                Valgėte pas mus? Palikite atsiliepimą
              </p>
              <p className="relative mt-3 font-secondary text-base text-bg/75">
                Atsidarys Google Maps puslapis, kuriame galėsite įvertinti apsilankymą.
              </p>
              <span className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-secondary text-sm font-semibold text-bg">
                <LuStar className="h-4 w-4" />
                Rašyti atsiliepimą
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}