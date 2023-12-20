import logo from "src/assets/images/Logo.svg";
import styles from './Header.module.sass'
import Nav from 'src/components/Nav/Nav';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Little lemon" />
        </a>
        <Nav isMain />
      </div>
    </header>
  );
};

export default Header;
