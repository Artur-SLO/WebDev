import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { GithubIcon, ExternalLinkIcon, CodeBracketIcon } from './Icons';
import { REPO_BASE_URL } from '../data/projects';
import commonStyles from '../styles/Common.module.css';
import styles from '../styles/GithubActivity.module.css';

interface UserProfile {
    name: string;
    login: string;
    avatarUrl: string;
    publicRepos: number | null;
    followers: number;
}

export const GithubActivitySection: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile>({
        name: 'Artur Vítor',
        login: 'Artur-SLO',
        avatarUrl: 'https://avatars.githubusercontent.com/u/155112487?v=4',
        publicRepos: null,
        followers: 0,
    });

    useEffect(() => {
        let isMounted = true;
        async function fetchProfile() {
            try {
                const res = await fetch('https://api.github.com/users/Artur-SLO');
                if (res.ok) {
                    const data = await res.json();
                    if (isMounted) {
                        setProfile({
                            name: data.name || 'Artur Vítor',
                            login: data.login || 'Artur-SLO',
                            avatarUrl: data.avatar_url || 'https://avatars.githubusercontent.com/u/155112487?v=4',
                            publicRepos: data.public_repos ?? null,
                            followers: data.followers ?? 0,
                        });
                    }
                }
            } catch {
                // Fallback kept
            }
        }
        fetchProfile();
        return () => {
            isMounted = false;
        };
    }, []);

    // Dark theme palette matching our portfolio colors
    const calendarTheme = {
        dark: ['#0f172a', '#0369a1', '#0284c7', '#38bdf8', '#7dd3fc'],
    };

    return (
        <section id="activity" className={styles.githubSection}>
            <div className={commonStyles.sectionHeader}>
                <span className={commonStyles.sectionEyebrow}>Open Source</span>
                <h2 className={commonStyles.sectionTitle}>GitHub Contributions & Activity</h2>
                <p className={commonStyles.sectionSubtitle}>
                    Explore ongoing contributions and repository activity beyond the featured projects.
                </p>
            </div>

            <div className={styles.profileCard}>
                {/* Profile Header Bar */}
                <div className={styles.profileTopBar}>
                    <div className={styles.authorGroup}>
                        <img
                            src={profile.avatarUrl}
                            alt={profile.name}
                            className={styles.avatar}
                            loading="lazy"
                        />
                        <div className={styles.authorMeta}>
                            <span className={styles.authorName}>{profile.name}</span>
                            <a
                                href={`https://github.com/${profile.login}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.authorHandle}
                            >
                                @{profile.login}
                            </a>
                        </div>
                    </div>

                    <div className={styles.repoStatsRow}>
                        <span className={styles.statPill}>
                            <CodeBracketIcon size={14} />
                            <span>{profile.publicRepos === null ? 'Explore public repositories' : `${profile.publicRepos} Public Repositories`}</span>
                        </span>
                        <a
                            href={REPO_BASE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.repoActionBtn}
                        >
                            <GithubIcon size={15} />
                            <span>View WebDev Repo</span>
                            <ExternalLinkIcon size={13} />
                        </a>
                    </div>
                </div>

                {/* Contribution Calendar using react-github-calendar */}
                <div className={styles.calendarContainer}>
                    <div className={styles.calendarHeader}>
                        <h3 className={styles.calendarTitle}>Contributions Heatmap</h3>
                        <span className={styles.calendarSubtitle}>Synchronized live with @Artur-SLO</span>
                    </div>

                    <div className={styles.calendarWrapper}>
                        <GitHubCalendar
                            username="Artur-SLO"
                            errorMessage="Activity is unavailable right now. Explore the repositories using the links above."
                            colorScheme="dark"
                            theme={calendarTheme}
                            fontSize={12}
                            blockSize={13}
                            blockMargin={4}
                            labels={{
                                totalCount: '{{count}} contributions in the last year',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
