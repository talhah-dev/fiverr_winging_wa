export interface HomeYoutubeVideo {
  id: string;
  slotNumber: 1 | 2;
  title: string;
  youtubeUrl: string;
  embedSrc: string;
  videoId: string;
  description: string;
  category: "AFS Review" | "Manta Foil Assist" | "Tutorial" | "Community Session";
  updatedAt: string;
}

export const initialHomeYoutubeVideos: HomeYoutubeVideo[] = [
  {
    id: "yt-slot-1",
    slotNumber: 1,
    title: "AFS Blackbird Wing Foil Review",
    youtubeUrl: "https://www.youtube.com/watch?v=ZMsgpieqSg0",
    embedSrc: "https://www.youtube.com/embed/ZMsgpieqSg0",
    videoId: "ZMsgpieqSg0",
    description: "In-depth gear review and on-water performance testing of the AFS Blackbird foil and wing setup.",
    category: "AFS Review",
    updatedAt: "Oct 28, 2026",
  },
  {
    id: "yt-slot-2",
    slotNumber: 2,
    title: "The TakeOff Flow & TakeOff Air | Manta Foils",
    youtubeUrl: "https://www.youtube.com/watch?v=TVg2BPqwQsk",
    embedSrc: "https://www.youtube.com/embed/TVg2BPqwQsk",
    videoId: "TVg2BPqwQsk",
    description: "Official walkthrough and field test of the TakeOff Flow assist drive unit in choppy ocean swell.",
    category: "Manta Foil Assist",
    updatedAt: "Nov 02, 2026",
  },
];

export const sampleYoutubePresets = [
  {
    title: "AFS Blackbird Wing Foil Review",
    url: "https://www.youtube.com/watch?v=ZMsgpieqSg0",
    videoId: "ZMsgpieqSg0",
    category: "AFS Review" as const,
  },
  {
    title: "The TakeOff Flow & TakeOff Air | Manta Foils",
    url: "https://www.youtube.com/watch?v=TVg2BPqwQsk",
    videoId: "TVg2BPqwQsk",
    category: "Manta Foil Assist" as const,
  },
  {
    title: "Manta TakeOff Evo In-Depth Action Video",
    url: "https://www.youtube.com/watch?v=_JIKHGlZy8A",
    videoId: "_JIKHGlZy8A",
    category: "Manta Foil Assist" as const,
  },
  {
    title: "Swan River Light Wind Winging Session",
    url: "https://www.youtube.com/watch?v=EJO2ODJSG0o",
    videoId: "EJO2ODJSG0o",
    category: "Community Session" as const,
  },
];

export function extractYoutubeId(url: string): string {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : "";
}

