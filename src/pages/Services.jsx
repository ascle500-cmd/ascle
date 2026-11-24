import SectionTitle from "../components/SectionTitle";
import {
  CheckIcon,
  TruckIcon,
  ShieldIcon,
  GlobeIcon,
  WhatsAppIcon,
  PhoneIcon,
} from "../components/Icons";
import { Link } from "react-router-dom";

const services = [
  {
    icon: TruckIcon,
    title: "Wholesale Medicine Supply",
    desc: "Bulk pricing on ED, cardiac, diabetes, thyroid, and neuro medicines shipped to AU, UK, and USA.",
  },
  {
    icon: GlobeIcon,
    title: "Discreet Global Shipping",
    desc: "Plain packaging with tracked courier delivery and customs-aware documentation.",
  },
  {
    icon: ShieldIcon,
    title: "Prescription Verification",
    desc: "Age and prescription checks before every dispatch to protect buyer safety.",
  },
  {
    icon: CheckIcon,
    title: "Product Sourcing",
    desc: "Hard-to-find brands sourced from GMP manufacturers and verified distributors.",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp Order Support",
    desc: "Fast quoting and order tracking through WhatsApp for verified buyers.",
  },
  {
    icon: PhoneIcon,
    title: "B2B & Clinic Supply",
    desc: "Reliable recurring supply for pharmacies, clinics, and wellness stores across 3 countries.",
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div className="container-x py-16">
          <p className="text-white/70 font-bold uppercase tracking-wider text-xs">
            Services
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold font-display">
            End-to-End Pharmaceutical Supply for AU, UK & USA
          </h1>
          <p className="mt-4 max-w-3xl text-white/85">
            Compliance, speed, and transparency at every step — from sourcing to
            delivery.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="card p-6 hover:border-brand-400 transition"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-600 text-white grid place-items-center">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-extrabold text-lg text-slate-900 font-display">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-8 md:p-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-display">
              How ordering works
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-slate-700">
              {[
                "Browse products and add to cart.",
                "Send your cart via WhatsApp or email.",
                "Share country, quantity, and prescription (if required).",
                "Confirm price, shipping, and payment method.",
                "Receive tracked delivery to Australia, UK, or USA.",
              ].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-600 text-white grid place-items-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
