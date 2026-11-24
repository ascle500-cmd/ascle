import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  MenuIcon,
  XIcon,
  WhatsAppIcon,
  MailIcon,
  CartIcon,
  SearchIcon,
} from "./Icons";
import { useCart } from "../context/CartContext";
import { useUI } from "../context/UIProvider";

const WA = "919307244389";
const EMAIL = "ascle500@gmail.com";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { totalItems } = useCart();
  const { setCartOpen } = useUI();
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/products?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="container-x py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-brand-600 text-white grid place-items-center font-extrabold text-lg font-display">
            A
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-slate-900 font-display">
              Ascle Pharma
            </p>
            <p className="text-[10px] uppercase tracking-wider text-brand-600 font-semibold">
              AU · UK · USA
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `hover:text-brand-600 transition ${
                  isActive ? "text-brand-600" : ""
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="hidden md:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-semibold"
          >
            <MailIcon className="w-4 h-4" /> Email
          </a>
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 rounded-lg hover:bg-slate-100"
            aria-label="Cart"
          >
            <CartIcon className="w-6 h-6 text-slate-800" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-[10px] w-5 h-5 rounded-full grid place-items-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
            aria-label="Menu"
          >
            {open ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50">
        <form
          onSubmit={submitSearch}
          className="container-x py-2 flex items-center gap-2"
        >
          <SearchIcon className="w-5 h-5 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search medicines, brands, composition (e.g. Tadalafil, Vidalista, Metformin)..."
            className="w-full bg-transparent outline-none text-sm py-2 placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-md"
          >
            Search
          </button>
        </form>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col p-4 gap-3 text-sm font-semibold">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `hover:text-brand-600 ${isActive ? "text-brand-600" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href={`https://wa.me/${WA}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex-1 inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-lg font-semibold"
              >
                <MailIcon className="w-4 h-4" /> Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
