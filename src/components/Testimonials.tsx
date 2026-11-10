import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

const data = [
  {
    quoteEn: 'Sahm took us from 80k to 340k SAR a month in 90 days. Their Snapchat creatives in Najdi dialect outperformed everything we tried for two years.',
    quoteAr: 'سهم نقلنا من ٨٠ ألف إلى ٣٤٠ ألف ريال شهريًا في ٩٠ يوم. إبداعات السناب باللهجة النجدية تفوقت على كل ما جربناه لسنتين.',
    name: 'Fahad Al-Otaibi',
    nameAr: 'فهد العتيبي',
    roleEn: 'Founder, Maison Oud — Riyadh',
    roleAr: 'مؤسس، دار العود — الرياض',
    img: 'https://images.pexels.com/photos/14564843/pexels-photo-14564843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
    metric: '+312%',
    metricLabelEn: 'revenue in 90 days',
    metricLabelAr: 'نمو الإيراد في ٩٠ يوم',
  },
  {
    quoteEn: 'Finally an agency that understands modest fashion and Gulf taste. Our TikTok Shop sells out every drop now — WhatsApp automation alone added 41% repurchase.',
    quoteAr: 'أخيرًا وكالة تفهم الأزياء المحتشمة وذوق الخليج. كل إصدار ينفد الآن — أتمتة الواتساب وحدها رفعت إعادة الشراء ٤١٪.',
    name: 'Noora Al Farsi',
    nameAr: 'نورة الفارسي',
    roleEn: 'CEO, Lumière Abaya — Dubai',
    roleAr: 'الرئيس التنفيذي، لميار — دبي',
    img: 'https://images.pexels.com/photos/33280336/pexels-photo-33280336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
    metric: '5.9x',
    metricLabelEn: 'blended ROAS',
    metricLabelAr: 'عائد موحد',
  },
  {
    quoteEn: 'They ranked us #1 for 30+ Arabic keywords and fixed our Salla checkout. Organic now drives 38% of sales — we cut ad waste by half.',
    quoteAr: 'تصدّرنا المركز الأول لأكثر من ٣٠ كلمة عربية وأصلحوا سلة متجرنا. الزيارات العضوية صارت ٣٨٪ من المبيعات — وخفضنا هدر الإعلانات للنصف.',
    name: 'Mohammed Al-Kuwari',
    nameAr: 'محمد الكواري',
    roleEn: 'Director, Qahwa House — Doha',
    roleAr: 'مدير، بيت القهوة — الدوحة',
    img: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
    metric: '#1',
    metricLabelEn: 'Google KSA & QA',
    metricLabelAr: 'في قوقل السعودية وقطر',
  },
  {
    quoteEn: 'Professional, fast, and fully compliant with creator licenses. Our White Friday campaign did 4 months of revenue in 9 days.',
    quoteAr: 'احترافية وسرعة والتزام كامل بتراخيص المشاهير. حملة الجمعة البيضاء حققت إيراد ٤ أشهر في ٩ أيام.',
    name: 'Sara Al-Sabah',
    nameAr: 'سارة الصباح',
    roleEn: 'Founder, Pearl Derm — Kuwait City',
    roleAr: 'مؤسِّسة، لؤلؤ — مدينة الكويت',
    img: 'https://images.pexels.com/photos/6071507/pexels-photo-6071507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
    metric: '4.2x',
    metricLabelEn: 'White Friday revenue',
    metricLabelAr: 'إيراد الجمعة البيضاء',
  },
];

export default function Testimonials({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const isAr = lang === 'ar';
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((p) => (p + 1) % data.length), 5200);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => setIdx((p) => (p - 1 + data.length) % data.length);
  const next = () => setIdx((p) => (p + 1) % data.length);

  return (
    <section id="reviews" className="relative scroll-mt-28 py-16 sm:py-24 bg-gradient-to-b from-white to-cream-100 overflow-hidden" aria-label="Testimonials">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 start-1/3 h-[300px] w-[500px] rounded-full bg-gold-200/40 blur-[90px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-gold-600 shadow-sm">
                ✦ {t.reviews_eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-4 text-[30px] sm:text-[44px] font-extrabold tracking-tight text-ink-900">{t.reviews_title}</h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="flex items-center gap-2">
              <button onClick={prev} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/10 bg-white text-ink-900 shadow-sm transition hover:bg-ink-900 hover:text-white">
                <ChevronLeft className={`h-5 w-5 ${isAr ? 'rotate-180' : ''}`} />
              </button>
              <button onClick={next} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/10 bg-white text-ink-900 shadow-sm transition hover:bg-ink-900 hover:text-white">
                <ChevronRight className={`h-5 w-5 ${isAr ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-8 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(${isAr ? idx * 100 : -idx * 100}%)` }}
          >
            {data.map((d, i) => (
              <article
                key={d.name}
                className="w-full shrink-0 px-0 sm:px-2"
                aria-hidden={i !== idx}
                aria-label={`Testimonial ${i + 1}`}
              >
                <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
                  <div className="relative overflow-hidden rounded-[24px] border border-ink-900/[0.08] bg-white p-7 sm:p-9 shadow-[0_30px_60px_-30px_rgba(6,11,24,0.35)]">
                    <Quote className="absolute -top-2 end-6 h-20 w-20 text-cream-200" aria-hidden="true" />
                    <div className="flex gap-1" aria-label="5 stars">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <blockquote className="relative mt-4 text-[17px] sm:text-[19px] leading-relaxed font-semibold text-ink-900">
                      “{isAr ? d.quoteAr : d.quoteEn}”
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3.5">
                      <img src={d.img} alt={isAr ? d.nameAr : d.name} loading="lazy" className="h-12 w-12 rounded-full object-cover border-2 border-gold-300 shadow" />
                      <div>
                        <p className="flex items-center gap-1.5 text-[15px] font-extrabold text-ink-900">
                          {isAr ? d.nameAr : d.name}
                          <BadgeCheck className="h-4 w-4 text-sky-600" />
                        </p>
                        <p className="text-[13px] font-semibold text-ink-900/55">{isAr ? d.roleAr : d.roleEn}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[24px] bg-ink-900 p-7 sm:p-8 text-white flex flex-col justify-between min-h-[240px]">
                    <img
                      src={i % 2 === 0
                        ? 'https://images.pexels.com/photos/29353238/pexels-photo-29353238.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600'
                        : 'https://images.pexels.com/photos/39470846/pexels-photo-39470846.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600'}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/70 to-transparent" aria-hidden="true" />
                    <div className="relative">
                      <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-gold-300">{isAr ? 'نتيجة موثقة' : 'Verified result'}</p>
                      <p className="font-display mt-2 text-[56px] leading-none font-extrabold text-gradient-gold">{d.metric}</p>
                      <p className="mt-1 text-[14px] font-bold text-white/70">{isAr ? d.metricLabelAr : d.metricLabelEn}</p>
                    </div>
                    <div className="relative mt-6 flex gap-1.5">
                      {data.map((_, dot) => (
                        <button
                          key={dot}
                          onClick={() => setIdx(dot)}
                          aria-label={`Go to testimonial ${dot + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-400 ${dot === idx ? 'w-8 bg-gold-400' : 'w-3 bg-white/25 hover:bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* strip logos */}
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12.5px] font-extrabold text-ink-900/45">
            <span>★ Google Partner</span>
            <span>★ Meta Business Partner</span>
            <span>★ Snapchat Certified</span>
            <span>★ TikTok Marketing Partner</span>
            <span>★ Salla Expert • Zid Partner</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
