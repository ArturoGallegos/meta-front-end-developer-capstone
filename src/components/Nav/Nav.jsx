import { useState } from 'react';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.sass';

const menuItems = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/menu',
    label: 'Menu',
  },
  {
    path: '/reservations',
    label: 'Reservations',
  },
  {
    path: '/order-online',
    label: 'Order Online',
  },
  {
    path: '/login',
    label: 'Login',
  },
];

const Nav = ({ isMain }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = (event) => {
      setOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleMenu = () => setOpen((data) => !data);

  const handleCloseMenu = () => setOpen(false);

  const Items = (
    <ul className={isMain ? styles.menuList : ''}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link onClick={handleCloseMenu} className={location.pathname === item.path ? styles.current : ''} to={item.path}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return isMain ? (
    <nav className={open ? styles.active : ''}>
      <span
        className={clsx(styles.iconMenu, {
          'icon-cancel': open,
          'icon-bars': !open,
        })}
        onClick={handleMenu}></span>
      {Items}
    </nav>
  ) : (
    <menu>{Items}</menu>
  );
};

export default Nav;
