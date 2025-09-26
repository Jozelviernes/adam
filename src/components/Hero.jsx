

function Hero () {
 
    return (
    <section id="home" className="relative z-0">
  {/* Background image + overlays */}
  <div className="absolute inset-0 z-0">
    <img
      src="/image/heroPage.png"
      alt="Executive workspace"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 pointer-events-none
      bg-[radial-gradient(70%_60%_at_30%_20%,rgba(2,132,199,.35),transparent_60%),radial-gradient(60%_60%_at_80%_40%,rgba(16,185,129,.35),transparent_55%)]" />
    <div className="absolute inset-0 pointer-events-none
      bg-gradient-to-b from-black/60 via-black/30 to-white/0" />
  </div>

  {/* Foreground content */}
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
    <div className="max-w-2xl mt-10 ">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
        Professional Accounting Firm
      </p>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow">
        Clarity for every financial decision.
      </h1>

      <p className="mt-4 text-slate-100/90 text-base sm:text-lg leading-relaxed">
        Accuracy • Diligence • Accountability • Mastery — ADAM Co. delivers
        modern, trustworthy accounting and tax solutions so leaders can act
        with confidence.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition"
        >
          Get Started
        </a>
        <a
          href="#services"
          className="rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-white transition"
        >
          Our Services
        </a>
      </div>

    
    </div>
  </div>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />

  {/* floating orb */}
  <div className="pointer-events-none absolute right-6 top-10 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-sky-400/30 to-emerald-300/30 blur-2xl" />
</section>

    )
}
export default Hero;