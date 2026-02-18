import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rreth Nesh - Onerald Electrics",
  description:
    "Mësoni më shumë rreth Onerald Electrics - kompania juaj e besuar për shërbime elektrike në Dibër dhe Tiranë.",
};

export default function RrethNesh() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-orange-light" />
        <div className="absolute top-10 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal">
              Rreth <span className="text-gradient-orange">Nesh</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Njihni ekipin që qëndron pas Onerald Electrics dhe misionin tonë
              për shërbime elektrike të shkëlqyera.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Që nga viti 2020
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Historia <span className="text-gradient-orange">Jonë</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Onerald Electrics u themelua në vitin 2020 me një vizion të qartë:
                  të ofrojë shërbime elektrike profesionale dhe të besueshme për komunitetin
                  e Dibrës dhe Tiranës.
                </p>
                <p>
                  Filluam si një biznes i vogël me pasion për punën cilësore dhe me kalimin
                  e viteve jemi rritur duke fituar besimin e qindra klientëve. Sot,
                  jemi një nga emrat më të njohur të shërbimeve elektrike në rajon.
                </p>
                <p>
                  Çdo projekt që ndërmarrim trajtohet me kujdesin më të madh, duke
                  përdorur materiale cilësore dhe duke respektuar standardet e sigurisë.
                </p>
              </div>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-2xl gradient-orange flex items-center justify-center mx-auto mb-6">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="white"/>
                    </svg>
                  </div>
                  <p className="text-4xl font-extrabold text-gradient-orange">5+</p>
                  <p className="text-gray-600 text-lg mt-2">Vite Eksperiencë</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Misioni & <span className="text-gradient-orange">Vlerat</span> Tona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Siguri</h3>
              <p className="text-gray-600 leading-relaxed">
                Siguria është prioriteti ynë numër një. Çdo punë kryhet sipas standardeve
                më të larta të sigurisë elektrike.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Cilësi</h3>
              <p className="text-gray-600 leading-relaxed">
                Përdorim vetëm materiale cilësore dhe teknika moderne për të garantuar
                jetëgjatësinë e çdo instalimi.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Besueshmëri</h3>
              <p className="text-gray-600 leading-relaxed">
                Ndërtojmë marrëdhënie afatgjata me klientët tanë përmes punës së ndershme
                dhe transparente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Detail */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Ku <span className="text-gradient-orange">Operojmë</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Ofrojmë shërbime të plota në dy rajone kryesore të Shqipërisë
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Dibër</h3>
              <p className="text-gray-600 leading-relaxed">
                Zona jonë kryesore e operimit. Mbulojmë të gjithë rajonin e Dibrës,
                duke përfshirë Peshkopinë dhe zonat përreth. Jemi gjithmonë pranë për
                çdo nevojë elektrike.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Tiranë</h3>
              <p className="text-gray-600 leading-relaxed">
                Shërbime elektrike cilësore edhe në kryeqytet. Mbulojmë Tiranën
                dhe zonat periferike, duke ofruar të njëjtin nivel profesionalizmi
                si në Dibër.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
