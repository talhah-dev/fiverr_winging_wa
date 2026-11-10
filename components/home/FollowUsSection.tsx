"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const defaultVideos = [
  {
    id: "ZMsgpieqSg0",
    title: "AFS Blackbird Wing Foil Review",
    src: "https://www.youtube.com/embed/ZMsgpieqSg0",
  },
  {
    id: "TVg2BPqwQsk",
    title: "The TakeOff Flow & TakeOff Air | Manta Foils",
    src: "https://www.youtube.com/embed/TVg2BPqwQsk",
  },
];

const FollowUsSection = () => {
  const [videos, setVideos] = useState(defaultVideos);

  useEffect(() => {
    fetch("/api/youtube-links")
      .then((res) => res.json())
      .then((res) => {
        if (res.success && Array.isArray(res.data) && res.data.length > 0) {
          setVideos(
            res.data.map((v: { id: string; title: string; embedSrc?: string; videoId?: string }) => ({
              id: v.videoId || v.id,
              title: v.title,
              src: v.embedSrc || `https://www.youtube.com/embed/${v.videoId || v.id}`,
            }))
          );
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="relative w-full bg-[#4A505B] py-20 lg:py-24 text-white overflow-hidden border-t border-white/15">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              Follow Us On Facebook &amp; Instagram
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-normal">
              Catch the latest reviews, sessions, and gear updates from our community
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="https://www.facebook.com/WingingWA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Winging WA"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/10 text-white hover:bg-[#ef0e0a] hover:border-[#ef0e0a] transition-all text-sm font-semibold shadow-xs"
            >
              <FaFacebookF className="size-4" />
              <span>Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/winging_wa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Winging WA"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/10 text-white hover:bg-[#ef0e0a] hover:border-[#ef0e0a] transition-all text-sm font-semibold shadow-xs"
            >
              <FaInstagram className="size-4" />
              <span>Instagram</span>
            </Link>
          </div>
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
