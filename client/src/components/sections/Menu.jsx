import { motion } from "framer-motion"
import menu from "../../data/menu.json"

export default function Menu() {
  const categories = [
    { id: "soups", label: "Sriubos" },
    { id: "dailySpecials", label: "Dienos Pasiūlymai" },
    { id: "otherDishes", label: "Kiti Patiekalai" },
    { id: "dessertsAndDrinks", label: "Desertai ir Gėrimai" }
  ]

  const formatPrice = (item) => {
    if (item.price !== undefined) {
      return `${item.price.toFixed(2)} €`
    }
    if (item.prices) {
      return Object.entries(item.prices)
        .map(([key, val]) => `${key}: ${val.toFixed(2)} €`)
        .join(" | ")
    }
    return ""
  }

  return (
    <section id="menu" className="relative py-24 bg-pine-teal/5 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto font-primary"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-camel">Gardi Pasiūla</span>
          <h2 className="font-bold font-secondary text-4xl lg:text-6xl text-pine-teal uppercase tracking-wide">
            Mūsų Valgiaraštis
          </h2>
          <div className="w-20 h-1 bg-camel mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-20 font-primary">
          {categories.map((cat, catIdx) => {
            const categoryData = menu[cat.id]
            if (!categoryData) return null

            const isEven = catIdx % 2 === 0

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-pure-white rounded-[40px] overflow-hidden shadow-xl flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                <div className="relative lg:w-5/12 h-72 lg:h-auto overflow-hidden">
                  <img
                    src={categoryData.image}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-8 lg:p-12">
                    <h3 className="font-bold font-secondary text-3xl lg:text-4xl text-pure-white uppercase tracking-wide">
                      {cat.label}
                    </h3>
                  </div>
                </div>

                <div className="p-8 lg:p-12 lg:w-7/12 flex-1 flex flex-col justify-center bg-pure-white">
                  <div className="divide-y divide-pine-teal/10">
                    {categoryData.items.map((item, index) => (
                      <div
                        key={index}
                        className="py-5 first:pt-0 last:pb-0"
                      >
                        <div className="flex justify-between items-baseline gap-4 mb-1">
                          <h4 className="font-secondary text-lg text-pine-teal font-bold uppercase tracking-wide">
                            {item.name}
                          </h4>
                          <span className="font-bold text-lg text-camel whitespace-nowrap">
                            {formatPrice(item)}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-pine-teal/70 text-sm font-light leading-relaxed max-w-xl">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}