import CodeIcon from '@mui/icons-material/Code';

import TranslateIcon from '@mui/icons-material/Translate';
import SchoolIcon from '@mui/icons-material/School';

interface IExperienceItem {
  year: string;
  title: string;
  description?: React.ReactNode;
  location: string;
  company: string;
  icon: React.ReactNode;
}

const data: IExperienceItem[] = [
  {
    year: 'Sept 2024 - Present',
    title: 'Senior Frontend Engineer',
    location: 'Berlin, Germany',
    icon: <CodeIcon />,
    company: 'Zendesk - AI Agents Advanced (Formerly Ultimate AI)',
    description: (
      <ul>
        <li>
          <span>AI Feature Development & Delivery Ownership</span>
          <p>
            Owned frontend delivery of AI-powered features, working closely with Design, Product,
            and AI engineers to plan, coordinate, and ship scalable, user-friendly solutions.
          </p>
        </li>

        <li>
          <span>UI Library & Design System Migration (Owner)</span>
          <p>
            Led the migration of applications to Zendesk’s shared UI library and design system,
            improving consistency, accessibility, and long-term maintainability post-acquisition.
          </p>
        </li>

        <li>
          <span>Testing & Quality Enablement</span>
          <p>
            Introduced and scaled frontend testing practices, including unit and end-to-end tests,
            helping establish quality standards and increase confidence in releases.
          </p>
        </li>

        <li>
          <span>Mentorship & Technical Leadership</span>
          <p>
            Mentored junior engineers through code reviews and pairing, contributing to higher code
            quality, shared ownership, and overall team growth.
          </p>
        </li>
      </ul>
    ),
  },
  {
    year: 'Jul 2023 - Sept 2024',
    title: 'Senior Frontend Engineer',
    location: 'Berlin, Germany',
    icon: <CodeIcon />,
    company: 'Tandem Language Exchange',
    description: (
      <ul>
        <li>
          <span>Technical & Product Leadership</span>
          <p>
            Took ownership of frontend technical decisions, prioritization, and backlog planning,
            effectively operating at the intersection of engineering and product.
          </p>
        </li>

        <li>
          <span>Platform Impact & Direction</span>
          <p>
            Helped shape Tandem’s web platform by improving core functionality, maintainability, and
            overall user experience beyond day-to-day maintenance.
          </p>
        </li>
      </ul>
    ),
  },
  {
    year: 'Jul 2021 - Jul 2023',
    title: 'Frontend Engineer',
    location: 'Berlin, Germany',
    icon: <CodeIcon />,
    company: 'Tandem Language Exchange',
    description: (
      <ul>
        <li>
          <span>Website & Web App Overhaul</span>
          <p>
            Led the refactor and redesign of the public website and web app, supporting thousands of
            daily users with a modern, scalable frontend stack.
          </p>
        </li>

        <li>
          <span>Admin Tools & Internal Systems</span>
          <p>
            Rebuilt internal admin tooling into a user-friendly full-stack application, improving
            usability and efficiency for internal teams.
          </p>
        </li>

        <li>
          <span>Cross-Functional Delivery & Prototyping</span>
          <p>
            Collaborated closely with product, design, and marketing to prototype MVPs and deliver
            web-based solutions for new ideas and niche use cases.
          </p>
        </li>
      </ul>
    ),
  },
  {
    year: 'Apr 2018 - Jul 2021',
    title: 'Fullstack Engineer',
    location: 'Cape Town, South Africa',
    description: (
      <ul>
        <li>
          <span>End-to-End Product Development</span>
          <p>
            Delivered full-stack websites and applications from concept to launch, ensuring
            responsive, cross-browser experiences and solid backend integration.
          </p>
        </li>

        <li>
          <span>High-Volume Client Work</span>
          <p>
            Built and shipped 45+ websites and applications using modern frontend technologies
            including React, Next.js, and TypeScript.
          </p>
        </li>

        <li>
          <span>Client Trust & Long-Term Partnerships</span>
          <p>
            Worked directly with 40+ clients to translate business goals into functional products,
            earning repeat engagements through consistent delivery.
          </p>
        </li>
      </ul>
    ),
    icon: <CodeIcon />,
    company: 'Freelance',
  },
  {
    year: 'Jul 2017 - Apr 2018',
    title: 'English Teacher',
    location: 'Hanoi, Vietnam',
    icon: <TranslateIcon />,
    company: 'Apax English',
    description: (
      <p>
        I travelled throughout South-East Asia, obtaining my TEFL certificate, and teaching English
        as a second language to Vietnamese students.
      </p>
    ),
  },
  {
    year: '2015 - 2017',
    title: 'Bachelor of Informatics',
    location: 'Stellenbosch, South Africa',
    icon: <SchoolIcon />,
    company: 'University of Stellenbosch',
  },
  {
    year: '2013 - 2015',
    title: 'Bachelor of Accounting',
    location: 'Stellenbosch, South Africa',
    icon: <SchoolIcon />,
    company: 'University of Stellenbosch',
  },
];

export default data;
