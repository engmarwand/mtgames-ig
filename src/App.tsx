import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronDown, Circle, Target, Zap, Gamepad2, Users, Trophy, DollarSign, AlertTriangle, Lightbulb, PlaySquare, CheckSquare, Square } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        const sectionTop = (s as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          current = s.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-purple/30">
      {/* COVER SECTION */}
      <section id="cover" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(124,58,237,0.35)_0%,transparent_60%),radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(6,182,212,0.2)_0%,transparent_60%),radial-gradient(ellipse_40%_30%_at_20%_90%,rgba(245,158,11,0.15)_0%,transparent_60%),var(--color-brand-bg)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[60px_60px]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-32 h-32 rounded-3xl border-2 border-brand-gold shadow-[0_0_40px_rgba(245,158,11,0.25),0_0_80px_rgba(124,58,237,0.3)] overflow-hidden mx-auto mb-8 bg-brand-card">
            <img
              src="/logo.png"
              alt="MTGames Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="font-display text-sm font-bold tracking-[4px] uppercase text-brand-gold mb-4">
            Clipur × MTGames · April 2026
          </div>

          <h1 className="font-display text-[clamp(42px,8vw,80px)] font-black uppercase leading-[0.95] tracking-tight mb-5">
            <span className="text-brand-purple-l">Campaign</span><br />
            <span className="text-brand-blue">Brief</span>
          </h1>

          <p className="text-lg text-brand-muted mb-10 max-w-xl mx-auto">
            Instagram Reels · Skill-Based Real Money Gaming
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
              🎯 First Deposit = Win
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-blue/15 text-brand-blue border border-brand-blue/30">
              📱 Instagram Reels Only
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-purple/15 text-brand-purple-l border border-brand-purple/30">
              ⚡ 80%+ Retention Target
            </span>
          </div>

          <div className="text-brand-muted text-sm flex items-center justify-center gap-2">
            Scroll to read the full brief <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-border px-6 overflow-x-auto">
        <div className="max-w-5xl mx-auto flex gap-1 py-3 whitespace-nowrap">
          {[
            { id: 'what', label: 'What Is MTGames' },
            { id: 'job', label: 'Your Job' },
            { id: 'angles', label: 'Angles' },
            { id: 'structure', label: 'Clip Structure' },
            { id: 'editing', label: 'Editing Rules' },
            { id: 'hooks', label: 'Hook Bank' },
            { id: 'scripts', label: 'Scripts' },
            { id: 'captions', label: 'Captions' },
            { id: 'unique', label: 'Unique Output' },
            { id: 'checklist', label: 'Checklist' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-colors ${activeSection === item.id
                ? 'text-brand-gold bg-brand-gold/10'
                : 'text-brand-muted hover:text-brand-text hover:bg-brand-card'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* CONTENT WRAPPER */}
      <main className="max-w-5xl mx-auto px-6 pb-20">

        {/* SECTION 1: WHAT IS MTGAMES */}
        <section id="what" className="py-20 border-b border-brand-border">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 01</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">What Is MTGames?</h2>

          <div className="rounded-xl p-5 md:p-6 mb-8 border border-brand-gold/30 bg-brand-gold/10 flex gap-3.5 items-start">
            <Trophy className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-gold mb-1">Skill-Based Real Money Gaming — NOT a Casino</div>
              <div className="text-brand-muted text-[15px]">Players compete head-to-head or in tournaments against real people. The platform takes a flat 17-cent fee per dollar. No house edge. No bots. Skill wins.</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
              <div className="font-display text-xs font-extrabold tracking-[3px] uppercase text-brand-blue mt-2 mb-3">The Game</div>
              <ul className="space-y-0">
                {[
                  "Tower climbing game where characters move up with the tower and dodge obstacles",
                  "Fast-paced, vertical, reflex-based gameplay — up or down movements",
                  "Raw videos + pre-edited examples already available for clippers",
                  "Players have facecam reactions — use them constantly"
                ].map((item, i) => (
                  <li key={i} className="py-2.5 border-b border-brand-border last:border-0 text-[15px] flex gap-2.5 items-start">
                    <span className="text-brand-gold font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
              <div className="font-display text-xs font-extrabold tracking-[3px] uppercase text-brand-blue mt-2 mb-3">The Platform</div>
              <ul className="space-y-0">
                {[
                  "Head-to-head cash duels and private tournaments",
                  "Transparent 17-cent rake per dollar — no hidden fees",
                  "Legal in 42 US states — skill competition, not gambling",
                  "Creators earn 50/50 rev-share on hosted tournaments"
                ].map((item, i) => (
                  <li key={i} className="py-2.5 border-b border-brand-border last:border-0 text-[15px] flex gap-2.5 items-start">
                    <span className="text-brand-gold font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl p-5 md:p-6 mt-6 border border-brand-blue/30 bg-brand-blue/10 flex gap-3.5 items-start">
            <Lightbulb className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-blue mb-1">The Core Message — Repeat This In Every Clip</div>
              <div className="text-brand-muted text-[15px]">"This is NOT gambling. There is no house. You are competing against real players. Skill decides who wins."</div>
            </div>
          </div>
        </section>

        {/* SECTION 2: YOUR JOB */}
        <section id="job" className="py-20 border-b border-brand-border">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 02</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">Your One Job</h2>

          <div className="rounded-xl p-5 md:p-6 mb-8 border border-brand-purple/30 bg-brand-purple/10 flex gap-3.5 items-start">
            <Target className="w-6 h-6 text-brand-purple-l shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-purple-l mb-1">Drive App Installs That Lead to a FIRST DEPOSIT</div>
              <div className="text-brand-muted text-[15px]">Views are nice. Installs matter. <strong className="text-brand-gold font-semibold">Deposits are the win.</strong> Before you post anything, ask: "Does this clip make someone want to download AND deposit?"</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
              <div className="font-display text-xs font-extrabold tracking-[3px] uppercase text-brand-blue mt-2 mb-3">Target Audience</div>
              <ul className="space-y-0">
                {[
                  "Ages 18–34, competitive, gaming-native",
                  "Mobile gamers frustrated by fake/rigged apps",
                  "Money-motivated — greed, ego, FOMO all work",
                  "People who play games with friends for fun"
                ].map((item, i) => (
                  <li key={i} className="py-2.5 border-b border-brand-border last:border-0 text-[15px] flex gap-2.5 items-start">
                    <span className="text-brand-gold font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
              <div className="font-display text-xs font-extrabold tracking-[3px] uppercase text-brand-blue mt-2 mb-3">What You Have</div>
              <ul className="space-y-0">
                {[
                  "Raw unedited gameplay footage of the tower game",
                  "Pre-edited examples from MTGames — use as quality reference",
                  "Facecam player reactions — use these constantly",
                  "Platform: Instagram Reels ONLY (this campaign)"
                ].map((item, i) => (
                  <li key={i} className="py-2.5 border-b border-brand-border last:border-0 text-[15px] flex gap-2.5 items-start">
                    <span className="text-brand-gold font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: ANGLES */}
        <section id="angles" className="py-20 border-b border-brand-border">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 03</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">Approved Content Angles</h2>
          <p className="text-brand-muted mb-6">Every clip MUST fit exactly one of these 5 angles. Do not mix multiple angles into one clip — pick one and commit to it fully.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "💰", name: "Money Proof", desc: "Show the money is real. Show wins. Show the payout.", ex: "I just made money playing this tower game." },
              { icon: "🧠", name: "Anti-Casino", desc: "Position vs rigged games and fake apps. Skill wins here.", ex: "This isn't gambling — you play real people, not the house." },
              { icon: "🏆", name: "Competition / Ego", desc: "Challenge the viewer. Hit their ego. Make them want to prove themselves.", ex: "I bet you can't beat my score on this." },
              { icon: "👥", name: "Social / Friends", desc: "Game nights, friend groups, tournaments together.", ex: "We turned game night into a $500 cash tournament." },
              { icon: "🎮", name: "Gameplay Addiction", desc: "Chaos, intensity, clutch saves, insane dodges. Reactions over explanation.", ex: "Fast intense gameplay with huge facecam reactions — no talking needed." }
            ].map((angle, i) => (
              <div key={i} className="bg-brand-card border border-brand-border rounded-xl p-5 transition-all hover:border-brand-gold hover:-translate-y-0.5">
                <div className="text-3xl mb-3">{angle.icon}</div>
                <div className="font-display text-lg font-extrabold uppercase text-brand-gold mb-2">{angle.name}</div>
                <p className="text-brand-muted text-sm mb-2">{angle.desc}</p>
                <div className="text-sm text-brand-muted italic border-l-2 border-brand-faint pl-3 mt-2">"{angle.ex}"</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-5 md:p-6 mt-6 border border-brand-gold/30 bg-brand-gold/10 flex gap-3.5 items-start">
            <Zap className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-gold mb-1">Best Angles For Instagram Reels (Start Here)</div>
              <div className="text-brand-muted text-[15px]">For Instagram Reels retention, lead with: <strong className="text-brand-gold font-semibold">🎮 Gameplay Addiction</strong> and <strong className="text-brand-gold font-semibold">🏆 Competition / Ego</strong> first. These drive the fastest hook and highest watch-through rate.</div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CLIP STRUCTURE */}
        <section id="structure" className="py-20 border-b border-brand-border">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 04</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">Clip Structure</h2>
          <p className="text-brand-muted mb-6">Use this exact structure every single time. The goal is <strong className="text-brand-gold font-semibold">80%+ average view duration</strong> on Instagram Reels. That means every second must earn its place.</p>

          <div className="flex flex-col mt-6">
            {[
              { time: "0–2s", label: "🎣 Hook", desc: "The most critical 2 seconds of the entire clip. Must be verbal AND visual simultaneously. Gameplay MUST be on screen already. If the first frame is a black screen or someone just talking — you already lost.", note: "If the hook fails, the rest of the clip is irrelevant. No exceptions." },
              { time: "2–6s", label: "⚡ Problem", desc: "Call out the pain fast. Most games waste your time. Most apps are rigged. You never win. You're always playing bots. Hit the frustration they already feel.", note: "Examples: 'Most mobile games just take your money' / 'You're always playing bots, not real people'" },
              { time: "6–20s", label: "🎮 Gameplay Proof", desc: "This is the longest and most important section. Show the tower game in action — clutch saves, near-fails, intense dodges, big wins. Layer facecam reactions over gameplay constantly. Never let the screen go flat.", note: "Key rule: Facecam reactions over gameplay = trust + intensity. Never talking head only. Fast cuts every 1–2 seconds throughout this section." },
              { time: "20–28s", label: "💎 Value", desc: "State why this game is different from everything else. Keep it short and punchy — the gameplay already showed it, now just name it.", note: "Key points: Skill-based · No house · Real players · Real money · Tournaments · Challenge your friends" },
              { time: "28–35s", label: "🚀 CTA", desc: "Tell them exactly what to do. Make it personal and specific — not 'download the app.' Give them a reason to act RIGHT NOW.", note: "Examples: 'Download it and try to beat my score' / 'Join the next tournament' / 'Play me right now if you think you're good'" }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-6 py-5 border-b border-brand-border last:border-0 items-start relative">
                <div className="font-display text-xl md:text-2xl font-black text-brand-gold pt-1 text-right">{item.time}</div>
                <div>
                  <div className="font-display text-lg md:text-xl font-extrabold uppercase text-brand-blue mb-1.5">{item.label}</div>
                  <div className="text-brand-muted text-[15px] leading-relaxed">{item.desc}</div>
                  <div className="mt-2 bg-brand-card rounded-lg p-3 text-sm text-brand-text border border-brand-border">
                    <strong className="text-brand-gold font-semibold">Rule/Note:</strong> {item.note}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-5 md:p-6 mt-6 border border-brand-blue/30 bg-brand-blue/10 flex gap-3.5 items-start">
            <AlertTriangle className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-blue mb-1">Clip Length for 80% Retention</div>
              <div className="text-brand-muted text-[15px]">Keep clips <strong className="text-brand-gold font-semibold">25–35 seconds</strong>. The shorter the clip, the easier it is to hit 80% retention. A 30-second clip needs someone to watch 24 seconds. A 60-second clip needs 48 seconds. Start short.</div>
            </div>
          </div>
        </section>

        {/* SECTION 5: EDITING RULES */}
        <section id="editing" className="py-20 border-b border-brand-border">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 05</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">Editing Rules</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl overflow-hidden">
              <div className="bg-brand-green/15 text-brand-green px-5 py-3 font-display text-[15px] font-extrabold uppercase tracking-wide">
                ✅ DO THIS
              </div>
              <div className="bg-brand-card">
                {[
                  "Fast cuts every 1–2 seconds — never let the screen sit still",
                  "Dynamic subtitles always on screen — big, punchy, readable",
                  "Facecam reaction layered over gameplay constantly",
                  "Zooms, shakes, impact cuts on key moments",
                  "Sound effects that make the game feel intense and real",
                  "Gameplay visible in the FIRST frame",
                  "Use the pre-edited MTGames examples as your quality standard",
                  "Vertical 9:16 format, 25–35 seconds max"
                ].map((rule, i) => (
                  <div key={i} className="flex gap-3 items-start px-5 py-3 text-sm border-b border-brand-border last:border-0">
                    <span className="shrink-0 mt-0.5">✅</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden">
              <div className="bg-brand-red/15 text-brand-red px-5 py-3 font-display text-[15px] font-extrabold uppercase tracking-wide">
                ❌ NEVER DO THIS
              </div>
              <div className="bg-brand-card">
                {[
                  "Starting with only talking — show gameplay immediately",
                  "Static frames or slow moments anywhere in the clip",
                  "AI voiceover that sounds robotic or fake",
                  "Clean, polished, corporate ad style",
                  "Same edit as another clipper — you will get suppressed",
                  "No gameplay proof — talking only = no conversion",
                  "Making it look like a gambling or casino ad",
                  "No CTA at the end — every clip must have a clear action"
                ].map((rule, i) => (
                  <div key={i} className="flex gap-3 items-start px-5 py-3 text-sm border-b border-brand-border last:border-0">
                    <span className="shrink-0 mt-0.5">❌</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl p-5 md:p-6 mt-6 border border-brand-gold/30 bg-brand-gold/10 flex gap-3.5 items-start">
            <span className="text-2xl shrink-0 mt-0.5">🎨</span>
            <div>
              <div className="font-bold text-brand-gold mb-1">Visual Style — Match the MTGames Brand</div>
              <div className="text-brand-muted text-[15px]">The brand uses <strong className="text-brand-purple-l font-semibold">deep purple</strong>, <strong className="text-brand-blue font-semibold">electric blue/cyan</strong>, and <strong className="text-brand-gold font-semibold">gold/yellow</strong> on dark backgrounds. Caption text and emphasis should lean into these colors. The feel is: competitive, intense, real, social — NOT corporate, clean, or casino-style.</div>
            </div>
          </div>
        </section>

        {/* SECTION 6: HOOK BANK */}
        <section id="hooks" className="py-20 border-b border-brand-border">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 06</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">Hook Bank</h2>
          <p className="text-brand-muted mb-6">Pick ONE hook per clip. The same gameplay footage can become 4+ different clips just by swapping the hook. This is how you get volume from limited source material.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "💰 Money / Greed",
                hooks: ["I just made money playing this tower game.", "Everyone's gaming for free while this app actually pays.", "I turned one game session into real money.", "This app lowkey prints money if you're good."]
              },
              {
                title: "🏆 Competition / Ego",
                hooks: ["I bet you can't get higher than this.", "Everyone thinks they're cracked until money is on the line.", "If you're actually skilled, prove it here.", "This got way more competitive than I expected."]
              },
              {
                title: "😳 Curiosity / Pattern Interrupt",
                hooks: ["Why is nobody talking about this game?", "This should not be this addictive.", "I thought this was fake until I actually tried it.", "This app is lowkey illegal... wait no it's not."]
              },
              {
                title: "🧠 Anti-Casino / Fairness",
                hooks: ["This isn't gambling — that's why it's actually interesting.", "No house, no bots, just real players.", "Finally a game where skill actually matters.", "Stop playing games designed to make you lose."]
              }
            ].map((cat, i) => (
              <div key={i} className="bg-brand-card border border-brand-border rounded-xl p-5">
                <div className="font-display text-base font-extrabold uppercase text-brand-purple-l mb-3.5 flex gap-2 items-center">
                  {cat.title}
                </div>
                <div className="space-y-2">
                  {cat.hooks.map((hook, j) => (
                    <div key={j} className="px-3.5 py-2.5 bg-brand-card2 rounded-lg text-sm text-brand-text border-l-4 border-brand-purple">
                      "{hook}"
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-5 md:p-6 mt-6 border border-brand-purple/30 bg-brand-purple/10 flex gap-3.5 items-start">
            <Lightbulb className="w-6 h-6 text-brand-purple-l shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-purple-l mb-1">Pro Tip: 10 Clips from 1 Asset</div>
              <div className="text-brand-muted text-[15px]">Take ONE gameplay clip → record 4 different hook voiceovers → use different pacing and subtitle styles → that's already 4 unique Reels. Swap the angle (money vs ego vs curiosity) and you have 8+. This is how you hit volume without needing more footage.</div>
            </div>
          </div>
        </section>

        {/* SECTION 7: SCRIPTS */}
        <section id="scripts" className="py-20 border-b border-brand-border">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 07</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">Example Scripts</h2>
          <p className="text-brand-muted mb-6">These are fully mapped scripts. Follow the timing exactly. Use these as templates — change the hook to create a new version.</p>

          <div className="space-y-5">
            {[
              {
                num: 1, name: "Money Proof",
                rows: [
                  { tag: "HOOK 0–2s", text: "I just made money playing this tower game." },
                  { tag: "PROBLEM 2–6s", text: "Most mobile games waste your time and never pay you back. You grind for nothing." },
                  { tag: "GAMEPLAY 6–20s", text: "[Show tower gameplay — close dodges, near fails, clutch save, big win moment. Facecam reaction layered over gameplay throughout.]", isAction: true },
                  { tag: "VALUE 20–28s", text: "This is skill-based. No house. Real players only. You can host tournaments and actually win money." },
                  { tag: "CTA 28–35s", text: "Download it and try to beat my score. Link in the comments." }
                ]
              },
              {
                num: 2, name: "Competition / Ego",
                rows: [
                  { tag: "HOOK 0–2s", text: "I bet you can't beat this run." },
                  { tag: "PROBLEM 2–6s", text: "Everyone says they're cracked at games. Until real money is on the line." },
                  { tag: "GAMEPLAY 6–20s", text: "[Show intense run — near fail moment, recovery, final win. Ego reaction on facecam. Make the difficulty obvious.]", isAction: true },
                  { tag: "VALUE 20–28s", text: "Head-to-head. Real stakes. Skill decides who wins. No luck, no house." },
                  { tag: "CTA 28–35s", text: "If you're actually good, come prove it. Join the tournament." }
                ]
              },
              {
                num: 3, name: "Curiosity / Pattern Interrupt",
                rows: [
                  { tag: "HOOK 0–2s", text: "Why is nobody talking about this game?" },
                  { tag: "PROBLEM 2–6s", text: "You've been playing games that never pay you back. This one does." },
                  { tag: "GAMEPLAY 6–20s", text: "[Highlight the unique up/down tower dodge mechanic. Show a high score, an unexpected save, or a tense close moment.]", isAction: true },
                  { tag: "VALUE 20–28s", text: "Compete for real money against real people. No casino, no house. Just skill." },
                  { tag: "CTA 28–35s", text: "Download and see if you can go further than me." }
                ]
              },
              {
                num: 4, name: "Social / Friends",
                rows: [
                  { tag: "HOOK 0–2s", text: "We turned game night into a $500 tournament." },
                  { tag: "PROBLEM 2–6s", text: "Playing games for no stakes gets boring. We needed something real." },
                  { tag: "GAMEPLAY 6–20s", text: "[Show the tower gameplay with energy — multiple reaction cuts, competitive moment, someone winning or clutching a save.]", isAction: true },
                  { tag: "VALUE 20–28s", text: "You can host private tournaments with your friends. Real entry fees. Real winner takes all." },
                  { tag: "CTA 28–35s", text: "Download the app and set up a lobby with your crew tonight." }
                ]
              }
            ].map((script, i) => (
              <div key={i} className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
                <div className="bg-brand-card2 px-5 py-4 border-b border-brand-border flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold text-black font-display text-base font-black flex items-center justify-center">
                    {script.num}
                  </div>
                  <div className="font-display text-lg font-extrabold uppercase text-brand-gold">
                    {script.name}
                  </div>
                </div>
                <div className="py-1">
                  {script.rows.map((row, j) => (
                    <div key={j} className="grid grid-cols-[110px_1fr] gap-4 px-5 py-3.5 border-b border-brand-border last:border-0">
                      <div className="font-display text-[13px] font-extrabold uppercase text-brand-blue pt-0.5">
                        {row.tag}
                      </div>
                      <div className={`text-[15px] leading-relaxed ${row.isAction ? 'text-brand-muted italic' : 'text-brand-text'}`}>
                        {row.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: CAPTIONS */}
        <section id="captions" className="py-20 border-b border-brand-border">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 08</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">Caption Guide</h2>
          <p className="text-brand-muted mb-8">Every Reel needs a caption. It drives SEO, watch time, and installs. Keep it human — not corporate, not ChatGPT-sounding.</p>

          <div className="font-display text-xs font-extrabold tracking-[3px] uppercase text-brand-blue mb-3">Caption Structure</div>
          <ul className="space-y-0 mb-8">
            {[
              "Open with a strong statement or reaction — match your hook energy",
              "Explain in 1–2 sentences why this game is different from others",
              <span key="kw">Naturally include 1–2 keywords: <em className="text-brand-blue not-italic font-semibold">skill based gaming</em> / <em className="text-brand-blue not-italic font-semibold">real money gaming</em> / <em className="text-brand-blue not-italic font-semibold">competitive mobile games</em></span>,
              "Keep the tone human — lowercase is fine, don't sound like a press release",
              "End with a direct CTA: download / play / join / challenge me"
            ].map((item, i) => (
              <li key={i} className="py-2.5 border-b border-brand-border last:border-0 text-[15px] flex gap-2.5 items-start">
                <span className="text-brand-gold font-bold shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-brand-card border border-brand-border rounded-xl p-6 mb-8">
            <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full px-3 py-1 text-xs font-bold mb-4">
              📱 Example Caption
            </div>
            <div className="text-[15px] text-brand-text leading-relaxed whitespace-pre-line">
              i thought this was just another mobile game until i saw people actually competing for real money.{"\n\n"}
              this is skill based gaming — not a casino app or a fake bot match. you play real people and the gameplay is actually intense. the tower dodge mechanic is harder than it looks.{"\n\n"}
              if you like competitive mobile games and think you're good, this one is worth trying.{"\n\n"}
              download and see if you can beat my score.
            </div>
          </div>

          <div className="font-display text-xs font-extrabold tracking-[3px] uppercase text-brand-blue mb-3">Pinned Comment Ideas (Use These)</div>
          <ul className="space-y-0 mb-8">
            {[
              '"be honest — what score are you getting on your first try?"',
              '"would you play this for free or only if money is on the line?"',
              '"who here actually thinks they could beat me?"',
              '"skill game or gambling? let\'s argue in the comments"'
            ].map((item, i) => (
              <li key={i} className="py-2.5 border-b border-brand-border last:border-0 text-[15px] flex gap-2.5 items-start">
                <span className="text-brand-gold font-bold shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="font-display text-xs font-extrabold tracking-[3px] uppercase text-brand-blue mb-3">AI Caption Prompt (Copy This Into Grok or Gemini)</div>
          <div className="bg-brand-card border border-brand-border rounded-xl p-1 mt-4">
            <p className="text-[13px] text-brand-muted mb-3 mt-2 px-4 font-mono">COPY THIS EXACT PROMPT → PASTE INTO GROK OR GEMINI → UPLOAD YOUR CLIP</p>
            <div className="bg-brand-card2 rounded-lg p-5 text-[13px] leading-[1.7] text-brand-text font-mono whitespace-pre-wrap">
              {`You are a top TikTok and Instagram Reels growth expert and direct response marketer.

Analyze this video and write a HIGH-CONVERTING caption optimized for:
1. App installs and first-time deposits
2. Instagram Reels SEO
3. Human, authentic tone

CONTEXT:
- Skill-based real money gaming app
- Players compete against real people (NOT a casino)
- Goal: drive downloads AND deposits
- Audience: 18–34, competitive, gaming, money-motivated

REQUIREMENTS:
- Start with a strong hook line
- Write in lowercase, natural tone
- Explain why this app is different (skill vs gambling)
- Naturally embed: "skill based gaming" "real money gaming" "competitive mobile games"
- End with a soft but clear CTA
- Do NOT sound like an ad

OUTPUT:
- 1 primary caption
- 2 alternative captions
- 5 SEO keyword tags
- 3 alternative hook lines for testing`}
            </div>
          </div>
        </section>

        {/* SECTION 9: UNIQUE OUTPUT */}
        <section id="unique" className="py-20 border-b border-brand-border">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 09</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">Unique Output Rule</h2>

          <div className="rounded-xl p-5 md:p-6 mb-8 border border-brand-red/30 bg-brand-red/10 flex gap-3.5 items-start">
            <AlertTriangle className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-red mb-1">If Your Clip Looks Like Someone Else's — Redo It</div>
              <div className="text-brand-muted text-[15px]">All clippers get the same source footage. The Instagram algorithm detects duplicate or near-duplicate content and suppresses it. Your clip MUST feel completely different.</div>
            </div>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-xl p-6">
            <div className="font-display text-xs font-extrabold tracking-[3px] uppercase text-brand-blue mb-4">Change At Least 3 of These Every Time</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: "🪝", label: "Hook", desc: "different first line" },
                { icon: "📝", label: "First text on screen", desc: "" },
                { icon: "⏩", label: "Pacing", desc: "faster or slower cuts" },
                { icon: "🎬", label: "Sequence", desc: "different gameplay moments" },
                { icon: "🔤", label: "Subtitle style", desc: "different font/color/size" },
                { icon: "🔊", label: "Sounds", desc: "different effects and music" },
                { icon: "📢", label: "CTA wording", desc: "" },
                { icon: "🎯", label: "Angle", desc: "money vs ego vs curiosity" }
              ].map((item, i) => (
                <div key={i} className="bg-brand-card2 rounded-lg p-3 text-sm border border-brand-border">
                  <span className="mr-1.5">{item.icon}</span>
                  <strong className="text-brand-text font-semibold">{item.label}</strong>
                  {item.desc && <span className="text-brand-muted"> — {item.desc}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: CHECKLIST */}
        <section id="checklist" className="py-20">
          <div className="font-display text-xs font-extrabold tracking-[4px] uppercase text-brand-gold mb-2.5">Section 10</div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black uppercase leading-none tracking-tight mb-5">Final Checklist</h2>
          <p className="text-brand-muted mb-6">Run through this before every single post. Click each box to check it off. If anything is unchecked — fix it first.</p>

          <div className="flex flex-col gap-3">
            {[
              "Gameplay is visible in the first 1–2 seconds",
              "Hook is strong — would YOU stop scrolling for this?",
              "Fast cuts every 1–2 seconds throughout the entire clip",
              "Subtitles are on screen at all times — big and readable",
              "The clip does NOT feel like a casino or gambling ad",
              "Clip is 25–35 seconds long",
              "CTA is clear and specific at the end",
              "Your version looks and feels different from other clippers",
              "Caption is human, includes keywords, ends with CTA",
              "Ask yourself: 'Does this make someone want to download AND deposit?' — if no, redo it"
            ].map((item, i) => {
              const [checked, setChecked] = useState(false);
              return (
                <div key={i} className="flex gap-3.5 items-start p-4 bg-brand-card border border-brand-border rounded-xl text-[15px]">
                  <button
                    onClick={() => setChecked(!checked)}
                    className={`w-5 h-5 rounded-md border-2 shrink-0 mt-0.5 flex items-center justify-center transition-colors ${checked ? 'bg-brand-green border-brand-green text-white' : 'border-brand-faint hover:border-brand-muted'
                      }`}
                  >
                    {checked && <CheckCircle2 className="w-4 h-4" />}
                  </button>
                  <div className={`transition-colors ${checked ? 'text-brand-muted line-through' : 'text-brand-text'}`}>
                    {item}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl p-5 md:p-6 mt-8 border border-brand-gold/30 bg-brand-gold/10 flex gap-3.5 items-start">
            <span className="text-2xl shrink-0 mt-0.5">🚀</span>
            <div>
              <div className="font-bold text-brand-gold mb-1">Remember Your Role</div>
              <div className="text-brand-muted text-[15px]">You are not here to make "content." You are a <strong className="text-brand-gold font-semibold">performance marketer and distribution weapon.</strong> Every Reel you post should make someone feel like they're missing out by NOT downloading this app right now.</div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-16 px-6 border-t border-brand-border text-brand-muted text-sm">
        <div className="mb-4">
          <img
            src="/logo.png"
            alt="MTGames"
            className="h-10 w-10 rounded-lg object-cover mx-auto border border-brand-gold/30"
          />
        </div>
        <strong className="text-brand-text font-semibold">MTGames × Clipur</strong> · Instagram Reels Campaign Brief · April 2026<br />
        <span className="mt-2 block">Confidential — For Clipper Use Only</span>
      </footer>
    </div>
  );
}
