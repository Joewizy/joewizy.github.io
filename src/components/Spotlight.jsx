import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

// A manual left/right carousel of project screenshots.
const SLIDES = [
  {
    img: "/projects/railglide.png",
    title: "Railglide",
    desc: "Non-custodial stablecoin payments. Ask in plain English and it routes the best path across four rails, then cashes out to a bank. Web and mobile.",
    tags: "Next.js · TypeScript · AI routing",
    href: "https://railglide.xyz",
    code: "https://github.com/Joewizy/Railglide",
  },
  {
    img: "/projects/tradebarter.png",
    title: "Trade Barter",
    desc: "A peer-to-peer crypto-to-fiat exchange on Sui. Trustless escrow holds the funds, and an AI steps in to settle disputes.",
    tags: "Move · Sui · Escrow",
    href: "https://trade-barter-ten.vercel.app/",
    code: "https://github.com/Joewizy/Decentralized-P2P-System",
  },
  {
    img: "/projects/ocean.png",
    title: "Ocean",
    desc: "An NFT marketplace for art about sports and nature. Mint, collect and trade from your own profile.",
    tags: "NFT · Marketplace",
    href: "https://ocean-sport.vercel.app/",
    code: null,
  },
];

export default function Spotlight() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;
  const slide = SLIDES[i];
  const go = (dir) => setI((prev) => (prev + dir + n) % n);

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-[#1e2833] bg-[#080b0f]">
      <div
        className="group relative"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
      >
        <div className="aspect-[16/9] w-full">
          <img
            key={slide.img}
            src={slide.img}
            alt={slide.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 rounded-full border border-[#1e2833] bg-[#0b0f14]/80 p-1.5 text-[#e6edf3] backdrop-blur transition-colors hover:border-[#56e1c4] hover:text-[#56e1c4]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next project"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full border border-[#1e2833] bg-[#0b0f14]/80 p-1.5 text-[#e6edf3] backdrop-blur transition-colors hover:border-[#56e1c4] hover:text-[#56e1c4]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* caption */}
      <div className="flex items-start justify-between gap-4 border-t border-[#1e2833] px-4 py-4">
        <div className="min-w-0">
          <h3 className="f-display text-base font-bold tracking-tight">{slide.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-[#8b97a6]">{slide.desc}</p>
          {slide.tags && <p className="mt-2 f-mono text-[0.65rem] text-[#56e1c4]">{slide.tags}</p>}
        </div>
        <div className="flex shrink-0 items-center gap-3 pt-1">
          {slide.code && (
            <a href={slide.code} target="_blank" rel="noreferrer" aria-label={`${slide.title} source`} className="text-[#8b97a6] transition-colors hover:text-[#56e1c4]">
              <Github className="h-[18px] w-[18px]" />
            </a>
          )}
          {slide.href && (
            <a href={slide.href} target="_blank" rel="noreferrer" aria-label={`Open ${slide.title}`} className="text-[#8b97a6] transition-colors hover:text-[#56e1c4]">
              <ExternalLink className="h-[18px] w-[18px]" />
            </a>
          )}
          <div className="ml-1 flex items-center gap-1.5">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-4 bg-[#56e1c4]" : "w-1.5 bg-[#1e2833] hover:bg-[#2b3947]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
