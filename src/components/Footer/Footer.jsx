import logo from "src/assets/images/logo-white.png";
// import Nav from "../Nav/Nav";
import styles from "./Footer.module.sass";
import Nav from 'src/components/Nav/Nav';

const Footer = () => (
  <footer className={styles.content}>
    <div>
      <img src={logo} alt="Little Lemon" />
      <div className={styles.contact}>
        <strong>Contact Us</strong>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          officia.
        </p>
        <p>
        <span className='icon-phone'></span>+51(123)-234-1234<br />
        <span className='icon-map-marker'></span>Lorem ipsum dolor sit.<br />
        <span className='icon-envelope'></span>contact@demo.com
        </p>
      </div>
      <Nav />
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a href="#facebook"><span className='icon-facebook-official'></span>Facebook</a>
          </li>
          <li>
            <a href="#instagram"><span className='icon-twitter'></span>Twitter</a>
          </li>
          <li>
            <a href="#youtube"><span className='icon-youtube'></span>Youtube</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
