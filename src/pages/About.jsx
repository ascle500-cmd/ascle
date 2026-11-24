import SectionTitle from "../components/SectionTitle";
import {
  CheckIcon,
  ShieldIcon,
  GlobeIcon,
  TruckIcon,
} from "../components/Icons";

export default function About() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div className="container-x py-16">
          <p className="text-white/70 font-bold uppercase tracking-wider text-xs">
            About Us
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold font-display">
            A Trusted Pharmaceutical Partner for Australia, UK & USA
          </h1>
          <p className="mt-4 max-w-3xl text-white/85">
            Ascle Pharma connects verified buyers in three key markets with
            authentic, GMP-manufactured medicines at transparent wholesale
            pricing.
          </p>
        </div>
      </section>

      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-display">
              Our Mission
            </h2>
            <p className="mt-3">
              Our mission is simple: make authentic prescription and wellness
              medicines accessible to buyers in Australia, the United Kingdom,
              and the United States without compromising on compliance, safety,
              or price. We work only with GMP-certified manufacturers and
              licensed distributors.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-display">
              What We Do
            </h2>
            <p className="mt-3">
              Ascle Pharma supplies more than 500 products across ED medicines,
              premature ejaculation treatments, cardiovascular medicines,
              diabetes care, thyroid therapies, antidepressants, dermatology,
              pain relief, women's health, and nutritional supplements. All
              products are listed with composition, packaging, and manufacturer
              details so buyers can verify authenticity before ordering.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-display">
              Compliance & Safety
            </h2>
            <p className="mt-3">
              Every order undergoes age verification and prescription review
              before dispatch. We follow Australian TGA, UK MHRA, and US FDA
              personal-import guidance. Buyers must be 18+ and, where required,
              provide valid prescriptions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-display">
              Manufacturers We Source From
            </h2>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2">
              {[
                "Centurion Laboratories Pvt. Ltd.",
                "Healing Pharma",
                "Sun Pharma",
                "Cipla",
                "Intas",
                "Abbott",
                "AstraZeneca",
                "Novo Nordisk",
                "Lilly",
                "Sanofi",
                "Merck",
                "American Remedies",
              ].map((m) => (
                <li key={m} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="space-y-4">
          {[
            [
              ShieldIcon,
              "Compliance First",
              "Age & prescription verification on every order.",
            ],
            [
              TruckIcon,
              "Fast Dispatch",
              "Same-day processing for confirmed orders.",
            ],
            [GlobeIcon, "3-Country Coverage", "Australia, UK, and USA only."],
          ].map(([I, t, d]) => (
            <div key={t} className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
                <I className="w-5 h-5" />
              </div>
              <p className="mt-3 font-extrabold text-slate-900">{t}</p>
              <p className="text-sm text-slate-600 mt-1">{d}</p>
            </div>
          ))}
        </aside>
      </section>
    </div>
  );
}
