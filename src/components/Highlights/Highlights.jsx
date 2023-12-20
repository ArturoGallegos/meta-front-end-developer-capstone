import styles from "./Highlights.module.sass";
import banner1 from "../../assets/greek-salad.jpg";
import banner2 from "../../assets/bruchetta.svg";
import banner3 from "../../assets/greek-salad.jpg";
import OrderDeliveryBtn from '../OrderDeliveryBtn/OrderDeliveryBtn';

const Highlights = () => (
  <section className={styles.highlights}>
    <div>
      <h2>Specials</h2>
      <a href="#online-menu">Online menu</a>
      <div className={styles.content}>
        <article>
          <img src={banner1} alt="Greek salad" />
          <div>
            <h1>Greek salad</h1>
            <span>$12.99</span>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              nulla.
            </div>
            <OrderDeliveryBtn />
          </div>
        </article>
        <article>
          <img src={banner2} alt="Bruchetta" />
          <div>
            <h1>Bruchetta</h1>
            <span>$5.99</span>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              nulla.
            </div>
            <OrderDeliveryBtn />
          </div>
        </article>
        <article>
          <img src={banner3} alt="Lemon Dessert" />
          <div>
            <h1>Lemon Dessert</h1>
            <span>$5.00</span>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              nulla.
            </div>
            <OrderDeliveryBtn />
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Highlights;
