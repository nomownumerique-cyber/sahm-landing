import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

const brands = [
  { en: 'MAISON OUD', ar: 'دار العود', tag: 'Riyadh' },
  { en: 'LUMIÈRE ABAYA', ar: 'لميار', tag: 'Dubai' },
  { en: 'QAHWA HOUSE', ar: 'بيت القهوة', tag: 'Jeddah' },
  { en: 'PEARL DERM', ar: 'لؤلؤ', tag: 'Doha' },
  { en: 'SABLE & GOLD', ar: 'الرمال', tag: 'Kuwait' },
  { en: 'NOOR OPTICS', ar: 'نور', tag: 'Abu Dhabi' },
  { en: 'DANAT JEWELS', ar: 'دانات', tag: 'Manama' },
  { en: 'MUSK ATELIER', ar: 'مسك', tag: 'Muscat' },
];

function Counter({ to, suffix = '', decimals = 0, prefix = '' }: { to: number; suffix?: string; decimals?: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStarted(true),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1800);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function SocialProof({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <section className="relative py-10 sm:py-14" aria-label="Social proof">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-[12px] font-extrabold uppercase tracking-[0.22em] text-ink-900/45">
            {t.logos_title}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="marquee-mask mt-6 overflow-hidden" aria-hidden="true">
            <div className="animate-marquee flex w-max items-center gap-4 pe-4">
              {[...brands, ...brands].map((b, i) => (
                <div
                  key={i}
                  className="group flex shrink-0 items-center gap-3 rounded-2xl border border-ink-900/[0.08] bg-white px-5 py-3.5 shadow-[0_10px_30px_-18px_rgba(6,11,24,0.4)] transition hover:border-gold-500/40 hover:shadow-lg"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-ink-900 to-emerald-deep-700 font-arabic text-[15px] font-bold text-gold-300">
                    {b.ar.slice(0, 1)}
                  </span>
                  <span>
                    <span className="font-display block text-[13.5px] font-extrabold tracking-wide text-ink-900">{b.en}</span>
                    <span className="block text-[11px] font-bold text-ink-900/45">{b.ar} • {b.tag}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            { v: <Counter to={480} suffix="M" prefix={lang === 'en' ? 'SAR ' : ''} />, l: t.stats_revenue, s: lang === 'en' ? 'Across Salla, Zid & Shopify' : 'عبر سلة وزد وشوبيفاي' },
            { v: <Counter to={6.2} suffix="x" decimals={1} />, l: t.stats_roas, s: lang === 'en' ? 'Snap • TikTok • Meta • Google' : 'سناب • تيك توك • ميتا • قوقل' },
            { v: <Counter to={240} suffix="+" />, l: t.stats_brands, s: 'KSA 45% • UAE 30% • QA/KW/BH/OM 25%' },
            { v: <Counter to={98} suffix="%" />, l: t.stats_retention, s: lang === 'en' ? 'Stay past month 6' : 'يستمرون بعد الشهر السادس' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="card-lift group relative overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white p-5 sm:p-6 text-center hover:border-gold-500/40 hover:shadow-[0_24px_50px_-20px_rgba(201,162,39,0.45)]">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="font-display text-[28px] sm:text-[34px] font-extrabold tracking-tight text-ink-900">
                  {s.v}
                </p>
                <p className="mt-1 text-[13px] font-extrabold text-ink-900">{s.l}</p>
                <p className="mt-0.5 text-[11.5px] font-semibold text-ink-900/50">{s.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
