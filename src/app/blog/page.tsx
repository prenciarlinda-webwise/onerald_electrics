import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog - Onerald Electrics | Këshilla & Artikuj Elektrikë",
  description:
    "Lexoni artikuj dhe këshilla rreth sigurisë elektrike, kursimit të energjisë, standardeve dhe shërbimeve elektrike në Dibër dhe Tiranë.",
};

export default function BlogIndex() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-orange-light" />
        <div className="absolute top-10 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal">
              <span className="text-gradient-orange">Blog</span> — Këshilla Elektrike
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Artikuj, udhëzues dhe këshilla profesionale rreth sistemeve elektrike,
              sigurisë dhe kursimit të energjisë.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="h-2 gradient-orange" />
                <div className="p-6 flex-1 flex flex-col">
                  <time className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString("sq-AL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-lg font-bold text-charcoal mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h2>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Keni nevojë për ndihmë profesionale?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Ekipi ynë është i gatshëm t&apos;ju ndihmojë me çdo nevojë elektrike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sherbimet"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-all"
            >
              Shiko Shërbimet
            </Link>
            <a
              href="https://wa.me/355696444453?text=Përshëndetje!%20Dua%20të%20marr%20një%20ofertë."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 gradient-orange text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.527 5.86L.06 23.708l5.992-1.57A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.963 0-3.83-.53-5.47-1.498l-.392-.234-4.064 1.065 1.084-3.96-.256-.407A9.787 9.787 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/>
              </svg>
              Na Kontaktoni
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
