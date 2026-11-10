import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  variant?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span';
  id?: string;
};

export default function Reveal({ children, delay = 0, variant = 'up', className = '', as = 'div', id }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const variantClass =
    variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : variant === 'scale' ? 'reveal-scale' : '';

  const Tag = as as 'div';

  return (
    <Tag
      id={id}
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      className={`reveal ${variantClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
