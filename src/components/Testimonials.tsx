import { ShieldCheck, FileText, CalendarCheck, Languages } from 'lucide-react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

const commitments = [
  {
    icon: FileText,
    titleEn: 'Transparent reporting every month',
    titleAr: 'تقارير أداء شفافة كل شهر',
    descEn: 'A clear monthly report on spend, results and what we changed — in Arabic or English, no black box.',
    descAr: 'تقرير شهري واضح عن الإنفاق والنتائج وما غيّرناه — بالعربية أو الإنجليزية، بلا صندوق أسود.',
  },
  {
    icon: CalendarCheck,
    titleEn: 'First campaign report within 30 days of launch',
    titleAr: 'أول تقرير حملة خلال ٣٠ يومًا من الإطلاق',
    descEn: 'Live metrics from day one: impressions, clicks, cost per result and revenue attributed to our work.',
    descAr: 'مقاييس مباشرة من اليوم الأول: مشاهدات، نقرات، تكلفة كل نتيجة، وإيرادات منسوبة لعملنا.',
  },
  {
    icon: Languages,
    titleEn: 'Content in your language and market',
    titleAr: 'محتوى بلغتك وسوقك',
    descEn: 'Native Arabic and English creative shaped for Gulf audiences, dialects and cultural nuance.',
    descAr: 'إبداع أصيل بالعربية والإنجليزية مصمم لجماهير الخليج ولهجاتها وثقافتها.',
  },
  {
    icon: ShieldCheck,
    titleEn: 'Clear scope before any payment',
    titleAr: 'نطاق عمل واضح قبل أي دفع',
    descEn: 'We agree deliverables, channels and success measures in writing before you pay a single riyal.',
    descAr: 'نتفق على المخرجات والقنوات ومعايير النجاح كتابيًا قبل أن تدفع ريالًا واحدًا.',
  },
];

export default function Testimonials({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const isAr = lang === 'ar';

  return (
    <section id="reviews" className="relative scroll-mt-28 py-16 sm:py-24 bg-gradient-to-b from-white to-cream-100 overflow-hidden" aria-label="Our commitments">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 start-1/3 h-[300px] w-[500px] rounded-full bg-gold-200/40 blur-[90px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={i} delay={i * 90}>
                <div className="card-lift h-full rounded-2xl border border-ink-900/[0.08] bg-white p-6 shadow-[0_10px_30px_-18px_rgba(6,11,24,0.3)] hover:border-gold-500/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-deep-800/[0.08] text-emerald-deep-800">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-[15px] font-extrabold text-ink-900">{isAr ? c.titleAr : c.titleEn}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-900/60 font-medium">{isAr ? c.descAr : c.descEn}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

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