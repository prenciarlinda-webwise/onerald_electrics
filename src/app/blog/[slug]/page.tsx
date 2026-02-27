import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikulli nuk u gjet" };

  return {
    title: `${post.title} - Onerald Electrics Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.relatedPosts);

  const serviceLabels: Record<string, string> = {
    "riparime-elektrike": "Riparime Elektrike",
    "planifikim-elektrik": "Planifikim Elektrik",
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500 transition-colors">Kryefaqja</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-charcoal font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <time className="text-sm text-orange-500 font-medium">
              {new Date(post.date).toLocaleDateString("sq-AL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal mt-3 leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {post.description}
            </p>

            {/* Service tags */}
            {post.relatedServices.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.relatedServices.map((service) => (
                  <Link
                    key={service}
                    href={`/sherbimet/${service}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-medium hover:bg-orange-100 transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>
                    </svg>
                    {serviceLabels[service] || service}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div
            className="prose prose-lg prose-gray max-w-none
              prose-headings:text-charcoal prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-a:text-orange-500 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-li:text-gray-600
              prose-strong:text-charcoal
              prose-ul:space-y-1 prose-ol:space-y-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* WhatsApp CTA */}
          <div className="mt-12 gradient-orange rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Keni nevojë për ndihmë profesionale?
            </h3>
            <p className="text-white/90 mb-6">
              Ekipi ynë është i gatshëm t&apos;ju ndihmojë. Na kontaktoni për një ofertë pa detyrime.
            </p>
            <a
              href="https://wa.me/355696444453?text=Përshëndetje!%20Dua%20të%20marr%20një%20ofertë."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-orange-500 font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.527 5.86L.06 23.708l5.992-1.57A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.963 0-3.83-.53-5.47-1.498l-.392-.234-4.064 1.065 1.084-3.96-.256-.407A9.787 9.787 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/>
              </svg>
              Na Shkruani në WhatsApp
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal mb-8 text-center">
              Artikuj të <span className="text-gradient-orange">ngjashëm</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:orange-glow transition-all duration-300 block"
                >
                  <time className="text-xs text-gray-400">
                    {new Date(related.date).toLocaleDateString("sq-AL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="font-bold text-charcoal mt-1 mb-2 group-hover:text-orange-500 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
