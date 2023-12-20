import { useState } from 'react';
// import iconBurger from "../../assets/iconBurger.svg";
import { useEffect } from 'react';
import styles from './Nav.module.sass';
import clsx from 'clsx';
import { Link, useLocation, useRoutes } from 'react-router-dom';

const menuItems = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/about',
    label: 'About'
  },
  {
    path: '/menu',
    label: 'Menu'
  },
  {
    path: '/reservations',
    label: 'Reservations'
  },
  {
    path: '/order-online',
    label: 'Order Online'
  },
  {
    path: '/login',
    label: 'Login'
  },
]

const Nav = ({ isMain }) => {
  const location = useLocation();
  console.log({ location })
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
    <ul
      className={isMain ? styles.menuList : ''}>
      {menuItems.map((item, index) => <li key={index}>
        <Link onClick={handleCloseMenu} className={location.pathname === item.path ? styles.current : ''} to={item.path}>
          {item.label}
        </Link>
      </li>)}
    </ul>
  );

  return isMain ? (
    <nav className={open ? styles.active: ''}>
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
