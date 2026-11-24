import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUI } from "../context/UIProvider";
import {
  XIcon,
  WhatsAppIcon,
  MailIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
  CartIcon,
} from "./Icons";

const WA = "919307244389";
const EMAIL = "ascle500@gmail.com";

export default function CartDrawer() {
  const { cartOpen, setCartOpen } = useUI();
  const { cart, removeFromCart, updateQty, clearCart, totalItems, subtotal } =
    useCart();
  if (!cartOpen) return null;

  const message = encodeURIComponent(
    "Hello Ascle Pharma,\nI would like to order:\n\n" +
      cart
        .map((i) => `• ${i.name} — Qty ${i.qty} — ${i.price || "Ask price"}`)
        .join("\n") +
      `\n\nSubtotal (approx): $${subtotal.toFixed(2)}\nCountry: ____`
  );

  return (
    <div className="fixed inset-0 z-[80]">
      <div
        onClick={() => setCartOpen(false)}
        className="absolute inset-0 bg-black/50"
      />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-lg font-display">Your Cart</h3>
            <p className="text-xs text-slate-500">
              {totalItems} item{totalItems !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-lg"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 && (
            <div className="text-center py-16">
              <CartIcon className="w-14 h-14 mx-auto text-slate-300" />
              <p className="mt-3 text-slate-600 font-semibold">
                Your cart is empty
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Browse products and add to cart.
              </p>
              <Link
                to="/products"
                onClick={() => setCartOpen(false)}
                className="btn-primary mt-4"
              >
                Browse Products
              </Link>
            </div>
          )}
          {cart.map((i) => (
            <div
              key={i.id}
              className="border border-slate-200 rounded-xl p-3 flex gap-3"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden grid place-items-center text-[10px] text-slate-400 shrink-0">
                {i.images ? (
                  <img
                    src={i.images}
                    alt={i.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  "N/A"
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-slate-900 truncate">
                  {i.name}
                </p>
                <p className="text-[11px] text-slate-500 truncate">
                  {i.composition}
                </p>
                <p className="text-xs font-semibold text-brand-700 mt-1">
                  {i.price || "Ask price"}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => updateQty(i.id, i.qty - 1)}
                    className="w-7 h-7 grid place-items-center rounded border border-slate-300 hover:bg-slate-100"
                  >
                    <MinusIcon className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold w-6 text-center">
                    {i.qty}
                  </span>
                  <button
                    onClick={() => updateQty(i.id, i.qty + 1)}
                    className="w-7 h-7 grid place-items-center rounded border border-slate-300 hover:bg-slate-100"
                  >
                    <PlusIcon className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => removeFromCart(i.id)}
                    className="ml-auto text-red-500 hover:text-red-700"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Approx subtotal</span>
              <span className="font-extrabold text-lg text-slate-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <a
              href={`https://wa.me/${WA}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="btn-green w-full"
            >
              <WhatsAppIcon className="w-5 h-5" /> Order on WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Order Request&body=${message}`}
              className="btn-dark w-full"
            >
              <MailIcon className="w-5 h-5" /> Order via Email
            </a>
            <div className="flex justify-between text-xs pt-1">
              <Link
                to="/cart"
                onClick={() => setCartOpen(false)}
                className="text-brand-600 font-bold hover:underline"
              >
                View full cart
              </Link>
              <button
                onClick={clearCart}
                className="text-slate-500 hover:text-red-600 font-semibold"
              >
                Clear cart
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
