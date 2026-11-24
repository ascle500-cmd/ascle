import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  TrashIcon,
  PlusIcon,
  MinusIcon,
  WhatsAppIcon,
  MailIcon,
  CartIcon,
} from "../components/Icons";

const WA = "919307244389";
const EMAIL = "ascle500@gmail.com";

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart, subtotal, totalItems } =
    useCart();

  const message = encodeURIComponent(
    "Hello Ascle Pharma,\nI would like to order:\n\n" +
      cart
        .map((i) => `• ${i.name} — Qty ${i.qty} — ${i.price || "Ask price"}`)
        .join("\n") +
      `\n\nSubtotal (approx): $${subtotal.toFixed(2)}\nCountry: ____`
  );

  if (cart.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <CartIcon className="w-16 h-16 mx-auto text-slate-300" />
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">
          Your cart is empty
        </h1>
        <p className="text-slate-500 mt-2">
          Add medicines to your cart and order via WhatsApp or email.
        </p>
        <Link to="/products" className="btn-primary mt-6">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container-x py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 font-display">
        Shopping Cart
      </h1>
      <p className="text-slate-500 mt-1">
        {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
      </p>

      <div className="mt-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((i) => (
            <div key={i.id} className="card p-4 flex gap-4">
              <div className="w-24 h-24 bg-slate-100 rounded-lg grid place-items-center text-slate-400 text-xs shrink-0 overflow-hidden">
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
              <div className="flex-1">
                <div className="flex justify-between gap-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-brand-600 font-bold">
                      {i.category}
                    </p>
                    <Link
                      to={`/product/${i.id}`}
                      className="font-extrabold text-slate-900 hover:text-brand-600"
                    >
                      {i.name}
                    </Link>
                    <p className="text-xs text-slate-500">{i.composition}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Pack: {i.boxPacking || "N/A"} · Mfr:{" "}
                      {i.manufacturer || "N/A"}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(i.id)}
                    className="text-red-500 hover:text-red-700 h-fit"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center border border-slate-300 rounded-lg">
                    <button
                      onClick={() => updateQty(i.id, i.qty - 1)}
                      className="w-9 h-9 grid place-items-center hover:bg-slate-100 rounded-l-lg"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-sm">
                      {i.qty}
                    </span>
                    <button
                      onClick={() => updateQty(i.id, i.qty + 1)}
                      className="w-9 h-9 grid place-items-center hover:bg-slate-100 rounded-r-lg"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-extrabold text-brand-700">
                    {i.price || "Ask price"}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="text-sm text-slate-500 hover:text-red-600 font-semibold"
          >
            Clear cart
          </button>
        </div>

        <aside className="card p-6 h-fit sticky top-32">
          <h2 className="font-extrabold text-lg text-slate-900">
            Order Summary
          </h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Items</span>
              <span className="font-semibold">{totalItems}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Approx subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Shipping</span>
              <span className="font-semibold">Calculated on confirm</span>
            </div>
          </div>
          <hr className="my-4" />
          <p className="text-xs text-slate-500">
            Final price, shipping, and payment options are confirmed via
            WhatsApp or email. Prescription required for prescription-only
            items.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="btn-green w-full mt-4"
          >
            <WhatsAppIcon className="w-5 h-5" /> Order on WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}?subject=Order Request&body=${message}`}
            className="btn-dark w-full mt-2"
          >
            <MailIcon className="w-5 h-5" /> Order via Email
          </a>
          <Link to="/products" className="btn-ghost w-full mt-2">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
