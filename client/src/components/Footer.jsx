import { LuUtensils, LuHeart, LuMapPin, LuPhone, LuMail, LuClock } from "react-icons/lu"
import { FaFacebookF } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-[#185045] text-[#FFFFFF] pt-16 pb-12 px-8 lg:px-16 border-t border-[#B39360]/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-[#B39360] rounded-full text-[#185045]">
                            <LuUtensils className="w-5 h-5" />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-[#B39360] font-semibold">Bistro</span>
                    </div>
                    <h2 className="font-serif text-2xl font-normal text-white">
                        Gardžios Istorijos
                    </h2>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                        Pusryčiai, pietūs ir kitos gardžios istorijos Kauno senamiestyje. Užsukite jaukiai akimirkai.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-serif text-lg text-[#B39360]">Navigacija</h3>
                    <ul className="space-y-2 text-sm text-white/70 font-light">
                        <li>
                            <a href="#about" className="hover:text-white transition-colors">Apie mus</a>
                        </li>
                        <li>
                            <a href="#menu" className="hover:text-white transition-colors">Meniu</a>
                        </li>
                        <li>
                            <a href="#reviews" className="hover:text-white transition-colors">Atsiliepimai</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-white transition-colors">Kontaktai</a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="font-serif text-lg text-[#B39360]">Kontaktai</h3>
                    <ul className="space-y-3 text-sm text-white/70 font-light">
                        <li className="flex items-center space-x-2">
                            <LuMapPin className="w-4 h-4 text-[#B39360] shrink-0" />
                            <span>A. Jakšto g. 6, Kaunas</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <LuPhone className="w-4 h-4 text-[#B39360] shrink-0" />
                            <a href="tel:+37067552883" className="hover:text-white transition-colors">
                                +370 675 52883
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <LuMail className="w-4 h-4 text-[#B39360] shrink-0" />
                            <a href="mailto:ievos@maistotarnyba.lt" className="hover:text-white transition-colors truncate">
                                ievos@maistotarnyba.lt
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="font-serif text-lg text-[#B39360]">Darbo Laikas</h3>
                    <div className="space-y-2 text-sm text-white/70 font-light">
                        <div className="flex items-center space-x-2">
                            <LuClock className="w-4 h-4 text-[#B39360] shrink-0" />
                            <span>I-V: 08:00 - 18:00</span>
                        </div>
                        <p className="pl-6">VI: 09:00 - 16:00</p>
                        <p className="pl-6">VII: Uždaryta</p>
                    </div>
                    <div className="pt-2">
                        <a
                            href="https://www.facebook.com/gardzios.istorijos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-[#B39360] hover:text-[#185045] transition-all duration-300 text-white"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 space-y-4 sm:space-y-0">
                <p>© {new Date().getFullYear()} Bistro Gardžios Istorijos. Visos teisės saugomos.</p>
                <p className="flex items-center gap-1">
                    <span>Sukurta su</span>
                    <LuHeart className="w-3.5 h-3.5 text-[#B39360]" />
                    <span>Kaune</span>
                </p>
            </div>
        </footer>
    )
}
import { FaFacebookF } from "react-icons/fa"
import { LuMapPin, LuPhone, LuMail } from "react-icons/lu"

export default function Footer() {
  return (
    <footer className="bg-[#185045] text-white py-16 px-16 border-t border-[#B39360]/25">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <h3 className="font-secondary text-3xl tracking-wide">
            Gardžios Istorijos
          </h3>
          <p className="font-primary text-white/70 text-sm max-w-xs leading-relaxed">
            Pusryčiai, pietūs ir kitos gardžios istorijos Kauno senamiestyje.
          </p>
        </div>

        <div className="flex flex-col gap-3 font-primary text-sm text-white/80">
          <div className="flex items-center gap-3">
            <LuMapPin className="text-[#B39360]" />
            <span>A Jakšto g. 6, Kaunas</span>
          </div>
          <div className="flex items-center gap-3">
            <LuPhone className="text-[#B39360]" />
            <a href="tel:+37067552883" className="hover:text-[#B39360] transition-colors">+370 675 52883</a>
          </div>
          <div className="flex items-center gap-3">
            <LuMail className="text-[#B39360]" />
            <a href="mailto:ievos@maistotarnyba.lt" className="hover:text-[#B39360] transition-colors">ievos@maistotarnyba.lt</a>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-4">
          <span className="font-primary text-xs text-[#B39360] tracking-widest uppercase font-semibold">
            Sekite mus
          </span>
          <a
            href="https://www.facebook.com/gardzios.istorijos"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 border border-[#B39360]/30 rounded-full flex items-center justify-center text-white hover:bg-[#B39360] transition-colors"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center font-primary text-xs text-white/50 gap-4">
        <span>Bistro Gardžios Istorijos - Senamiestis. Visos teisės saugomos.</span>
        <span>A Jakšto g. 6, Kaunas</span>
      </div>
    </footer>
  )
}