const videos = [
  {
    id: "ZMsgpieqSg0",
    title: "AFS Blackbird Wing Foil Review",
    src: "https://www.youtube.com/embed/ZMsgpieqSg0?si=cEThxzlqGZyjm28t",
  },
  {
    id: "TVg2BPqwQsk",
    title: "The TakeOff Flow & TakeOff Air | Manta Foils",
    src: "https://www.youtube.com/embed/TVg2BPqwQsk?si=sHPgPqni-JHZDPW8",
  },
];

const FollowUsSection = () => {
  return (
    <section className="relative w-full bg-black py-20 lg:py-24 text-white overflow-hidden border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
            Follow Us On Facebook Winging WA
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-normal">
            Catch the latest reviews, sessions, and gear updates from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl group transition-all duration-300 hover:border-white/20"
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
