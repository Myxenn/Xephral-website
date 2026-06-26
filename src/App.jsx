import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
import { ArrowUpRight, ArrowRight, Menu, X } from 'lucide-react'

try { gsap.registerPlugin(ScrollTrigger, SplitText) } catch (_) {}

/* ─── SIGNAL X LOGO ───────────────────────────────────────── */
function XLogo({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Diagonal strokes — butt caps so they meet the terminal bars cleanly */}
      <line x1="8"  y1="6.5" x2="24" y2="25.5" stroke="currentColor" strokeWidth="2"   strokeLinecap="butt"/>
      <line x1="24" y1="6.5" x2="8"  y2="25.5" stroke="currentColor" strokeWidth="2"   strokeLinecap="butt"/>
      {/* Terminal horizontal bars — 8px wide, one at each of the 4 arm tips */}
      <line x1="4"  y1="6.5"  x2="12" y2="6.5"  stroke="currentColor" strokeWidth="2"   strokeLinecap="round"/>
      <line x1="20" y1="6.5"  x2="28" y2="6.5"  stroke="currentColor" strokeWidth="2"   strokeLinecap="round"/>
      <line x1="4"  y1="25.5" x2="12" y2="25.5" stroke="currentColor" strokeWidth="2"   strokeLinecap="round"/>
      <line x1="20" y1="25.5" x2="28" y2="25.5" stroke="currentColor" strokeWidth="2"   strokeLinecap="round"/>
    </svg>
  )
}

/* ─── NAVBAR ─────────────────────────────────────────────── */
function Navbar() {
  const navRef = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const el = navRef.current
    gsap.fromTo(el, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' })

    const onScroll = () => {
      if (window.scrollY > 40) {
        el.style.background = 'rgba(8,6,0,0.9)'
        el.style.backdropFilter = 'blur(20px)'
        el.style.borderBottom = '1px solid rgba(245,158,11,0.08)'
      } else {
        el.style.background = 'transparent'
        el.style.backdropFilter = 'none'
        el.style.borderBottom = '1px solid transparent'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <XLogo className="w-6 h-6 transition-colors duration-200"
            style={{ color: '#f59e0b' }} />
          <span className="font-mono tracking-[0.14em] text-sm font-medium" style={{ color: '#fdfaf0' }}>XEPHRAL</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home',     href: '#home' },
            { label: 'Services', href: '#services' },
            { label: 'FAQ',      href: '#faq' },
            { label: 'Contact',  href: '#contact' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              className="text-muted hover:text-ink text-sm font-body transition-colors duration-200 cursor-pointer">
              {label}
            </a>
          ))}
          <a href="https://calendly.com/dee-xephral/30min" target="_blank" rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-1.5 text-sm font-body font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
            style={{ background: '#f59e0b', color: '#080600' }}>
            Book a call
          </a>
        </div>

        <button className="md:hidden text-muted hover:text-ink transition-colors cursor-pointer"
          onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 px-4 pb-4 flex flex-col gap-4 border-t pt-4"
          style={{ borderColor: 'rgba(245,158,11,0.12)' }}>
          {[
            { label: 'Home',     href: '#home' },
            { label: 'Services', href: '#services' },
            { label: 'FAQ',      href: '#faq' },
            { label: 'Contact',  href: '#contact' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-ink text-sm font-body transition-colors duration-200 cursor-pointer">
              {label}
            </a>
          ))}
          <a href="#contact"
            className="text-sm font-body font-semibold px-5 py-2.5 rounded-full text-center"
            style={{ background: '#f59e0b', color: '#080600' }}>
            Book a call
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── HERO ────────────────────────────────────────────────── */
function Hero() {
  const textRef = useRef(null)
  const cueRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-eyebrow', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power3.out' })
      // SplitText word-by-word reveal on the headline
      const split = SplitText.create('.hero-headline', { type: 'words' })
      gsap.set('.hero-headline', { opacity: 1 })
      gsap.fromTo(split.words,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.04, delay: 0.72, ease: 'power2.out' }
      )
      gsap.fromTo('.hero-sub',  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.3,  ease: 'power3.out' })
      gsap.fromTo('.hero-cta',  { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, delay: 1.55, ease: 'power3.out' })
    }, textRef)

    const onScroll = () => {
      if (cueRef.current) {
        cueRef.current.style.opacity = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.3)).toString()
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { ctx.revert(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <section id="home" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#080600' }}>

      {/* Ambient glow orbs — pure CSS animation, no JS */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          width: '65vw', height: '65vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.13) 0%, transparent 70%)',
          top: '-15%', left: '-10%',
          animation: 'glowDriftA 14s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute',
          width: '50vw', height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,119,6,0.09) 0%, transparent 70%)',
          bottom: '-20%', right: '-5%',
          animation: 'glowDriftB 18s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute',
          width: '35vw', height: '35vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)',
          top: '40%', left: '55%',
          animation: 'glowDriftA 22s ease-in-out infinite alternate-reverse',
        }} />
      </div>

      {/* Text block */}
      <div ref={textRef}
        style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          height: '100%', textAlign: 'center',
          padding: '0 24px', maxWidth: '900px', margin: '0 auto',
        }}>
        <p className="hero-eyebrow font-mono uppercase mb-6"
          style={{ opacity: 0, fontSize: '11px', letterSpacing: '0.22em', color: '#f59e0b' }}>
          AI Automation Agency
        </p>
        <h1 className="hero-headline font-serif italic font-medium text-balance"
          style={{
            opacity: 0,
            fontSize: 'clamp(36px, 5.4vw, 70px)',
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: '#fdfaf0',
            marginBottom: '24px',
          }}>
          We build the machine that runs your business while you run your jobs.
        </h1>
        <p className="hero-sub font-body leading-relaxed mb-10"
          style={{
            opacity: 0,
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: '#78716c',
            maxWidth: '480px',
          }}>
          Custom automations for local service businesses. We handle the calls, follow-ups, and reviews.
        </p>
        <div className="hero-cta" style={{ opacity: 0, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
          <a href="https://calendly.com/dee-xephral/30min" target="_blank" rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 font-body font-semibold text-sm px-7 py-3.5 rounded-full cursor-pointer"
            style={{ background: '#f59e0b', color: '#080600' }}>
            Book a Call <ArrowRight size={14} />
          </a>
          <a href="#how-it-works"
            className="inline-flex items-center gap-1.5 font-body text-sm transition-colors duration-200 cursor-pointer"
            style={{ color: '#78716c' }}
            onMouseOver={e => e.currentTarget.style.color = '#fdfaf0'}
            onMouseOut={e => e.currentTarget.style.color = '#78716c'}>
            See how it works <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div ref={cueRef} style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        zIndex: 10, pointerEvents: 'none',
        transition: 'opacity 0.2s ease',
      }}>
        <div style={{
          width: '1px', height: '48px',
          background: 'linear-gradient(to bottom, rgba(245,158,11,0.7), transparent)',
          animation: 'scrollLinePulse 2s ease-in-out infinite',
        }} />
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '8px', letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'rgba(245,158,11,0.4)',
        }}>scroll</span>
      </div>
    </section>
  )
}

/* ─── STATS STRIP ─────────────────────────────────────────── */
const STATS = [
  { value: '< 60s', label: 'First response time' },
  { value: '100%',  label: 'Leads followed up' },
  { value: '24/7',  label: 'System uptime' },
]

function StatsStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-item', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} style={{
      background: '#080600',
      borderTop: '1px solid rgba(245,158,11,0.12)',
      borderBottom: '1px solid rgba(245,158,11,0.12)',
    }}>
      <div style={{
        maxWidth: '900px', margin: '0 auto',
        padding: '48px 24px',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      }}>
        {STATS.map((s, i) => (
          <div key={i} className="stat-item" style={{
            opacity: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
            padding: '0 24px',
            borderRight: i < 2 ? '1px solid rgba(245,158,11,0.1)' : 'none',
          }}>
            <span style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(34px, 4.5vw, 54px)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: '#f59e0b',
              lineHeight: 1,
              letterSpacing: '-0.01em',
            }}>
              {s.value}
            </span>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#78716c',
              textAlign: 'center',
            }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── SERVICES ────────────────────────────────────────────── */
const SERVICES_DATA = [
  {
    number: '01',
    title: 'Lead Response',
    description: 'The first business to respond wins the job. Missed call text-back, AI voice agents, and instant follow-up sequences so every lead gets contacted within 60 seconds, 24/7.',
    tags: ['AI Voice Agent', 'Missed Call Text-Back', 'Instant Follow-Up'],
  },
  {
    number: '02',
    title: 'Automated Follow-Up',
    description: "Most businesses give up after one attempt. Yours won't. Multi-touch campaigns follow up via text and email until the lead books, buys, or opts out without your team lifting a finger.",
    tags: ['Lead Nurturing', 'SMS Sequences', 'Email Automation'],
  },
  {
    number: '03',
    title: 'Reputation & Retention',
    description: 'Turn every happy client into your next five. Onboarding sequences that impress from day one, review requests that land at exactly the right moment, and referral automations that run on their own.',
    tags: ['Review Requests', 'Onboarding', 'Referral Systems'],
  },
]

function ServiceCard({ svc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="svc-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: 0,
        position: 'relative',
        padding: '40px 0 44px',
        cursor: 'default',
      }}
    >
      {/* Top rule — glows and bleeds left on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: hovered
          ? 'linear-gradient(to right, rgba(245,158,11,0.9) 0%, rgba(245,158,11,0.3) 55%, transparent 100%)'
          : 'rgba(245,158,11,0.1)',
        boxShadow: hovered ? '0 0 14px rgba(245,158,11,0.35)' : 'none',
        transition: 'background 0.5s ease, box-shadow 0.5s ease',
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr min-content', gap: '24px', alignItems: 'flex-start' }}>
        {/* Left: content */}
        <div>
          {/* Eyebrow: number + dash */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '9px', letterSpacing: '0.22em',
              color: hovered ? '#f59e0b' : 'rgba(245,158,11,0.4)',
              transition: 'color 0.3s ease',
            }}>
              {svc.number}
            </span>
            <div style={{
              height: '1px', width: '22px',
              background: hovered ? 'rgba(245,158,11,0.55)' : 'rgba(245,158,11,0.14)',
              transition: 'background 0.3s ease',
            }} />
          </div>

          {/* Title — dominant, goes amber on hover */}
          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(34px, 3.8vw, 52px)',
            fontStyle: 'italic', fontWeight: 500,
            lineHeight: 1.05, letterSpacing: '-0.01em',
            color: hovered ? '#f59e0b' : '#fdfaf0',
            margin: '0 0 18px 0',
            transition: 'color 0.4s ease',
          }}>
            {svc.title}
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '15px', color: '#78716c',
            lineHeight: 1.78, margin: '0 0 22px 0',
            maxWidth: '560px',
          }}>
            {svc.description}
          </p>

          {/* Tags — dot-separated inline, no pill borders */}
          <p style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10px', letterSpacing: '0.1em',
            color: hovered ? 'rgba(245,158,11,0.65)' : 'rgba(120,113,108,0.55)',
            margin: 0,
            transition: 'color 0.35s ease',
          }}>
            {svc.tags.join(' · ')}
          </p>
        </div>

        {/* Right: ghost number — large Cormorant italic serif, not mono */}
        <span style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(72px, 9vw, 112px)',
          fontStyle: 'italic', fontWeight: 400, lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: `1px ${hovered ? 'rgba(245,158,11,0.2)' : 'rgba(245,158,11,0.06)'}`,
          userSelect: 'none', whiteSpace: 'nowrap',
          paddingTop: '6px',
          transition: '-webkit-text-stroke 0.4s ease',
        }}>
          {svc.number}
        </span>
      </div>
    </div>
  )
}

function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.svc-label', { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.svc-label', start: 'top 85%' } })
      gsap.fromTo('.svc-headline', { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.svc-headline', start: 'top 85%' } })
      document.querySelectorAll('.svc-item').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.7, delay: i * 0.14, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 px-6 md:px-14"
      style={{ background: '#080600' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(245,158,11,0.11) 1px, transparent 1px)',
        backgroundSize: '38px 38px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <p className="svc-label font-mono text-xs tracking-[0.22em] uppercase mb-4"
          style={{ opacity: 0, color: 'rgba(245,158,11,0.6)' }}>
          What we build
        </p>
        <h2 className="svc-headline font-serif italic font-medium mb-14 leading-tight"
          style={{ opacity: 0, fontSize: 'clamp(30px, 4.5vw, 52px)', color: '#fdfaf0', maxWidth: '520px', letterSpacing: '-0.01em' }}>
          Three things.<br />Done right.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {SERVICES_DATA.map((svc, i) => (
            <ServiceCard key={i} svc={svc} />
          ))}
          {/* Closing rule */}
          <div style={{ height: '1px', background: 'rgba(245,158,11,0.1)' }} />
        </div>
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS ────────────────────────────────────────── */
const STEPS = [
  {
    number: '01',
    title: 'You share your goals.',
    description: "Fill out a short intake form. Tell us your current setup, where leads are slipping through, and what you want automated.",
  },
  {
    number: '02',
    title: 'We build your system.',
    description: "We design and build a custom automation stack tailored to your business — AI voice agents, follow-up sequences, review systems.",
  },
  {
    number: '03',
    title: 'Your business runs itself.',
    description: "Your system goes live. Leads get called, followed up, and converted automatically while you stay focused on the work.",
  },
]

function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hiw-label', { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.hiw-label', start: 'top 85%' } })
      gsap.fromTo('.hiw-headline', { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.hiw-headline', start: 'top 85%' } })
      gsap.fromTo('.hiw-step', { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 md:py-32 px-6 md:px-14 overflow-hidden"
      style={{ background: '#080600', borderTop: '1px solid rgba(245,158,11,0.06)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(245,158,11,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <p className="hiw-label font-mono text-xs tracking-[0.22em] uppercase mb-4"
          style={{ opacity: 0, color: 'rgba(245,158,11,0.6)' }}>
          How it works
        </p>
        <h2 className="hiw-headline font-serif italic font-medium mb-16 leading-tight"
          style={{ opacity: 0, fontSize: 'clamp(28px, 4vw, 50px)', color: '#fdfaf0', letterSpacing: '-0.01em', maxWidth: '480px' }}>
          Three steps.<br />Then it runs forever.
        </h2>

        <div className="hiw-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0 64px' }}>
          {STEPS.map((step, i) => (
            <div key={i} className="hiw-step" style={{ opacity: 0, position: 'relative', paddingTop: '32px' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(to right, rgba(245,158,11,0.6) 0%, rgba(245,158,11,0.12) 45%, transparent 100%)',
              }} />
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '9px', letterSpacing: '0.22em',
                color: 'rgba(245,158,11,0.5)',
                display: 'block', marginBottom: '20px',
              }}>
                {step.number}
              </span>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(22px, 2.2vw, 30px)',
                fontStyle: 'italic', fontWeight: 500,
                color: '#fdfaf0', lineHeight: 1.15,
                letterSpacing: '-0.01em',
                margin: '0 0 16px 0',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '14px', color: '#78716c',
                lineHeight: 1.8, margin: 0,
              }}>
                {step.description}
              </p>
              {i < 2 && (
                <span style={{
                  position: 'absolute',
                  top: '58px', right: '-36px',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '11px', color: 'rgba(245,158,11,0.18)',
                  userSelect: 'none', pointerEvents: 'none',
                }}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── AVAILABILITY ────────────────────────────────────────── */
function Availability() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.avail-content', { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 78%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 md:py-28 px-6 md:px-14"
      style={{ background: '#080600', borderTop: '1px solid rgba(245,158,11,0.06)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="avail-content" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {/* Top rule */}
          <div style={{
            height: '1px', marginBottom: '40px',
            background: 'linear-gradient(to right, rgba(245,158,11,0.55) 0%, rgba(245,158,11,0.1) 40%, transparent 100%)',
          }} />

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
            <div>
              <p className="font-mono text-xs tracking-[0.22em] uppercase mb-5"
                style={{ color: 'rgba(245,158,11,0.6)' }}>
                Current availability
              </p>
              <h2 className="font-serif italic font-medium leading-tight"
                style={{ fontSize: 'clamp(32px, 5vw, 68px)', color: '#fdfaf0', letterSpacing: '-0.02em', margin: 0 }}>
                Taking on{' '}
                <span style={{ color: '#f59e0b' }}>3 new clients</span>
                <br />this month.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '340px' }}>
              <p className="font-body leading-relaxed"
                style={{ fontSize: '15px', color: '#78716c', margin: 0 }}>
                Every system is built custom. That means limited capacity by design. If you're serious about fixing your lead pipeline, the window to start is now.
              </p>
              <a href="https://calendly.com/dee-xephral/30min" target="_blank" rel="noopener noreferrer"
                className="magnetic-btn inline-flex items-center gap-2 font-body font-semibold text-sm px-7 py-3.5 rounded-full self-start"
                style={{ background: '#f59e0b', color: '#080600' }}>
                Book a Call <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Bottom rule */}
          <div style={{
            height: '1px', marginTop: '40px',
            background: 'linear-gradient(to right, rgba(245,158,11,0.1), transparent)',
          }} />
        </div>
      </div>
    </section>
  )
}

/* ─── CAPABILITIES ────────────────────────────────────────── */
const CAPABILITIES_DATA = [
  { number: '01', title: 'AI Voice Agents',            desc: 'AI-powered callers that follow up with every lead instantly — 24/7, no missed calls, no missed deals.' },
  { number: '02', title: 'Lead Follow-Up Automation',  desc: 'Automated sequences that nurture cold leads into booked appointments without lifting a finger.' },
  { number: '03', title: 'Appointment Booking',        desc: 'Self-scheduling pipelines that fill your calendar while you focus on delivering the work.' },
  { number: '04', title: 'CRM Integration & Setup',    desc: 'Connect your tools into one unified system — Go High Level, HubSpot, or custom stacks.' },
  { number: '05', title: 'Content Production Systems', desc: 'AI-assisted pipelines for YouTube, short-form, and social content at scale with minimal effort.' },
  { number: '06', title: 'Analytics & Reporting',      desc: "Clear dashboards showing what's working, what's not, and exactly where your revenue is coming from." },
]

function CapabilityItem({ item }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', padding: '28px 0 32px', cursor: 'default' }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: hovered
          ? 'linear-gradient(to right, rgba(245,158,11,0.8), rgba(245,158,11,0.2), transparent)'
          : 'rgba(245,158,11,0.1)',
        boxShadow: hovered ? '0 0 10px rgba(245,158,11,0.3)' : 'none',
        transition: 'background 0.4s ease, box-shadow 0.4s ease',
      }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '9px', letterSpacing: '0.2em',
          color: hovered ? '#f59e0b' : 'rgba(245,158,11,0.4)',
          transition: 'color 0.3s ease',
        }}>{item.number}</span>
        <div style={{
          height: '1px', width: '18px',
          background: hovered ? 'rgba(245,158,11,0.5)' : 'rgba(245,158,11,0.14)',
          transition: 'background 0.3s ease',
        }} />
      </div>
      <h3 style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(20px, 1.9vw, 26px)',
        fontStyle: 'italic', fontWeight: 500,
        color: hovered ? '#f59e0b' : '#fdfaf0',
        lineHeight: 1.1, letterSpacing: '-0.005em',
        margin: '0 0 10px 0',
        transition: 'color 0.35s ease',
      }}>{item.title}</h3>
      <p style={{
        fontFamily: '"Inter", sans-serif',
        fontSize: '13px', color: '#78716c', lineHeight: 1.72, margin: 0,
      }}>{item.desc}</p>
    </div>
  )
}

function Capabilities() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cap-eyebrow', { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.cap-eyebrow', start: 'top 85%' } })
      gsap.fromTo('.cap-headline', { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.cap-headline', start: 'top 85%' } })
      gsap.fromTo('.cap-item', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.09, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 78%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={ref} className="relative py-24 md:py-32 px-6 md:px-14"
      style={{ background: '#080600', borderTop: '1px solid rgba(245,158,11,0.06)' }}>
      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <p className="cap-eyebrow font-mono text-xs tracking-[0.22em] uppercase mb-4"
          style={{ opacity: 0, color: 'rgba(245,158,11,0.6)' }}>
          Full service menu
        </p>
        <div className="cap-headline" style={{ opacity: 0, marginBottom: '52px' }}>
          <h2 className="font-serif italic font-medium leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 50px)', color: '#fdfaf0', letterSpacing: '-0.01em', marginBottom: '4px' }}>
            Everything you need.
          </h2>
          <h2 className="font-serif italic font-medium leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 50px)', color: 'rgba(245,158,11,0.55)', letterSpacing: '-0.01em' }}>
            Nothing you don't.
          </h2>
        </div>

        <div className="cap-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 80px' }}>
          {CAPABILITIES_DATA.map((item, i) => (
            <div key={i} className="cap-item" style={{ opacity: 0 }}>
              <CapabilityItem item={item} />
            </div>
          ))}
          <div style={{ height: '1px', background: 'rgba(245,158,11,0.1)' }} />
          <div style={{ height: '1px', background: 'rgba(245,158,11,0.1)' }} />
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─────────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    q: 'How is this different from just hiring a VA?',
    a: 'A VA costs $15–$25/hour, works set hours, and can only do one thing at a time. Our systems run 24/7, respond in under 60 seconds regardless of volume, and never call in sick. The economics and reliability are completely different.',
  },
  {
    q: 'What kind of businesses do you work with?',
    a: 'Primarily local service businesses — HVAC, roofing, dental, med spas, law firms, contractors, real estate. Any business where speed to lead and consistent follow-up determines who wins the job.',
  },
  {
    q: 'How long does it take to get up and running?',
    a: 'Most systems are live within 7–14 days. We handle the full build — no technical work required from you. You review, approve, and we launch.',
  },
  {
    q: 'Do I need to be tech-savvy to use this?',
    a: "No. Once built, the system runs itself. We build a simple dashboard so you can see what's happening, but you won't be touching any code or settings.",
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderTop: '1px solid rgba(245,158,11,0.1)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '26px 0', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(18px, 2vw, 24px)',
          fontStyle: 'italic', fontWeight: 500,
          color: isOpen ? '#f59e0b' : '#fdfaf0',
          lineHeight: 1.2, paddingRight: '24px',
          transition: 'color 0.3s ease',
        }}>
          {item.q}
        </span>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '18px', lineHeight: 1,
          color: isOpen ? '#f59e0b' : 'rgba(245,158,11,0.4)',
          transition: 'color 0.3s ease, transform 0.35s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          display: 'inline-block', flexShrink: 0,
        }}>
          +
        </span>
      </button>
      <div style={{
        overflow: 'hidden',
        maxHeight: isOpen ? '280px' : '0',
        transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <p style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: '15px', color: '#78716c',
          lineHeight: 1.78, padding: '0 56px 28px 0', margin: 0,
        }}>
          {item.a}
        </p>
      </div>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.faq-header', start: 'top 85%' } })
      gsap.fromTo('.faq-list', { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.faq-list', start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="faq" ref={ref} className="relative py-24 md:py-32 px-6 md:px-14"
      style={{ background: '#080600', borderTop: '1px solid rgba(245,158,11,0.06)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="faq-header" style={{ opacity: 0, marginBottom: '44px' }}>
          <p className="font-mono text-xs tracking-[0.22em] uppercase mb-4"
            style={{ color: 'rgba(245,158,11,0.6)' }}>
            FAQ
          </p>
          <h2 className="font-serif italic font-medium leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fdfaf0', letterSpacing: '-0.01em' }}>
            Common questions.
          </h2>
        </div>
        <div className="faq-list" style={{ opacity: 0 }}>
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={i} item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
          <div style={{ height: '1px', background: 'rgba(245,158,11,0.1)' }} />
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT ─────────────────────────────────────────────── */
function Contact() {
  const ref = useRef(null)
  const [fields, setFields] = useState({ full_name: '', email: '', phone: '', industry: '' })
  const [formStatus, setFormStatus] = useState('idle') // idle | submitting | success | error

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  const canSubmit = formStatus === 'idle' &&
    fields.full_name.trim() && isValidEmail(fields.email) && fields.phone.trim() && fields.industry.trim()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name in fields) setFields(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setFormStatus('submitting')
    try {
      const data = new FormData(e.target)
      const res = await fetch('https://formspree.io/f/xvzjaqna', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-left',  { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
      gsap.fromTo('.contact-right', { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 px-6 md:px-14 overflow-hidden"
      style={{ background: '#080600', borderTop: '1px solid rgba(245,158,11,0.06)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '80px', alignItems: 'start' }}>

          {/* Left */}
          <div className="contact-left" style={{ opacity: 0 }}>
            <p className="font-mono text-xs tracking-[0.22em] uppercase mb-5"
              style={{ color: 'rgba(245,158,11,0.6)' }}>
              Get in touch
            </p>
            <h2 className="font-serif italic font-medium leading-tight mb-6"
              style={{ fontSize: 'clamp(26px, 3.2vw, 42px)', color: '#fdfaf0', letterSpacing: '-0.01em' }}>
              Let's talk about your lead pipeline.
            </h2>
            <p className="font-body leading-relaxed mb-10"
              style={{ fontSize: '15px', color: '#78716c', maxWidth: '300px' }}>
              Fill out the form and I'll reply within 24 hours to schedule your free strategy call.
            </p>
            {[
              { label: 'Email',         value: 'dee@xephral.com' },
              { label: 'Location',      value: 'Remote — Available Worldwide' },
              { label: 'Response time', value: 'Within 24 hours' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: 'flex', flexDirection: 'column', gap: '3px',
                padding: '14px 0',
                borderTop: '1px solid rgba(245,158,11,0.08)',
              }}>
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '9px', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'rgba(245,158,11,0.5)',
                }}>{label}</span>
                <span style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '14px', color: '#d6cfbe',
                }}>{value}</span>
              </div>
            ))}
            <div style={{ height: '1px', background: 'rgba(245,158,11,0.08)' }} />
          </div>

          {/* Right — form or confirmation */}
          <div className="contact-right" style={{ opacity: 0 }}>
            {formStatus === 'success' ? (
              <div style={{ paddingTop: '8px' }}>
                <div style={{
                  height: '1px', marginBottom: '40px',
                  background: 'linear-gradient(to right, rgba(245,158,11,0.6), rgba(245,158,11,0.1), transparent)',
                }} />
                <p className="font-mono text-xs tracking-[0.22em] uppercase mb-6"
                  style={{ color: 'rgba(245,158,11,0.6)' }}>
                  Message received
                </p>
                <h3 className="font-serif italic font-medium leading-tight mb-4"
                  style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: '#fdfaf0', letterSpacing: '-0.01em' }}>
                  You'll hear from me within 24 hours.
                </h3>
                <p className="font-body" style={{ fontSize: '15px', color: '#78716c', lineHeight: 1.7 }}>
                  In the meantime, feel free to reach out directly at{' '}
                  <a href="mailto:dee@xephral.com"
                    style={{ color: '#f59e0b', textDecoration: 'none' }}>
                    dee@xephral.com
                  </a>
                </p>
              </div>
            ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px' }}>
                {[
                  { name: 'full_name', label: 'Full Name *', type: 'text',  placeholder: 'Your full name' },
                  { name: 'email',     label: 'Email *',     type: 'email', placeholder: 'your@email.com' },
                  { name: 'phone',     label: 'Phone *',     type: 'tel',   placeholder: '+1 (555) 000-0000' },
                  { name: 'industry',  label: 'Industry *',  type: 'text',  placeholder: 'e.g. HVAC, Dental, Roofing' },
                ].map(f => (
                  <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '9px', letterSpacing: '0.18em',
                      textTransform: 'uppercase', color: 'rgba(245,158,11,0.5)',
                    }}>{f.label}</label>
                    <input
                      type={f.type} name={f.name}
                      placeholder={f.placeholder}
                      required
                      value={fields[f.name]}
                      onChange={handleChange}
                      className="xeph-input"
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '9px', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'rgba(245,158,11,0.5)',
                }}>Message (optional)</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your business and the leads you're missing..."
                  rows={4}
                  className="xeph-input"
                  style={{ resize: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '9px', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'rgba(245,158,11,0.5)',
                }}>How did you hear about us? (optional)</label>
                <div style={{ position: 'relative' }}>
                  <select name="source" className="xeph-select">
                    <option value="">Select one...</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="youtube">YouTube</option>
                    <option value="other">Other</option>
                  </select>
                  <span style={{
                    position: 'absolute', right: '2px', top: '50%', transform: 'translateY(-50%)',
                    pointerEvents: 'none', color: 'rgba(245,158,11,0.4)',
                    fontFamily: '"JetBrains Mono", monospace', fontSize: '10px',
                  }}>▾</span>
                </div>
              </div>

              {formStatus === 'error' && (
                <p style={{
                  fontFamily: '"Inter", sans-serif', fontSize: '13px',
                  color: 'rgba(239,68,68,0.85)', margin: 0,
                }}>
                  Something went wrong. Email me directly at{' '}
                  <a href="mailto:dee@xephral.com" style={{ color: '#f59e0b', textDecoration: 'none' }}>
                    dee@xephral.com
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className={canSubmit ? 'magnetic-btn' : ''}
                style={{
                  background: canSubmit ? '#f59e0b' : 'rgba(245,158,11,0.25)',
                  color: canSubmit ? '#080600' : 'rgba(8,6,0,0.5)',
                  fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '14px',
                  padding: '16px 32px', borderRadius: '999px',
                  border: 'none', cursor: canSubmit ? 'pointer' : 'not-allowed',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  width: '100%',
                  transition: 'background 0.3s ease, color 0.3s ease',
                }}
              >
                {formStatus === 'submitting' ? 'Sending...' : <>Send Message <ArrowUpRight size={15} /></>}
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="px-6 md:px-14 py-16"
      style={{ background: '#080600', borderTop: '1px solid rgba(245,158,11,0.1)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px 40px' }}>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <XLogo className="w-5 h-5" style={{ color: '#f59e0b' }} />
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '12px', letterSpacing: '0.16em', fontWeight: 500, color: '#fdfaf0',
              }}>XEPHRAL</span>
            </div>
            <p style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '13px', lineHeight: 1.65, color: '#78716c', maxWidth: '240px',
            }}>
              AI automation for local service businesses that can't afford to miss a lead.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#f59e0b',
                boxShadow: '0 0 8px rgba(245,158,11,0.8)',
                animation: 'scrollLinePulse 2s ease-in-out infinite',
                display: 'inline-block', flexShrink: 0,
              }} />
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '9px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'rgba(245,158,11,0.7)',
              }}>Now taking new clients · 2026</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(245,158,11,0.5)',
              marginBottom: '16px',
            }}>Services</p>
            {['AI Voice Agents', 'Lead Follow-Up', 'Appointment Booking', 'CRM Integration'].map(l => (
              <a key={l} href="#services"
                style={{
                  display: 'block', fontFamily: '"Inter", sans-serif',
                  fontSize: '13px', color: '#78716c', marginBottom: '10px',
                  textDecoration: 'none', transition: 'color 0.2s ease',
                }}
                onMouseOver={e => e.currentTarget.style.color = '#fdfaf0'}
                onMouseOut={e => e.currentTarget.style.color = '#78716c'}>
                {l}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(245,158,11,0.5)',
              marginBottom: '16px',
            }}>Company</p>
            {[
              { label: 'FAQ',            href: '#faq' },
              { label: 'Contact',        href: '#contact' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms',          href: '/terms' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                style={{
                  display: 'block', fontFamily: '"Inter", sans-serif',
                  fontSize: '13px', color: '#78716c', marginBottom: '10px',
                  textDecoration: 'none', transition: 'color 0.2s ease',
                }}
                onMouseOver={e => e.currentTarget.style.color = '#fdfaf0'}
                onMouseOut={e => e.currentTarget.style.color = '#78716c'}>
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(245,158,11,0.5)',
              marginBottom: '16px',
            }}>Contact</p>
            {['dee@xephral.com', 'Remote · Worldwide', 'Response within 24hrs'].map(l => (
              <p key={l} style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '13px', color: '#78716c', margin: '0 0 10px 0',
              }}>{l}</p>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(245,158,11,0.06)',
          marginTop: '48px', paddingTop: '20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', color: 'rgba(120,113,108,0.5)', margin: 0 }}>
            &copy; {new Date().getFullYear()} Xephral. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─── APP ─────────────────────────────────────────────────── */
export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const ease = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return
      e.preventDefault()
      lenis.scrollTo(hash, { offset: -80, duration: 1.4, easing: ease })
    }
    document.addEventListener('click', onAnchorClick)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#080600', color: '#fdfaf0' }}>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <HowItWorks />
        <Capabilities />
        <Availability />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
