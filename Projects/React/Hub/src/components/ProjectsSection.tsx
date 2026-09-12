import React from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import commonStyles from '../styles/Common.module.css';
import styles from '../styles/Projects.module.css';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" tabIndex={-1}>
            <div className={commonStyles.sectionHeader}>
                <span className={commonStyles.sectionEyebrow}>Portfolio</span>
                <h2 className={commonStyles.sectionTitle}>Featured Applications</h2>
                <p className={commonStyles.sectionSubtitle}>
                    Selected enterprise, AI, and web projects, with source code, engineering decisions, and live demos where available.
                </p>
            </div>
            <div className={styles.projectsGrid}>
                {PROJECTS.map((project, index) => (
                    <Reveal key={project.id} delay={(index % 2) * 60}><ProjectCard project={project} /></Reveal>
                ))}
            </div>
        </section>
    );
};
