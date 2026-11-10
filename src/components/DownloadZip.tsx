import { useState } from 'react';
import { Download, FileArchive, Check, Loader2 } from 'lucide-react';
import { downloadOptionBZip } from '../lib/downloadOptionB';
import type { Lang } from '../lib/i18n';

export default function DownloadZip({
  lang,
  variant = 'floating',
}: {
  lang: Lang;
  variant?: 'floating' | 'inline';
}) {
  const [state, setState] = useState<'idle' | 'working' | 'done'>('idle');
  const isAr = lang === 'ar';

  const handle = async () => {
    if (state === 'working') return;
    setState('working');
    try {
      await downloadOptionBZip(lang);
      setState('done');
      setTimeout(() => setState('idle'), 3000);
    } catch {
      setState('idle');
    }
  };

  if (variant === 'inline') {
    return (
      <button
        onClick={handle}
        disabled={state === 'working'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gold-500/50 bg-gold-100/60 px-6 py-4 text-[15px] font-extrabold text-ink-900 transition hover:border-gold-500 hover:bg-gold-100 disabled:opacity-70"
      >
        {state === 'working' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>
              {isAr ? 'جاري تجهيز الملف…' : 'Preparing zip…'} <span id="zip-progress">0%</span>
            </span>
          </>
        ) : state === 'done' ? (
          <>
            <Check className="h-5 w-5 text-emerald-700" />
            {isAr ? 'تم التحميل! تحقق من ملفاتك' : 'Downloaded! Check your files'}
          </>
        ) : (
          <>
            <FileArchive className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            {isAr ? 'تحميل الخيار B بصيغة ZIP' : 'Download Option B as ZIP'}
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handle}
      disabled={state === 'working'}
      title={isAr ? 'تحميل الخيار B ZIP' : 'Download Option B ZIP'}
      aria-label={isAr ? 'تحميل الخيار B ZIP' : 'Download Option B ZIP'}
      className="group relative grid h-14 w-14 place-items-center rounded-full bg-ink-900 text-gold-300 shadow-[0_18px_40px_-12px_rgba(6,11,24,0.7)] transition hover:scale-105 hover:bg-emerald-deep-800 disabled:opacity-80"
    >
      {state === 'working' ? (
        <Loader2 className="h-6 w-6 animate-spin" />
      ) : state === 'done' ? (
        <Check className="h-6 w-6 text-emerald-300" />
      ) : (
        <Download className="h-6 w-6" />
      )}
      <span className="pointer-events-none absolute end-full me-3 whitespace-nowrap rounded-full bg-ink-900 px-3.5 py-2 text-[12.5px] font-extrabold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">
        {state === 'working' ? (
          <span>
            ZIP… <span id="zip-progress">0%</span>
          </span>
        ) : state === 'done' ? (
          isAr ? 'تم! ✅' : 'Done! ✅'
        ) : isAr ? (
          'تحميل ZIP الخيار B'
        ) : (
          'Download Option B ZIP'
        )}
      </span>
    </button>
  );
}
