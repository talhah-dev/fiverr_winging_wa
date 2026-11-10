"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import {
  Video,
  Play,
  ExternalLink,
  Save,
  RefreshCw,
  Check,
  Sparkles,
  Link2,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa6";
import {
  HomeYoutubeVideo,
  initialHomeYoutubeVideos,
  extractYoutubeId,
} from "@/data/homeYoutubeVideos";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function YoutubeLinksManager() {
  const [videos, setVideos] = useState<HomeYoutubeVideo[]>(
    initialHomeYoutubeVideos
  );
  const [isLoading, setIsLoading] = useState(true);
  const [socialLinks, setSocialLinks] = useState({
    facebook: "https://www.facebook.com/WingingWA",
    instagram: "https://www.instagram.com/winging_wa",
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch("/api/youtube-links")
      .then((res) => res.json())
      .then((res) => {
        if (res.success && Array.isArray(res.data) && res.data.length > 0) {
          setVideos(res.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleUrlChange = (slotNumber: 1 | 2, newUrl: string) => {
    const extractedId = extractYoutubeId(newUrl);
    setVideos((prev) =>
      prev.map((v) => {
        if (v.slotNumber === slotNumber) {
          const finalId = extractedId || v.videoId;
          return {
            ...v,
            youtubeUrl: newUrl,
            videoId: finalId,
            embedSrc: `https://www.youtube.com/embed/${finalId}`,
          };
        }
        return v;
      })
    );
  };

  const handleTitleChange = (slotNumber: 1 | 2, newTitle: string) => {
    setVideos((prev) =>
      prev.map((v) =>
        v.slotNumber === slotNumber ? { ...v, title: newTitle } : v
      )
    );
  };

  const handleDescriptionChange = (
    slotNumber: 1 | 2,
    newDesc: string
  ) => {
    setVideos((prev) =>
      prev.map((v) =>
        v.slotNumber === slotNumber ? { ...v, description: newDesc } : v
      )
    );
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      await fetch("/api/youtube-links", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(videos),
      });
      showToast("Home page YouTube video links saved successfully!");
    } catch (err) {
      console.error(err);
      showToast("Error saving YouTube links to database.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetDefaults = () => {
    setVideos(initialHomeYoutubeVideos);
    setSocialLinks({
      facebook: "https://www.facebook.com/WingingWA",
      instagram: "https://www.instagram.com/winging_wa",
    });
    showToast("Reset to default home page video links.");
  };

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto w-full">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl bg-slate-900 border border-white/20 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="size-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ef0e0a]">
              Media & Social Content
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-500/15 text-red-300 border border-red-500/30">
              <FaYoutube className="size-3 text-[#ef0e0a]" />
              Home Page Featured Videos
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Home Page YouTube Links
          </h1>
          <p className="text-sm text-slate-300">
            Control the two YouTube community video embeds and social channels featured at the bottom of the home page.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            onClick={handleResetDefaults}
            variant="outline"
            size="sm"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10 cursor-pointer text-xs"
          >
            <RefreshCw className="size-3.5 mr-1.5" />
            Reset
          </Button>

          <Link
            href="/#socials"
            target="_blank"
            className="inline-flex items-center justify-center h-9 px-3.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors"
          >
            <Eye className="size-3.5 mr-1.5" />
            View Live on Home
          </Link>

          <Button
            onClick={handleSaveAll}
            disabled={isSaving}
            size="sm"
            className="bg-[#ef0e0a] hover:bg-[#c40c08] text-white font-semibold cursor-pointer shadow-sm text-xs"
          >
            <Save className="size-3.5 mr-1.5" />
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="bg-[#383D47] border-white/10 text-white overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <CardHeader className="p-5 pb-3 border-b border-white/10 bg-black/20 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-red-500/20 border border-red-500/30 text-[#ef0e0a] flex items-center justify-center font-bold text-xs">
                  #{video.slotNumber}
                </div>
                <div>
                  <CardTitle className="text-sm font-bold text-white flex items-center gap-2">
                    Video Slot {video.slotNumber}
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Active on Home
                    </span>
                  </CardTitle>
                  <span className="text-xs text-slate-400">
                    {video.slotNumber === 1 ? "Left Column Video" : "Right Column Video"}
                  </span>
                </div>
              </div>

              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
              >
                <span>ID: {video.videoId}</span>
                <ExternalLink className="size-3" />
              </a>
            </CardHeader>

            <CardContent className="p-5 flex flex-col gap-4">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/15 bg-black/50 shadow-inner">
                {video.videoId ? (
                  <iframe
                    src={video.embedSrc}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="size-full flex flex-col items-center justify-center text-slate-400 gap-2">
                    <Video className="size-10 text-slate-600" />
                    <span className="text-xs">Paste a valid YouTube link below to preview</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  YouTube Video URL or Share Link
                </label>
                <div className="relative">
                  <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                    value={video.youtubeUrl}
                    onChange={(e) =>
                      handleUrlChange(video.slotNumber, e.target.value)
                    }
                    className="w-full h-10 pl-9 pr-4 rounded-xl bg-black/30 border border-white/15 text-xs text-white placeholder:text-slate-500 font-mono focus:outline-hidden focus:border-[#ef0e0a]"
                  />
                </div>
                <span className="text-[11px] text-slate-400">
                  Paste any normal YouTube watch URL or shortened youtu.be link. The embed code is configured automatically.
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Video Title (Displayed on Hover / Accessibility)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AFS Blackbird Wing Foil Review"
                  value={video.title}
                  onChange={(e) =>
                    handleTitleChange(video.slotNumber, e.target.value)
                  }
                  className="w-full h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#ef0e0a]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Description / Session Notes
                </label>
                <textarea
                  rows={2}
                  value={video.description}
                  onChange={(e) =>
                    handleDescriptionChange(video.slotNumber, e.target.value)
                  }
                  className="w-full p-3 rounded-xl bg-black/30 border border-white/15 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#ef0e0a] leading-relaxed"
                  placeholder="Brief note about this video session..."
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-[#383D47] border-white/10 text-white">
        <CardHeader className="p-5 pb-3 border-b border-white/10">
          <CardTitle className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="size-4 text-[#ef0e0a]" />
            Associated Social Links in Home Page Section
          </CardTitle>
          <p className="text-xs text-slate-300">
            These social links are positioned directly above the two YouTube videos on the home page so riders can follow Winging WA.
          </p>
        </CardHeader>
        <CardContent className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <FaFacebookF className="size-3.5 text-blue-400" />
              Facebook Page URL
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={socialLinks.facebook}
                onChange={(e) =>
                  setSocialLinks({ ...socialLinks, facebook: e.target.value })
                }
                className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-xs text-white font-mono flex-1 focus:outline-hidden focus:border-[#ef0e0a]"
              />
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="size-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white border border-white/10 shrink-0"
              >
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <FaInstagram className="size-3.5 text-pink-400" />
              Instagram Profile URL
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={socialLinks.instagram}
                onChange={(e) =>
                  setSocialLinks({ ...socialLinks, instagram: e.target.value })
                }
                className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-xs text-white font-mono flex-1 focus:outline-hidden focus:border-[#ef0e0a]"
              />
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="size-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white border border-white/10 shrink-0"
              >
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

