'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@context/theme';

const Logo = ({ size = 32 }: { size?: number }): React.ReactElement | null => {
  const { theme } = useTheme();
  const [src, setSrc] = useState<string>('/images/logos/logo-light.svg');

  useEffect(() => {
    setSrc(theme === 'dark' ? '/images/logos/logo-light.svg' : '/images/logos/logo-dark.svg');
  }, [theme]);

  return (
    <img
      src={src}
      alt="arnovs logo"
      width={size}
      height={size}
      suppressHydrationWarning
    />
  );
};

export default Logo;
