import profile from 'src/assets/images/profile.jpg';
import styles from './Testimonials.module.sass';
import Rating from 'src/components/Rating/Rating';

const Testimonials = () => (
  <section className={styles.testimonials}>
    <div>
      <h2>What people say about us!</h2>
      <ul>
        <li>
          <img src={profile} alt='' />
          <div>
            <strong>Jorge Villa</strong>
            <Rating rating={5} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptas?</p>
          </div>
        </li>
        <li>
          <img src={profile} alt='' />
          <div>
            <strong>Marcela Negrete</strong>
            <Rating rating={4} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptas?</p>
          </div>
        </li>
        <li>
          <img src={profile} alt='' />
          <div>
            <strong>Jhonatan Martinez</strong>
            <Rating rating={5} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptas?</p>
          </div>
        </li>
        <li>
          <img src={profile} alt='' />
          <div>
            <strong>Vanessa Benavides</strong>
            <Rating rating={4} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptas?</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Testimonials;
