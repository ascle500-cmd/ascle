import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getPostBySlug, blogPosts } from "../blog/posts";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { ArrowRight, WhatsAppIcon } from "../components/Icons";

const WA = "919307244389";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  // SEO: dynamic title, meta, and JSON-LD per post
  useEffect(() => {
    if (!post) return;
    document.title = post.metaTitle || post.title;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", post.metaDescription);
    setMeta("keywords", (post.keywords || []).join(", "));

    // Open Graph
    const setOG = (prop, content) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setOG("og:title", post.metaTitle || post.title);
    setOG("og:description", post.metaDescription);
    setOG("og:image", post.image);
    setOG("og:type", "article");

    // Article JSON-LD
    const ld = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      image: post.image,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: post.author || "Ascle Pharma" },
      publisher: { "@type": "Organization", name: "Ascle Pharma" },
      keywords: (post.keywords || []).join(", "),
    };
    let script = document.getElementById("post-jsonld");
    if (script) script.remove();
    script = document.createElement("script");
    script.id = "post-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("post-jsonld");
      if (s) s.remove();
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  // Related products auto-matched from product catalog by ID
  const relatedProducts = (post.relatedProductIds || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  const morePosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Render content: convert markdown-style ## headings and - bullets to HTML safely
  const renderContent = (text) => {
    return text.split("\n").map((line, i) => {
      const t = line.trim();
      if (!t) return null;
      if (t.startsWith("## "))
        return (
          <h2
            key={i}
            className="text-2xl font-extrabold text-slate-900 font-display mt-8 mb-3"
          >
            {t.slice(3)}
          </h2>
        );
      if (t.startsWith("### "))
        return (
          <h3
            key={i}
            className="text-xl font-extrabold text-slate-900 font-display mt-6 mb-2"
          >
            {t.slice(4)}
          </h3>
        );
      if (t.startsWith("- "))
        return (
          <li key={i} className="ml-5 list-disc text-slate-700 leading-relaxed">
            {t.slice(2)}
          </li>
        );
      return (
        <p key={i} className="text-slate-700 leading-relaxed mt-3">
          {t}
        </p>
      );
    });
  };

  return (
    <article>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="container-x py-3 text-xs text-slate-500 flex gap-1 flex-wrap">
          <Link to="/" className="hover:text-brand-600">
            Home
          </Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-brand-600">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-semibold">{post.title}</span>
        </div>
      </div>

      {/* Hero */}
      <header className="relative">
        <div className="h-64 md:h-96 w-full overflow-hidden bg-slate-200">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-x -mt-20 md:-mt-28 relative">
          <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-6 md:p-10 max-w-4xl">
            <p className="section-kicker">{post.tag}</p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container-x py-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            {post.excerpt}
          </p>
          <div className="mt-4">{renderContent(post.content)}</div>

          <div className="mt-10 card p-6 bg-brand-50 border-brand-200">
            <p className="font-extrabold text-slate-900">Need this product?</p>
            <p className="text-sm text-slate-600 mt-1">
              Order via WhatsApp for fastest response. Buyers in Australia, UK,
              and USA only. Prescription required where applicable.
            </p>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent(
                "Hi, I read your blog on " + post.title + " and want to order."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-green mt-4"
            >
              <WhatsAppIcon className="w-5 h-5" /> Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="card p-5">
            <p className="font-extrabold text-slate-900">In this article</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {post.content
                .split("\n")
                .filter((l) => l.trim().startsWith("## "))
                .map((l, i) => (
                  <li key={i} className="border-l-2 border-brand-200 pl-3">
                    {l.trim().slice(3)}
                  </li>
                ))}
            </ul>
          </div>

          <div className="card p-5 bg-slate-900 text-white">
            <p className="font-extrabold">Serving 3 countries only</p>
            <p className="text-sm text-slate-300 mt-1">
              Australia · United Kingdom · United States
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-slate-900 hover:bg-slate-100 mt-3 w-full"
            >
              Contact Team
            </Link>
          </div>
        </aside>
      </div>

      {/* Related Products (dynamic) */}
      {relatedProducts.length > 0 && (
        <section className="bg-white border-y border-slate-200">
          <div className="container-x py-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="section-kicker">Related Products</p>
                <h2 className="mt-2 section-title">
                  Medicines mentioned in this article
                </h2>
              </div>
              <Link
                to="/products"
                className="hidden md:inline-flex items-center gap-2 text-brand-600 font-bold text-sm"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More posts */}
      <section className="container-x py-14">
        <h2 className="section-title">More guides</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {morePosts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="card overflow-hidden hover:shadow-lg transition group"
            >
              <div className="h-40 bg-slate-200 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt || p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-wider text-brand-600 font-bold">
                  {p.tag}
                </p>
                <h3 className="mt-2 font-extrabold text-slate-900 leading-snug line-clamp-2">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  {p.date} · {p.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
