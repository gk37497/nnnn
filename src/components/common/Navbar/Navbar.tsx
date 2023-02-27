import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { Cross, Menu, Moon, Sun } from '@/components/icons';
import { useToggleTheme } from '@/lib/hooks/useToggleTheme';
import { slugs } from '@/lib/slugs';

import s from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const { theme, setTheme } = useToggleTheme();
  const changeTheme = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
    if (theme === 'system') setTheme('light');
  };

  return (
    <div className={clsx(s.root)}>
      <div className={s.container}>
        <button className={s.btn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Cross /> : <Menu />}
        </button>
        <button className={s.toggler} onClick={changeTheme}>
          {theme === 'light' && <Moon className="h-5 w-5" />}
          {(theme === 'dark' || theme === 'system') && (
            <Sun className="h-5 w-5" />
          )}
        </button>
        <div
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className={clsx({
            [s.open]: isOpen,
            hidden: !isOpen,
          })}
        >
          <nav className={s.nav}>
            {slugs.map((e) => {
              return (
                <Link
                  href={e.slug}
                  key={e.slug}
                  onClick={close}
                  className={s.item}
                >
                  - {e.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
