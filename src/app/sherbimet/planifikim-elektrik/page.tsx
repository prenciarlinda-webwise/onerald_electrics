import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planifikim Elektrik - Onerald Electrics | Dibër & Tiranë",
  description:
    "Planifikim elektrik profesional për ndërtesa të reja dhe rinovime në Dibër dhe Tiranë. Skema, projekte dhe konsulencë teknike.",
};

export default function PlanifikimElektrik() {
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
            <span className="text-charcoal font-medium">Planifikim Elektrik</span>
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
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
              </svg>
              Projektim Profesional
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal leading-tight">
              Planifikim <span className="text-gradient-orange">Elektrik</span> Profesional
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Krijojmë plane elektrike të detajuara për ndërtesa të reja, rinovime dhe zgjerime. Çdo projekt planifikohet sipas standardeve më të larta të sigurisë dhe efikasitetit.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/355696444453?text=Përshëndetje!%20Më%20intereson%20shërbimi%20i%20planifikimit%20elektrik."
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
            Planifikimi elektrik — themeli i një sistemi të sigurt
          </h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              Një plan elektrik i mirë-hartuar është baza e çdo ndërtese të sigurt dhe funksionale. Pa planifikim të duhur, sistemi elektrik mund të ketë mangësi që shkaktojnë probleme në të ardhmen — nga mbingarkesa deri tek rreziqet e sigurisë.
            </p>
            <p>
              Ekipi ynë i inxhinierëve dhe elektricistëve harton plane elektrike të detajuara që respektojnë standardet kombëtare dhe evropiane. Ne marrim parasysh jo vetëm nevojat aktuale, por edhe ato të ardhshme, duke siguruar që sistemi juaj elektrik do të jetë i mjaftueshëm për vite me radhë.
            </p>
            <p>
              Nga shtëpitë e vogla familjare deri tek ndërtesat komerciale të mëdha — ne kemi përvojën dhe ekspertizën për të hartuar planin e duhur për projektin tuaj.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
            Procesi i <span className="text-gradient-orange">planifikimit</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultimi", desc: "Diskutojmë nevojat tuaja, projektin arkitekturor dhe kërkesat specifike." },
              { step: "02", title: "Projektimi", desc: "Hartojmë skemën elektrike të detajuar me të gjitha llogaritjet e nevojshme." },
              { step: "03", title: "Aprovimi", desc: "Prezantojmë planin, bëjmë ndryshimet e kërkuara dhe marrim miratimin." },
              { step: "04", title: "Mbikëqyrja", desc: "Mbikëqyrim instalimin për të garantuar respektimin e plotë të planit." },
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
              { title: "Skema elektrike", desc: "Hartim i detajuar i skemës elektrike sipas projektit arkitekturor." },
              { title: "Llogaritje ngarkesash", desc: "Përllogaritje e saktë e ngarkesave elektrike për dimensionimin e duhur." },
              { title: "Planifikim tabele", desc: "Projektim i tabelës elektrike me mbrojtësa automatikë dhe diferencial." },
              { title: "Ndriçim interior", desc: "Projekt i detajuar për ndriçimin e brendshëm sipas nevojave." },
              { title: "Sisteme sigurie", desc: "Planifikim i sistemeve të sigurisë, alarmeve dhe kamerave." },
              { title: "Konsulencë teknike", desc: "Këshilla profesionale për zgjedhjet më të mira teknike." },
              { title: "Mbikëqyrje instalimi", desc: "Prezencë profesionale gjatë instalimit për cilësi maksimale." },
              { title: "Dokumentacion teknik", desc: "Dokumentacion i plotë teknik i të gjithë sistemit elektrik." },
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
                Pse planifikimi profesional bën ndryshimin
              </h2>
              <ul className="space-y-4">
                {[
                  "Siguri maksimale — çdo detaj planifikohet me kujdes",
                  "Efikasitet energjitik — sistem optimal që kursen energji",
                  "Pajtueshmëri me standardet — respektim i plotë i rregulloreve",
                  "Kursim afatgjatë — parandalim i problemeve të ardhshme",
                  "Fleksibilitet — sistem i gatshëm për zgjerime",
                  "Vlerë e shtuar — rrit vlerën e pronës suaj",
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
              <h3 className="text-xl font-bold text-charcoal mb-4">Për kë është ky shërbim?</h3>
              <div className="space-y-4">
                {[
                  { title: "Ndërtues shtëpish", desc: "Planifikim i plotë për shtëpi të reja familjare" },
                  { title: "Biznese", desc: "Projekte për ambiente komerciale dhe zyra" },
                  { title: "Rinovues", desc: "Riplanifikim i sistemit për rinovime" },
                  { title: "Arkitektë", desc: "Bashkëpunim me studio arkitekture" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
                q: "Sa kohë zgjat planifikimi i një projekti elektrik?",
                a: "Për një shtëpi familjare, planifikimi zgjat zakonisht 1-2 javë. Projektet më të mëdha mund të zgjasin 2-4 javë, varësisht nga kompleksiteti.",
              },
              {
                q: "A mund të planifikoni vetëm një pjesë të sistemit?",
                a: "Po, ne mund të planifikojmë vetëm ndriçimin, vetëm tabelën elektrike ose çdo pjesë specifike që ju nevojitet.",
              },
              {
                q: "A përfshihet mbikëqyrja e instalimit?",
                a: "Po, ne ofrojmë mbikëqyrje profesionale gjatë fazës së instalimit për të garantuar që plani respektohet plotësisht.",
              },
              {
                q: "Çfarë dokumentacioni jepni?",
                a: "Japim dokumentacion të plotë teknik: skema elektrike, llogaritjet, specifikimet e materialeve dhe udhëzimet e instalimit.",
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
              { slug: "planifikimi-elektrik-per-ndertesa-te-reja", title: "Planifikimi elektrik për ndërtesa të reja", excerpt: "Udhëzues i plotë për planifikimin e sistemit elektrik në ndërtesa të reja." },
              { slug: "standardet-elektrike-ne-shqiperi", title: "Standardet elektrike në Shqipëri", excerpt: "Çfarë duhet të dini rreth standardeve dhe rregulloreve elektrike." },
              { slug: "avantazhet-e-ndricimit-led", title: "Avantazhet e ndriçimit LED", excerpt: "Pse ndriçimi LED është zgjedhja më e mirë për projektin tuaj." },
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
              Keni projekt të ri?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Na kontaktoni për planifikim elektrik profesional. Ofertë e detajuar pa detyrime.
            </p>
            <a
              href="https://wa.me/355696444453?text=Përshëndetje!%20Kam%20nevojë%20për%20planifikim%20elektrik."
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
