// src/App.jsx
import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact"; // (kept, not used)

/**
 * Reliable <Img> with graceful fallback:
 * - Tries primary src; on error swaps to a soft gradient placeholder
 * - Accepts className + alt
 */
function Img({ src, alt, className }) {
  const [ok, setOk] = useState(true);
  return ok ? (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setOk(false)}
      loading="lazy"
      decoding="async"
    />
  ) : (
    <div
      aria-label={alt}
      role="img"
      className={`${className} bg-gradient-to-br from-sky-100 via-slate-100 to-emerald-100`}
    />
  );
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("opacity-0", "translate-y-6");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");
            io.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function App() {
  const rInsights = useReveal();
  const rContact = useReveal();

  // ✅ Contact form state + submit
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", msg: "" }); // idle | loading | success | error

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmitContact = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to send");

      setStatus({ type: "success", msg: "Message sent! We’ll get back to you soon." });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message || "Failed to send" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Hero ===== */}
      <Hero />

      {/* ===== About / Partners ===== */}
      <About />

      {/* ===== Services ===== */}
      <Services />

      {/* ===== Mission & Vision (Executive Navy + Gold) ===== */}
      <section id="mission-vision" ref={rInsights} className="relative">
        {/* background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_0%,#000_45%,transparent_70%)]">
          <div className="absolute -top-10 -left-24 h-72 w-72 bg-gradient-to-br from-[#c8a96a] to-[#0f2740] blur-3xl opacity-15" />
          <div className="absolute -bottom-10 -right-24 h-72 w-72 bg-gradient-to-br from-[#0f2740] to-[#c8a96a] blur-3xl opacity-10" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#c8a96a] to-[#0f2740] bg-clip-text text-transparent">
              Mission & Vision
            </h2>
            <p className="mt-3 text-slate-600">Clear purpose today. Bold direction for tomorrow.</p>

            {/* divider */}
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#c8a96a] to-[#0f2740]" />
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
            {/* Mission */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur transition-all hover:-translate-y-1.5 hover:shadow-lg">
              {/* top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#c8a96a] to-[#0f2740]" />

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  {/* icon */}
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f2740] text-[#c8a96a] shadow">
                    {/* target icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>

                  <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  ADAM offers quality and reasonably priced consulting, bookkeeping, and tax services
                  that will provide clients peace of mind and confidence. Keep every client's trust
                  by maintaining integrity, professionalism, and genuine care. Aided by Accuracy,
                  Diligence, Accountability, and Mastery, guarantees that all services rendered are
                  led by expertise and commitment.
                </p>
              </div>

              {/* subtle gold glow on hover */}
              <div className="pointer-events-none absolute -inset-1 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-r from-[#c8a96a] to-[#0f2740]" />
            </article>

            {/* Vision */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur transition-all hover:-translate-y-1.5 hover:shadow-lg">
              <div className="h-1 w-full bg-gradient-to-r from-[#c8a96a] to-[#0f2740]" />

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f2740] text-[#c8a96a] shadow">
                    {/* rocket icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 15l-2 5 5-2 10-10a3 3 0 10-4-4L4 14z"
                      />
                    </svg>
                  </span>

                  <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  To be known as a reliable and respected top accounting company in Aurora and other
                  cities and provinces for excellence, innovation, and professionalism. ADAM Co.
                  aspires to expand from servicing micro and small businesses to ultimately extending
                  to medium and large businesses and building additional branches in nearby areas to
                  introduce the company and to serve more clients. The company keeps embracing
                  technology while enhancing security so that it keeps growing with the times
                  without deviating from its core values of trust and service.
                </p>
              </div>

              <div className="pointer-events-none absolute -inset-1 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-r from-[#c8a96a] to-[#0f2740]" />
            </article>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f2740] px-6 py-2.5 text-sm font-semibold text-white shadow-md
                   hover:opacity-95 hover:-translate-y-0.5 transition"
            >
              Get in touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* optional tiny accent line */}
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-[#c8a96a]/70 to-[#0f2740]/70" />
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="bg-slate-50/60 border-t border-slate-200" ref={rContact}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* center container */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src="/image/contact.jpg" alt="Office interior" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 text-center">Let’s talk</h2>
                <p className="mt-2 text-sm text-slate-600 text-center">
                  Tell us about your needs and we’ll get back within 1–2 business days.
                </p>

                {/* ✅ added onSubmit + controlled inputs */}
                <form onSubmit={onSubmitContact} className="mt-6 grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#c8a96a]/20 focus:border-[#c8a96a]"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#c8a96a]/20 focus:border-[#c8a96a]"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#c8a96a]/20 focus:border-[#c8a96a]"
                      placeholder="Company Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      required
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#c8a96a]/20 focus:border-[#c8a96a] resize-none"
                      placeholder="Briefly describe your needs"
                    />
                  </div>

                  {/* ✅ changed to submit + disabled while sending */}
                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="rounded-full bg-[#0f2740] px-6 py-3 text-sm font-semibold text-white
             shadow-md transition
             hover:opacity-95 hover:scale-105
             disabled:opacity-60 disabled:hover:scale-100
             focus:outline-none focus:ring-2 focus:ring-[#c8a96a]/50"
                  >
                    {status.type === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  {/* ✅ status message */}
                  {status.type !== "idle" && (
                    <p
                      className={`text-sm text-center ${
                        status.type === "success" ? "text-emerald-700" : status.type === "error" ? "text-red-600" : "text-slate-600"
                      }`}
                    >
                      {status.msg}
                    </p>
                  )}

                  <p className="text-xs text-slate-500 text-center">By submitting, you agree to our privacy policy.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} ADAM Co. Accounting Firm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
