import { useState } from 'react';
import { ArrowRight, BadgeCheck, Clock3, FileSearch, Video, Gift } from 'lucide-react';
import Reveal from './Reveal';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

const cities = ['Riyadh الرياض', 'Jeddah جدة', 'Dammam الدمام', 'Dubai دبي', 'Abu Dhabi أبوظبي', 'Doha الدوحة', 'Kuwait City الكويت', 'Manama المنامة', 'Muscat مسقط', 'Other أخرى'];
const budgets = ['< 10k SAR', '10–30k SAR', '30–80k SAR', '80k+ SAR'];

export default function CTA({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const isAr = lang === 'ar';
  const [form, setForm] = useState({ name: '', phone: '', city: '', budget: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.city) {
      setError(isAr ? 'فضلًا أكمل الاسم ورقم الواتساب والمدينة' : 'Please complete name, WhatsApp number and city');
      return;
    }
    if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) {
      setError(isAr ? 'فضلًا أدخل رقم واتساب صحيح (مثال: +9665...)' : 'Please enter a valid WhatsApp number (e.g. +9665...)');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <section id="cta" className="relative scroll-mt-28 px-3 sm:px-5 pb-16 sm:pb-24 pt-4" aria-label="Call to action">
      <div className="mx-auto max-w-7xl">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[28px] bg-ink-950 shadow-[0_50px_100px_-30px_rgba(6,11,24,0.7)]">
            {/* bg decor */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-grid-dark opacity-70 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_20%,black,transparent)]" />
              <div className="animate-blob absolute -top-24 start-10 h-[360px] w-[360px] rounded-full bg-emerald-600/25 blur-[90px]" />
              <div className="animate-blob absolute -bottom-32 end-10 h-[380px] w-[380px] rounded-full bg-gold-500/20 blur-[90px] [animation-delay:2s]" />
              {/* islamic pattern */}
              <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
                <defs>
                  <pattern id="pat" width="72" height="72" patternUnits="userSpaceOnUse">
                    <path d="M36 6l7 15 15 7-15 7-7 15-7-15-15-7 15-7z" fill="none" stroke="#e8cf7f" strokeWidth="1" />
                    <circle cx="36" cy="36" r="2" fill="#e8cf7f" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pat)" />
              </svg>
              <img
                src="https://images.pexels.com/photos/30051425/pexels-photo-30051425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-x-0 bottom-0 h-[220px] w-full object-cover opacity-[0.18] [mask-image:linear-gradient(to_top,black,transparent)]"
              />
            </div>

            <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
              {/* Copy */}
              <div className="text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                  <Gift className="h-3.5 w-3.5" />
                  {isAr ? 'عرض محدود — 12 تدقيق مجاني شهريًا' : 'Limited — 12 free audits / month'}
                </span>
                <h2 className="font-display mt-5 text-[30px] sm:text-[44px] leading-[1.08] font-extrabold tracking-tight">
                  {t.cta_title}
                  <span className="text-gradient-gold">.</span>
                </h2>
                <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/65 font-medium">{t.cta_sub}</p>
                <ul className="mt-6 space-y-3.5">
                  {[
                    { icon: FileSearch, t: isAr ? 'تدقيق 27 نقطة: إعلانات + متجر + منافسون' : '27-point audit: ads + store + competitors' },
                    { icon: Video, t: isAr ? 'فيديو مخصص 15 دقيقة + خطة 90 يوم' : '15-min custom video + 90-day plan' },
                    { icon: Clock3, t: isAr ? 'التسليم خلال 48 ساعة — عربي أو إنجليزي' : 'Delivered in 48h — Arabic or English' },
                  ].map((x) => (
                    <li key={x.t} className="flex items-center gap-3 text-[14.5px] font-bold text-white/85">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/8 border border-white/10 text-gold-300">
                        <x.icon className="h-5 w-5" />
                      </span>
                      {x.t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-3 text-[12.5px] font-bold text-white/55">
                  <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-emerald-400" /> {isAr ? 'بدون التزام' : 'No commitment'}</span>
                  <span>•</span>
                  <span>{isAr ? 'بدون مشاركة بياناتك' : 'Your data stays private'}</span>
                  <span>•</span>
                  <span dir="ltr">★★★★★ 4.9/5</span>
                </div>
              </div>

              {/* Form */}
              <div className="relative">
                <div className="rounded-[22px] border border-white/15 bg-white/[0.97] p-6 sm:p-7 shadow-2xl backdrop-blur">
                  {!sent ? (
                    <form onSubmit={submit} noValidate aria-label={isAr ? 'نموذج التدقيق المجاني' : 'Free audit form'}>
                      <p className="font-display text-[19px] font-extrabold text-ink-900">{isAr ? 'احجز تدقيقك المجاني' : 'Claim your free audit'}</p>
                      <p className="mt-1 text-[13px] font-semibold text-ink-900/55">{isAr ? 'تبقى 4 مقاعد هذا الأسبوع في الرياض ودبي' : '4 spots left this week in Riyadh & Dubai'}</p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-900/10" aria-hidden="true">
                        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-emerald-600 to-gold-500" />
                      </div>

                      <div className="mt-5 space-y-3.5">
                        <div>
                          <label htmlFor="cta-name" className="text-[13px] font-extrabold text-ink-900">{isAr ? 'الاسم الكريم' : 'Full name'} *</label>
                          <input
                            id="cta-name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder={isAr ? 'مثال: عبدالله المطيري' : 'e.g. Abdullah Al-Mutairi'}
                            className="mt-1.5 w-full rounded-xl border border-ink-900/12 bg-cream-50 px-4 py-3 text-[14.5px] font-semibold text-ink-900 placeholder:text-ink-900/35 focus:border-emerald-700 focus:bg-white transition"
                            autoComplete="name"
                          />
                        </div>
                        <div>
                          <label htmlFor="cta-phone" className="text-[13px] font-extrabold text-ink-900">{isAr ? 'رقم الواتساب' : 'WhatsApp number'} *</label>
                          <input
                            id="cta-phone"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+966 5X XXX XXXX"
                            dir="ltr"
                            inputMode="tel"
                            autoComplete="tel"
                            className="mt-1.5 w-full rounded-xl border border-ink-900/12 bg-cream-50 px-4 py-3 text-[14.5px] font-semibold text-ink-900 placeholder:text-ink-900/35 focus:border-emerald-700 focus:bg-white transition text-start"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="cta-city" className="text-[13px] font-extrabold text-ink-900">{isAr ? 'المدينة' : 'City'} *</label>
                            <select
                              id="cta-city"
                              value={form.city}
                              onChange={(e) => setForm({ ...form, city: e.target.value })}
                              className="mt-1.5 w-full rounded-xl border border-ink-900/12 bg-cream-50 px-3 py-3 text-[14px] font-semibold text-ink-900 focus:border-emerald-700 focus:bg-white transition"
                            >
                              <option value="">{isAr ? 'اختر…' : 'Select…'}</option>
                              {cities.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="cta-budget" className="text-[13px] font-extrabold text-ink-900">{isAr ? 'الميزانية' : 'Budget'}</label>
                            <select
                              id="cta-budget"
                              value={form.budget}
                              onChange={(e) => setForm({ ...form, budget: e.target.value })}
                              className="mt-1.5 w-full rounded-xl border border-ink-900/12 bg-cream-50 px-3 py-3 text-[14px] font-semibold text-ink-900 focus:border-emerald-700 focus:bg-white transition"
                            >
                              <option value="">{isAr ? 'اختر…' : 'Select…'}</option>
                              {budgets.map((b) => (
                                <option key={b} value={b}>{b}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {error && (
                        <p role="alert" className="mt-3 rounded-xl bg-red-50 border border-red-200 px-3.5 py-2.5 text-[13px] font-bold text-red-700">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        className="btn-shimmer group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-emerald-deep-700 to-emerald-deep-900 px-6 py-4 text-[15.5px] font-extrabold text-white shadow-[0_18px_36px_-12px_rgba(10,52,40,0.6)] transition hover:-translate-y-0.5"
                      >
                        {isAr ? 'أرسل — أريد التدقيق المجاني' : 'Send — I want my free audit'}
                        <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180' : ''}`} />
                      </button>
                      <p className="mt-3 text-center text-[11.5px] font-semibold text-ink-900/45">
                        {isAr ? 'بالضغط على إرسال أنت توافق على التواصل عبر واتساب. نحترم خصوصيتك.' : 'By submitting you agree to be contacted via WhatsApp. We respect your privacy.'}
                      </p>
                    </form>
                  ) : (
                    <div className="py-8 text-center" role="status" aria-live="polite">
                      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-700">
                        <BadgeCheck className="h-8 w-8" />
                      </span>
                      <p className="font-display mt-4 text-[22px] font-extrabold text-ink-900">
                        {isAr ? `تم يا ${form.name.split(' ')[0]}! ✅` : `Done, ${form.name.split(' ')[0]}! ✅`}
                      </p>
                      <p className="mx-auto mt-2 max-w-sm text-[14px] font-medium text-ink-900/60 leading-relaxed">
                        {isAr
                          ? `سنراسلك على واتساب (${form.phone}) خلال 24 ساعة لتحديد موعد التدقيق. تحقق من رسائل ${form.city}.`
                          : `We'll WhatsApp you at ${form.phone} within 24h to schedule your audit. Keep an eye on ${form.city} time.`}
                      </p>
                      <div className="mt-5 rounded-2xl bg-cream-100 border border-ink-900/10 p-4 text-[13px] font-bold text-ink-900/70">
                        {isAr ? '🎁 مكافأة: دليل مواسم الخليج 2026 سيصلك مع التدقيق' : '🎁 Bonus: Gulf Seasons Playbook 2026 comes with your audit'}
                      </div>
                      <button onClick={() => setSent(false)} className="mt-4 text-[13px] font-extrabold text-ink-900/50 underline hover:text-ink-900">
                        {isAr ? 'تسجيل طلب آخر' : 'Submit another request'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
