import {
  WhatsAppIcon,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
} from "../components/Icons";
const WA = "919307244389";
const EMAIL = "ascle500@gmail.com";

export default function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div className="container-x py-16">
          <p className="text-white/70 font-bold uppercase tracking-wider text-xs">
            Contact
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold font-display">
            Talk to Our Team
          </h1>
          <p className="mt-3 max-w-3xl text-white/85">
            Reach us on WhatsApp for the fastest response, or email us for
            wholesale and prescription verification enquiries. We serve buyers
            in Australia, the United Kingdom, and the United States only.
          </p>
        </div>
      </section>

      <section className="container-x py-14 grid lg:grid-cols-2 gap-10">
        <div className="space-y-3">
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noreferrer"
            className="card p-5 flex items-center gap-4 hover:border-green-400 transition"
          >
            <div className="w-12 h-12 rounded-lg bg-green-500 text-white grid place-items-center">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-extrabold text-slate-900">WhatsApp</p>
              <p className="text-sm text-slate-600">+91 93072 44389</p>
            </div>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="card p-5 flex items-center gap-4 hover:border-brand-400 transition"
          >
            <div className="w-12 h-12 rounded-lg bg-slate-900 text-white grid place-items-center">
              <MailIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-extrabold text-slate-900">Email</p>
              <p className="text-sm text-slate-600">{EMAIL}</p>
            </div>
          </a>
          <div className="card p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-brand-600 text-white grid place-items-center">
              <PhoneIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-extrabold text-slate-900">Phone</p>
              <p className="text-sm text-slate-600">+91 93072 44389</p>
            </div>
          </div>
          <div className="card p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-slate-900 text-white grid place-items-center">
              <ShieldIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-extrabold text-slate-900">Service Region</p>
              <p className="text-sm text-slate-600">
                Australia · United Kingdom · United States
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you. We will reply within 1 business day.");
          }}
          className="card p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Full name"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-500"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              placeholder="WhatsApp number"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-500"
            />
            <select
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-500"
            >
              <option value="">Select country</option>
              <option>Australia</option>
              <option>United Kingdom</option>
              <option>United States</option>
            </select>
          </div>
          <textarea
            required
            rows="5"
            placeholder="Tell us what you need (product, quantity, destination)..."
            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-500"
          />
          <button className="btn-primary w-full">Send Enquiry</button>
          <p className="text-xs text-slate-500 text-center">
            We respond within 1 business day. Age 18+ and valid prescription
            required where applicable.
          </p>
        </form>
      </section>
    </div>
  );
}
