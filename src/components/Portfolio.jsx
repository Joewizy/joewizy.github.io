"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Send,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#F7F5F0] text-[#1A1A1A] min-h-screen font-dm-mono">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F5F0]/80 backdrop-blur-md shadow-sm border-b border-[#E8E4DC]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-syne font-bold text-xl">JG</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm">
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#00C896] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-[#00C896] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-[#00C896] transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#00C896] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#E8E4DC]/50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F7F5F0] border-t border-[#E8E4DC]"
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-2 hover:bg-[#00C896]/10 rounded-lg transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-4 py-2 hover:bg-[#00C896]/10 rounded-lg transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-4 py-2 hover:bg-[#00C896]/10 rounded-lg transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 hover:bg-[#00C896]/10 rounded-lg transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-7xl mb-6 leading-tight"
          >
            Joseph Gimba
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A]/70 mb-12 max-w-3xl"
          >
            Smart Contract Engineer & Blockchain Security Researcher
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl"
          >
            <StatCounter
              end={6}
              label="Years in Crypto"
              suffix="+"
              delay={0.4}
            />
            <StatCounter
              end={20}
              label="Open Source PRs"
              suffix="+"
              delay={0.5}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://github.com/Joewizy"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-[#1A1A1A] text-[#F7F5F0] rounded-lg font-medium hover:bg-[#00C896] transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5"
            >
              View GitHub
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://docs.google.com/document/d/1424MX1R7vfn60v7Cv_YRkr-kCXOJVrPktdT7bjEBsjY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-lg font-medium hover:bg-[#1A1A1A] hover:text-[#F7F5F0] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Resume
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => scrollToSection("featured")}
            className="mt-16 flex items-center gap-2 text-[#1A1A1A]/50 hover:text-[#00C896] transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="bounce-icon w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* Featured Project */}
      <section id="featured" className="py-20 px-4 sm:px-6 lg:px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl mb-8">
              Featured Project
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#1A1A1A] rounded-2xl p-6 text-[#F7F5F0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-syne font-bold text-2xl sm:text-3xl mb-1">
                  Akio World NFT
                </h3>
                <p className="text-[#F7F5F0]/60">
                  Premium NFT collection on Ethereum
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FF6B35]/20 border border-[#FF6B35]/30 rounded-full">
                <span className="text-xs text-[#FF6B35] font-medium">
                  Live on Ethereum
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-3">
              <div>
                <div className="text-xl sm:text-2xl font-syne font-bold text-[#00C896] mb-1">
                  3,338
                </div>
                <div className="text-[#F7F5F0]/60 text-xs sm:text-sm">
                  Total Mints
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-syne font-bold text-[#00C896] mb-1">
                  0.025 ETH
                </div>
                <div className="text-[#F7F5F0]/60 text-xs sm:text-sm">
                  Mint Price
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-syne font-bold text-[#00C896] mb-1">
                  $330K+
                </div>
                <div className="text-[#F7F5F0]/60 text-xs sm:text-sm">
                  Total Volume
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              <a
                href="https://www.akioworld.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#00C896] text-[#1A1A1A] rounded-lg font-medium hover:bg-[#00C896]/90 transition-colors flex items-center gap-2 text-sm"
              >
                Visit Website
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://opensea.io/collection/akioworld"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
              >
                View on OpenSea
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1A1A1A] rounded-2xl p-6 text-[#F7F5F0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-syne font-bold text-2xl sm:text-3xl mb-1">
                  KhoopDefi
                </h3>
                <p className="text-[#F7F5F0]/60">
                  Onchain FIFO queue with O(1) slot processing and automated cycle distribution.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FF6B35]/20 border border-[#FF6B35]/30 rounded-full flex-shrink-0">
                <span className="text-xs text-[#FF6B35] font-medium">
                  Live on BNB
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-3">
              <div>
                <div className="text-xl sm:text-2xl font-syne font-bold text-[#00C896] mb-1">
                  $7.6K
                </div>
                <div className="text-[#F7F5F0]/60 text-xs sm:text-sm">
                  Total Volume
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              <a
                href="https://khoop-defi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#00C896] text-[#1A1A1A] rounded-lg font-medium hover:bg-[#00C896]/90 transition-colors flex items-center gap-2 text-sm"
              >
                Vist Website
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl mb-8">
              Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Swap Chain"
              description="AI-powered cross-chain swap execution across 85+ chains. 
              Natural language intent → Relay SDK routing for EVM/Solana/Sui, 
              AutoSwappr for Starknet. Real-time quotes and live route tracking."
              tags={["AI", "Relay SDK", "85+ Chains",]}
              liveUrl="https://swapchain.vercel.app/dashboard/transfer"
              index={1}
            />
            <ProjectCard
              title="SolVault ERC-4626"
              description="ERC-4626 tokenized vault implementation on EVM. Standardized deposit/withdraw/redeem interface with automated yield accounting and position tracking."
              tags={["Solidity", "ERC-4626", "Vaults", "Rust"]}
              liveUrl="https://solvault-five.vercel.app/"
              githubUrl="https://github.com/Joewizy/solvault-4626"
              index={8}
            />
            <ProjectCard
              title="SolStruct"
              description="Rust CLI that scaffolds production-ready Solidity contracts 
              enforcing security best practices and industry-standard code layout. 
              ERC standards and minimal templates via OpenZeppelin."
              tags={["Rust", "CLI", "ERC20", "Security Patterns"]}
              githubUrl="https://github.com/Joewizy/solStruct"
              index={4}
            />
            <ProjectCard
              title="BlocklessFund"
              description="DAO crowdfunding with commit-reveal voting and Chainlink VRF for automated fund releases when campaign goals are met."
              tags={["Solidity", "DAO", "Chainlink",]}
              liveUrl="https://blockless-fund.vercel.app/"
              githubUrl="https://github.com/Joewizy/BlocklessFund"
              index={5}
            />
            <ProjectCard
              title="Trade Barter"
              description="Decentralized P2P crypto-to-fiat exchange on Sui blockchain a trustless escrow system with AI-powered dispute resolution."
              tags={["Move", "Sui", "Escrow", "AI", "P2P"]}
              liveUrl="https://trade-barter-ten.vercel.app/"
              githubUrl="https://github.com/Joewizy/Decentralized-P2P-System"
              index={6}
            />
           <ProjectCard
              title="Shadow Dog"
              description="Monad testnet game with gasless transactions, Privy auth, and vanilla JS/CSS architecture to stress-test sub-second finality."
              tags={["Monad", "Privy", "Vanilla JS", "AA"]}
              liveUrl="https://japadog.netlify.app/"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl mb-8">
              Skills & Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillGroup
              title="Smart Contract Development"
              skills={["Solidity", "Foundry", "EVM", "Rust", "Move"]}
              color="#00C896"
              index={0}
            />
            <SkillGroup
              title="Security & Auditing"
              skills={["Security Audits", "Vulnerability Analysis", "CTF Competitions", "Slither", "Echidna", "Aderyn", "Foundry Fuzz"]}
              color="#FF6B35"
              index={1}
            />
            <SkillGroup
              title="Development Tools"
              skills={["Hardhat", "Anvil", "Cast", "EthersJs", "Web3Js"]}
              color="#00C896"
              index={2}
            />
            <SkillGroup
              title="DevOps & Infrastructure"
              skills={["AWS", "CI/CD", "Tenderly", "The Graph", "Node.js"]}
              color="#FF6B35"
              index={3}
            />
            <SkillGroup
              title="Frontend Engineering"
              skills={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
              color="#00C896"
              index={4}
            />
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl mb-8">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-4xl">
            <ExperienceItem
              company="DeFi Lords"
              role="Blockchain Developer"
              period="Aug 2024 – Present"
              isCurrent={true}
              index={0}
            />
            <ExperienceItem
              company="NITDA"
              role="Blockchain Developer & Educator"
              period="Mar 2024 – 2025"
              isCurrent={false}
              index={1}
            />
            <ExperienceItem
              company="Freelance Contractor"
              role="Smart Contract Engineer"
              period="2023 – Present"
              isCurrent={true}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl mb-8">
              Open Source Contributions
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "SpotNet",
              "AutoSwappr",
              "DeRisk",
              "Boundless",
              "StarkMate",
              "Stellar Insights",
            ].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-4 border border-[#E8E4DC] rounded-lg text-center hover:border-[#00C896] hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-[#F7F5F0]"
              >
                <div className="text-sm font-medium">{project}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Let's build secure, scalable solutions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <SocialLink
              href="https://github.com/Joewizy"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/joseph-gimba-45b915306/"
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://www.twitter.com/Brucewayne82118"
              icon={<Twitter className="w-5 h-5" />}
              label="Twitter"
            />
            <SocialLink
              href="https://medium.com/@joewigimbasin"
              icon={<Send className="w-5 h-5" />}
              label="Medium"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#1A1A1A]/50">
          <p>© 2026 Joseph Gimba. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');
        
        .font-syne {
          font-family: 'Syne', sans-serif;
        }
        
        .font-dm-mono {
          font-family: 'DM Mono', monospace;
        }

        html {
          scroll-behavior: smooth;
        }

        .pulse-dot {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .bounce-icon {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  );
}

// Counter Component
function StatCounter({ end, label, prefix = "", suffix = "", delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 border border-[#E8E4DC] rounded-xl hover:border-[#00C896] transition-colors bg-white/50"
    >
      <div className="text-3xl sm:text-4xl font-syne font-bold text-[#00C896] mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm text-[#1A1A1A]/60">{label}</div>
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({ title, description, tags, liveUrl, githubUrl, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 border border-[#E8E4DC] rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80"
    >
      <h3 className="font-syne font-bold text-2xl mb-3 group-hover:text-[#00C896] transition-colors">
        {title}
      </h3>
      <p className="text-[#1A1A1A]/70 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#00C896]/10 text-[#00C896] text-xs rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#1A1A1A] text-[#F7F5F0] rounded-lg text-sm font-medium hover:bg-[#00C896] transition-colors flex items-center gap-2"
          >
            Live Demo
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#E8E4DC] rounded-lg text-sm font-medium hover:border-[#1A1A1A] transition-colors flex items-center gap-2"
          >
            <Github className="w-3 h-3" />
            Code
          </a>
        )}
      </div>
    </motion.div>
  );
}

// Skill Group Component
function SkillGroup({ title, skills, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 border border-[#E8E4DC] rounded-xl bg-white/80"
    >
      <h3 className="font-syne font-bold text-lg mb-4" style={{ color }}>
        {title}
      </h3>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-3 py-2 bg-[#F7F5F0] border border-[#E8E4DC] rounded-lg text-sm hover:border-[#00C896] transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Experience Item Component
function ExperienceItem({ company, role, period, isCurrent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4 group"
    >
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            isCurrent
              ? "bg-[#00C896] border-[#00C896] shadow-lg shadow-[#00C896]/50"
              : "bg-[#F7F5F0] border-[#E8E4DC]"
          }`}
        ></div>
        <div className="w-0.5 h-full bg-[#E8E4DC] mt-2"></div>
      </div>

      <div className="pb-8 flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="font-syne font-bold text-xl group-hover:text-[#00C896] transition-colors">
            {company}
          </h3>
          {isCurrent && (
            <span className="px-3 py-1 bg-[#00C896]/10 text-[#00C896] text-xs rounded-full font-medium">
              CURRENT
            </span>
          )}
        </div>
        <p className="text-[#1A1A1A]/70 mb-1">{role}</p>
        <p className="text-sm text-[#1A1A1A]/50">{period}</p>
      </div>
    </motion.div>
  );
}

// Social Link Component
function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 border-2 border-[#1A1A1A] rounded-lg font-medium hover:bg-[#1A1A1A] hover:text-[#F7F5F0] transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5"
    >
      {icon}
      {label}
    </a>
  );
}
