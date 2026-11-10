import { MapPin, Mail, Phone, Camera, AtSign, Globe, Send } from 'lucide-react';
import DownloadZip from './DownloadZip';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

export default function Footer({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const isAr = lang === 'ar';
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-14 pb-7 text-white" aria-label="Footer">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 start-1/3 h-[280px] w-[480px] rounded-full bg-emerald-700/20 blur-[90px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="Sahm home">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-deep-800 text-gold-300">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.5 6.5L22 12l-6.5 3.5L12 22l-3.5-6.5L2 12l6.5-3.5L12 2z" />
                  <circle cx="12" cy="12" r="2.2" fill="#0a1120" />
                </svg>
              </span>
              <span className="leading-none">
                <span className="font-display block text-[17px] font-extrabold tracking-tight">SAHM <span className="font-arabic text-gold-300">سهم</span></span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">Gulf Growth Co.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/60 font-medium">{t.footer_tag}</p>
            <div className="mt-5 space-y-2 text-[13.5px] font-semibold text-white/70">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold-400" /> {isAr ? 'الرياض • دبي • الدوحة' : 'Riyadh • Dubai • Doha'}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold-400" /> <a href="mailto:salam@sahm.agency" className="hover:text-white">salam@sahm.agency</a></p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold-400" /> <a href="tel:+213558732940" dir="ltr" className="hover:text-white">+213 558 732 940</a></p>
            </div>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Camera, label: 'Instagram' },
                { icon: Send, label: 'Snapchat' },
                { icon: AtSign, label: 'X (Twitter)' },
                { icon: Globe, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-gold-500 hover:text-ink-950 hover:border-gold-500 hover:-translate-y-0.5"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services links">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white/40">{isAr ? 'خدماتنا' : 'Services'}</p>
            <ul className="mt-4 space-y-2.5 text-[14px] font-semibold text-white/70">
              {[
                isAr ? 'إعلانات سناب وتيك توك' : 'Snap & TikTok Ads',
                isAr ? 'سيو عربي' : 'Arabic SEO',
                isAr ? 'تسويق المشاهير' : 'Creator Marketing',
                isAr ? 'أتمتة واتساب' : 'WhatsApp Automation',
                isAr ? 'تصميم المتاجر' : 'Store CRO',
              ].map((l) => (
                <li key={l}><a href="#services" className="transition hover:text-gold-300">{l}</a></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white/40">{isAr ? 'الشركة' : 'Company'}</p>
            <ul className="mt-4 space-y-2.5 text-[14px] font-semibold text-white/70">
              {[
                { l: isAr ? 'نتائجنا' : 'Results', h: '#work' },
                { l: isAr ? 'لماذا سهم' : 'Why Sahm', h: '#why' },
                { l: isAr ? 'آراء العملاء' : 'Reviews', h: '#reviews' },
                { l: isAr ? 'الأسئلة الشائعة' : 'FAQ', h: '#faq' },
                { l: isAr ? 'احجز تدقيقًا' : 'Free audit', h: '#cta' },
              ].map((x) => (
                <li key={x.l}><a href={x.h} className="transition hover:text-gold-300">{x.l}</a></li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white/40">{isAr ? 'نشرة النمو الخليجية' : 'Gulf Growth Letter'}</p>
            <p className="mt-4 text-[13.5px] font-medium text-white/60 leading-relaxed">
              {isAr ? 'تكتيك واحد عملي كل أحد — يقرأه 8,400 مؤسس خليجي. بدون إزعاج.' : 'One actionable tactic every Sunday — read by 8,400 Gulf founders. No spam.'}
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter"
            >
              <label htmlFor="nl-email" className="sr-only">{isAr ? 'البريد الإلكتروني' : 'Email'}</label>
              <input
                id="nl-email"
                type="email"
                required
                placeholder={isAr ? 'بريدك المهني…' : 'Work email…'}
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] font-semibold text-white placeholder:text-white/35 focus:border-gold-400"
              />
              <button className="shrink-0 rounded-xl bg-gradient-to-b from-gold-400 to-gold-600 px-4 py-3 text-[14px] font-extrabold text-ink-950 transition hover:brightness-110" aria-label="Subscribe">
                {isAr ? 'اشترك' : 'Join'}
              </button>
            </form>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-[12.5px] font-semibold text-white/60">
              <p className="font-extrabold text-white/85">{isAr ? 'مكاتبنا' : 'Our offices'}</p>
              <p className="mt-1.5 leading-relaxed" dir="ltr">Riyadh: KAFD, Tower 3 • Dubai: Business Bay, Bay Gate • Doha: Lusail Marina</p>
            </div>
            <div className="mt-3 rounded-2xl border border-gold-500/25 bg-gold-500/10 p-4">
              <p className="text-[13px] font-extrabold text-gold-200">
                {isAr ? 'تحتاج ملفات الموقع؟' : 'Need the site files?'}
              </p>
              <p className="mt-1 text-[12px] font-semibold text-white/60">
                {isAr ? 'حمّل الخيار B كاملاً ZIP بضغطة واحدة.' : 'Download full Option B as ZIP in one click.'}
              </p>
              <div className="mt-3 rounded-xl bg-white p-1.5">
                <DownloadZip lang={lang} variant="inline" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12.5px] font-semibold text-white/45">
          <p>© {year} Sahm Gulf Growth Co. {isAr ? '— سجل تجاري 1010XXXXXX • الرقم الضريبي 300XXXX' : '— CR 1010XXXXXX • VAT 300XXXX'}</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-white/80">{isAr ? 'الخصوصية' : 'Privacy'}</a>
            <a href="#top" className="hover:text-white/80">{isAr ? 'الشروط' : 'Terms'}</a>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              {isAr ? 'متاحون لمشاريع جديدة' : 'Available for new projects'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
