import profile from "../../assets/profile.jpg";
import styles from "./Testimonials.module.sass";

const Testimonials = () => (
  <section className={styles.testimonials}>
    <div>
      <h2>Testimonials</h2>
      <ul>
        <li>
          <img src={profile} alt="" />
          <div>
            <strong>Lorem, ipsum.</strong>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </li>
        <li>
          <img src={profile} alt="" />
          <div>
            <strong>Quos, nulla.</strong>
            <p>Sit vero minus atque.</p>
          </div>
        </li>
        <li>
          <img src={profile} alt="" />
          <div>
            <strong>Voluptate, esse.</strong>
            <p>Soluta, illo! Corrupti, impedit.</p>
          </div>
        </li>
        <li>
          <img src={profile} alt="" />
          <div>
            <strong>Laudantium, dolorem?</strong>
            <p>Enim cumque placeat consequuntur?</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Testimonials;
