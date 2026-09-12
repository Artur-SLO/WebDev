import { useEffect, useState } from 'react';
import { NAVIGATION } from '../data/navigation';

export function useActiveSection() {
    const [active, setActive] = useState('');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            setScrolled(window.scrollY > 16);
            let current = '';
            for (const item of NAVIGATION) {
                const section = document.getElementById(item.id);
                if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.35) {
                    current = item.id;
                }
            }
            setActive(current);
        };
        const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        const observer = new ResizeObserver(schedule);
        observer.observe(document.body);
        update();
        return () => {
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, []);
    return { active, scrolled };
}
