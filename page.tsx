'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Entry Animations
    gsap.fromTo(".hero-name", 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" }
    );

    gsap.fromTo(".hero-tag", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power4.out" }
    );
  }, []);

  const projects = [
    {
      title: "AI Media Generation Engine",
      desc: "Hyper-realistic cinematic environments, detailed mythic scene compositions, and advanced video-prompt pipelines using state-of-the-art generative AI models.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Python Automation & Incident Management",
      desc: "Custom automated workflows and cross-platform integrations designed to streamline incident resolution tracks and optimize service reliability frameworks.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Relational Infrastructure System",
      desc: "A performant, structured database application built with native Java and SQLite, utilizing robust triggers and fine-tuned transactional operations.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop"
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="text-lg font-bold tracking-tight">Pratyush Rajpoot</div>
        <div className="flex gap-6 md:gap-8 text-xs uppercase tracking-widest text-neutral-400">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="mailto:contact@pratyushrajpoot.com" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl">
          <h1 className="hero-name select-none tracking-tighter text-white">PRATYUSH RAJPOOT</h1>
          <p className="hero-tag text-2xl md:text-4xl mt-6 font-light text-neutral-400">
            AI Media Engineer &amp; Automation Developer
          </p>
          <p className="mt-8 text-sm md:text-base max-w-md mx-auto opacity-50 font-light leading-relaxed">
            Building cinematic interfaces, generative media tools, and high-performance automated solutions.
          </p>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="px-6 pb-32 max-w-5xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-12 border-b border-neutral-900 pb-4">Selected Work</h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6 bg-neutral-900 border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-101 group-hover:opacity-90"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight transition-colors group-hover:text-neutral-300">{project.title}</h3>
              <p className="text-base mt-3 opacity-60 font-light leading-relaxed max-w-2xl">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT & CONTACT */}
      <section id="about" className="px-6 py-24 border-t border-neutral-900 bg-neutral-950/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-8">About</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300">
            I specialize in combining sophisticated automated workflows with generative media systems. From architecting rigorous backend database foundations to building cinematic, highly immersive interactive environments, I engineer digital platforms that are both resilient and visually impactful.
          </p>
          
          <div className="mt-16 pt-12 border-t border-neutral-900">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Get in touch:</p>
            <a href="mailto:contact@pratyushrajpoot.com" className="text-2xl md:text-4xl font-bold hover:text-neutral-400 transition-colors mt-3 inline-block tracking-tight text-white">
              contact@pratyushrajpoot.com
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center py-12 border-t border-neutral-900 text-neutral-600 text-xs tracking-wider uppercase">
        © 2026 Pratyush Rajpoot. All rights reserved.
      </footer>
    </main>
  );
}
