import { Link } from "react-router-dom";
import { blogPosts } from "../blog/posts";
import { ArrowRight } from "../components/Icons";

export default function Blog() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div className="container-x py-16">
          <p className="text-white/70 font-bold uppercase tracking-wider text-xs">
            Blog
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold font-display">
            Medicine Safety & Import Guides
          </h1>
          <p className="mt-3 max-w-3xl text-white/85">
            Daily articles on safe sourcing, composition education, compliance
            updates, and product comparisons for buyers in Australia, the UK,
            and the USA.
          </p>
        </div>
      </section>

      <section className="container-x py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="card overflow-hidden hover:shadow-lg transition group flex flex-col"
            >
              <div className="h-44 bg-slate-200 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt || p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brand-600">
                  <span>{p.tag}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{p.readTime} read</span>
                </div>
                <h3 className="mt-2 font-extrabold text-slate-900 leading-snug font-display line-clamp-2">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-slate-400">{p.date}</p>
                  <span className="text-sm font-bold text-brand-600 inline-flex items-center gap-1">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
