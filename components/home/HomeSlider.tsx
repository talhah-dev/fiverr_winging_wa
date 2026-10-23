"use client";

const HomeSlider = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-6 sm:py-8 border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="relative w-full h-[280px] sm:h-[420px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
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
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
