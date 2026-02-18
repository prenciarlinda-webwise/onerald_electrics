import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shërbimet - Onerald Electrics",
  description:
    "Riparime elektrike dhe planifikim elektrik profesional në Dibër dhe Tiranë.",
};

export default function Sherbimet() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-orange-light" />
        <div className="absolute top-10 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal">
              Shërbimet <span className="text-gradient-orange">Tona</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Ofrojmë zgjidhje të plota elektrike për çdo nevojë. Nga riparime urgjente
              deri tek planifikimi i projekteve të reja.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Riparime Elektrike */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-orange-200 hover:orange-glow transition-all duration-300">
            <div className="p-8 sm:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                    Riparime Elektrike
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Ekipi ynë i kualifikuar ofron riparime të shpejta dhe të sigurta për çdo lloj
                    problemi elektrik. Punojmë me efikasitet të lartë për të minimizuar ndërprerjet
                    në jetën tuaj të përditshme.
                  </p>

                  <h3 className="text-lg font-semibold text-charcoal mb-4">Çfarë përfshihet:</h3>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      "Diagnostikim i defekteve elektrike",
                      "Riparim i prizave dhe çelësave",
                      "Riparim i tabelës elektrike",
                      "Zëvendësim i kabllove të dëmtuara",
                      "Riparim i ndriçimit",
                      "Zgjidhje për shkëputje të energjisë",
                      "Riparime urgjente 24/7",
                      "Kontroll i sigurisë elektrike",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="12" cy="12" r="10" fill="#F97316" opacity="0.1"/>
                          <path d="M8 12l3 3 5-5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/355123456789?text=Përshëndetje!%20Më%20intereson%20shërbimi%20i%20riparimeve%20elektrike."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 gradient-orange text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.527 5.86L.06 23.708l5.992-1.57A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.963 0-3.83-.53-5.47-1.498l-.392-.234-4.064 1.065 1.084-3.96-.256-.407A9.787 9.787 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/>
                    </svg>
                    Kërko Ofertë
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Planifikim Elektrik */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-orange-200 hover:orange-glow transition-all duration-300">
            <div className="p-8 sm:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                    Planifikim Elektrik
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Krijojmë plane elektrike profesionale për ndërtime të reja, rinovime dhe
                    zgjerime. Çdo projekt planifikohet me kujdes duke respektuar standardet
                    e sigurisë dhe efikasitetit.
                  </p>

                  <h3 className="text-lg font-semibold text-charcoal mb-4">Çfarë përfshihet:</h3>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      "Hartim i skemës elektrike",
                      "Përllogaritje e ngarkesave elektrike",
                      "Planifikim i tabelës elektrike",
                      "Projekt për ndriçim interior",
                      "Planifikim për sisteme sigurie",
                      "Konsulencë teknike",
                      "Mbikëqyrje e instalimeve",
                      "Dokumentacion teknik i plotë",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="12" cy="12" r="10" fill="#F97316" opacity="0.1"/>
                          <path d="M8 12l3 3 5-5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/355123456789?text=Përshëndetje!%20Më%20intereson%20shërbimi%20i%20planifikimit%20elektrik."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 gradient-orange text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.527 5.86L.06 23.708l5.992-1.57A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.963 0-3.83-.53-5.47-1.498l-.392-.234-4.064 1.065 1.084-3.96-.256-.407A9.787 9.787 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/>
                    </svg>
                    Kërko Ofertë
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Nuk jeni i sigurt çfarë ju nevojitet?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Na kontaktoni dhe ne do t&apos;ju ndihmojmë të gjeni zgjidhjen e duhur për ju.
          </p>
          <a
            href="https://wa.me/355123456789?text=Përshëndetje!%20Kam%20nevojë%20për%20konsulencë%20elektrike."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 gradient-orange text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all text-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.527 5.86L.06 23.708l5.992-1.57A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.963 0-3.83-.53-5.47-1.498l-.392-.234-4.064 1.065 1.084-3.96-.256-.407A9.787 9.787 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/>
            </svg>
            Konsulencë Falas
          </a>
        </div>
      </section>
    </>
  );
}
