import logo from "src/assets/images/logo-white.png";
// import Nav from "../Nav/Nav";
import styles from "./Footer.module.sass";

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <img src={logo} alt="Little Lemon" />
      <div className={styles.contact}>
        <strong>Contact Us</strong>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          officia.
        </p>
        <p>
          Phone:
          <br />
          +51(123)-234-1234
          <br />
          Address:
          <br />
          Lorem ipsum dolor sit.
        </p>
      </div>
      {/* <Nav /> */}
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a href="#facebook">Facebook</a>
          </li>
          <li>
            <a href="#instagram">Instagram</a>
          </li>
          <li>
            <a href="#email">Email</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
