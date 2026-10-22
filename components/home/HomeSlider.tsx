"use client";

const HomeSlider = () => {
  return (
    <section className="relative w-full bg-[#EAECEF] overflow-hidden py-6 sm:py-10 px-4 sm:px-6 lg:px-8 xl:px-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative w-full h-[280px] sm:h-[420px] md:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-slate-300/80 shadow-xl bg-slate-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.mantafoils.com/wp-content/uploads/2026/10/Website-Home-Banner-10Sec-dg.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 flex flex-col gap-1 text-white">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-md w-fit border border-white/20">
              Manta Foils Action
            </span>
            <p className="text-lg sm:text-2xl font-bold tracking-tight drop-shadow-md">
              Electrify Your Foiling Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
