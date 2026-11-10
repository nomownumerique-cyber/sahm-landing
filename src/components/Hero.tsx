import { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, BadgeCheck, TrendingUp, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

const avatars = [
  'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100',
  'https://images.pexels.com/photos/33280336/pexels-photo-33280336.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100',
  'https://images.pexels.com/photos/14564843/pexels-photo-14564843.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100',
  'https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100',
];

function useCountUp(target: number, started: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return val;
}

export default function Hero({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const roas = useCountUp(6.8, visible);
  const revenue = useCountUp(480, visible);

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36 pb-10 sm:pb-16" aria-label="Hero">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,black,transparent)]" />
        <div className="animate-blob absolute -top-24 -start-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-emerald-deep-600/25 via-emerald-deep-500/15 to-transparent blur-3xl" />
        <div className="animate-blob absolute top-20 -end-32 h-[520px] w-[520px] rounded-full bg-gradient-to-bl from-gold-400/30 via-gold-200/20 to-transparent blur-3xl [animation-delay:2s]" />
        <div className="absolute top-1/2 start-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-[100%] bg-gradient-to-b from-cream-200/60 to-transparent blur-2xl" />
        {/* dune line */}
        <svg className="absolute bottom-[-2px] inset-x-0 w-full text-cream-200/80" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" style={{ height: 90 }}>
          <path d="M0 80 C 240 20, 420 110, 720 60 C 1020 10, 1200 90, 1440 50 L1440 120 L0 120 Z" fill="currentColor" opacity="0.55" />
          <path d="M0 95 C 300 55, 600 115, 900 85 C 1100 65, 1300 95, 1440 75 L1440 120 L0 120 Z" fill="#fffdf8" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy */}
          <div className="text-center lg:text-start">
            <Reveal>
              <a
                href="#reviews"
                className="group inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/80 py-1.5 pe-4 ps-1.5 text-[12.5px] font-bold text-ink-900 shadow-sm backdrop-blur transition hover:border-gold-500/40 hover:shadow-md"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-deep-800 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-gold-200">
                  <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {lang === 'en' ? 'New' : 'جديد'}
                </span>
                <span className="text-ink-900/80">{t.hero_badge}</span>
              </a>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="font-display mt-6 text-[38px] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink-900 sm:text-[56px] lg:text-[64px]">
                {t.hero_title_a}{' '}
                <span className="relative inline-block">
                  <span className="text-gradient-emerald">{t.hero_title_b}</span>
                  <svg className="absolute -bottom-2 start-0 w-full" viewBox="0 0 220 12" fill="none" aria-hidden="true">
                    <path d="M3 9C60 3 160 3 217 8" stroke="#c9a227" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
                  </svg>
                </span>{' '}
                {t.hero_title_c}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="font-arabic mt-3 text-[15px] font-semibold tracking-wide text-gold-600" dir={lang === 'en' ? 'rtl' : 'ltr'}>
                {t.hero_arabic} ✦ Riyadh • Dubai • Doha
              </p>
              <p className="mx-auto lg:mx-0 mt-4 max-w-xl text-[16px] sm:text-[17.5px] leading-relaxed text-ink-900/65 font-medium">
                {t.hero_sub}
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="#cta"
                  className="btn-shimmer group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-emerald-deep-700 to-emerald-deep-900 px-7 py-4 text-[15.5px] font-extrabold text-white shadow-[0_20px_45px_-15px_rgba(10,52,40,0.65)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_55px_-15px_rgba(10,52,40,0.7)]"
                >
                  {t.hero_cta1}
                  <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </a>
                <a
                  href="#work"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-ink-900/10 bg-white/80 px-6 py-4 text-[15px] font-extrabold text-ink-900 backdrop-blur transition hover:border-ink-900/20 hover:bg-white"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-900 text-white transition-transform group-hover:scale-110">
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </span>
                  {t.hero_cta2}
                </a>
              </div>
              <p className="mt-3 text-[12.5px] font-semibold text-ink-900/50">{t.hero_note}</p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3 rtl:space-x-reverse">
                  {avatars.map((a, i) => (
                    <img
                      key={i}
                      src={a}
                      alt="Happy Gulf client"
                      loading="lazy"
                      className="h-10 w-10 rounded-full border-[2.5px] border-white object-cover shadow-md"
                    />
                  ))}
                  <span className="grid h-10 w-10 place-items-center rounded-full border-[2.5px] border-white bg-ink-900 text-[11px] font-extrabold text-white">
                    +240
                  </span>
                </div>
                <div className="text-center sm:text-start">
                  <div className="flex items-center justify-center lg:justify-start gap-1" aria-label="4.9 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                    ))}
                    <span className="ms-1.5 text-[13.5px] font-extrabold text-ink-900">4.9</span>
                  </div>
                  <p className="text-[13px] font-semibold text-ink-900/60">{t.hero_trust}</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-emerald-deep-800/[0.07] px-3 py-1.5 text-[12px] font-bold text-emerald-deep-800 border border-emerald-deep-800/10">
                  <MapPin className="h-3.5 w-3.5" />
                  KSA • UAE • QA • KW • BH • OM
                </div>
              </div>
            </Reveal>
          </div>

          {/* Dashboard visual */}
          <Reveal delay={200} variant="scale" className="relative">
            <div className="relative mx-auto max-w-[560px]">
              {/* glow */}
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-emerald-deep-600/20 via-gold-400/20 to-transparent blur-2xl" aria-hidden="true" />

              {/* Main card */}
              <div className="glass-card relative overflow-hidden rounded-[24px] border border-white/70 shadow-[0_40px_80px_-30px_rgba(6,11,24,0.45)]">
                {/* header */}
                <div className="flex items-center justify-between border-b border-ink-900/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex gap-1.5">
                      <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] block" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e] block" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#28c840] block" />
                    </span>
                    <span className="ms-1 text-[12.5px] font-extrabold tracking-wide text-ink-900/70 uppercase">
                      Sahm OS • {lang === 'en' ? 'Riyadh Flagship' : 'فرع الرياض'}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11.5px] font-extrabold text-emerald-700 border border-emerald-500/20">
                    <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {t.hero_live}
                  </span>
                </div>

                {/* KPIs */}
                <div className="grid grid-cols-3 gap-3 px-5 pt-5">
                  <div className="rounded-2xl bg-ink-900 p-3.5 text-white relative overflow-hidden">
                    <div className="absolute -top-6 -end-6 h-16 w-16 rounded-full bg-gold-500/25 blur-xl" />
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-white/60">ROAS</p>
                    <p className="font-display text-[22px] font-extrabold">{roas.toFixed(1)}x</p>
                    <p className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300">
                      <TrendingUp className="h-3 w-3" /> +38%
                    </p>
                  </div>
                  <div className="rounded-2xl bg-cream-100 border border-ink-900/[0.06] p-3.5">
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-ink-900/50">{lang === 'en' ? 'Revenue' : 'الإيراد'}</p>
                    <p className="font-display text-[20px] font-extrabold text-ink-900">{Math.round(revenue)}M <span className="text-[11px] font-bold text-ink-900/50">SAR</span></p>
                    <p className="text-[11px] font-bold text-emerald-700">{lang === 'en' ? 'This year' : 'هذه السنة'}</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 p-3.5 text-white relative overflow-hidden">
                    <Sparkles className="absolute -bottom-2 -end-2 h-12 w-12 text-white/20" />
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-white/80">Snap + TikTok</p>
                    <p className="font-display text-[20px] font-extrabold">72%</p>
                    <p className="text-[11px] font-bold text-white/90">{lang === 'en' ? 'of Gulf sales' : 'من مبيعات الخليج'}</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="px-5 pt-4">
                  <div className="rounded-2xl border border-ink-900/[0.07] bg-white p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[12.5px] font-extrabold text-ink-900">{lang === 'en' ? 'Blended revenue — last 12 weeks' : 'الإيرادات — آخر ١٢ أسبوع'}</p>
                      <div className="flex gap-1.5 text-[10.5px] font-bold">
                        <span className="rounded-full bg-ink-900 text-white px-2 py-0.5">RAMADAN</span>
                        <span className="rounded-full bg-cream-200 px-2 py-0.5 text-ink-900/70">WHITE FRI</span>
                      </div>
                    </div>
                    <svg viewBox="0 0 400 130" className="w-full h-[120px]" role="img" aria-label="Revenue growth chart">
                      <defs>
                        <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0e4a38" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#0e4a38" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#0e4a38" />
                          <stop offset="60%" stopColor="#147152" />
                          <stop offset="100%" stopColor="#c9a227" />
                        </linearGradient>
                      </defs>
                      {[25, 55, 85, 115].map((y) => (
                        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#0a1120" strokeOpacity="0.07" strokeDasharray="4 5" />
                      ))}
                      <path d="M0 105 C40 100 55 82 80 80 C105 78 115 88 140 75 C165 62 175 68 200 55 C225 42 235 50 260 38 C285 26 295 30 320 20 C345 10 370 14 400 8 L400 130 L0 130 Z" fill="url(#hg)" />
                      <path d="M0 105 C40 100 55 82 80 80 C105 78 115 88 140 75 C165 62 175 68 200 55 C225 42 235 50 260 38 C285 26 295 30 320 20 C345 10 370 14 400 8"
                        fill="none" stroke="url(#lg)" strokeWidth="3.2" strokeLinecap="round"
                        strokeDasharray="1000" strokeDashoffset={visible ? 0 : 1000}
                        style={{ transition: 'stroke-dashoffset 2.2s ease-out 0.4s' }} />
                      <circle cx="320" cy="20" r="5" fill="#c9a227" stroke="#fff" strokeWidth="2.5" />
                      <g>
                        <rect x="272" y="0" width="96" height="22" rx="11" fill="#0a1120" />
                        <text x="320" y="14.5" textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="800">Eid peak +212%</text>
                      </g>
                    </svg>
                    {/* channels */}
                    <div className="mt-3 space-y-2">
                      {[
                        { n: 'Snapchat', v: 92, c: 'from-yellow-400 to-amber-500', r: '6.8x' },
                        { n: 'TikTok', v: 78, c: 'from-ink-900 to-ink-700', r: '5.2x' },
                        { n: 'Meta', v: 66, c: 'from-sky-500 to-blue-600', r: '4.9x' },
                        { n: 'Google', v: 84, c: 'from-emerald-600 to-emerald-700', r: '7.1x' },
                      ].map((ch, i) => (
                        <div key={ch.n} className="flex items-center gap-2.5">
                          <span className="w-[68px] text-[11px] font-extrabold text-ink-900/70">{ch.n}</span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-900/[0.07]">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${ch.c} transition-all duration-[1.6s] ease-out`}
                              style={{ width: visible ? `${ch.v}%` : '0%', transitionDelay: `${500 + i * 150}ms` }}
                            />
                          </div>
                          <span className="w-[34px] text-end text-[11px] font-extrabold text-ink-900">{ch.r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-5" />

                {/* Floating cards */}
                <div className="animate-float absolute -start-3 sm:-start-8 top-[22%] hidden sm:flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 p-2.5 pe-4 shadow-[0_20px_45px_-15px_rgba(6,11,24,0.4)] backdrop-blur">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/15 text-emerald-700">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[12px] font-extrabold text-ink-900">Oud Maison • Riyadh</span>
                    <span className="block text-[11px] font-bold text-emerald-700">+312% revenue in 90 days</span>
                  </span>
                </div>
                <div className="animate-float-delay absolute -end-2 sm:-end-6 bottom-[18%] hidden sm:flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 p-2.5 pe-4 shadow-[0_20px_45px_-15px_rgba(6,11,24,0.4)] backdrop-blur">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#25D366]/15 text-[#128C4B]">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[12px] font-extrabold text-ink-900" dir="ltr">WhatsApp • 1,240 orders</span>
                    <span className="block text-[11px] font-bold text-ink-900/60">{lang === 'en' ? 'this week via Salla' : 'هذا الأسبوع عبر سلة'}</span>
                  </span>
                </div>
              </div>

              {/* mini proof under */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[12px] font-bold text-ink-900/55">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-ink-900/10 px-3 py-1.5 backdrop-blur">
                  ◈ Meta Business Partner
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-ink-900/10 px-3 py-1.5 backdrop-blur">
                  ◈ Snap Certified
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-ink-900/10 px-3 py-1.5 backdrop-blur">
                  ◈ TikTok Partner
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
