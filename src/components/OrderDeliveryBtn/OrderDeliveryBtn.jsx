import styles from "./OrderDeliveryBtn.module.sass";
import icon from '../../assets/Basket.svg'

const OrderDeliveryBtn = () => (
  <button className={styles.button}>Order a delivery
  <img src={icon} alt="Basket icon"/>
  </button>
);

export default OrderDeliveryBtn;
