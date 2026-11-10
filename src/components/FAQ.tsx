import { useState } from 'react';
import { Plus, MessageCircle, PhoneCall } from 'lucide-react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

export default function FAQ({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const isAr = lang === 'ar';
  const [open, setOpen] = useState<number | null>(0);

  const items = isAr
    ? [
        { q: 'هل تُديرون الإعلانات بالعربية فعلًا؟ أم ترجمة؟', a: 'عربية أصيلة من كتاب خليجيين — بالفصحى والنجدية والحجازية والإماراتية حسب جمهورك. نختبر 20+ نصًا وإبداعًا أسبوعيًا، وصفحات الهبوط عربية أولًا ومُحسّنة للجوال.' },
        { q: 'هل تعملون مع سلة وزد وشوبيفاي؟', a: 'نعم — نحن خبراء سلة وزد وشوبيفاي. نركّب البكسل وCAPI، ونُصلح الدفع (مدى، تابي، تمارا، Apple Pay)، ونبني أتمتة واتساب للسلة المتروكة وإعادة الشراء.' },
        { q: 'كيف تتعاملون مع إعلانات المشاهير والتراخيص؟', a: 'لدينا +350 صانعًا خليجيًا بعقود نظامية وتراخيص إعلانات موثقة. ندير التفاوض والمحتوى والـ Whitelist والقياس — وأنت تستلم تقرير العائد لكل صانع.' },
        { q: 'كم أحتاج ميزانية إعلانية للبدء؟', a: 'ننصح ببدء 10–15 ألف ريال شهريًا للمتاجر الجديدة، و30 ألف+ للتوسع الهجومي. التدقيق المجاني يحدد رقمك المثالي حسب هامشك وسعر منتجك.' },
        { q: 'هل يوجد عقد طويل؟ وكيف التقارير؟', a: 'بدون عقود سنوية — إشعار 30 يومًا فقط. تقرير فيديو أسبوعي + لوحة لحظية بالعربية + قروب واتساب مباشر مع فريقك.' },
        { q: 'متى أرى النتائج؟', a: 'أول إشارات خلال 14 يومًا (CTR وCPA)، والنتائج المركبة خلال 60–90 يومًا. متوسط عملائنا 6.2x عائد موحد خلال الربع الأول.' },
        { q: 'هل تُصدرون فواتير ضريبية؟', a: 'نعم — سجل تجاري سعودي وإماراتي وفواتير ضريبية (VAT) نظامية، والدفع تحويل بنكي أو مدى أو Visa.' },
      ]
    : [
        { q: 'Do you really run ads in Arabic — or just translate?', a: 'Truly native — written by Gulf copywriters in Fusha, Najdi, Hijazi & Emirati as your audience speaks. We test 20+ angles weekly, with Arabic-first mobile landing pages.' },
        { q: 'Do you work with Salla, Zid & Shopify?', a: 'Yes — certified Salla / Zid / Shopify experts. We install pixels + CAPI, fix checkout (Mada, Tabby, Tamara, Apple Pay) and build WhatsApp automation for carts & repurchase.' },
        { q: 'How do you handle creator licensing?', a: '350+ Gulf creators under proper contracts & ad licenses. We handle negotiation, content, whitelisting & measurement — you get ROAS per creator.' },
        { q: 'What ad budget do I need to start?', a: 'We recommend SAR 10–15k/mo for new stores, SAR 30k+ for aggressive scale. Your free audit pinpoints the ideal number from your margins & AOV.' },
        { q: 'Long contracts? How is reporting?', a: 'No annual lock — 30 days notice only. Weekly video report + live Arabic dashboard + direct WhatsApp group with your pod.' },
        { q: 'When will I see results?', a: 'First signals in 14 days (CTR, CPA), compounding wins in 60–90 days. Our clients average 6.2x blended ROAS in quarter one.' },
        { q: 'Do you issue VAT invoices?', a: 'Yes — Saudi & UAE CR with proper VAT invoices. Pay by bank transfer, Mada or Visa.' },
      ];

  return (
    <section id="faq" className="relative scroll-mt-28 py-16 sm:py-24 bg-gradient-to-b from-cream-100 to-white" aria-label="FAQ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-gold-600 shadow-sm">
                ✦ {t.faq_eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-4 text-[30px] sm:text-[42px] font-extrabold tracking-tight text-ink-900">{t.faq_title}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-3 text-[15px] text-ink-900/60 font-medium leading-relaxed">
                {isAr ? 'كل ما يسأله مؤسسو الخليج قبل أن ينموا معنا — وأجوبة صريحة بلا لف.' : 'Everything Gulf founders ask before scaling with us — straight answers, no fluff.'}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 rounded-[20px] border border-ink-900/[0.08] bg-ink-900 p-6 text-white relative overflow-hidden">
                <div className="absolute -top-10 -end-10 h-32 w-32 rounded-full bg-gold-500/25 blur-2xl" aria-hidden="true" />
                <p className="relative font-display text-[17px] font-extrabold">{isAr ? 'ما زلت محتارًا؟ كلّم استراتيجيًا خليجيًا' : 'Still unsure? Talk to a Gulf strategist'}</p>
                <p className="relative mt-1 text-[13.5px] text-white/60 font-medium">{isAr ? 'نرد خلال ساعات العمل — عربي / إنجليزي' : 'Replies in business hours — Arabic / English'}</p>
                <div className="relative mt-4 flex flex-col sm:flex-row gap-2.5">
                  <a href="https://wa.me/213558732940" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-[14px] font-extrabold text-white transition hover:brightness-110 hover:-translate-y-0.5">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a href="tel:+213558732940" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-[14px] font-extrabold text-white transition hover:bg-white/10">
                    <PhoneCall className="h-4 w-4" /> <span dir="ltr">+213 558 732 940</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={it.q} delay={i * 60}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-all duration-400 ${
                      isOpen ? 'border-gold-500/40 bg-white shadow-[0_20px_45px_-20px_rgba(201,162,39,0.4)]' : 'border-ink-900/[0.08] bg-white/80 hover:border-ink-900/20 hover:bg-white'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 text-start"
                    >
                      <span className="text-[15px] sm:text-[16px] font-extrabold text-ink-900">{it.q}</span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-400 ${
                          isOpen ? 'bg-ink-900 text-gold-300 rotate-45' : 'bg-cream-100 text-ink-900'
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 sm:px-6 pb-5 text-[14.5px] leading-relaxed text-ink-900/65 font-medium">{it.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
