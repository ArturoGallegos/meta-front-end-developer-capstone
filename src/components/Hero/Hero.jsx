import { Link } from 'react-router-dom';
import styles from "./Hero.module.sass";
import banner from "src/assets/images/RestaurantFood.jpg";

const Hero = () => (
  <section className={styles.hero}>
    <div>
      <div className={styles.content}>
        <h1>Little Lemon</h1>
        <span>Chicago</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
          pariatur!
        </p>
        <Link to="/reservations">Reservations</Link>
      </div>
      <img src={banner} alt="Little lemon - Chicago" />
    </div>
  </section>
);

export default Hero;
