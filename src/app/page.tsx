import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-orange-light" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
              </svg>
              Që nga viti 2020
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight">
              Shërbime Elektrike{" "}
              <span className="text-gradient-orange">Profesionale</span>{" "}
              për Shtëpinë & Biznesin Tuaj
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Ofrojmë zgjidhje të besueshme elektrike në Dibër dhe Tiranë.
              Nga riparime deri tek planifikimi i plotë elektrik — ne jemi këtu për ju.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/355696444453?text=Përshëndetje!%20Dua%20të%20marr%20një%20ofertë."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-orange text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all text-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.527 5.86L.06 23.708l5.992-1.57A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.963 0-3.83-.53-5.47-1.498l-.392-.234-4.064 1.065 1.084-3.96-.256-.407A9.787 9.787 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/>
                </svg>
                Merr Ofertë
              </a>
              <Link
                href="/sherbimet"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-all text-lg"
              >
                Shiko Shërbimet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Shërbimet <span className="text-gradient-orange">Tona</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Ofrojmë shërbime të specializuara elektrike me cilësi të lartë
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Riparime Elektrike */}
            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Riparime Elektrike</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Riparime të shpejta dhe profesionale për çdo problem elektrik në shtëpi apo biznes.
                Diagnostikim i saktë dhe zgjidhje të qëndrueshme.
              </p>
              <Link
                href="/sherbimet/riparime-elektrike"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all"
              >
                Mëso Më Shumë
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Planifikim Elektrik */}
            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Planifikim Elektrik</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Planifikim i plotë elektrik për ndërtime të reja dhe rinovime.
                Skema profesionale sipas standardeve më të larta.
              </p>
              <Link
                href="/sherbimet/planifikim-elektrik"
                className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all"
              >
                Mëso Më Shumë
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Zonat e <span className="text-gradient-orange">Shërbimit</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Ofrojmë shërbime në këto zona kryesore
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Dibër */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">Dibër</h3>
              <p className="text-gray-600">
                Shërbime të plota elektrike në të gjithë rajonin e Dibrës
              </p>
            </div>

            {/* Tiranë */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">Tiranë</h3>
              <p className="text-gray-600">
                Mbulojmë Tiranën dhe zonat përreth me shërbime elektrike
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Nga <span className="text-gradient-orange">Blogu</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Këshilla dhe artikuj profesionalë rreth sistemeve elektrike
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                slug: "si-te-kurseni-energji-elektrike-ne-shtepi",
                title: "Si të kurseni energji elektrike në shtëpi",
                excerpt: "Zbuloni këshilla të thjeshta por efektive për të reduktuar konsumin e energjisë elektrike.",
                date: "2025-12-15",
              },
              {
                slug: "shenjat-e-problemeve-elektrike-ne-shtepi",
                title: "Shenjat e problemeve elektrike në shtëpi",
                excerpt: "Mos i injoroni këto shenja paralajmëruese që mund të tregojnë probleme serioze.",
                date: "2025-11-15",
              },
              {
                slug: "siguria-elektrike-per-femijet",
                title: "Siguria elektrike për fëmijët",
                excerpt: "Mbroni fëmijët tuaj nga rreziqet elektrike me këto masa sigurie të rëndësishme.",
                date: "2025-11-08",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="h-1.5 gradient-orange" />
                <div className="p-6 flex-1 flex flex-col">
                  <time className="text-xs text-gray-400 font-medium">
                    {new Date(post.date).toLocaleDateString("sq-AL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="text-lg font-bold text-charcoal mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                    Lexo më shumë
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-all"
            >
              Shiko të gjitha artikujt
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-orange rounded-3xl p-10 sm:p-16 text-center orange-glow-strong">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Keni nevojë për elektricist?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Na kontaktoni tani në WhatsApp për një ofertë të shpejtë dhe pa detyrime.
            </p>
            <a
              href="https://wa.me/355696444453?text=Përshëndetje!%20Dua%20të%20marr%20një%20ofertë."
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
