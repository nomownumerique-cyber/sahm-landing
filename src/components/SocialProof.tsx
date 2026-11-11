import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

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


        <div className="mt-8 grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
          {[
            { l: t.stats_revenue, s: lang === 'en' ? 'We measure success in customers and sales — with transparent monthly performance reports.' : 'نقيس النجاح بعدد العملاء والمبيعات، مع تقارير أداء شفافة كل شهر.' },
            { l: t.stats_brands, s: lang === 'en' ? 'A specialist marketing partner for growing brands in Saudi & the UAE.' : 'وكيل تسويق متخصص للعلامات النامية في السعودية والإمارات.' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="card-lift group relative overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white p-5 sm:p-6 text-center hover:border-gold-500/40">
                <p className="mt-1 text-[14px] font-extrabold text-ink-900">{s.l}</p>
                <p className="mt-1.5 text-[12.5px] font-semibold text-ink-900/60 leading-relaxed">{s.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
