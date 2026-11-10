import JSZip from 'jszip';

// Dynamic raw imports so source text is only loaded when user clicks Download.
// This keeps the initial bundle light and the zip always matches the running code.
const sourceLoaders: Record<string, () => Promise<{ default: string }>> = {
  'index.html': () => import('../../index.html?raw'),
  'package.json': () => import('../../package.json?raw'),
  'src/App.tsx': () => import('../App.tsx?raw'),
  'src/main.tsx': () => import('../main.tsx?raw'),
  'src/index.css': () => import('../index.css?raw'),
  'src/vite-env.d.ts': () => import('../vite-env.d.ts?raw'),
  'src/lib/i18n.ts': () => import('./i18n.ts?raw'),
  'src/utils/cn.ts': () => import('../utils/cn.ts?raw'),
  'src/components/Navbar.tsx': () => import('../components/Navbar.tsx?raw'),
  'src/components/Hero.tsx': () => import('../components/Hero.tsx?raw'),
  'src/components/SocialProof.tsx': () => import('../components/SocialProof.tsx?raw'),
  'src/components/Features.tsx': () => import('../components/Features.tsx?raw'),
  'src/components/Showcase.tsx': () => import('../components/Showcase.tsx?raw'),
  'src/components/Benefits.tsx': () => import('../components/Benefits.tsx?raw'),
  'src/components/Testimonials.tsx': () => import('../components/Testimonials.tsx?raw'),
  'src/components/FAQ.tsx': () => import('../components/FAQ.tsx?raw'),
  'src/components/CTA.tsx': () => import('../components/CTA.tsx?raw'),
  'src/components/Footer.tsx': () => import('../components/Footer.tsx?raw'),
  'src/components/Reveal.tsx': () => import('../components/Reveal.tsx?raw'),
  'src/components/DownloadZip.tsx': () => import('../components/DownloadZip.tsx?raw'),
  'src/lib/downloadOptionB.ts': () => import('./downloadOptionB.ts?raw'),
};

function readme(lang: string) {
  if (lang === 'ar') {
    return `سهم — الخيار B (عربي أولاً، بدون أسعار)
====================================
- افتح index.html مباشرة أو ارفعه على أي استضافة.
- للتطوير:
  1) npm install
  2) npm run dev
  3) npm run build
- الملفات المصدرية كاملة داخل مجلد src/
- اللغة الافتراضية: العربية (RTL) مع زر EN / عربي.
- تم إنشاء هذا الملف من زر التحميل داخل الموقع.
`;
  }
  return `SAHM — Option B (Arabic-first, no pricing)
==========================================
- Open dist-index.html directly or host it anywhere.
- For development:
  1) npm install
  2) npm run dev
  3) npm run build
- Full source inside src/
- Default language: Arabic (RTL) with EN / AR toggle.
- Generated from the in-site Download button.
`;
}

export async function downloadOptionBZip(lang: 'ar' | 'en' = 'ar'): Promise<void> {
  const zip = new JSZip();

  // 1) Deployable built file (current DOM)
  const builtHtml = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
  zip.file('dist-index.html', builtHtml);

  // 2) Full source files
  const entries = await Promise.all(
    Object.entries(sourceLoaders).map(async ([path, loader]) => {
      try {
        const mod = await loader();
        return [path, mod.default] as const;
      } catch {
        return [path, ''] as const;
      }
    })
  );
  const src = zip.folder('sahm-option-b');
  entries.forEach(([path, content]) => {
    if (content) src?.file(path, content);
  });
  src?.file('README.txt', readme(lang));

  const blob = await zip.generateAsync(
    { type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 9 } },
    (meta) => {
      const el = document.getElementById('zip-progress');
      if (el) el.textContent = `${Math.round(meta.percent)}%`;
    }
  );

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sahm-option-b.zip';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
