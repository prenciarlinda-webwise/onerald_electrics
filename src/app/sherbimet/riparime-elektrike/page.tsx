import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Riparime Elektrike - Onerald Electrics | Dibër & Tiranë",
  description:
    "Shërbim profesional riparimesh elektrike në Dibër dhe Tiranë. Diagnostikim defektesh, riparim prizash, tabelash elektrike dhe më shumë. Shërbim urgjent 24/7.",
};

export default function RiparimeElektrike() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500 transition-colors">Kryefaqja</Link>
            <span>/</span>
            <Link href="/sherbimet" className="hover:text-orange-500 transition-colors">Shërbimet</Link>
            <span>/</span>
            <span className="text-charcoal font-medium">Riparime Elektrike</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-orange-light" />
        <div className="absolute top-10 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Shërbim Profesional
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal leading-tight">
              Riparime <span className="text-gradient-orange">Elektrike</span> Profesionale
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Ekipi ynë i kualifikuar ofron riparime të shpejta, të sigurta dhe të qëndrueshme për çdo problem elektrik në shtëpi dhe biznes. Shërbim në Dibër dhe Tiranë.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/355696444453?text=Përshëndetje!%20Më%20intereson%20shërbimi%20i%20riparimeve%20elektrike."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all text-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.527 5.86L.06 23.708l5.992-1.57A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.963 0-3.83-.53-5.47-1.498l-.392-.234-4.064 1.065 1.084-3.96-.256-.407A9.787 9.787 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/>
                </svg>
                Kërko Ofertë Falas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">
            Pse të zgjidhni shërbimin tonë të riparimeve elektrike?
          </h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              Problemet elektrike mund të ndodhin në çdo moment — nga një prizë që nuk funksionon deri tek një ndërprerje totale e energjisë. Kur ndodhin, ju keni nevojë për një elektricist të besueshëm që vjen shpejt dhe e zgjidh problemin me profesionalizëm.
            </p>
            <p>
              Onerald Electrics ka qenë partneri i besueshëm i qindra familjeve dhe bizneseve në Dibër dhe Tiranë që nga viti 2020. Ekipi ynë i trajnuar përdor mjetet dhe teknikat më moderne për të diagnostikuar saktësisht çdo problem dhe për të ofruar zgjidhje të qëndrueshme.
            </p>
            <p>
              Ne nuk bëjmë thjesht riparime — ne sigurohemi që sistemi juaj elektrik funksionon në mënyrë optimale dhe të sigurt. Çdo punë shoqërohet me garanci dhe këshilla për mirëmbajtjen e ardhshme.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
            Procesi ynë i <span className="text-gradient-orange">punës</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Kontaktoni", desc: "Na shkruani në WhatsApp ose telefononi. Përshkruani problemin dhe ne caktojmë takimin." },
              { step: "02", title: "Diagnostikimi", desc: "Vizitojmë pronën tuaj dhe bëjmë diagnostikim të plotë të problemit me mjete profesionale." },
              { step: "03", title: "Riparimi", desc: "Kryejmë riparimin duke përdorur materiale cilësore. Ju informojmë në çdo hap." },
              { step: "04", title: "Garancia", desc: "Testojmë gjithçka dhe ju japim garanci për punën e kryer. Këshilla për mirëmbajtjen." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-orange flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
            Çfarë <span className="text-gradient-orange">përfshihet</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Diagnostikim defektesh", desc: "Gjejmë shkakun e saktë të çdo problemi elektrik me mjete moderne diagnostikimi." },
              { title: "Riparim prizash & çelësash", desc: "Zëvendësim dhe riparim i prizave, çelësave dhe komponentëve të tjerë." },
              { title: "Riparim i tabelës elektrike", desc: "Riparim, përmirësim ose zëvendësim i tabelës elektrike dhe siguresave." },
              { title: "Zëvendësim kabllosh", desc: "Zëvendësim i kabllove të dëmtuara ose të vjetruara me materiale cilësore." },
              { title: "Riparim ndriçimi", desc: "Zgjidhje për çdo problem me ndriçimin — nga llamba të thjeshta tek sisteme komplekse." },
              { title: "Shkëputje energjie", desc: "Diagnostikim dhe zgjidhje e problemeve me humbje ose shkëputje të energjisë." },
              { title: "Shërbim urgjent", desc: "Jemi të disponueshëm për urgjenca elektrike kur keni nevojë më shumë." },
              { title: "Kontroll sigurie", desc: "Inspektim i plotë i sistemit elektrik për të garantuar sigurinë." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#F97316" opacity="0.2"/>
                    <path d="M8 12l3 3 5-5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Përfitimet e shërbimit tonë
              </h2>
              <ul className="space-y-4">
                {[
                  "Përgjigje e shpejtë — arrijmë brenda ditës",
                  "Elektricistë të certifikuar me përvojë",
                  "Materiale cilësore me garanci",
                  "Çmime transparente pa surpriza",
                  "Garanci për çdo punë të kryer",
                  "Këshilla profesionale për mirëmbajtjen",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="12" cy="12" r="10" fill="#F97316" opacity="0.1"/>
                      <path d="M8 12l3 3 5-5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-charcoal mb-4">Zonat e shërbimit</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-charcoal">Dibër</p>
                    <p className="text-sm text-gray-500">Peshkopi dhe gjithë rajoni</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-charcoal">Tiranë</p>
                    <p className="text-sm text-gray-500">Të gjitha lagjet e Tiranës</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
            Pyetje të <span className="text-gradient-orange">shpeshta</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Sa kohë zgjat një riparim elektrik?",
                a: "Shumica e riparimeve të thjeshta (prizat, çelësat, llambat) zgjidhen brenda 1-2 orëve. Punët më komplekse si ndryshimi i tabelës elektrike mund të zgjasin 4-8 orë.",
              },
              {
                q: "A ofroni shërbim urgjent?",
                a: "Po, ne jemi të disponueshëm për urgjenca elektrike. Na kontaktoni në WhatsApp dhe do të përpiqemi të arrijmë sa më shpejt të jetë e mundur.",
              },
              {
                q: "Sa kushton një riparim elektrik?",
                a: "Çmimi varet nga natyra e problemit. Ne ofrojmë diagnostikim dhe ofertë para se të fillojmë punën, kështu që nuk ka surpriza me çmimet.",
              },
              {
                q: "A jepni garanci për punën?",
                a: "Po, çdo punë e kryer nga ekipi ynë shoqërohet me garanci. Ne përdorim materiale cilësore dhe sigurojmë që puna është e qëndrueshme.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-charcoal mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
            Artikuj të <span className="text-gradient-orange">lidhur</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { slug: "shenjat-e-problemeve-elektrike-ne-shtepi", title: "Shenjat e problemeve elektrike në shtëpi", excerpt: "Mos i injoroni këto shenja paralajmëruese që mund të tregojnë probleme serioze." },
              { slug: "kur-duhet-te-ndryshoni-instalimet-elektrike", title: "Kur duhet të ndryshoni instalimet elektrike?", excerpt: "Mësoni kur është koha për të ndryshuar instalimet elektrike të shtëpisë." },
              { slug: "mbrojtja-nga-zjarri-shkaqet-elektrike", title: "Mbrojtja nga zjarri - shkaqet elektrike", excerpt: "Mësoni si problemet elektrike shkaktojnë zjarre dhe si të mbroheni." },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300 block"
              >
                <h3 className="font-bold text-charcoal mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                <span className="text-orange-500 text-sm font-semibold">Lexo më shumë →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-orange rounded-3xl p-10 sm:p-16 text-center orange-glow-strong">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Keni problem elektrik?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Na kontaktoni tani dhe merrni zgjidhje profesionale brenda ditës. Ofertë pa detyrime.
            </p>
            <a
              href="https://wa.me/355696444453?text=Përshëndetje!%20Kam%20nevojë%20për%20riparim%20elektrik."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-orange-500 font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all text-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.527 5.86L.06 23.708l5.992-1.57A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.963 0-3.83-.53-5.47-1.498l-.392-.234-4.064 1.065 1.084-3.96-.256-.407A9.787 9.787 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/>
              </svg>
              Na Shkruani në WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
