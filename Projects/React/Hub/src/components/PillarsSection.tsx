import React from 'react';
import { SKILL_CATEGORIES } from '../data/projects';
import commonStyles from '../styles/Common.module.css';
import styles from '../styles/Pillars.module.css';

export const PillarsSection: React.FC = () => {
    return (
        <section id="competencies" tabIndex={-1}>
            <div className={commonStyles.sectionHeader}>
                <span className={commonStyles.sectionEyebrow}>Curriculum</span>
                <h2 className={commonStyles.sectionTitle}>Core Competencies & Stack</h2>
                <p className={commonStyles.sectionSubtitle}>
                    Languages, tools, and engineering practices used across my academic work and software projects.
                </p>
            </div>

            <div className={styles.pillarsGrid}>
                {SKILL_CATEGORIES.map((category, index) => (
                    <div key={index} className={styles.pillarCard}>
                        <h3 className={styles.pillarTitle}>{category.title}</h3>
                        <p className={styles.pillarText}>{category.description}</p>
                        <ul className={styles.skillList}>
                            {category.skills.map((skill, sIdx) => (
                                <li key={sIdx} className={styles.skillItem}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
