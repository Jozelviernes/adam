import { useState } from "react";

export default function ContactSection({ rContact }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | loading | success | error

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.error || "Failed to send");

      setStatus({ state: "success", msg: "Message sent! We’ll get back to you soon." });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus({ state: "error", msg: err.message || "Something went wrong." });
    }
  };

  return (
    <section id="contact" className="bg-slate-50/60 border-t border-slate-200" ref={rContact}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src="/image/contact.jpg" alt="Office interior" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 text-center">Let’s talk</h2>
              <p className="mt-2 text-sm text-slate-600 text-center">
                Tell us about your needs and we’ll get back within 1–2 business days.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none
                                 focus:ring-2 focus:ring-[#c8a96a]/20 focus:border-[#c8a96a]"
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
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none
                                 focus:ring-2 focus:ring-[#c8a96a]/20 focus:border-[#c8a96a]"
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
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none
                               focus:ring-2 focus:ring-[#c8a96a]/20 focus:border-[#c8a96a]"
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
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none resize-none
                               focus:ring-2 focus:ring-[#c8a96a]/20 focus:border-[#c8a96a]"
                    placeholder="Briefly describe your needs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="rounded-full bg-[#0f2740] px-6 py-3 text-sm font-semibold text-white shadow-md transition
                             hover:opacity-95 hover:scale-105
                             disabled:opacity-60 disabled:hover:scale-100
                             focus:outline-none focus:ring-2 focus:ring-[#c8a96a]/50"
                >
                  {status.state === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status.state !== "idle" && (
                  <p
                    className={`text-sm text-center ${
                      status.state === "success"
                        ? "text-emerald-700"
                        : status.state === "error"
                        ? "text-red-600"
                        : "text-slate-600"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}

                <p className="text-xs text-slate-500 text-center">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
