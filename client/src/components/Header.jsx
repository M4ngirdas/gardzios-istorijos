import { LuHouse, LuInfo, LuBookOpen, LuStar, LuPhone } from "react-icons/lu"
import facebook from "../images/facebook.png"
import google_maps from "../images/google_maps.png"

export default function Header() {
  const navItems = [
    { name: "Titulinis", href: "#hero", icon: LuHouse },
    { name: "Apie mus", href: "#about", icon: LuInfo },
    { name: "Valgiaraštis", href: "#menu", icon: LuBookOpen },
    { name: "Atsiliepimai", href: "#reviews", icon: LuStar },
    { name: "Kontaktai", href: "#contact", icon: LuPhone }
  ]

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 bg-pine-teal text-pure-white flex-col justify-between p-6 z-50 border-r border-camel/20 shadow-xl">
      <div className="space-y-6 pt-2">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-pure-white/80 hover:text-pure-white hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3.5 w-full">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-camel group-hover:text-pine-teal transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="tracking-wide font-primary">{item.name}</span>
                </div>
              </a>
            )
          })}
        </nav>
      </div>

      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-wider text-pure-white/50 font-semibold text-center font-primary">
          Nuorodos
        </p>

        <div className="pt-3 border-t border-white/10 flex items-center justify-center space-x-4">
          <a
            href="https://www.google.com/maps/place/Bistro+%22Gard%C5%BEios+istorijos%22+-+Senamiestis/@54.8982362,23.8868451,17z/data=!4m17!1m10!3m9!1s0x46e723ff0e3fef99:0xfa32da8a9b5282e7!2sBistro+%22Gard%C5%BEios+istorijos%22+-+Senamiestis!8m2!3d54.8982362!4d23.8868451!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11h00d4p8v!3m5!1s0x46e723ff0e3fef99:0xfa32da8a9b5282e7!8m2!3d54.8982362!4d23.8868451!16s%2Fg%2F11h00d4p8v?hl=lt&entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 hover:opacity-100 opacity-70 transition-opacity"
          >
            <img
              src={google_maps}
              alt="Google Maps"
              className="h-5 object-contain"
            />
          </a>
          <span className="text-white/20">|</span>
          <a
            href="https://www.facebook.com/gardzios.istorijos"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 hover:opacity-100 opacity-70 transition-opacity"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="h-5 object-contain"
            />
          </a>
        </div>
      </div>
    </aside>
  )
}