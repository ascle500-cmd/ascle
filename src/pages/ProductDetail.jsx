import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useUI } from "../context/UIProvider";
import {
  CartIcon,
  CheckIcon,
  ShieldIcon,
  TruckIcon,
  GlobeIcon,
  MinusIcon,
  PlusIcon,
  ArrowRight,
  WhatsAppIcon,
} from "../components/Icons";

const WA = "919307244389";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const p = products.find((x) => String(x.id) === String(id));
  const { addToCart } = useCart();
  const { setCartOpen } = useUI();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!p) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Product not found
        </h1>
        <Link to="/products" className="btn-primary mt-6">
          Back to Products
        </Link>
      </div>
    );
  }

  const related = products
    .filter((x) => x.category === p.category && x.id !== p.id)
    .slice(0, 4);

  const handleAdd = () => {
    addToCart(p, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };
  const handleBuyNow = () => {
    addToCart(p, qty);
    setCartOpen(true);
  };

  return (
    <div>
      <div className="bg-white border-b border-slate-200">
        <div className="container-x py-3 text-xs text-slate-500 flex gap-1 flex-wrap">
          <Link to="/" className="hover:text-brand-600">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-brand-600">
            Products
          </Link>
          <span>/</span>
          <Link
            to={`/products?cat=${encodeURIComponent(p.category)}`}
            className="hover:text-brand-600"
          >
            {p.category}
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-semibold">{p.name}</span>
        </div>
      </div>

      <section className="container-x py-10 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="aspect-square bg-slate-100 rounded-2xl grid place-items-center text-slate-400 overflow-hidden">
            {p.images ? (
              <img
                src={p.images}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            ) : (
              "Product image coming soon"
            )}
          </div>
        </div>

        <div>
          <p className="section-kicker">{p.category}</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
            {p.name}
          </h1>
          <p className="mt-2 text-slate-600">{p.composition}</p>
          <p className="mt-4 text-3xl font-extrabold text-brand-700">
            {p.price || "Ask price"}
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {[
              [ShieldIcon, "Authentic"],
              [TruckIcon, "Tracked Shipping"],
              [GlobeIcon, "AU/UK/USA"],
            ].map(([I, t]) => (
              <div
                key={t}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2"
              >
                <I className="w-4 h-4 text-brand-600" />
                {t}
              </div>
            ))}
          </div>

          <div className="mt-6 card p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Composition</span>
              <span className="font-semibold text-slate-900 text-right">
                {p.composition}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Box Packing</span>
              <span className="font-semibold text-slate-900">
                {p.boxPacking || "N/A"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Manufacturer</span>
              <span className="font-semibold text-slate-900 text-right">
                {p.manufacturer || "N/A"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Category</span>
              <span className="font-semibold text-slate-900">{p.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Product ID</span>
              <span className="font-semibold text-slate-900">#{p.id}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border border-slate-300 rounded-lg">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-10 grid place-items-center hover:bg-slate-100 rounded-l-lg"
              >
                <MinusIcon className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-bold">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 grid place-items-center hover:bg-slate-100 rounded-r-lg"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className={`btn ${
                added ? "bg-green-500 text-white" : "btn-primary"
              }`}
            >
              {added ? (
                <>
                  <CheckIcon className="w-5 h-5" /> Added
                </>
              ) : (
                <>
                  <CartIcon className="w-5 h-5" /> Add to Cart
                </>
              )}
            </button>
            <button onClick={handleBuyNow} className="btn-dark">
              Buy Now
            </button>
          </div>

          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent(
              "Hi, I want to enquire about: " + p.name
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-green mt-3 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5" /> Enquire on WhatsApp
          </a>

          <div className="mt-8 text-sm text-slate-600 leading-relaxed">
            <h3 className="font-extrabold text-slate-900 mb-2">
              About this product
            </h3>
            <p>
              {p.name} is supplied by{" "}
              {p.manufacturer || "a verified GMP manufacturer"} and contains{" "}
              {p.composition}. This listing is intended for adult buyers (18+)
              in Australia, the UK, and the USA. Prescription medicines require
              valid documentation at checkout. Buyers should consult a licensed
              healthcare professional before use.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white border-y border-slate-200">
          <div className="container-x py-14">
            <div className="flex items-end justify-between">
              <h2 className="section-title">Related Products</h2>
              <Link
                to={`/products?cat=${encodeURIComponent(p.category)}`}
                className="text-brand-600 font-bold text-sm inline-flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((r) => (
                <div
                  key={r.id}
                  onClick={() => navigate(`/product/${r.id}`)}
                  className="cursor-pointer"
                >
                  <div className="card p-4 hover:border-brand-400 transition">
                    <p className="text-[10px] uppercase tracking-wider text-brand-600 font-bold">
                      {r.category}
                    </p>
                    <h3 className="mt-1 font-extrabold text-slate-900 text-sm">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                      {r.composition}
                    </p>
                    <p className="mt-2 font-extrabold text-brand-700">
                      {r.price || "Ask price"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
