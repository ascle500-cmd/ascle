import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import {
  CheckIcon,
  ShieldIcon,
  TruckIcon,
  GlobeIcon,
  StarIcon,
  ArrowRight,
  WhatsAppIcon,
} from "../components/Icons";

const WA = "919307244389";

export default function Home() {
  const featured = products.slice(0, 8);

  return (
    <>
      <Hero />

      {/* Trust bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-x py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            [ShieldIcon, "100% Authentic", "GMP verified products"],
            [TruckIcon, "Discreet Delivery", "Tracked shipping"],
            [GlobeIcon, "AU · UK · USA", "3-country coverage"],
            [StarIcon, "Trusted by Buyers", "Wholesale pricing"],
          ].map(([I, t, s]) => (
            <div key={t} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
                <I className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{t}</p>
                <p className="text-xs text-slate-500">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="container-x py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <SectionTitle
            kicker="About Ascle Pharma"
            title="A Reliable Wholesale Medicine Partner for AU, UK & USA"
          />
          <p className="mt-4 text-slate-600 leading-relaxed">
            Ascle Pharma is a licensed pharmaceutical distributor serving
            Australia, the United Kingdom, and the United States. We source
            authentic prescription and wellness medicines from GMP-certified
            manufacturers including Centurion Laboratories, Healing Pharma, Sun
            Pharma, Cipla, Intas, Abbott, and AstraZeneca.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Every listing shows the active composition, packaging, and
            manufacturer so buyers can make informed decisions. Our compliance
            team verifies age, prescription, and import eligibility before
            dispatch.
          </p>
          <Link to="/about" className="btn-primary mt-6">
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            ["500+", "Products listed"],
            ["3", "Target markets"],
            ["15+", "GMP manufacturers"],
            ["24/7", "WhatsApp support"],
          ].map(([n, l]) => (
            <div key={l} className="card p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 font-display">
                {n}
              </p>
              <p className="text-sm text-slate-500 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-white border-y border-slate-200">
        <div className="container-x py-16">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              kicker="Featured"
              title="Popular Medicines"
              subtitle="Top-selling products for buyers in Australia, UK and USA."
            />
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-2 text-brand-600 font-bold text-sm"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16">
        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 text-white p-10 md:p-14 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-3xl font-extrabold font-display">
              Need a specific medicine?
            </h3>
            <p className="mt-3 text-white/85">
              Message us on WhatsApp with product name, quantity, and delivery
              country. We reply with price, availability, and shipping time
              within 1 business day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noreferrer"
              className="btn-green"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="btn bg-white text-brand-700 hover:bg-brand-50"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
