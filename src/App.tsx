import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import DownloadZip from './components/DownloadZip';
import type { Lang } from './lib/i18n';
import { dict } from './lib/i18n';

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('sahm-lang');
      return saved === 'en' || saved === 'ar' ? (saved as Lang) : 'ar';
    } catch {
      return 'ar';
    }
  });
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dict[lang].dir;
    try {
      localStorage.setItem('sahm-lang', lang);
    } catch {
      /* ignore */
    }
    document.title =
      lang === 'en'
        ? 'Sahm — E-Marketing for Gulf Brands | Snapchat, TikTok, SEO'
        : 'سهم — تسويق إلكتروني لعلامات الخليج | سناب، تيك توك، سيو';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        lang === 'en'
          ? 'Sahm — Premium e-marketing for Gulf brands. Snapchat, TikTok, Instagram, Google & Arabic SEO with Salla, Zid & WhatsApp expertise.'
          : 'سهم — تسويق إلكتروني فاخر لعلامات الخليج. إعلانات سناب شات وتيك توك وإنستغرام وقوقل + سيو عربي + سلة وزد وواتساب.'
      );
  }, [lang]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
        setShowTop(h.scrollTop > 900);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="main" className="min-h-screen bg-cream-50 text-ink-900 antialiased">
      {/* scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-emerald-deep-700 via-emerald-500 to-gold-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Navbar lang={lang} setLang={setLang} />

      <main>
        <Hero lang={lang} />
        <SocialProof lang={lang} />
        <Features lang={lang} />
        <Showcase lang={lang} />
        <Benefits lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />

      {/* Floating download — Option B zip */}
      <div className="fixed bottom-5 start-5 z-50 flex flex-col items-start gap-2.5">
        <DownloadZip lang={lang} variant="floating" />
      </div>

      {/* Floating actions */}
      <div className="fixed bottom-5 end-5 z-50 flex flex-col items-end gap-2.5">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/10 bg-white/90 text-ink-900 shadow-lg backdrop-blur transition hover:bg-ink-900 hover:text-white"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
        <a
          href="https://wa.me/213558732940?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D8%B3%D9%87%D9%85!%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AA%D8%AF%D9%82%D9%8A%D9%82%20%D8%A7%D9%84%D9%86%D9%85%D9%88%20%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%86%D9%8A"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.7)] transition hover:scale-105 hover:brightness-110"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" aria-hidden="true" />
          <MessageCircle className="relative h-6 w-6 fill-white/20" />
          <span className="pointer-events-none absolute end-full me-3 whitespace-nowrap rounded-full bg-ink-900 px-3.5 py-2 text-[12.5px] font-extrabold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
            {lang === 'en' ? 'Chat — replies in minutes' : 'راسلنا — نرد خلال دقائق'}
          </span>
        </a>
      </div>
    </div>
  );
}
