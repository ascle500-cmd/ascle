import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUI } from "../context/UIProvider";
import { CartIcon, CheckIcon } from "./Icons";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();
  const { setCartOpen } = useUI();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    addToCart(p);
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${p.id}`}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col group"
    >
      <div className="aspect-[4/3] bg-slate-100 grid place-items-center text-slate-400 text-xs overflow-hidden">
        {p.images ? (
          <img
            src={p.images}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition"
            loading="lazy"
          />
        ) : (
          <span>Image coming soon</span>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-[10px] uppercase tracking-wider text-brand-600 font-bold">
          {p.category}
        </p>
        <h3 className="mt-1 font-extrabold text-slate-900 leading-tight">
          {p.name}
        </h3>
        <p className="mt-1 text-xs text-slate-500 line-clamp-2">
          {p.composition}
        </p>
        <div className="mt-2 text-[11px] text-slate-500 space-y-0.5">
          <p>
            <span className="font-bold text-slate-700">Pack:</span>{" "}
            {p.boxPacking || "N/A"}
          </p>
          <p className="line-clamp-1">
            <span className="font-bold text-slate-700">Mfr:</span>{" "}
            {p.manufacturer || "N/A"}
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-extrabold text-brand-700">
            {p.price || "Ask price"}
          </p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-1.5 text-xs font-bold px-2 py-2 rounded-lg transition ${
              added
                ? "bg-green-500 text-white"
                : "bg-brand-600 hover:bg-brand-700 text-white"
            }`}
          >
            {added ? (
              <>
                <CheckIcon className="w-4 h-4" /> Added
              </>
            ) : (
              <>
                <CartIcon className="w-4 h-4" /> Add
              </>
            )}
          </button>
          <button
            onClick={handleBuyNow}
            className="text-xs font-bold px-2 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
}
