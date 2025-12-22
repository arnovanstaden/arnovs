import Chip from '@components/system/display/Chip';
import styles from './styles.module.scss';
import Interests from './Interests';

const About = () => (
  <div className={styles.About}>
    <div className={styles.text}>
      <Chip>Overview</Chip>
      <p>
        Senior Frontend Engineer with a strong focus on <span>TypeScript</span> & <span>React</span>
        , experienced in building and scaling production web applications used by thousands of
        users. I enjoy taking ownership, working closely with product and design, and turning fuzzy
        ideas into fast, reliable, user-friendly interfaces.
      </p>
      <p>
        I’ve been hooked on computers since the Windows 98 and dial-up days, and I still approach
        development with the same curiosity—constantly tinkering, experimenting, and improving. I
        often reach for code to solve everyday problems (yes, even building small web apps to avoid
        forgetting birthdays), because I genuinely enjoy finding simple, elegant solutions.
      </p>
      <p>
        Outside of work, you’ll find me travelling, lifting at the gym, reading sci-fi, gaming, or
        providing unpaid tech support to my mom. I thrive in collaborative teams that value
        ownership, constructive debate, and attention to detail, and I’m happiest building products
        people actually love to use.
      </p>
    </div>

    <div className={styles.extra}>
      <div className={styles.block}>
        <Chip>Experience</Chip>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span>07+</span>
            <p>
              Years <br /> Experience
            </p>
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <Chip>Languages</Chip>
        <ul className={styles.languages}>
          <li>
            <span />
            English <span>- Native</span>
          </li>
          <li>
            <span />
            Afrikaans <span>- Native</span>
          </li>
          <li>
            <span />
            German <span>- B1</span>
          </li>
        </ul>
      </div>
      <div className={styles.block}>
        <Chip>Interests</Chip>
        <Interests />
      </div>
    </div>
  </div>
);

export default About;
