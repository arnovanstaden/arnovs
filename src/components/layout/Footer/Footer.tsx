import Section from '../Section';
import styles from './styles.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import typingData from '@data/typings.json';

const Footer = () => (
  <Section
    id="contact"
    heading="Get in Touch"
    contentClassName={styles.Footer}
    component="footer"
    subheading="Interested in building thoughtful, scalable products together? Let’s talk."
  >
    <a href="mailto:arno@arnovs.dev" className={styles.mail} target="_blank">
      <EmailIcon />
      arno@arnovs.dev
    </a>
    <div className={styles.social}>
      <a href="https://github.com/arnovanstaden" target="_blank">
        <GitHubIcon />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/arnovanstaden/" target="_blank">
        <LinkedInIcon />
        LinkedIn
      </a>
    </div>
  </Section>
);

export default Footer;
