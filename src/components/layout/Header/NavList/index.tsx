'use client';

import styles from './styles.module.scss';
import Link from 'next/link';

const NavList = ({ onClick }: { onClick?: () => void }) => {
  const items: {
    id: string;
    label: string;
  }[] = [
    {
      id: 'about',
      label: 'About',
    },
    {
      id: 'skills',
      label: 'Skills',
    },
    {
      id: 'experience',
      label: 'Experience',
    },
    {
      id: 'contact',
      label: 'Contact',
    },
  ];

  return (
    <nav className={styles.NavList}>
      {items.map((item) => (
        <Link key={item.id} href={`#${item.id}`} onClick={onClick}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavList;
