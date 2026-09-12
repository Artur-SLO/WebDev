import { useEffect, useRef, useState } from 'react';
import { CodeBracketIcon, GithubIcon, LinkedinIcon, ExternalLinkIcon } from './Icons';
import { GITHUB_PROFILE_URL, LINKEDIN_URL } from '../data/projects';
import { NAVIGATION, HEADER_COPY } from '../data/navigation';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from '../styles/Navbar.module.css';

export function Navbar() {
    const [open, setOpen] = useState(false);
    const { active, scrolled } = useActiveSection();
    const header = useRef<HTMLElement>(null);
    const toggle = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 861px)');
        const onResize = () => { if (desktop.matches) setOpen(false); };
        desktop.addEventListener('change', onResize);
        return () => desktop.removeEventListener('change', onResize);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
        };
        const onPointer = (event: PointerEvent) => {
            if (!header.current?.contains(event.target as Node)) setOpen(false);
        };
        document.addEventListener('keydown', onKey);
        document.addEventListener('pointerdown', onPointer);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('pointerdown', onPointer);
        };
    }, [open]);

    function navigate(id: string) {
        setOpen(false);
        // Native anchors handle scrolling; focus follows the destination for keyboard users.
        requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
    }

    return <>
        <a className={styles.skipLink} href="#main">{HEADER_COPY.skip}</a>
        <header ref={header} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <a href="#hero" onClick={() => navigate('hero')} className={styles.brandLink} aria-label={HEADER_COPY.home}>
                    <span className={styles.brandMark}><CodeBracketIcon size={21} /></span>
                    <span className={styles.brandText}><strong>{HEADER_COPY.name}</strong><span>{HEADER_COPY.role}</span></span>
                </a>
                <nav className={styles.navLinks} aria-label={HEADER_COPY.label}>
                    {NAVIGATION.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => navigate(item.id)} className={styles.navLink} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}
                </nav>
                <div className={styles.actions}>
                    <a className={styles.socialLink} href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" aria-label={HEADER_COPY.github}><GithubIcon size={19} /></a>
                    <a className={styles.contactLink} href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><span>{HEADER_COPY.contact}</span><ExternalLinkIcon size={14} /></a>
                    <button ref={toggle} className={styles.menuToggle} type="button" onClick={() => setOpen(!open)} aria-label={open ? HEADER_COPY.close : HEADER_COPY.open} aria-expanded={open} aria-controls="mobile-navigation"><span /><span /><span /></button>
                </div>
            </div>
            <div className={styles.mobilePanel} data-open={open} inert={!open} aria-hidden={!open} id="mobile-navigation">
                <div className={styles.mobileInner}>
                    <nav aria-label={HEADER_COPY.mobileLabel}>
                        {NAVIGATION.map((item, index) => <a key={item.id} href={`#${item.id}`} onClick={() => navigate(item.id)} className={styles.mobileLink} aria-current={active === item.id ? 'location' : undefined}><span className={styles.linkNumber}>0{index + 1}</span>{item.label}<ExternalLinkIcon size={14} /></a>)}
                    </nav>
                    <a className={styles.mobileContact} href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><LinkedinIcon size={17} />{HEADER_COPY.linkedin}<ExternalLinkIcon size={14} /></a>
                </div>
            </div>
        </header>
    </>;
}
