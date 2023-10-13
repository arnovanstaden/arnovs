'use client';

import Link from 'next/link';
import styles from './styles.module.scss';

const NavList = ({ onClick }: { onClick?: () => void }): JSX.Element => {
  const items: {
    slug: string,
    label: string,
  }[] = [{
    slug: '/projects',
    label: 'Projects',
  },
  {
    slug: '/skills',
    label: 'Skills',
  },
  {
    slug: '/about',
    label: 'About',
  },
  {
    slug: '/contact',
    label: 'Contact',
  }];

  return (
    <nav className={styles.NavList}>
      {items.map((item) => (
        <Link href={item.slug} key={item.slug} onClick={onClick}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavList;
