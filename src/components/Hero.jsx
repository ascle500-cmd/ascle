import { Link } from "react-router-dom";
import {
  WhatsAppIcon,
  CheckIcon,
  ShieldIcon,
  TruckIcon,
  GlobeIcon,
} from "./Icons";
const WA = "919307244389";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 text-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 0, transparent 40%), radial-gradient(circle at 80% 80%, #fff 0, transparent 40%)",
        }}
      />
      <div className="relative container-x py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Trusted supplier for Australia · UK · USA
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] font-display">
            Genuine Prescription Medicines, Delivered to Australia, UK & USA
          </h1>
          <p className="mt-5 text-white/85 text-lg max-w-xl">
            Ascle Pharma supplies verified ED, cardiovascular, diabetes,
            thyroid, neurological and wellness medicines at wholesale pricing.
            Discreet packaging, tracked delivery, and WhatsApp support for
            verified buyers in Australia, the United Kingdom, and the United
            States.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="btn bg-white text-brand-700 hover:bg-brand-50"
            >
              Browse Products
            </Link>
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noreferrer"
              className="btn-green"
            >
              <WhatsAppIcon className="w-5 h-5" /> Order on WhatsApp
            </a>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
            {[
              [ShieldIcon, "100% Authentic"],
              [TruckIcon, "Discreet Shipping"],
              [GlobeIcon, "AU · UK · USA"],
            ].map(([I, t]) => (
              <div key={t} className="flex items-center gap-2">
                <I className="w-5 h-5 text-green-300" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 shadow-2xl">
          <h3 className="font-extrabold text-xl font-display">
            Why buyers in AU, UK & USA choose us
          </h3>
          <div className="mt-4 space-y-4 text-sm">
            {[
              [
                "Verified sourcing",
                "Manufactured by Centurion, Healing Pharma, Sun Pharma, Cipla, Intas, Abbott and more.",
              ],
              [
                "Fast dispatch",
                "Same-day processing for confirmed orders to major AU/UK/US cities.",
              ],
              [
                "Compliance-first",
                "Age-verified buyers only. Prescription medicines require valid documentation.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-400/20 grid place-items-center shrink-0">
                  <CheckIcon className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <p className="font-bold">{t}</p>
                  <p className="text-white/75">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
