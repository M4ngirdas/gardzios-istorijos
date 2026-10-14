import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LuSunrise, LuSoup, LuCoffee, LuCakeSlice } from "react-icons/lu"

const categories = [
  {
    id: "pusryciai",
    label: "Pusryčiai",
    icon: LuSunrise,
    note: "Patiekiami nuo atidarymo iki vidurdienio",
    items: [
      {
        name: "Šakšuka su fetos sūriu",
        desc: "Kiaušiniai pomidorų padaže su paprika, žolelėmis ir traškia duona",
        price: "8,90 €",
        badge: "Populiaru",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Avokado skrebutis",
        desc: "Raugintos duonos riekė, avokadas, kiaušinis be lukšto, sezamai",
        price: "9,50 €",
        badge: "Naujiena",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Lietiniai su uogomis",
        desc: "Purūs lietiniai, sezoninės uogos, grietinėlė ir klevų sirupas",
        price: "7,80 €",
        badge: "",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Avižų košė su obuoliais",
        desc: "Šilta košė, karamelizuoti obuoliai, cinamonas ir riešutai",
        price: "5,90 €",
        badge: "Veganiška",
        image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "pietus",
    label: "Dienos Pietūs",
    icon: LuSoup,
    note: "Kiekvieną dieną kitoks pasirinkimas, kol užtenka",
    items: [
      {
        name: "Dienos sriuba",
        desc: "Šiandien virta sriuba iš sezoninių daržovių, patiekiama su duona",
        price: "4,50 €",
        badge: "Šiandien",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Karštas dienos patiekalas",
        desc: "Mėsa ar žuvis su garnyru ir padažu, kuris keičiasi kasdien",
        price: "8,90 €",
        badge: "Populiaru",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Šilta daržovių lėkštė",
        desc: "Keptos daržovės, kvinoja, žolelių aliejus ir skrudintos sėklos",
        price: "7,90 €",
        badge: "Veganiška",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Pietų komplektas",
        desc: "Sriuba, karštas patiekalas ir gėrimas už draugišką kainą",
        price: "11,50 €",
        badge: "Naudinga",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "gerimai",
    label: "Gėrimai",
    icon: LuCoffee,
    note: "Kava skrudinta nedideliais kiekiais",
    items: [
      {
        name: "Kapučinas",
        desc: "Dvigubas espresso, šilto pieno puta ir lengvas kakavos dulkių lietus",
        price: "3,20 €",
        badge: "Populiaru",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Plokščias baltasis",
        desc: "Aksominė kava su šilku pieno tekstūra",
        price: "3,60 €",
        badge: "Be laktozės",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Naminė limonadas",
        desc: "Citrinos, mėtos ir šiek tiek medaus, pilama su ledu",
        price: "3,90 €",
        badge: "Naujiena",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Žolelių arbata",
        desc: "Skirtingos mišinių rūšys, užpilamos svečio akivaizdoje",
        price: "3,00 €",
        badge: "",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "desertai",
    label: "Desertai",
    icon: LuCakeSlice,
    note: "Kepami čia pat, kiekvieną rytą",
    items: [
      {
        name: "Šokoladinis fondantas",
        desc: "Šiltas šokoladinis pyragas su skystu viduriu ir uogų padažu",
        price: "5,80 €",
        badge: "Populiaru",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Obuolių pyragas",
        desc: "Trapi tešla, kvapnūs obuoliai ir vanilinis padažas",
        price: "4,60 €",
        badge: "",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Naminiai spurgos",
        desc: "Šiltos spurgos su cukraus pudra ir uogiene",
        price: "3,90 €",
        badge: "Naujiena",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Šviežių uogų desertas",
        desc: "Lengvas jogurtinis kremas, sezoninės uogos ir traškūs trupiniai",
        price: "5,20 €",
        badge: "Be glitimo",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
]

function Badge({ text, tilt }) {
  if (!text) return null
  return (
    <span
      className={
        "inline-block rounded-full bg-accent px-3 py-0.5 font-secondary text-xs font-semibold text-bg " +
        tilt
      }
    >
      {text}
    </span>
  )
}

export default function Menu() {
  const [activeId, setActiveId] = useState("pusryciai")
  const [hovered, setHovered] = useState(0)

  const category = categories.find((c) => c.id === activeId)
  const featured = category.items[hovered] || category.items[0]
  const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"]

  function chooseCategory(id) {
    setActiveId(id)
    setHovered(0)
  }

  return (
    <section id="menu" className="relative overflow-hidden bg-bg px-8 py-28 lg:px-16">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-accent/10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="font-primary text-4xl font-light leading-[1.1] text-primary-text sm:text-5xl xl:text-6xl">
            Ką šiandien paragausime?
          </h2>
          <p className="mt-6 max-w-xl font-secondary text-lg leading-relaxed text-primary-text/80">
            Pasirinkite skyrių ir užveskite pelę ant patiekalo, kad pamatytumėte, kaip jis atrodo lėkštėje.
          </p>
        </motion.div>

        <div
          role="tablist"
          aria-label="Meniu skyriai"
          className="mt-12 flex flex-wrap gap-3"
        >
          {categories.map((c) => {
            const Icon = c.icon
            const isActive = c.id === activeId
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => chooseCategory(c.id)}
                className={
                  "relative flex items-center gap-2.5 rounded-full border px-6 py-3 font-secondary text-base font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
                  (isActive
                    ? "border-primary-text text-bg"
                    : "border-accent/60 text-primary-text hover:border-accent hover:bg-accent/10")
                }
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-tab"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-primary-text"
                  />
                )}
                <Icon className="relative h-5 w-5" />
                <span className="relative">{c.label}</span>
              </button>
            )
          })}
        </div>

        <p className="mt-5 font-secondary text-base italic text-accent">{category.note}</p>

        <div className="mt-12 grid items-start gap-14 lg:grid-cols-12">
          <div className="relative mx-auto w-full max-w-md lg:sticky lg:top-12 lg:col-span-5 lg:max-w-none">
            <div className="relative h-[28rem] overflow-hidden rounded-t-full border border-accent p-2 sm:h-[34rem]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={featured.image}
                  src={featured.image}
                  alt={featured.name}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full w-full rounded-t-full object-cover"
                />
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={featured.name}
                initial={{ opacity: 0, rotate: -14, scale: 0.7 }}
                animate={{ opacity: 1, rotate: -8, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="absolute -bottom-6 -right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-primary-text text-center text-bg shadow-xl sm:-right-6"
              >
                <span className="font-primary text-2xl font-medium">{featured.price}</span>
                <span className="font-secondary text-xs italic text-bg/80">porcija</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={category.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col gap-3 lg:col-span-7"
            >
              {category.items.map((item, index) => {
                const isHovered = index === hovered
                return (
                  <li key={item.name}>
                    <button
                      onMouseEnter={() => setHovered(index)}
                      onFocus={() => setHovered(index)}
                      onClick={() => setHovered(index)}
                      className={
                        "group w-full rounded-[2rem] border px-7 py-6 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
                        (isHovered
                          ? "translate-x-2 border-accent bg-accent/10"
                          : "border-transparent hover:border-accent/40")
                      }
                    >
                      <div className="flex items-end gap-3">
                        <h3 className="font-primary text-2xl font-normal text-primary-text">
                          {item.name}
                        </h3>
                        <span className="mb-2 min-w-6 flex-1 border-b border-dotted border-accent" />
                        <span className="font-primary text-xl font-medium text-primary-text">
                          {item.price}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <p className="max-w-md font-secondary text-base leading-relaxed text-primary-text/75">
                          {item.desc}
                        </p>
                        <Badge text={item.badge} tilt={tilts[index % tilts.length]} />
                      </div>
                    </button>
                  </li>
                )
              })}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}