import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import { SearchIcon, XIcon } from "../components/Icons";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const initialQ = params.get("q") || "";
  const initialCat = params.get("cat") || "All";

  const [q, setQ] = useState(initialQ);
  const [cat, setCat] = useState(initialCat);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    setQ(initialQ);
  }, [initialQ]);
  useEffect(() => {
    setCat(initialCat);
  }, [initialCat]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const s = q.toLowerCase().trim();
      const matchQ =
        !s ||
        [p.name, p.composition, p.manufacturer, p.category]
          .join(" ")
          .toLowerCase()
          .includes(s);
      return matchCat && matchQ;
    });
    if (sort === "az")
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za")
      list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [q, cat, sort]);

  const updateParams = (nextQ, nextCat) => {
    const p = new URLSearchParams();
    if (nextQ) p.set("q", nextQ);
    if (nextCat && nextCat !== "All") p.set("cat", nextCat);
    setParams(p);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div className="container-x py-14">
          <p className="text-white/70 font-bold uppercase tracking-wider text-xs">
            Product Catalogue
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold font-display">
            Browse All Medicines
          </h1>
          <p className="mt-3 max-w-3xl text-white/85">
            Search by brand, composition, or category. All products are
            GMP-sourced and listed with manufacturer details.
          </p>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="card p-4 flex flex-col md:flex-row gap-3 md:items-center">
          <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2">
            <SearchIcon className="w-5 h-5 text-slate-400" />
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                updateParams(e.target.value, cat);
              }}
              placeholder="Search by name, composition, brand..."
              className="w-full outline-none text-sm bg-transparent"
            />
            {q && (
              <button
                onClick={() => {
                  setQ("");
                  updateParams("", cat);
                }}
              >
                <XIcon className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>
          <select
            value={cat}
            onChange={(e) => {
              setCat(e.target.value);
              updateParams(q, e.target.value);
            }}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm"
          >
            <option value="default">Sort: Default</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>
        </div>

        <p className="mt-4 text-sm text-slate-600">
          <span className="font-bold text-slate-900">{filtered.length}</span>{" "}
          products found
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 card">
            <SearchIcon className="w-12 h-12 mx-auto text-slate-300" />
            <p className="mt-3 font-bold text-slate-700">No products found</p>
            <p className="text-sm text-slate-500">
              Try another keyword or category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
