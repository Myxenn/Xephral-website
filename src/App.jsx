import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Bot,
  Zap,
  Video,
  Calendar,
  Database,
  BarChart3,
  MessageSquare,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
} from 'lucide-react'

try { gsap.registerPlugin(ScrollTrigger) } catch (_) {}

/* ----------------------------------------------------------------
   Nav Links & Services Data
---------------------------------------------------------------- */
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_FULL = [
  {
    icon: Bot,
    title: 'AI Voice Agents',
    text: 'AI-powered callers that follow up with every lead instantly — 24/7, no missed calls, no missed deals.',
  },
  {
    icon: MessageSquare,
    title: 'Lead Follow-Up Automation',
    text: 'Automated sequences that nurture cold leads into booked appointments without lifting a finger.',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking Systems',
    text: 'Self-scheduling pipelines that fill your calendar while you focus on delivering the work.',
  },
  {
    icon: Database,
    title: 'CRM Integration & Setup',
    text: 'Connect your tools into one unified system — Go High Level, HubSpot, or custom stacks.',
  },
  {
    icon: Video,
    title: 'Content Production Systems',
    text: 'AI-assisted pipelines for YouTube, short-form, and social content at scale with minimal effort.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    text: "Clear dashboards showing what's working, what's not, and exactly where your revenue is coming from.",
  },
]

const TOOLS = [
  { name: 'n8n', logo: null },
  { name: 'ElevenLabs', logo: null },
  { name: 'Claude AI', logo: null },
  { name: 'Make.com', logo: null },
  { name: 'Go High Level', logo: null },
  { name: 'Zapier', logo: null },
  { name: 'OpenAI', logo: null },
  { name: 'Airtable', logo: null },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/40">
              <Cpu className="h-4.5 w-4.5 text-white" strokeWidth={2.2} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300" />
            </span>
            <span className="font-display font-bold tracking-tight text-lg text-white transition-colors">
              Xephral
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-tight lift-on-hover text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/40"
          >
            Book a Call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-full text-white"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-surface rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 border-b border-divider ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl text-ink">Xephral</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/40">
              <X className="h-5 w-5 text-ink" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            Book a Free Strategy Call
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-cta, .hero-meta', { y: 24, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.12, ease: 'power3.out' })
      gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-background flex items-center">
      {/* Ambient gradient orbs */}
      <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-primary/18 blur-[130px] animate-float-slower pointer-events-none" />
      <div className="absolute top-[5%] right-[-12%] w-[500px] h-[500px] rounded-full bg-primary-dark/22 blur-[110px] animate-float-slow pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-[5%] left-[15%] w-[450px] h-[450px] rounded-full bg-accent/8 blur-[150px] animate-float pointer-events-none" style={{ animationDelay: '6s' }} />
      <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] rounded-full bg-primary/12 blur-[100px] animate-float-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Top + bottom decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 flex flex-col items-center text-center">
        <div className="hero-badge mb-8 inline-flex items-center gap-2 glass-light rounded-full px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-accent ring-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
            AI Automation for Local Businesses
          </span>
        </div>

        <h1 className="font-display font-bold text-white tracking-tight leading-[0.95] max-w-4xl">
          <span className="hero-line-1 block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            Automate Follow-Up,
          </span>
          <span className="hero-line-2 block font-serif italic font-medium text-primary-light text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-2" style={{ lineHeight: '0.95' }}>
            Booking & Conversion.
          </span>
        </h1>

        <p className="hero-meta mt-8 max-w-xl text-white/75 text-base sm:text-lg leading-relaxed">
          I build AI-powered systems for local service businesses. More leads closed, zero extra headcount.{' '}
          <span className="text-white/90">Your pipeline, finally running itself.</span>
        </p>

        <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-base shadow-2xl shadow-primary/40"
          >
            Book a Free Strategy Call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <a
            href="#services"
            className="magnetic-btn inline-flex items-center justify-center gap-2 glass-light text-white px-8 py-4 rounded-full font-semibold text-base"
          >
            See What I Build
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="hero-meta mt-16 flex items-center gap-8 text-white/30">
          <div className="h-px w-16 bg-white/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll to explore</span>
          <div className="h-px w-16 bg-white/20" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/30">
        <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Industry Strip
---------------------------------------------------------------- */
const INDUSTRIES = [
  'Roofing', 'HVAC', 'Plumbing', 'Dental', 'Med Spa', 'Law Firms',
  'Contractors', 'Auto Repair', 'Home Services', 'Real Estate', 'Landscaping', 'Insurance',
]

function ToolsBar() {
  const doubled = [...INDUSTRIES, ...INDUSTRIES]
  return (
    <section className="relative py-10 border-y border-divider overflow-hidden bg-surface/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-6">
        Built for local service businesses
      </p>
      <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
        {doubled.map((industry, idx) => (
          <div
            key={idx}
            className="mx-8 flex items-center gap-3 whitespace-nowrap"
          >
            <span className="h-1 w-1 rounded-full bg-primary/40" />
            <span className="font-display font-semibold text-sm tracking-tight text-white/50 hover:text-white/80 transition-colors cursor-default">
              {industry}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Call Scenario Shuffler (AI Voice Agents)
---------------------------------------------------------------- */
function VoiceShuffler() {
  const scenarios = [
    {
      tag: 'Missed Call',
      label: 'AI calls back within 60 seconds',
      value: '<60s',
      bars: [8, 5, 10, 6, 12, 4, 9, 7, 11, 5, 8, 6, 10, 4, 7, 9, 5, 11, 6, 8],
    },
    {
      tag: 'Lead Inquiry',
      label: 'Qualifies prospect & books appointment',
      value: '9 of 10',
      bars: [5, 9, 4, 11, 6, 8, 10, 5, 7, 12, 4, 9, 6, 8, 5, 10, 7, 4, 11, 6],
    },
    {
      tag: 'Follow-Up',
      label: 'Re-engages cold leads automatically',
      value: '3x lift',
      bars: [10, 6, 8, 4, 12, 7, 5, 9, 6, 10, 4, 8, 11, 5, 7, 6, 9, 4, 10, 8],
    },
  ]
  const [stack, setStack] = useState(scenarios)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${i * 12}px, ${i * 12}px) scale(${1 - i * 0.05})`,
              zIndex: total - i,
              opacity: 1 - i * 0.28,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-surface border border-divider rounded-3xl p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-accent font-semibold">{item.value}</span>
            </div>
            <div className="mt-4 font-display text-base font-semibold text-ink leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1">
              {item.bars.map((w, idx) => (
                <span
                  key={idx}
                  className="h-1 rounded-full"
                  style={{
                    width: `${w}px`,
                    background: idx < 14 - i * 3 ? '#8B5CF6' : '#27272A',
                    opacity: idx < 14 - i * 3 ? 1 : 0.4,
                  }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Tech Signature Animation (Automation Pipelines)
---------------------------------------------------------------- */
function PipelineAnim() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(42)

  const statuses = [
    { text: 'All systems nominal', label: 'Live', tone: 'emerald' },
    { text: 'New lead detected · routing', label: 'Active', tone: 'primary' },
    { text: 'Pipeline executing · step 3/5', label: 'Running', tone: 'primary' },
    { text: 'Lead booked · CRM updated', label: 'Done', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Done') setCount((c) => c + 1)
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const drops = [
    { left: '12%', delay: '0.0s', dur: '2.6s', size: 15 },
    { left: '24%', delay: '1.1s', dur: '2.9s', size: 12 },
    { left: '37%', delay: '0.5s', dur: '2.7s', size: 16 },
    { left: '52%', delay: '1.7s', dur: '2.4s', size: 13 },
    { left: '65%', delay: '0.8s', dur: '3.0s', size: 15 },
    { left: '78%', delay: '2.1s', dur: '2.6s', size: 12 },
    { left: '90%', delay: '0.3s', dur: '2.8s', size: 14 },
  ]

  const ripples = [
    { left: '22%', delay: '0.2s' },
    { left: '52%', delay: '1.0s' },
    { left: '80%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText = status.tone === 'emerald' ? 'text-emerald-400' : 'text-primary-light'
  const toneDot = status.tone === 'emerald' ? 'bg-emerald-400' : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-divider"
      style={{ background: 'linear-gradient(180deg, #1A1040 0%, #120D30 70%, #0A0820 100%)' }}
    >
      {/* Atmosphere */}
      <div className="absolute -top-6 -left-4 h-16 w-28 rounded-full bg-primary/20 blur-2xl" />
      <div className="absolute top-1 right-8 h-12 w-20 rounded-full bg-accent/10 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <Zap className="h-3 w-3 text-primary-light" strokeWidth={2.2} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-light">
            Automation Engine
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">leads</span>
        </div>
      </div>

      {/* Server rack SVG */}
      <svg className="absolute left-3 right-3 top-9 h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
        <rect x="0" y="4" width="400" height="12" rx="3" fill="#8B5CF6" fillOpacity="0.15" />
        <rect x="0" y="5" width="400" height="2" fill="#A78BFA" fillOpacity="0.3" />
        {[50, 130, 210, 290, 370].map((x) => (
          <g key={x}>
            <rect x={x - 4} y="2" width="8" height="4" rx="1" fill="#8B5CF6" fillOpacity="0.6" />
            <circle cx={x} cy="14" r="2" fill="#22D3EE" fillOpacity="0.7" />
          </g>
        ))}
      </svg>

      {/* Falling code brackets */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {drops.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${Math.round(d.size * 1.6)}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: 'drop-shadow(0 0 4px rgba(139,92,246,0.5))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 24 36"
          >
            <defs>
              <linearGradient id={`code-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="60%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <text x="12" y="26" textAnchor="middle" fill={`url(#code-${i})`} fontSize="18" fontFamily="JetBrains Mono, monospace" fontWeight="600">
              {i % 3 === 0 ? '<' : i % 3 === 1 ? '/>' : '{}'}
            </text>
          </svg>
        ))}
      </div>

      {/* Terminal surface line */}
      <svg className="absolute bottom-9 left-3 right-3 h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
        <line x1="0" y1="6" x2="200" y2="6" stroke="#8B5CF6" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="8" x2="200" y2="8" stroke="#22D3EE" strokeOpacity="0.15" strokeWidth="0.8" />
      </svg>

      {/* Scan ripples */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-primary/50"
            style={{
              left: r.left,
              width: '4px',
              height: '4px',
              animation: `rain-ripple 2.4s ease-out ${r.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone !== 'emerald' && (
              <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />
            )}
          </span>
          <span
            key={status.text}
            className={`font-mono text-[10px] truncate ${toneText}`}
            style={{ animation: 'rain-fadein 0.35s ease-out' }}
          >
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>
          {status.label}
        </span>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Content Calendar Scheduler
---------------------------------------------------------------- */
function ContentScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0)
  const activeDay = 3

  useEffect(() => {
    const interval = setInterval(() => setStep((prev) => (prev + 1) % 5), 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0: return { x: 8, y: 110, opacity: 0 }
      case 1: return { x: 55, y: 60, opacity: 1 }
      case 2: return { x: 55 + activeDay * 34, y: 60, opacity: 1 }
      case 3: return { x: 55 + activeDay * 34, y: 60, opacity: 1 }
      case 4: return { x: 120, y: 128, opacity: 1 }
      default: return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-surface border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Content Queue · Jun
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          Auto-Schedule
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1.5 mb-3">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/40'
                : 'bg-background/60 text-ink/70'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 9}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4
            ? 'bg-primary text-white scale-[1.02] shadow-md shadow-primary/40'
            : 'bg-divider/50 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Video scheduled & queued' : 'Select publish date'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? 'scale(0.85)' : 'scale(1)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#FAFAFA" stroke="#8B5CF6" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Voice',
      heading: 'AI Voice Agents',
      sub: 'Never miss a lead again',
      text: 'AI-powered callers that respond to every missed call within 60 seconds — qualifying prospects, answering questions, and booking appointments while you sleep.',
      Component: VoiceShuffler,
    },
    {
      eyebrow: '02 / Automation',
      heading: 'Automation Pipelines',
      sub: 'Your pipeline, running itself',
      text: 'End-to-end automation that captures, nurtures, and converts leads — from first touch to booked appointment, with zero manual follow-up required.',
      Component: PipelineAnim,
    },
    {
      eyebrow: '03 / Content',
      heading: 'Content Systems',
      sub: 'Scale without the grind',
      text: 'AI-assisted content pipelines that produce YouTube videos, shorts, and social content consistently — without the hours of manual production work.',
      Component: ContentScheduler,
    },
  ]

  return (
    <section id="what-i-build" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-16 sm:mb-24 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            ╱ What I Build
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three systems.
            <span className="block font-serif italic font-medium text-primary-light mt-1">
              One goal.
            </span>
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
            Built for local service businesses that can't afford to lose a single lead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              style={{ transitionDelay: visible ? `${idx * 120}ms` : '0ms' }}
              className={`group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-all duration-700 ease-out hover:shadow-xl hover:shadow-primary/10 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {card.eyebrow}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted/40 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" strokeWidth={1.8} />
              </div>

              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-xl text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary-light text-sm mt-1">{card.sub}</p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars — Results & Social Proof
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01',
      title: 'Speed',
      target: 60,
      suffix: 's',
      label: 'avg lead response time',
      desc: 'AI voice agents respond to every missed call in under 60 seconds — before your competitor even checks their inbox.',
    },
    {
      n: '02',
      title: 'Scale',
      target: 100,
      suffix: '%',
      label: 'follow-ups automated',
      desc: 'Every lead touched, every time. No dropped balls, no forgotten follow-ups, no revenue left on the table.',
    },
    {
      n: '03',
      title: 'Timeline',
      target: 7,
      suffix: ' days',
      label: 'average deploy time',
      desc: 'Most systems go live in 7 business days. You start closing more leads before the month is out.',
    },
  ]

  return (
    <section id="results" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">
              ╱ The Numbers
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              Built for businesses
              <span className="block font-serif italic font-medium text-primary-light">that can't afford to miss.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Real outcomes. Not promises. Every system is built around moving these numbers in your favor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out hover:bg-surface/80 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {p.n} / {p.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>

              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-bold text-[5rem] sm:text-[7rem] md:text-[8rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-3xl sm:text-4xl text-primary-light mb-3">
                  {p.suffix}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mt-5">{p.label}</p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — How It Works (Sticky Stack)
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.93,
          filter: 'blur(4px) saturate(0.6)',
          opacity: 0.45,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      tagline: 'We map your pipeline.',
      text: 'We spend 30 minutes understanding your current lead flow — where they come in, where they fall off, and what a missed lead costs you. No pitch, just honest diagnosis.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      alt: 'Circuit board — AI systems',
      meta: 'Step 1 / Discover',
    },
    {
      num: '02',
      title: 'Build & Configure',
      tagline: 'Custom to your workflow.',
      text: 'I build the automation, voice agent, or content system to your exact specifications — integrated with your existing tools. You review it before anything goes live.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Tech code — building automation',
      meta: 'Step 2 / Build',
    },
    {
      num: '03',
      title: 'Launch & Optimize',
      tagline: 'Go live, then refine.',
      text: "We launch your system, monitor the first week closely, and make adjustments to maximize conversion. 30 days of support included — you're never left holding the bag.",
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      alt: 'Analytics dashboard',
      meta: 'Step 3 / Launch',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          ╱ How It Works
        </span>
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary-light">
            No surprises.
          </span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-surface border border-divider rounded-6xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[65vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{step.meta}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    Xephral Protocol
                  </span>
                </div>

                <div className="my-10">
                  <span className="font-display font-bold text-[6rem] sm:text-[8rem] leading-none text-primary/10 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-primary-light text-2xl sm:text-3xl mt-3">{step.tagline}</p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[260px] lg:min-h-full">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="absolute inset-0 w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/20" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Services Grid — All 6 Services
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="bg-deep py-28 sm:py-36 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ Full Service Menu</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mt-4 tracking-tight leading-tight">
            Everything you need.
            <span className="block font-serif italic font-medium text-primary-light">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-divider">
          {SERVICES_FULL.map((svc, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: visible ? `${idx * 80}ms` : '0ms' }}
              className={`group bg-surface/60 p-8 sm:p-10 hover:bg-white/[0.04] transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <svc.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-3">{svc.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{svc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      icon: Zap,
      title: 'No Fluff Builds',
      sub: 'Purpose-built automation, tailored to your exact workflow — no template spray-and-pray.',
    },
    {
      icon: Clock,
      title: 'Fast Deployment',
      sub: 'Most systems go live within 7 business days from our first discovery call.',
    },
    {
      icon: ShieldCheck,
      title: '30-Day Support Window',
      sub: 'Every build includes a full month of monitoring, tweaks, and optimization at no extra cost.',
    },
  ]

  return (
    <section ref={ref} className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ Why Xephral</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-4 tracking-tight">
            What you can count on
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {badges.map((b, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
              className={`bg-surface border border-divider rounded-3xl p-8 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">{b.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   FAQ
---------------------------------------------------------------- */
function FAQ() {
  const [open, setOpen] = useState(null)

  const faqs = [
    {
      q: "How is this different from just hiring a VA?",
      a: "A VA works 8 hours a day and costs $800–$2K/month. An AI system works 24/7, responds in seconds, never calls in sick, and costs a fraction of that — with no ongoing salary. For high-volume follow-up and lead response, AI wins every time.",
    },
    {
      q: "What kind of businesses do you work with?",
      a: "Any local service business that depends on leads and appointments — contractors, roofers, HVAC companies, dental practices, med spas, agencies, law firms. If you have a phone that rings and leads that need follow-up, this is built for you.",
    },
    {
      q: "How long does it take to get up and running?",
      a: "Most systems are live within 7 business days of our discovery call. We scope the build together, I configure and test it, and we launch. You'll see results in the first week.",
    },
    {
      q: "Do I need to be tech-savvy to use this?",
      a: "No. Once it's live, your systems run themselves. You'll get a simple dashboard to monitor performance. I handle all the technical setup — your job is just to show up for the strategy call and answer a few questions about your business.",
    },
  ]

  return (
    <section id="faq" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ FAQ</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-4 tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-divider rounded-2xl bg-surface overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-display font-medium text-ink text-base leading-snug pr-4 group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 text-muted group-hover:text-primary transition-colors">
                  {open === i ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-muted leading-relaxed text-[15px]">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
function FormField({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">{label}</label>
      {children}
    </div>
  )
}

const contactInputClass = "bg-background border border-divider rounded-xl px-4 py-3 text-ink text-sm placeholder-muted focus:outline-none focus:border-primary transition-colors"

function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [fields, setFields] = useState({ fullName: '', email: '', phone: '', industry: '', message: '', referral: '' })

  const canSubmit = fields.fullName.trim() && fields.email.trim() && fields.phone.trim()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = contactInputClass

  return (
    <section id="contact" className="py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Form grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ Get in touch</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-4 mb-6 tracking-tight leading-tight">
                Let's talk about your
                <span className="block font-serif italic font-medium text-primary-light">lead pipeline.</span>
              </h2>
              <p className="text-muted leading-relaxed mb-10">
                Fill out the form and I'll reply within 24 hours to schedule your free strategy call.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'dee@xephral.com', href: 'mailto:dee@xephral.com' },
                { icon: MapPin, label: 'Location', value: 'Remote — Available Worldwide', href: null },
                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-divider">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-ink text-sm hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-ink text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-divider rounded-5xl p-8 sm:p-10">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">Message received!</h3>
                  <p className="text-muted leading-relaxed max-w-sm">
                    I'll review your details and reach out within 24 hours to schedule your free strategy call.
                  </p>
                </div>
              ) : status === 'error' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                    <span className="text-red-400 text-2xl font-bold">!</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">Something went wrong</h3>
                  <p className="text-muted leading-relaxed max-w-sm mb-6">
                    Your message didn't send. Please email me directly at <a href="mailto:dee@xephral.com" className="text-primary hover:underline">dee@xephral.com</a>.
                  </p>
                  <button onClick={() => setStatus('idle')} className="text-sm text-primary hover:underline">Try again</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Full Name *">
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className={inputClass}
                        value={fields.fullName}
                        onChange={(e) => setFields((p) => ({ ...p, fullName: e.target.value }))}
                      />
                    </FormField>
                    <FormField label="Email *">
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        className={inputClass}
                        value={fields.email}
                        onChange={(e) => setFields((p) => ({ ...p, email: e.target.value }))}
                      />
                    </FormField>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Phone *">
                      <input
                        required
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className={inputClass}
                        value={fields.phone}
                        onChange={(e) => setFields((p) => ({ ...p, phone: e.target.value }))}
                      />
                    </FormField>
                    <FormField label="Industry *">
                      <input
                        type="text"
                        placeholder="e.g. HVAC, Dental, Roofing"
                        className={inputClass}
                        value={fields.industry}
                        onChange={(e) => setFields((p) => ({ ...p, industry: e.target.value }))}
                      />
                    </FormField>
                  </div>
                  <FormField label="Message (optional)">
                    <textarea
                      rows={5}
                      maxLength={5000}
                      placeholder="Tell me about your business and the leads you're missing..."
                      className={`${inputClass} resize-none`}
                      value={fields.message}
                      onChange={(e) => setFields((p) => ({ ...p, message: e.target.value }))}
                    />
                  </FormField>

                  <FormField label="How did you hear about us?">
                    <select
                      className={inputClass}
                      value={fields.referral}
                      onChange={(e) => setFields((p) => ({ ...p, referral: e.target.value }))}
                    >
                      <option value="" disabled>Select one…</option>
                      <option>Google Search</option>
                      <option>YouTube</option>
                      <option>Referral from someone I know</option>
                      <option>Social Media</option>
                      <option>Cold outreach</option>
                      <option>Other</option>
                    </select>
                  </FormField>

                  <button
                    type="submit"
                    disabled={!canSubmit || status === 'sending'}
                    className={`magnetic-btn w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 ${
                      canSubmit
                        ? 'bg-primary text-white shadow-primary/30 cursor-pointer'
                        : 'bg-primary/30 text-white/40 shadow-none cursor-not-allowed'
                    }`}
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <>Book My Free Strategy Call <ArrowUpRight className="h-4 w-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="bg-deep border-t border-divider text-white px-6 sm:px-10 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                <Cpu className="h-4 w-4 text-white" strokeWidth={2.2} />
              </span>
              <span className="font-display font-bold text-lg text-white">Xephral</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              AI automation for local service businesses that can't afford to miss a lead.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 ring-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">Now Taking New Clients · 2026</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">Services</p>
            <div className="flex flex-col gap-3">
              {['AI Voice Agents', 'Automation Pipelines', 'Content Systems', 'CRM Integration', 'Lead Follow-Up'].map((s) => (
                <a key={s} href="#services" className="text-white/50 text-sm hover:text-white transition-colors lift-on-hover">{s}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">Company</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Process', href: '#process' },
                { label: 'Results', href: '#results' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <a key={l.label} href={l.href} className="text-white/50 text-sm hover:text-white transition-colors lift-on-hover">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:dee@xephral.com" className="text-white/50 text-sm hover:text-white transition-colors lift-on-hover">
                dee@xephral.com
              </a>
              <p className="text-white/50 text-sm">Remote · Worldwide</p>
              <p className="text-white/50 text-sm">Response within 24hrs</p>
            </div>
          </div>
        </div>

        <div className="border-t border-divider pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-white/30 uppercase tracking-widest">
            © 2026 Xephral. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-mono text-[11px] text-white/30 hover:text-white/60 uppercase tracking-widest transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="font-mono text-[11px] text-white/30 hover:text-white/60 uppercase tracking-widest transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App Root
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <ToolsBar />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
