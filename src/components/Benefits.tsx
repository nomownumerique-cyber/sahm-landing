import { useMemo, useState } from 'react';
import { ShieldCheck, Globe2, MoonStar, Headset, Calculator, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

export default function Benefits({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const isAr = lang === 'ar';
  const [spend, setSpend] = useState(30000);
  const [aov, setAov] = useState(320);
  const [cvr, setCvr] = useState(1.8);

  const result = useMemo(() => {
    // rough model: visitors from spend (avg CPC 1.8 SAR), orders = visitors*cvr*uplift, revenue = orders*aov
    const cpc = 1.8;
    const visitors = spend / cpc;
    const baseOrders = visitors * (cvr / 100);
    const baseRevenue = baseOrders * aov;
    const uplift = 1.72; // our avg creative+CRO uplift
    const newRevenue = baseRevenue * uplift;
    const extra = newRevenue - baseRevenue;
    const roas = newRevenue / spend;
    return { baseRevenue, newRevenue, extra, roas };
  }, [spend, aov, cvr]);

  const fmt = (n: number) =>
    new Intl.NumberFormat(isAr ? 'ar-SA' : 'en-US', { maximumFractionDigits: 0 }).format(Math.round(n));

  const sliderStyle = (v: number, min: number, max: number) =>
    ({ '--fill': `${((v - min) / (max - min)) * 100}%` } as React.CSSProperties);

  const bullets = isAr
    ? [
        { icon: Globe2, title: 'فريق عربي أصيل', desc: 'كتاب ومصممون ومشترون إعلاميون من الرياض ودبي — نفهم اللهجة والذوق والحساسية الثقافية.' },
        { icon: ShieldCheck, title: 'نظامي 100%', desc: 'سجل تجاري سعودي وإماراتي، وفواتير ضريبية، وتراخيص إعلانات للمشاهير — بلا مفاجآت.' },
        { icon: MoonStar, title: 'نفهم مواسم الخليج', desc: 'رمضان، العيد، اليوم الوطني السعودي والإماراتي، البلاك فرايدي — خطط جاهزة قبل الزحمة.' },
        { icon: Headset, title: 'مدير نمو مخصص', desc: 'قروب واتساب مباشر، وتقرير أسبوعي فيديو، واجتماع شهري — ترد عليك في دقائق لا أيام.' },
      ]
    : [
        { icon: Globe2, title: 'Native Arabic team', desc: 'Writers, designers & buyers from Riyadh & Dubai — we get the dialect, taste and cultural nuance.' },
        { icon: ShieldCheck, title: '100% compliant', desc: 'Saudi & UAE CR, VAT invoices and licensed creator ads — zero surprises, zero risk.' },
        { icon: MoonStar, title: 'We own Gulf seasons', desc: 'Ramadan, Eid, Saudi & UAE National Days, White Friday — planned before the rush, not during.' },
        { icon: Headset, title: 'Dedicated growth pod', desc: 'Direct WhatsApp group, weekly video report, monthly deep-dive — replies in minutes, not days.' },
      ];

  return (
    <section id="why" className="relative scroll-mt-28 py-16 sm:py-24 overflow-hidden" aria-label="Why choose us">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-10 -start-24 h-[380px] w-[380px] rounded-full bg-gold-200/40 blur-[90px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 items-start">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-100/70 px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-gold-600">
                ✦ {t.why_eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-5 text-[30px] sm:text-[44px] leading-[1.1] font-extrabold tracking-tight text-ink-900">
                {t.why_title}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {bullets.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <div className="card-lift h-full rounded-2xl border border-ink-900/[0.08] bg-white p-5 hover:shadow-[0_24px_50px_-24px_rgba(6,11,24,0.35)] hover:border-emerald-deep-700/20">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-deep-800/[0.08] text-emerald-deep-800">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-[15px] font-extrabold text-ink-900">{b.title}</p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-900/60 font-medium">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            {/* Season strip */}
            <Reveal delay={200}>
              <div className="mt-5 flex flex-wrap gap-2" aria-label="Gulf seasons we plan for">
                {[isAr ? '🌙 رمضان' : 'Ramadan', isAr ? 'العيد ×2' : 'Eid ×2', isAr ? 'اليوم الوطني' : 'National Days', isAr ? 'الجمعة البيضاء' : 'White Friday', isAr ? 'موسم الرياض' : 'Riyadh Season'].map((s) => (
                  <span key={s} className="rounded-full border border-ink-900/10 bg-white px-3.5 py-1.5 text-[12.5px] font-extrabold text-ink-900/70 shadow-sm">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Calculator */}
          <Reveal delay={150} variant="scale">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-emerald-deep-700/15 via-gold-400/20 to-transparent blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[24px] border border-white/60 bg-white shadow-[0_40px_80px_-30px_rgba(6,11,24,0.4)]">
                <div className="bg-gradient-to-r from-ink-900 via-emerald-deep-800 to-ink-900 px-6 py-5 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-display text-[16px] font-extrabold">
                      <Calculator className="h-5 w-5 text-gold-300" />
                      {t.calc_title}
                    </span>
                    <span className="rounded-full bg-gold-500/20 border border-gold-400/30 px-3 py-1 text-[11px] font-extrabold text-gold-200">SAR</span>
                  </div>
                  <p className="relative mt-1 text-[12.5px] font-medium text-white/60">{t.calc_sub}</p>
                </div>
                <div className="space-y-6 p-6 sm:p-7">
                  {[
                    { label: isAr ? 'الإنفاق الإعلاني الشهري' : 'Monthly ad spend', v: spend, min: 5000, max: 200000, step: 1000, disp: `${fmt(spend)} ${isAr ? 'ر.س' : 'SAR'}`, set: setSpend },
                    { label: isAr ? 'متوسط قيمة الطلب' : 'Average order value', v: aov, min: 50, max: 1500, step: 10, disp: `${fmt(aov)} ${isAr ? 'ر.س' : 'SAR'}`, set: setAov },
                    { label: isAr ? 'نسبة التحويل الحالية %' : 'Current conversion %', v: cvr, min: 0.5, max: 5, step: 0.1, disp: `${cvr.toFixed(1)}%`, set: setCvr },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex items-center justify-between text-[13.5px] font-extrabold text-ink-900">
                        <label htmlFor={s.label}>{s.label}</label>
                        <span className="rounded-full bg-cream-100 border border-ink-900/10 px-3 py-1 text-[12.5px] font-extrabold text-emerald-deep-800" dir="ltr">{s.disp}</span>
                      </div>
                      <input
                        id={s.label}
                        type="range"
                        min={s.min}
                        max={s.max}
                        step={s.step}
                        value={s.v}
                        onChange={(e) => s.set(Number(e.target.value))}
                        className="slider-gold mt-3 w-full"
                        style={sliderStyle(s.v, s.min, s.max)}
                        aria-label={s.label}
                      />
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-3 rounded-2xl bg-cream-100/80 border border-ink-900/[0.07] p-4">
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink-900/50">{isAr ? 'إيرادك الآن (تقديري)' : 'Your now (est.)'}</p>
                      <p className="font-display text-[19px] font-extrabold text-ink-900/70" dir="ltr">{fmt(result.baseRevenue)} SAR</p>
                    </div>
                    <div className="rounded-xl bg-ink-900 p-3 -m-1 text-white relative overflow-hidden">
                      <div className="absolute -top-8 -end-8 h-20 w-20 rounded-full bg-gold-500/30 blur-xl" />
                      <p className="relative text-[11px] font-extrabold uppercase tracking-wider text-gold-300">{isAr ? 'مع سهم (تقديري)' : 'With Sahm (est.)'}</p>
                      <p className="relative font-display text-[21px] font-extrabold" dir="ltr">{fmt(result.newRevenue)} SAR</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-emerald-700/20 bg-emerald-500/[0.07] p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-deep-800 text-white">
                      <TrendingUp className="h-5 w-5" />
                    </span>
                    <p className="text-[13.5px] font-bold text-emerald-deep-800 leading-snug">
                      {isAr ? `زيادة محتملة +${fmt(result.extra)} ر.س / شهر بعائد ${result.roas.toFixed(1)}x` : `Potential +${fmt(result.extra)} SAR / month at ${result.roas.toFixed(1)}x ROAS`}
                    </p>
                  </div>
                  <a href="#cta" className="btn-shimmer flex items-center justify-center gap-2 rounded-2xl bg-ink-900 px-6 py-4 text-[15px] font-extrabold text-white transition hover:bg-emerald-deep-800 hover:-translate-y-0.5">
                    {isAr ? 'أريد هذه الزيادة — احجز تدقيقي' : 'I want this lift — claim my audit'}
                  </a>
                  <p className="text-center text-[11.5px] font-semibold text-ink-900/45">{isAr ? 'تقدير مبني على متوسط 240+ علامة خليجية. التدقيق المجاني يعطيك رقمك الدقيق.' : 'Estimate based on 240+ Gulf brands average. Free audit gives your exact number.'}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
