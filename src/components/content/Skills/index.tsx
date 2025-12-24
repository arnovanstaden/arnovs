'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import CancelIcon from '@mui/icons-material/Cancel';
import Chip from '@components/system/display/Chip';

const coreSkills = ['TypeScript', 'React', 'Next.js', 'Node.js'];

const productionSkills = [
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'React Query',
  'REST',
  'GraphQL',
  'SQL',
  'Jest',
  'Playwright',
  'Storybook',
  'Express.js',
  'Git',
];

const cloudAndInfraSkills = [
  'Vercel',
  'AWS',
  'Google Cloud',
  'Firebase',
  'Supabase',
  'MongoDB',
  'Docker',
];

const getIconPath = (skill: string) => `/images/icons/${skill.toLowerCase().replace(' ', '-')}.svg`;

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const skillsRef = useRef<HTMLDivElement>(null);

  const filteredSkills = (skills: string[]) => {
    return skills.filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const allSkills = {
    core: filteredSkills(coreSkills),
    production: filteredSkills(productionSkills),
    cloudAndInfra: filteredSkills(cloudAndInfraSkills),
  };

  // Ensure the section height does not jump around when filtering skills
  useEffect(() => {
    if (!skillsRef.current) return;
    const sectionHeight = skillsRef.current.clientHeight;
    skillsRef.current.style.minHeight = `${sectionHeight}px`;
  }, []);

  return (
    <div className={styles.Skills} ref={skillsRef}>
      <div className={styles.search}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Looking for something specific?"
        />
        {searchTerm && <CancelIcon className={styles.clear} onClick={() => setSearchTerm('')} />}
      </div>

      {allSkills.core.length > 0 && (
        <div className={styles.group}>
          <Chip>Core</Chip>
          <ul className={styles.list}>
            {allSkills.core.map((skill) => (
              <li className={styles.skill} key={skill}>
                <img
                  width={16}
                  height={16}
                  src={getIconPath(skill)}
                  alt={`${skill} icon`}
                  loading="lazy"
                />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}

      {allSkills.production.length > 0 && (
        <div className={styles.group}>
          <Chip>Production</Chip>

          <ul className={styles.list}>
            {allSkills.production.map((skill) => (
              <li className={styles.skill} key={skill}>
                <img
                  width={16}
                  height={16}
                  src={getIconPath(skill)}
                  alt={`${skill} icon`}
                  loading="lazy"
                />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}

      {allSkills.cloudAndInfra.length > 0 && (
        <div className={styles.group}>
          <Chip>Cloud & Infrastructure</Chip>

          <ul className={styles.list}>
            {allSkills.cloudAndInfra.map((skill) => (
              <li className={styles.skill} key={skill}>
                <img
                  width={16}
                  height={16}
                  src={getIconPath(skill)}
                  alt={`${skill} icon`}
                  loading="lazy"
                />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Skills;
