import { Link } from "react-router-dom";
import { WhatsAppIcon, MailIcon } from "./Icons";
const WA = "919307244389";
const EMAIL = "ascle500@gmail.com";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-300 mt-16">
      <div className="container-x py-14 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-brand-600 text-white grid place-items-center font-extrabold font-display">
              A
            </div>
            <p className="font-extrabold text-white text-lg font-display">
              Ascle Pharma
            </p>
          </div>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            Licensed pharmaceutical distributor serving Australia, the United
            Kingdom, and the United States with verified, GMP-sourced medicines.
          </p>
        </div>
        <div>
          <p className="font-bold text-white">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Products", "/products"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([l, to]) => (
              <li key={l}>
                <Link to={to} className="hover:text-white">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white">Popular Categories</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "ED Medicines",
              "Cardiovascular",
              "Diabetes",
              "Thyroid",
              "Pain",
              "Dermatology",
            ].map((c) => (
              <li key={c}>
                <Link
                  to={`/products?cat=${encodeURIComponent(c)}`}
                  className="hover:text-white"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white">Contact</p>
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 text-sm hover:text-white"
          >
            <WhatsAppIcon className="w-4 h-4" /> +91 93072 44389
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-2 flex items-center gap-2 text-sm hover:text-white"
          >
            <MailIcon className="w-4 h-4" /> {EMAIL}
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Serving: Australia · United Kingdom · United States
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-x py-4 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Ascle Pharma. All rights reserved.</p>
          <p>Prescription medicines require valid documentation. 18+ only.</p>
        </div>
      </div>
    </footer>
  );
}
