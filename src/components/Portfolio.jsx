import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  PenLine,
  Mail,
  ArrowUpRight,
  Folder,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import AsciiPortrait from "./AsciiPortrait";
import Typewriter from "./Typewriter";
import Spotlight from "./Spotlight";

const NAV = [
  ["about", "about"],
  ["stack", "stack"],
  ["work", "work"],
  ["now", "now"],
  ["experience", "experience"],
  ["contact", "contact"],
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="page-bg relative min-h-screen bg-[#0b0f14] text-[#e6edf3]">
      <div className="relative z-10">
        {/* ── Nav ─────────────────────────────────────────── */}
        <nav
          className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#1e2833] bg-[#0b0f14]/80 backdrop-blur-md"
              : "border-b border-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
            <button onClick={() => go("top")} className="f-display text-lg font-bold tracking-tight">
              Joseph <span className="text-[#56e1c4]">Gimba</span>
            </button>

            <div className="hidden items-center gap-6 md:flex">
              {NAV.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="f-mono text-[0.8rem] text-[#8b97a6] transition-colors hover:text-[#56e1c4]"
                >
                  {label}
                </button>
              ))}
              <div className="mx-1 h-4 w-px bg-[#1e2833]" />
              <div className="flex items-center gap-4 text-[#8b97a6]">
                <a href="https://github.com/Joewizy" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#56e1c4]" aria-label="GitHub"><Github className="h-[18px] w-[18px]" /></a>
                <a href="https://www.linkedin.com/in/joseph-gimba-45b915306/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#56e1c4]" aria-label="LinkedIn"><Linkedin className="h-[18px] w-[18px]" /></a>
              </div>
            </div>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="rounded-md p-1.5 text-[#e6edf3] transition-colors hover:bg-[#141c25] md:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="overflow-hidden border-t border-[#1e2833] bg-[#0b0f14] md:hidden"
            >
              <div className="space-y-1 px-5 py-4">
                {NAV.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => go(id)}
                    className="f-mono block w-full rounded-md px-3 py-2 text-left text-sm text-[#8b97a6] hover:bg-[#141c25] hover:text-[#56e1c4]"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </nav>

        {/* ── Hero ────────────────────────────────────────── */}
        <header id="top" className="hero-glow relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 pb-20 pt-32 sm:px-8 md:flex-row md:justify-between md:pt-40 lg:gap-16">
          <div className="relative z-10 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="f-mono mb-5 text-sm text-[#56e1c4]"
            >
              {"// software engineer · backend & smart contracts"}
            </motion.p>

            <h1 className="f-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              hi, I'm{" "}
              <span className="text-[#56e1c4]">
                <Typewriter text="Joe." />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-[#8b97a6] sm:text-lg"
            >
              I'm a software engineer who builds{" "}
              <span className="text-[#e6edf3]">backends and smart contracts</span>, mostly in
              Solidity, Rust and TypeScript. These days most of my time goes to{" "}
              <a href="https://railglide.xyz" target="_blank" rel="noreferrer" className="text-[#56e1c4] underline decoration-[#56e1c4]/30 underline-offset-4 hover:decoration-[#56e1c4]">
                Railglide
              </a>
              , a non-custodial app for buying, selling and swapping stablecoins. I also break
              contracts for bounties.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://docs.google.com/document/d/1424MX1R7vfn60v7Cv_YRkr-kCXOJVrPktdT7bjEBsjY/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-[#1e2833] px-5 py-2.5 f-mono text-sm text-[#e6edf3] transition-all hover:-translate-y-0.5 hover:border-[#56e1c4] hover:text-[#56e1c4]"
              >
                résumé
              </a>
              <a
                href="mailto:joewigimbasin@gmail.com"
                className="group flex items-center gap-2 rounded-md bg-[#56e1c4] px-5 py-2.5 f-mono text-sm font-medium text-[#04120e] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(86,225,196,0.6)]"
              >
                say hi
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          <div className="relative z-10 flex shrink-0 items-center justify-center pb-6 md:-translate-y-10">
            <AsciiPortrait src="/portraits/chrome.png" />
          </div>
        </header>

        <div className="flex justify-center pb-8">
          <button onClick={() => go("about")} className="f-mono flex flex-col items-center gap-1 text-xs text-[#8b97a6] transition-colors hover:text-[#56e1c4]">
            scroll
            <ChevronDown className="bounce-icon h-4 w-4" />
          </button>
        </div>

        <main className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* ── About ─────────────────────────────────────── */}
          <Section id="about" label="/ about" title="a bit about me">
            <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-[#8b97a6]">
              <p>
                I studied Computer Engineering and have been around crypto for about six years,
                three of those building in it full time. Most of my work is backend systems and
                smart contracts, and I've shipped across{" "}
                <span className="text-[#e6edf3]">Ethereum, Base, BNB Chain, Solana, Sui and Starknet</span>.
              </p>
              <p>
                I like building the whole thing a protocol needs: contracts in Solidity, Rust or
                Move, the Node services that index and monitor them, and a frontend that doesn't get
                in the way. I also like breaking the things I build, whether that's auditing
                contracts, writing Foundry fuzz tests, or chasing bounties.
              </p>
              <p>
                Lately I've been exploring <span className="text-[#e6edf3]">AI</span> agents and RAG
                systems with the same approach: build something, break it, figure out why it works,
                and repeat.
              </p>
              <p>
                Outside of that, I'm usually gaming, playing sport, or in the gym.
              </p>
            </div>
          </Section>

          {/* ── Stack ─────────────────────────────────────── */}
          <Section id="stack" label="/ stack" title="what I build with">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <StackGroup title="Smart Contracts" items={["Solidity", "Rust", "Move", "Noir", "Foundry"]} />
              <StackGroup title="Backend" items={["TypeScript", "Node.js", "PostgreSQL", "Prisma", "REST", "GraphQL"]} />
              <StackGroup title="Infrastructure" items={["Docker", "GitHub Actions", "AWS", "The Graph", "Tenderly"]} />
              <StackGroup title="Security" items={["Foundry Fuzz", "Slither", "Echidna", "Aderyn"]} />
              <StackGroup title="Chains" items={["Ethereum", "Base", "BNB Chain", "Solana", "Sui", "Starknet"]} />
              <StackGroup title="Exploring" items={["LLM", "LangGraph", "Ollama", "ChromaDB"]} />
            </div>
          </Section>

          {/* ── Work ──────────────────────────────────────── */}
          <Section id="work" label="/ work" title="things I've shipped">
            {/* Screenshot carousel */}
            <div className="mb-10">
              <Spotlight />
            </div>

            {/* Featured projects */}
            <div className="grid gap-5 sm:grid-cols-2">
              <FeaturedCard
                title="KhoopDeFi"
                status="live · bnb chain"
                statusColor="#56e1c4"
                desc="A cycle-based payout protocol on BNB Chain with a strict FIFO queue. I built the payout system around constant-time slot processing to avoid unbounded iteration and keep gas usage predictable as the queue grows."
                tags={["Solidity", "Gas-optimized", "BNB Chain"]}
                primary={{ label: "live site", href: "https://khoop-defi.com/" }}
              >
                <div className="grid grid-cols-3 gap-3 border-t border-[#1e2833] pt-4">
                  <MiniStat value="O(1)" label="slot processing" />
                  <MiniStat value="FIFO" label="queue" />
                  <MiniStat value="Predictable" label="gas costs" />
                </div>
              </FeaturedCard>

              <FeaturedCard
                title="Akio World NFT"
                status="live on ethereum"
                statusColor="#f6a94a"
                desc="The minting stack behind an Ethereum NFT drop, including gas-optimized batch mints, delayed reveal, metadata infrastructure, and marketplace integration. The collection sold out."
                tags={["Solidity", "ERC-721", "Ethereum"]}
                primary={{ label: "visit site", href: "https://www.akioworld.com/" }}
                secondary={{ label: "opensea", href: "https://opensea.io/collection/akioworld" }}
              >
                <div className="grid grid-cols-3 gap-3 border-t border-[#1e2833] pt-4">
                  <MiniStat value="3,338" label="total mints" />
                  <MiniStat value="0.025 ETH" label="mint price" />
                  <MiniStat value="Sold out" label="collection" />
                </div>
              </FeaturedCard>
            </div>

            {/* More work */}
            <p id="projects" className="scroll-mt-24 mb-5 mt-12 f-mono text-sm text-[#8b97a6]">
              <span className="text-[#56e1c4]">//</span> more work
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="SolVault"
                desc="An ERC-4626 style tokenized vault on Solana. Standard deposit, withdraw and redeem, with the yield accounting handled for you."
                tags={["Solana", "Anchor", "Rust"]}
                live="https://solvault-five.vercel.app/"
                code="https://github.com/Joewizy/solvault-4626"
              />
              <ProjectCard
                title="BlocklessFund"
                desc="DAO crowdfunding with commit-reveal voting, so nobody sees your vote until it counts. Chainlink VRF releases the money once a goal is hit."
                tags={["Solidity", "DAO", "Chainlink"]}
                live="https://blockless-fund.vercel.app/"
                code="https://github.com/Joewizy/BlocklessFund"
              />
              <ProjectCard
                title="Shadow Dog"
                desc="A 2D JavaScript game built on Monad testnet with gasless transactions, mainly to experiment with onchain interactions and fast transaction finality."
                tags={["Vanilla JS", "Monad", "Privy"]}
                live="https://japadog.netlify.app/"
                code="https://github.com/Joewizy/Shadow-dog-game"
              />
            </div>
          </Section>

          {/* ── Now / exploring ───────────────────────────── */}
          <Section id="now" label="/ now" title="what I'm exploring">
            <div className="rounded-xl border border-[#1e2833] bg-[#10161d] p-6 sm:p-8">
              <p className="text-[15px] leading-relaxed text-[#8b97a6]">
                I'm exploring agentic systems with LangGraph, Ollama, Python and RAG. I'm mostly
                interested in how agents use tools, hold context, retrieve information, and work
                against real systems.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#8b97a6]">
                Right now I'm experimenting with agents for contract analysis, protocol monitoring,
                technical retrieval, and developer tooling.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["LangSmith", "LangGraph", "Ollama", "Python", "ChromaDB", "Pydantic", "FastAPI"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[#1e2833] bg-[#0b0f14] px-2.5 py-1 f-mono text-xs text-[#8b97a6]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Section>

          {/* ── Experience ────────────────────────────────── */}
          <Section id="experience" label="/ experience" title="where I've worked">
            <Experience />
          </Section>

          {/* ── Open source ───────────────────────────────── */}
          <Section id="open-source" label="/ open source" title="contributions">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {["SpotNet", "AutoSwappr", "DeRisk", "Boundless", "StarkMate", "Teamverse", "PredictX", "TrustLink", "SubTrackr", "Nestera"].map(
                (name) => (
                  <div
                    key={name}
                    className="rounded-md border border-[#1e2833] bg-[#10161d] px-3 py-4 text-center f-mono text-sm text-[#8b97a6] transition-all hover:-translate-y-1 hover:border-[#56e1c4]/40 hover:text-[#e6edf3]"
                  >
                    {name}
                  </div>
                )
              )}
            </div>
          </Section>
        </main>

        {/* ── Contact ─────────────────────────────────────── */}
        <section id="contact" className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8">
          <motion.p {...reveal} className="section-label mb-4">
            / contact
          </motion.p>
          <motion.h2 {...reveal} className="f-display text-4xl font-bold tracking-tight sm:text-5xl">
            let's build something onchain
          </motion.h2>
          <motion.p {...reveal} className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-[#8b97a6]">
            I'm looking for full-time work and the occasional interesting contract. Got a hard
            problem? I'll probably reply too fast.
          </motion.p>
          <motion.div {...reveal} className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:joewigimbasin@gmail.com"
              className="group flex items-center gap-2 rounded-md bg-[#56e1c4] px-6 py-3 f-mono text-sm font-medium text-[#04120e] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(86,225,196,0.6)]"
            >
              <Mail className="h-4 w-4" />
              say hi
            </a>
          </motion.div>
          <motion.div {...reveal} className="mt-8 flex justify-center gap-6 text-[#8b97a6]">
            <Social href="https://github.com/Joewizy" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <Social href="https://www.linkedin.com/in/joseph-gimba-45b915306/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            <Social href="https://www.twitter.com/Brucewayne82118" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            <Social href="https://medium.com/@joewigimbasin" icon={<PenLine className="h-5 w-5" />} label="Medium" />
          </motion.div>
        </section>

        <footer className="border-t border-[#1e2833] py-8 text-center">
          <p className="f-mono text-xs text-[#8b97a6]">
            designed & built by Joseph Gimba · <span className="text-[#56e1c4]">2026</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

/* ── Building blocks ─────────────────────────────────── */

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <motion.div {...reveal} className="mb-9 flex items-baseline gap-4">
        <h2 className="f-display whitespace-nowrap text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="section-label mr-2">{label}</span>
          {title}
        </h2>
        <span className="h-px w-full max-w-xs bg-[#1e2833]" />
      </motion.div>
      <motion.div {...reveal}>{children}</motion.div>
    </section>
  );
}

function MiniStat({ value, label }) {
  return (
    <div>
      <div className="f-display text-lg font-bold text-[#56e1c4]">{value}</div>
      <div className="f-mono text-[0.65rem] text-[#8b97a6]">{label}</div>
    </div>
  );
}

function StackGroup({ title, items }) {
  return (
    <div className="rounded-lg border border-[#1e2833] bg-[#10161d] p-5">
      <h3 className="f-mono mb-4 text-sm font-medium text-[#e6edf3]">
        <span className="text-[#56e1c4]">#</span> {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span
            key={i}
            className="rounded-md border border-[#1e2833] bg-[#0b0f14] px-2.5 py-1 f-mono text-xs text-[#8b97a6] transition-colors hover:border-[#56e1c4]/40 hover:text-[#56e1c4]"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedCard({ title, status, statusColor, desc, tags, primary, secondary, children }) {
  return (
    <div className="folder-card flex flex-col p-6">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="f-display text-2xl font-bold tracking-tight">{title}</h3>
        <span
          className="flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 f-mono text-[0.65rem]"
          style={{ color: statusColor, borderColor: `${statusColor}55`, background: `${statusColor}14` }}
        >
          <span className="pulse-dot h-1.5 w-1.5 rounded-full" style={{ background: statusColor }} />
          {status}
        </span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-[#8b97a6]">{desc}</p>
      {children}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="f-mono text-[0.7rem] text-[#56e1c4]">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <a
          href={primary.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-md bg-[#56e1c4] px-4 py-2 f-mono text-xs font-medium text-[#04120e] transition-colors hover:bg-[#56e1c4]/90"
        >
          {primary.label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        {secondary && (
          <a
            href={secondary.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-[#1e2833] px-4 py-2 f-mono text-xs text-[#e6edf3] transition-colors hover:border-[#56e1c4] hover:text-[#56e1c4]"
          >
            <Github className="h-3.5 w-3.5" />
            {secondary.label}
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tags, live, code }) {
  const href = live || code;
  return (
    <div className="folder-card group flex flex-col p-5">
      <div className="mb-4 flex items-center justify-between">
        <Folder className="h-8 w-8 text-[#56e1c4]" strokeWidth={1.4} />
        <div className="flex items-center gap-3 text-[#8b97a6]">
          {code && (
            <a href={code} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#56e1c4]" aria-label={`${title} source`}>
              <Github className="h-[18px] w-[18px]" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#56e1c4]" aria-label={`${title} live`}>
              <ArrowUpRight className="h-[18px] w-[18px]" />
            </a>
          )}
        </div>
      </div>
      <a href={href} target="_blank" rel="noreferrer" className="f-display mb-2 text-lg font-bold tracking-tight transition-colors group-hover:text-[#56e1c4]">
        {title}
      </a>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-[#8b97a6]">{desc}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        {tags.map((t) => (
          <span key={t} className="f-mono text-[0.7rem] text-[#8b97a6]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const JOBS = [
  {
    org: "DeFi Lords",
    title: "Lead Smart Contract Engineer",
    period: "Aug 2025 — May 2026",
    bullets: [
      "Led a borrowing and lending protocol with vaults and liquidation systems.",
      "Built AI rebalancer vaults with DeFi integrations across Aave, Morpho and others for automated yield.",
      "Built the backend and indexer for protocol monitoring, strategy execution and real-time tracking.",
    ],
  },
  {
    org: "NITDA",
    title: "Blockchain Developer & Educator",
    period: "Mar 2024 — 2025",
    bullets: [
      "Led Solidity development and tuned contracts for gas and security, cutting transaction costs by about 30%.",
      "Ran training that got teams comfortable building and shipping smart contracts.",
    ],
  },
  {
    org: "Freelance",
    title: "Software Engineer",
    period: "2021 — Present",
    bullets: [
      "Built websites and full-stack web apps for clients, front-ends plus the Node and backends behind them.",
      "Did blockchain work too: NFT marketplaces, real-estate tokenization, and gasless transactions.",
    ],
  },
  {
    org: "Khemsafe",
    title: "Intern",
    period: "2021",
    bullets: [
      "Web development and network administration; supported hardware and software maintenance.",
      "Worked on Arduino / Raspberry Pi automation projects.",
    ],
  },
];

function Experience() {
  const [active, setActive] = useState(0);
  const job = JOBS[active];
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-8">
      <div className="flex overflow-x-auto md:flex-col">
        {JOBS.map((j, i) => (
          <button
            key={j.org}
            onClick={() => setActive(i)}
            className={`tab-btn ${active === i ? "tab-btn--active" : ""}`}
          >
            {j.org}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex-1"
      >
        <h3 className="f-display text-xl font-bold">
          {job.title} <span className="text-[#56e1c4]">@ {job.org}</span>
        </h3>
        <p className="mt-1 f-mono text-xs text-[#8b97a6]">{job.period}</p>
        <ul className="mt-4 space-y-2.5">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#8b97a6]">
              <span className="mt-1 shrink-0 text-[#56e1c4]">▹</span>
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

function Social({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="transition-all hover:-translate-y-0.5 hover:text-[#56e1c4]"
    >
      {icon}
    </a>
  );
}
