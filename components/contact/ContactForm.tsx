"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send } from "lucide-react";

const interests = [
  "AFS Carbon Foils (Silk, Enduro, Flyer)",
  "AFS Stream Wings & Parawings",
  "Manta TakeOff Evo Assist Kit",
  "Manta Foil Assist Backpack",
  "WA In-Stock Inventory",
  "Arrange a Demo / Viewing",
  "Other Questions",
];

const ContactForm = () => {
  const searchParams = useSearchParams();
  const itemParam = searchParams.get("item");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: interests[0],
    message: "",
  });

  useEffect(() => {
    if (itemParam) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Hi Mark, I would like to enquire about pricing and availability for the ${itemParam}.`,
      }));
    }
  }, [itemParam]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full rounded-3xl border border-white/15 bg-white/[0.06] p-6 sm:p-10 shadow-xl relative text-white backdrop-blur-md">
      <div className="flex flex-col gap-2 pb-6 border-b border-white/10">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
          Enquiry Form
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Send Us a Message
        </h2>
        <p className="text-sm text-slate-200">
          Fill out your details below and Mark will get back to you promptly with pricing, setup advice, or availability.
        </p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="size-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">
            Message Sent Successfully!
          </h3>
          <p className="text-sm text-slate-200 max-w-md">
            Thank you, {formData.name || "friend"}. We have received your enquiry regarding {formData.interest}. Mark will be in touch with you shortly.
          </p>
          <div className="pt-4">
            <Button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  interest: interests[0],
                  message: "",
                });
              }}
              variant="outline"
              className="rounded-full px-6 border-white/20 text-white hover:bg-white/10 cursor-pointer"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-wider text-slate-200"
              >
                Your Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Mark Richards"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-11 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:border-[#E11D48] focus:bg-white/15 focus:outline-hidden transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-wider text-slate-200"
              >
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-11 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:border-[#E11D48] focus:bg-white/15 focus:outline-hidden transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-xs font-bold uppercase tracking-wider text-slate-200"
              >
                Phone Number <span className="text-rose-400">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="0400 000 000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="h-11 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:border-[#E11D48] focus:bg-white/15 focus:outline-hidden transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="interest"
                className="text-xs font-bold uppercase tracking-wider text-slate-200"
              >
                Gear Interest
              </label>
              <select
                id="interest"
                value={formData.interest}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value })
                }
                className="h-11 w-full rounded-xl border border-white/15 bg-[#4A505B] px-3.5 text-sm text-white focus:border-[#E11D48] focus:outline-hidden transition-all cursor-pointer"
              >
                {interests.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#4A505B] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-xs font-bold uppercase tracking-wider text-slate-200"
            >
              Message <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Type your message here... (e.g. foil sizes, your riding weight, board setup, or delivery location)"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded-xl border border-white/15 bg-white/10 p-4 text-sm text-white placeholder:text-white/40 focus:border-[#E11D48] focus:bg-white/15 focus:outline-hidden transition-all resize-y"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <p className="text-xs text-slate-300">
              Your details are kept strictly private and used only to respond to your enquiry.
            </p>

            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full sm:w-auto rounded-full px-8 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold cursor-pointer shadow-md shadow-rose-900/30 inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="size-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
