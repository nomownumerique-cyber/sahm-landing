import { useState } from 'react';
import { LayoutDashboard, Languages, HeartHandshake, Check, PlayCircle } from 'lucide-react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

export default function Showcase({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const isAr = lang === 'ar';
  const [tab, setTab] = useState(0);

  const tabs = isAr
    ? [
        {
          icon: LayoutDashboard,
          label: 'غرفة الإعلانات',
          title: 'كل قنواتك في شاشة واحدة',
          desc: 'نراقب سناب وتيك توك وميتا وقوقل لحظة بلحظة، ونحوّل الميزانية تلقائيًا نحو الأعلى عائدًا — وأنت تشاهد كل ريال.',
          points: ['تحويل ميزانية ذكي يومي حسب ROAS', 'اختبار 20+ إبداع أسبوعيًا باللهجة الخليجية', 'تتبع CAPI للسيرفر + حماية من iOS14'],
          stat: '6.8x',
          statLabel: 'عائد سناب شات لعملاء العود',
          visual: 'dashboard' as const,
        },
        {
          icon: Languages,
          label: 'السيو والمحتوى العربي',
          title: 'تصدّر قوقل بالعربية أولًا',
          desc: 'مقالات وصفحات منتجات بالفصحى واللهجة المحلية، ومراجعات، وخرائط — لتظهر عندما يبحث الخليج عنك.',
          points: ['بحث كلمات باللهجة السعودية والإماراتية', 'صفحات سلة وزد مُهيأة للتحويل', 'روابط من صحف ومدونات خليجية موثوقة'],
          stat: '+184%',
          statLabel: 'نمو الزيارات العضوية في 6 أشهر',
          visual: 'seo' as const,
        },
        {
          icon: HeartHandshake,
          label: 'المشاهير والواتساب',
          title: 'ثقة المشاهير + قوة الواتساب',
          desc: 'نطلق حملات WHITELIST مع صناع خليجيين، ثم نكمل البيع عبر واتساب مؤتمت — من الاستفسار حتى التقييم.',
          points: ['عقود وتراخيص إعلانات نظامية 100%', 'سلة متروكة + Upsell عبر واتساب', 'تقييمات وUGC ترفع التحويل 41%'],
          stat: '41%',
          statLabel: 'رفع التحويل عبر أتمتة الواتساب',
          visual: 'whatsapp' as const,
        },
      ]
    : [
        {
          icon: LayoutDashboard,
          label: 'Ads Command',
          title: 'Every channel, one screen',
          desc: 'We watch Snap, TikTok, Meta & Google minute-by-minute and shift budget automatically to the highest ROAS — while you watch every riyal.',
          points: ['Daily smart budget shifts by ROAS', '20+ Khaleeji creatives tested weekly', 'Server-side CAPI + iOS14-proof tracking'],
          stat: '6.8x',
          statLabel: 'Snapchat ROAS for oud clients',
          visual: 'dashboard' as const,
        },
        {
          icon: Languages,
          label: 'Arabic SEO',
          title: 'Own Google in Arabic first',
          desc: 'Fusha + dialect articles, product pages, reviews and maps — so you show up the moment the Gulf searches.',
          points: ['Saudi & Emirati dialect keyword research', 'Salla / Zid pages built to convert', 'Backlinks from trusted Gulf press & blogs'],
          stat: '+184%',
          statLabel: 'Organic traffic growth in 6 months',
          visual: 'seo' as const,
        },
        {
          icon: HeartHandshake,
          label: 'Creators + WhatsApp',
          title: 'Creator trust + WhatsApp power',
          desc: 'We launch whitelisted campaigns with Gulf creators, then close the sale over automated WhatsApp — from question to review.',
          points: ['100% licensed, compliant creator ads', 'Abandoned cart + upsell on WhatsApp', 'Reviews & UGC lifting CVR by 41%'],
          stat: '41%',
          statLabel: 'CVR lift from WhatsApp automation',
          visual: 'whatsapp' as const,
        },
      ];

  const active = tabs[tab];

  return (
    <section id="work" className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-16 sm:py-24" aria-label="Product showcase">
      {/* bg */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="animate-blob absolute -top-32 start-1/4 h-[420px] w-[420px] rounded-full bg-emerald-600/20 blur-[100px]" />
        <div className="animate-blob absolute bottom-0 end-0 h-[380px] w-[380px] rounded-full bg-gold-500/15 blur-[100px] [animation-delay:3s]" />
        <img
          src="https://images.pexels.com/photos/38096888/pexels-photo-38096888.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-x-0 bottom-0 h-[280px] w-full object-cover opacity-[0.14] [mask-image:linear-gradient(to_top,black,transparent)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-gold-300 backdrop-blur">
              ✦ {t.showcase_eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-5 text-[30px] sm:text-[44px] font-extrabold tracking-tight text-white">
              {t.showcase_title}{' '}
              <span className="text-gradient-gold">{isAr ? 'بشفافية كاملة' : 'with zero black box'}</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-[15.5px] text-white/60 font-medium">{t.showcase_sub}</p>
          </Reveal>
        </div>

        {/* Tabs */}
        <Reveal delay={180}>
          <div className="mt-8 flex justify-center" role="tablist" aria-label="Showcase tabs">
            <div className="glass-dark inline-flex flex-wrap justify-center gap-1 rounded-2xl border border-white/10 p-1.5">
              {tabs.map((tb, i) => (
                <button
                  key={tb.label}
                  role="tab"
                  aria-selected={tab === i}
                  onClick={() => setTab(i)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 text-[13.5px] font-extrabold transition-all duration-300 ${
                    tab === i
                      ? 'bg-gradient-to-b from-gold-400 to-gold-600 text-ink-950 shadow-lg'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tb.icon className="h-4 w-4" />
                  {tb.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-[1fr_1.15fr]">
          {/* Copy card */}
          <Reveal key={`copy-${tab}`} variant="left" className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.04] p-7 sm:p-9 backdrop-blur">
              <div>
                <p className="font-display text-[22px] sm:text-[26px] font-extrabold text-white leading-snug">{active.title}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60 font-medium">{active.desc}</p>
                <ul className="mt-6 space-y-3">
                  {active.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[14.5px] font-semibold text-white/85">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-300">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex items-center gap-5 rounded-2xl border border-gold-500/20 bg-gradient-to-r from-gold-500/10 to-transparent p-5">
                <p className="font-display text-[42px] font-extrabold text-gradient-gold leading-none">{active.stat}</p>
                <p className="text-[13px] font-bold leading-snug text-white/70">{active.statLabel}</p>
              </div>
            </div>
          </Reveal>

          {/* Visual card */}
          <Reveal key={`vis-${tab}`} delay={120} variant="right" className="h-full">
            <div className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-5 sm:p-7 backdrop-blur">
              {active.visual === 'dashboard' && (
                <div className="h-full">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-extrabold text-white/80 uppercase tracking-wider">{isAr ? 'أداء اليوم — الرياض + دبي' : 'Today — Riyadh + Dubai'}</p>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-[12px] font-bold text-emerald-300">
                      <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { k: isAr ? 'إنفاق' : 'Spend', v: 'SAR 18.4k' },
                      { k: isAr ? 'طلبات' : 'Orders', v: '1,842' },
                      { k: isAr ? 'ROAS' : 'ROAS', v: '6.8x' },
                    ].map((x) => (
                      <div key={x.k} className="rounded-2xl bg-ink-900/80 border border-white/10 p-3.5 text-center">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">{x.k}</p>
                        <p className="font-display text-[17px] font-extrabold text-white">{x.v}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl bg-ink-900/80 border border-white/10 p-4">
                    <svg viewBox="0 0 400 110" className="h-[110px] w-full" role="img" aria-label="Live performance">
                      <defs>
                        <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#d9b64a" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#d9b64a" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 90 L45 78 L90 82 L135 60 L180 64 L225 42 L270 48 L315 24 L360 28 L400 10 L400 110 L0 110 Z" fill="url(#dg)" />
                      <path d="M0 90 L45 78 L90 82 L135 60 L180 64 L225 42 L270 48 L315 24 L360 28 L400 10" fill="none" stroke="#e8cf7f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      {[135, 225, 315].map((x) => (
                        <circle key={x} cx={x} cy={x === 135 ? 60 : x === 225 ? 42 : 24} r="4" fill="#0a1120" stroke="#e8cf7f" strokeWidth="2" />
                      ))}
                    </svg>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Snapchat 42%', 'TikTok 28%', 'Meta 18%', 'Google 12%'].map((c) => (
                        <span key={c} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11.5px] font-bold text-white/70">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <img src="https://images.pexels.com/photos/14564871/pexels-photo-14564871.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100" alt="Media buyer" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                    <p className="text-[12.5px] font-semibold text-white/70"><span className="font-extrabold text-white">Sara • Media buyer:</span> {isAr ? 'حوّلنا 20% من الميزانية لسناب بعد ارتفاع ROAS' : 'Shifted 20% budget to Snap after ROAS spike'} ✓</p>
                  </div>
                </div>
              )}
              {active.visual === 'seo' && (
                <div className="h-full">
                  <div className="rounded-2xl bg-white p-5 text-ink-900">
                    <div className="flex items-center gap-2 rounded-full border border-ink-900/10 bg-cream-50 px-4 py-2.5 text-[13px] font-semibold text-ink-900/60">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                      {isAr ? 'أفضل عود ملكي في الرياض…' : 'best royal oud in Riyadh…'}
                    </div>
                    {[
                      { t: isAr ? 'دار سهم للعود — توصيل نفس اليوم بالرياض' : 'Sahm Oud House — same-day Riyadh delivery', u: 'sahm-oud.sa', first: true },
                      { t: isAr ? 'دليل العود الملكي 2026: الأسعار والأنواع' : 'Royal oud guide 2026: prices & grades', u: 'blog • 12k reads' },
                      { t: isAr ? 'تقييمات حقيقية: 4.9 من 2,300 عميل' : 'Real reviews: 4.9 from 2,300 buyers', u: '★★★★★' },
                    ].map((r) => (
                      <div key={r.t} className={`mt-3 rounded-xl p-3 ${r.first ? 'bg-emerald-deep-800/[0.06] border border-emerald-deep-700/20' : 'hover:bg-cream-50'}`}>
                        <p className="text-[11px] font-bold text-emerald-700">{r.first ? '❶ ' : ''}{r.u}</p>
                        <p className={`text-[13.5px] font-extrabold ${r.first ? 'text-emerald-deep-800' : 'text-ink-900'}`}>{r.t}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-deep-800 p-4 text-white">
                      <p className="font-display text-[26px] font-extrabold">#1</p>
                      <p className="text-[12px] font-bold text-white/75">{isAr ? 'في قوقل السعودية لـ 48 كلمة' : 'on Google KSA for 48 keywords'}</p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 p-4 text-ink-950">
                      <p className="font-display text-[26px] font-extrabold">AR + EN</p>
                      <p className="text-[12px] font-bold opacity-70">{isAr ? 'محتوى ثنائي اللغة يحول الزائر' : 'Bilingual content that converts'}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[12.5px] font-bold text-white/60">
                    <PlayCircle className="h-4 w-4 text-gold-300" /> {isAr ? 'شاهد: كيف تصدّرنا 48 كلمة في 90 يوم' : 'Watch: how we ranked 48 keywords in 90 days'}
                  </div>
                </div>
              )}
              {active.visual === 'whatsapp' && (
                <div className="mx-auto max-w-[340px]">
                  <div className="overflow-hidden rounded-[28px] border border-white/15 bg-[#0b141a] shadow-2xl">
                    <div className="bg-[#075E54] px-4 py-3 flex items-center gap-2.5">
                      <img src="https://images.pexels.com/photos/33280336/pexels-photo-33280336.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100" alt="Brand" className="h-9 w-9 rounded-full object-cover border-2 border-white/30" loading="lazy" />
                      <div>
                        <p className="text-[13px] font-extrabold text-white leading-none">Lumière Abaya ✦</p>
                        <p className="text-[11px] text-white/70">online • replies instantly</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 p-4 text-[12.5px] font-medium" dir="ltr">
                      <p className="max-w-[85%] rounded-2xl rounded-tl-md bg-[#1f2c34] p-3 text-white/90">Ahlan Noora! Your abaya is still in your bag 🛍️ <span className="text-gold-300 font-bold">-15% today only</span></p>
                      <p className="ms-auto max-w-[70%] rounded-2xl rounded-tr-md bg-[#00a884] p-3 text-white">Yesss! Can I pay Tabby?</p>
                      <p className="max-w-[85%] rounded-2xl rounded-tl-md bg-[#1f2c34] p-3 text-white/90">Of course — Tabby, Tamara & Apple Pay ✅ <span className="underline">Checkout in 1 tap</span></p>
                      <p className="ms-auto rounded-2xl rounded-tr-md bg-[#00a884] p-2.5 text-white text-center font-extrabold">✓✓ Order #SA-8421 confirmed</p>
                    </div>
                    <div className="flex items-center gap-2 p-3">
                      <span className="flex-1 rounded-full bg-[#1f2c34] px-4 py-2 text-[12px] text-white/40">Message…</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#00a884] text-white">➤</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="font-display text-[20px] font-extrabold text-white">68%</p>
                      <p className="text-[11px] font-bold text-white/55">{isAr ? 'فتح رسائل الواتساب' : 'WhatsApp open rate'}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="font-display text-[20px] font-extrabold text-gold-300">3.1x</p>
                      <p className="text-[11px] font-bold text-white/55">{isAr ? 'إعادة شراء أعلى' : 'higher repurchase'}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
