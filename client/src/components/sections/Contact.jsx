import { motion } from "framer-motion"
import { LuMapPin, LuPhone, LuMail, LuClock, LuExternalLink } from "react-icons/lu"

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#185045]/5 px-8 lg:px-16">
            <div className="max-w-7xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4 max-w-2xl mx-auto"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B39360]">Laukiame Jūsų</span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#185045]">
                        Kontaktai ir Vieta
                    </h2>
                    <div className="w-16 h-0.5 bg-[#B39360] mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#185045]/10 shadow-sm space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#185045] text-[#FFFFFF] rounded-2xl shrink-0">
                                    <LuMapPin className="w-6 h-6 text-[#B39360]" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-[#185045] mb-1">Adresas</h3>
                                    <p className="text-[#185045]/70 text-sm font-light">A. Jakšto g. 6, Kaunas, Lietuva</p>
                                    <p className="text-xs text-[#B39360] mt-1 font-medium">Kauno Senamiestis</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#185045] text-[#FFFFFF] rounded-2xl shrink-0">
                                    <LuPhone className="w-6 h-6 text-[#B39360]" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-[#185045] mb-1">Telefonas</h3>
                                    <a href="tel:+37067552883" className="text-[#185045]/70 text-sm font-light hover:text-[#185045] transition-colors">
                                        +370 675 52883
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#185045] text-[#FFFFFF] rounded-2xl shrink-0">
                                    <LuMail className="w-6 h-6 text-[#B39360]" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-[#185045] mb-1">El. Paštas</h3>
                                    <a href="mailto:ievos@maistotarnyba.lt" className="text-[#185045]/70 text-sm font-light hover:text-[#185045] transition-colors break-all">
                                        ievos@maistotarnyba.lt
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#185045] text-[#FFFFFF] rounded-2xl shrink-0">
                                    <LuClock className="w-6 h-6 text-[#B39360]" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-[#185045] mb-1">Darbo Laikas</h3>
                                    <p className="text-[#185045]/70 text-sm font-light">I-V: 08:00 - 18:00</p>
                                    <p className="text-[#185045]/70 text-sm font-light">VI: 09:00 - 16:00</p>
                                    <p className="text-[#185045]/70 text-sm font-light">VII: Uždaryta</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/place/Bistro+%22Gard%C5%BEios+istorijos%22+-+Senamiestis/@54.8982393,23.8842702,17z/data=!4m6!3m5!1s0x46e723ff0e3fef99:0xfa32da8a9b5282e7!8m2!3d54.8982362!4d23.8868451!16s%2Fg%2F11h00d4p8v?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-[#185045] text-[#FFFFFF] rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-[#B39360] hover:text-[#185045] transition-all duration-300 shadow-md"
                        >
                            <span>Atverti Google Žemėlapiuose</span>
                            <LuExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 h-[500px] lg:h-auto rounded-3xl overflow-hidden border border-[#185045]/10 shadow-sm relative bg-[#FFFFFF]"
                    >
                        <iframe
                            title="Bistro Gardžios Istorijos Žemėlapis"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.276483259888!2d23.8842702!3d54.8982393!2m3!1f0!0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e723ff0e3fef99%3A0xfa32da8a9b5282e7!2sBistro%20%22Gard%C5%BEios%20istorijos%22%20-%20Senamiestis!5e0!3m2!1slt!2slt!4v1700000000000!5m2!1slt!2slt"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}