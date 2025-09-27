import { useEffect, useState } from "react";


const Navbar = () => {

    
     const [open, setOpen] = useState(false);
     // Smooth in-page anchor scroll
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        setOpen(false);
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", id);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  return (
     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
           <img 
  src="/image/logo.jpg" 
  alt="Logo" 
  className="h-8 w-8 rounded-full object-cover"
/>

            <span className="text-lg font-extrabold tracking-tight text-slate-900">ADAM Co.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#about" className="hover:text-slate-900">About</a>
       
            <a href="#mission-vision" className="hover:text-slate-900">Mission-Vision</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700"
            >
              Book a Consultation
            </a>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-50"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" className="fill-none stroke-slate-700">
                <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 text-sm font-semibold">
              {["#services", "#about", "#values", "#insights", "#contact"].map((href) => (
                <a key={href} href={href} className="py-2 hover:bg-slate-50 rounded-lg px-2">
                  {href.replace("#", "").replace(/^\w/, (c) => c.toUpperCase())}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        )}
      </header>
  );
};
export default Navbar;
