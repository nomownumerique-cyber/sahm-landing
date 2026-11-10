import { Megaphone, Search, Users, Palette, MessageCircleHeart, BarChart3, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

export default function Features({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const isAr = lang === 'ar';
  const items = isAr
    ? [
        { icon: Megaphone, title: 'إعلانات مدفوعة تبيع', desc: 'سناب شات وتيك توك وميتا وقوقل بإدارة يومية، واختبارات A/B باللهجة الخليجية، وصفحات هبوط عربية سريعة.', metric: 'متوسط 6.2x', tag: 'Paid Social' },
        { icon: Search, title: 'سيو عربي وإنجليزي', desc: 'تصدّر نتائج البحث بالعربية والفصحى واللهجة المحلية + خرائط قوقل لفروع الرياض ودبي والدوحة.', metric: '+184% زيارات', tag: 'SEO' },
        { icon: Users, title: 'شبكة مشاهير خليجيين', desc: '+350 صانع محتوى موثوق في السعودية والإمارات وقطر — بعقود وتراخيص إعلانية نظامية.', metric: '350+ مبدع', tag: 'Creators' },
        { icon: Palette, title: 'هوية فاخرة ومحتوى', desc: 'تصوير منتجات، وفيديو UGC، وهوية تليق بذائقة الخليج — من العود والأزياء إلى الضيافة والعقار.', metric: '48h تسليم', tag: 'Creative' },
        { icon: MessageCircleHeart, title: 'واتساب وتجارة إلكترونية', desc: 'تكامل سلة وزد وشوبيفاي + أتمتة واتساب للسلة المتروكة وإعادة الشراء وخدمة VIP.', metric: '+41% تحويل', tag: 'WhatsApp' },
        { icon: BarChart3, title: 'تحليلات وتحسين تحويل', desc: 'لوحة عربية لحظية، وتتبع سيرفر CAPI، وتقارير أسبوعية تفهمها — بلا مصطلحات معقدة.', metric: 'شفافية 100%', tag: 'CRO' },
      ]
    : [
        { icon: Megaphone, title: 'Paid social that sells', desc: 'Daily-managed Snapchat, TikTok, Meta & Google with Khaleeji-dialect A/B testing and Arabic-first landing pages.', metric: '6.2x avg', tag: 'Paid Social' },
        { icon: Search, title: 'Arabic + English SEO', desc: 'Own page one in Fusha & dialect + Google Maps domination for your Riyadh, Dubai & Doha branches.', metric: '+184% traffic', tag: 'SEO' },
        { icon: Users, title: 'Khaleeji creator network', desc: '350+ vetted Gulf creators in KSA, UAE & Qatar — with licensed, compliant whitelisted ads.', metric: '350+ creators', tag: 'Creators' },
        { icon: Palette, title: 'Luxury brand & content', desc: 'Product shoots, UGC video & identities tuned to Gulf taste — from oud & modest fashion to hospitality.', metric: '48h turnaround', tag: 'Creative' },
        { icon: MessageCircleHeart, title: 'WhatsApp & e-commerce', desc: 'Salla, Zid & Shopify integrations + WhatsApp automation for abandoned carts & VIP repurchase.', metric: '+41% CVR', tag: 'WhatsApp' },
        { icon: BarChart3, title: 'Analytics & CRO', desc: 'Live Arabic dashboard, server-side CAPI tracking and weekly reports you actually understand.', metric: '100% transparent', tag: 'CRO' },
      ];

  return (
    <section id="services" className="relative scroll-mt-28 py-16 sm:py-24" aria-label="Services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-100/70 px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-gold-600">
              ✦ {t.features_eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-5 text-[30px] sm:text-[44px] leading-[1.1] font-extrabold tracking-tight text-ink-900">
              {t.features_title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-[15.5px] sm:text-[17px] leading-relaxed text-ink-900/60 font-medium">{t.features_sub}</p>
          </Reveal>
        </div>

        <ul className="mt-10 sm:mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90} variant="up">
              <li className="card-lift group relative h-full overflow-hidden rounded-[22px] border border-ink-900/[0.08] bg-white p-6 sm:p-7 hover:border-emerald-deep-700/25 hover:shadow-[0_30px_60px_-24px_rgba(10,52,40,0.35)]">
                <div className="absolute -top-16 -end-16 h-40 w-40 rounded-full bg-gradient-to-br from-gold-200/50 to-transparent blur-2xl opacity-0 transition duration-700 group-hover:opacity-100" aria-hidden="true" />
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ink-900 to-emerald-deep-700 text-gold-300 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-cream-100 border border-ink-900/[0.07] px-2.5 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-ink-900/55">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-[18px] font-extrabold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-900/60 font-medium">{f.desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-ink-900/[0.07] pt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-deep-800/[0.07] px-3 py-1 text-[12px] font-extrabold text-emerald-deep-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    {f.metric}
                  </span>
                  <a href="#cta" className="inline-flex items-center gap-1 text-[13px] font-extrabold text-ink-900/60 transition group-hover:text-ink-900" aria-label={`${f.title} — learn more`}>
                    {isAr ? 'اطلبها' : 'Learn more'}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
                  </a>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
