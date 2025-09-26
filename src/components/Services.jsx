import {useRef,useEffect} from "react"

 

function Services (){
    

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
  const rServices = useReveal();
  const services = [
    {
      title: "Consulting Services",
      bullets: [
        "Business process improvement",
        "Financial planning",
        "Risk management",
        "Strategic planning",
        "Tax consulting",
        "Supply chain & operations",
      ],
      img: "/image/consulting_services.jpg",
    },
    {
      title: "Bookkeeping Services",
      bullets: [
        "Organize & update records",
        "Bank reconciliation",
        "Monthly reports",
        "Clean-up & catch-up",
      ],
      img: "/image/bookeeping1.jpg",
    },
    {
      title: "Tax Services",
      bullets: ["Preparation & filing", "Withholding & VAT", "Compliance monitoring", "Year-end support"],
      img: "/image/tax-services.jpg",}
    // },
    // {
    //   title: "Government Payments",
    //   bullets: ["Payment assistance to agencies"],
    //   img: "/image/bookeeping1jpg."
    // },
    // {
    //   title: "Business Registration",
    //   bullets: ["Registration & renewal"],
    //   img: "/image/bookeeping1jpg.",
    // },
    // {
    //   title: "Training & Seminars",
    //   bullets: ["Accounting & taxation"],
    //   img:"/image/bookeeping1jpg.",
    // },
  ];

    return (
  <section id="services" className="bg-slate-50/60 border-t border-slate-200" ref={rServices}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
            <p className="mt-3 text-slate-600">End-to-end support—from books to strategy and tax compliance.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">
                    {s.title}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-sm text-slate-600">
                    {s.bullets.map((f, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:underline">
                    Learn more <span aria-hidden>→</span>
                  </div>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </section>

    )
}
export default Services;