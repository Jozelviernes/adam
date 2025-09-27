

function Hero () {
 
    return (
 <section id="home" className="relative z-0 min-h-screen">
  {/* Background image + overlays */}
  <div className="absolute inset-0 z-0">

  <img
    src="/image/heroPage.png"
    alt="Executive workspace"
    className="h-full w-full object-cover object-top"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>





  </div>

  {/* Foreground content */}
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
  <div className="max-w-2xl">
  {/* Light badge with brand accent */}
  <p className="mb-4 inline-flex items-center gap-2 rounded-full
                bg-white px-3 py-1 text-xs font-medium text-slate-700
                ring-1 ring-[#c8a96a]/50 shadow-sm">
    <span className="inline-block h-2 w-2 rounded-full bg-[#c8a96a]" />
    Professional Accounting Firm
  </p>

  {/* Headline */}
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight 
               text-white leading-tight drop-shadow-md">
  Clarity for every <span className="text-[#c8a96a]">financial</span> decision.
</h1>

{/* Subtext */}
<p className="mt-6 text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl">
  <span className="font-semibold text-white">Accuracy</span> • 
  <span className="font-semibold text-[#c8a96a]"> Diligence</span> • 
  <span className="font-semibold text-white"> Accountability</span> • 
  <span className="font-semibold text-[#c8a96a]"> Mastery</span> — 
  <span className="font-semibold text-white"> ADAM Co.</span> delivers 
  modern, trustworthy accounting and tax solutions so leaders can act with confidence.
</p>


  {/* CTA buttons */}
  <div className="mt-8 flex flex-wrap items-center gap-4">
    <a
      href="#contact"
      className="rounded-full bg-[#0f2740] 
                 px-6 py-3 text-sm font-semibold text-white shadow-md
                 hover:opacity-95 hover:scale-105 transition"
    >
      Get Started
    </a>
    <a
      href="#services"
      className="rounded-full border border-slate-200 bg-white
                 px-6 py-3 text-sm font-semibold text-slate-800
                 shadow-sm hover:shadow-md hover:scale-105 transition"
    >
      Our Services
    </a>
  </div>

  {/* Accent underline */}
  <div className="mt-8 h-px w-28 bg-gradient-to-r from-[#c8a96a] to-[#0f2740] rounded-full" />
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
  {/* Card 1 */}
  <div className="group p-[1px] rounded-xl bg-gradient-to-br from-[#c8a96a]/40 to-[#0f2740]/30">
    <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm
                    transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div className="flex flex-col items-center text-center">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full
                        bg-[#0f2740] text-[#c8a96a] shadow transition-transform duration-300
                        group-hover:scale-105">
          {/* ripple */}
          <span className="absolute inset-0 rounded-full ring-2 ring-[#c8a96a]/40
                           opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
          {/* icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="mt-3 text-sm font-semibold text-slate-900">Trusted Process</h3>
        <p className="mt-1 text-xs text-slate-600">Transparent workflows clients can rely on.</p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="group p-[1px] rounded-xl bg-gradient-to-br from-[#c8a96a]/40 to-[#0f2740]/30">
    <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm
                    transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div className="flex flex-col items-center text-center">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full
                        bg-[#0f2740] text-[#c8a96a] shadow transition-transform duration-300
                        group-hover:scale-105">
          <span className="absolute inset-0 rounded-full ring-2 ring-[#c8a96a]/40
                           opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-3.314 0-6 1.567-6 3.5V18h12v-1.5c0-1.933-2.686-3.5-6-3.5z" />
          </svg>
        </div>

        <h3 className="mt-3 text-sm font-semibold text-slate-900">Dedicated Team</h3>
        <p className="mt-1 text-xs text-slate-600">Partners focused on clarity and accuracy.</p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="group p-[1px] rounded-xl bg-gradient-to-br from-[#c8a96a]/40 to-[#0f2740]/30">
    <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm
                    transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div className="flex flex-col items-center text-center">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full
                        bg-[#0f2740] text-[#c8a96a] shadow transition-transform duration-300
                        group-hover:scale-105">
          <span className="absolute inset-0 rounded-full ring-2 ring-[#c8a96a]/40
                           opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M12 3v18" />
          </svg>
        </div>

        <h3 className="mt-3 text-sm font-semibold text-slate-900">Future-Ready</h3>
        <p className="mt-1 text-xs text-slate-600">Modern tools for growth and efficiency.</p>
      </div>
    </div>
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