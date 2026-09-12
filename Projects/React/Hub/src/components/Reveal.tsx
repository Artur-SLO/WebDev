import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import styles from '../styles/Reveal.module.css';

/** Content stays visible if animation or IntersectionObserver is unavailable. */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const node = ref.current;
        if (!node || !('IntersectionObserver' in window)) return;
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        let observer: IntersectionObserver | undefined;
        const observe = () => {
            observer?.disconnect();
            if (preference.matches) { node.removeAttribute('data-revealed'); return; }
            observer = new IntersectionObserver(entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    node.dataset.revealed = 'true';
                    observer?.disconnect();
                }
            }, { threshold: 0.05 });
            observer.observe(node);
        };
        observe();
        preference.addEventListener('change', observe);
        return () => { observer?.disconnect(); preference.removeEventListener('change', observe); };
    }, []);
    return <div ref={ref} className={styles.reveal} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>{children}</div>;
}
