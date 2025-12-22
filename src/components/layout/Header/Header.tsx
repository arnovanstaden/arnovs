import Logo from '@components/system/display/Logo';
import ThemeToggle from './ThemeToggle';
import styles from './styles.module.scss';
import Link from 'next/link';

const Header = () => (
  <header className={styles.header}>
    <Link href="/" className={styles.name}>
      <Logo size={24} />
      <p>
        <span>Arno </span>
        van Staden
      </p>
    </Link>
    <ThemeToggle />
  </header>
);

export default Header;
