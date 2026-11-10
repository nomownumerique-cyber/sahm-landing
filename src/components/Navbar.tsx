import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import type { Lang } from '../lib/i18n';
import { dict } from '../lib/i18n';

export default function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = dict[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t.nav_services, href: '#services' },
    { label: t.nav_work, href: '#work' },
    { label: t.nav_why, href: '#why' },
    { label: t.nav_reviews, href: '#reviews' },
    { label: t.nav_faq, href: '#faq' },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4">
        <nav
          aria-label="Main navigation"
          className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border px-3 sm:px-5 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass border-white/60 shadow-[0_18px_50px_-18px_rgba(6,11,24,0.35)]'
              : 'border-transparent bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-2.5 shrink-0" aria-label="Sahm Digital home">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-deep-800 via-emerald-deep-700 to-emerald-deep-600 text-gold-300 shadow-lg shadow-emerald-deep-800/25 overflow-hidden">
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-500 group-hover:rotate-[20deg]" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.5 6.5L22 12l-6.5 3.5L12 22l-3.5-6.5L2 12l6.5-3.5L12 2z" opacity="0.95" />
                <circle cx="12" cy="12" r="2.2" fill="#0a3428" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="leading-none">
              <span className="font-display block text-[17px] font-bold tracking-tight text-ink-900">
                SAHM <span className="text-gold-600 font-arabic">سهم</span>
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-900/50">
                Gulf Growth Co.
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 text-[14px] font-semibold text-ink-900/70">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-full px-3.5 py-2 transition-colors hover:text-ink-900 hover:bg-ink-900/[0.06]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <div
              className="inline-flex items-center rounded-full border border-ink-900/10 bg-white/70 p-1 backdrop-blur"
              role="group"
              aria-label="Language / اللغة"
            >
              <button
                onClick={() => setLang('ar')}
                aria-pressed={lang === 'ar'}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-extrabold transition-all ${
                  lang === 'ar' ? 'bg-ink-900 text-white shadow' : 'text-ink-900/55 hover:text-ink-900'
                }`}
              >
                عربي
              </button>
              <button
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-extrabold transition-all ${
                  lang === 'en' ? 'bg-ink-900 text-white shadow' : 'text-ink-900/55 hover:text-ink-900'
                }`}
              >
                EN
              </button>
            </div>
            <a
              href="tel:+213558732940"
              className="hidden xl:inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-bold text-ink-900/70 hover:text-ink-900"
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr">+213 558 732 940</span>
            </a>
            <a
              href="#cta"
              className="btn-shimmer group inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_14px_30px_-12px_rgba(6,11,24,0.6)] transition-all hover:bg-emerald-deep-800 hover:shadow-[0_18px_36px_-12px_rgba(10,52,40,0.6)] hover:-translate-y-0.5"
            >
              {t.nav_audit}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="inline-flex items-center rounded-full border border-ink-900/10 bg-white/80 p-1" role="group" aria-label="Language">
              <button
                onClick={() => setLang('ar')}
                aria-pressed={lang === 'ar'}
                className={`rounded-full px-3 py-1 text-[12.5px] font-extrabold ${lang === 'ar' ? 'bg-ink-900 text-white' : 'text-ink-900/60'}`}
              >
                ع
              </button>
              <button
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`rounded-full px-3 py-1 text-[12.5px] font-extrabold ${lang === 'en' ? 'bg-ink-900 text-white' : 'text-ink-900/60'}`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900 text-white"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden mx-auto max-w-7xl overflow-hidden transition-all duration-500 ${
            open ? 'max-h-[480px] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl border border-white/60 p-3 shadow-xl">
            <ul className="divide-y divide-ink-900/5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-bold text-ink-900 hover:bg-ink-900/5"
                  >
                    {l.label}
                    <ArrowUpRight className="h-4 w-4 text-ink-900/40" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-3.5 font-bold text-white"
            >
              {t.nav_audit}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
