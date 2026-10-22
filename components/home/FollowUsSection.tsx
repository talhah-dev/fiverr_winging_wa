const videos = [
  {
    id: "ZMsgpieqSg0",
    title: "AFS Blackbird Wing Foil Review",
    src: "https://www.youtube.com/embed/ZMsgpieqSg0?si=cEThxzlqGZyjm28t",
  },
  {
    id: "TVg2BPqwQsk",
    title: "Manta Foil Assist in Action",
    src: "https://www.youtube.com/embed/TVg2BPqwQsk?si=sHPgPqni-JHZDPW8",
  },
];

const FollowUsSection = () => {
  return (
    <section className="relative w-full bg-[#ECEEF2] py-20 lg:py-24 text-slate-900 overflow-hidden border-t border-slate-300/80">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-bold tracking-wider uppercase text-rose-600">
            Community & Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Follow Us On Facebook Winging WA
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Catch the latest reviews, sessions, and gear updates from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-300 bg-white shadow-md group transition-all duration-300 hover:shadow-xl"
            >
              <iframe
                src={video.src}
                title={video.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUsSection;
