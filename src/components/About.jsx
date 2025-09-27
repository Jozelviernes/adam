import { useRef,useEffect } from "react";

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


function About(){


  const rAbout = useReveal();


      const partnerImgs = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=1200&q=80",
  ];
  
  const partners = [
      { name: "Angel", role: "Partner • Tax", img: "/image/angel.jpg"},
    { name: "Angelica", role: "Partner • Consulting", img:"/image/angge.jpg" },
    { name: "Dessa", role: "Partner • Bookkeeping", img:"/image/dessa.jpg"},
  
    { name: "Madeline", role: "Partner • Strategy", img: partnerImgs[3] },
  ];

    return(
  <section id="about" ref={rAbout}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">About ADAM Co.</h2>
              <p className="mt-4 text-slate-600">
                Founded by partners <strong>Angel</strong>, <strong>Dessa</strong>, <strong>Angelica</strong>, and{" "}
                <strong>Madeline</strong>, our name embodies our principles: <strong>Accuracy</strong>,{" "}
                <strong>Diligence</strong>, <strong>Accountability</strong>, and <strong>Mastery</strong>. We pair
                technical rigor with a modern, human approach—so your numbers always tell a clear story.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {[
                  ["Accuracy", "Every detail is precise and reliable."],
                  ["Diligence", "We handle every task with care."],
                  ["Accountability", "We stand by every recommendation."],
                  ["Mastery", "Expertise through continual learning."],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="font-semibold text-slate-900">{k}</div>
                    <div className="text-slate-600 mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="h-44 w-full overflow-hidden">
                    <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-slate-900">{p.name}</h3>
                    <p className="text-xs text-slate-600">{p.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}
export default About;