import React from 'react';
import { PageWrapper } from './components/PageWrapper';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GithubActivitySection } from './components/GithubActivitySection';
import { PillarsSection } from './components/PillarsSection';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal';
import commonStyles from './styles/Common.module.css';

export const App: React.FC = () => {
    return (
        <PageWrapper>
            <Navbar />
            <main id="main" tabIndex={-1} className={commonStyles.homeContainer}>
                <Reveal><Hero /></Reveal>
                <ProjectsSection />
                <Reveal><ExperienceSection /></Reveal>
                <Reveal><PillarsSection /></Reveal>
                <Reveal><GithubActivitySection /></Reveal>
            </main>
            <Footer />
        </PageWrapper>
    );
};

export default App;
