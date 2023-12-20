import { useState } from 'react';
// import iconBurger from "../../assets/iconBurger.svg";
import { useEffect } from 'react';
import styles from './Nav.module.sass';
import clsx from 'clsx';

const Nav = ({ isMain }) => {
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
      <li>
        <a onClick={handleCloseMenu} href='#home'>
          Home
        </a>
      </li>
      <li>
        <a onClick={handleCloseMenu} href='#about'>
          About
        </a>
      </li>
      <li>
        <a onClick={handleCloseMenu} href='#menu'>
          Menu
        </a>
      </li>
      <li>
        <a onClick={handleCloseMenu} href='#reservations'>
          Reservations
        </a>
      </li>
      <li>
        <a onClick={handleCloseMenu} href='#order-online'>
          Order Online
        </a>
      </li>
      <li>
        <a onClick={handleCloseMenu} href='#login'>
          Login
        </a>
      </li>
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
