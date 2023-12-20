import styles from './OrderDeliveryBtn.module.sass';

const OrderDeliveryBtn = () => (
  <button className={styles.button}>
    Order a delivery
    <span className='icon-motorcycle'></span>
  </button>
);

export default OrderDeliveryBtn;
