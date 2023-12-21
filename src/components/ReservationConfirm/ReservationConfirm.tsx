import styles from './ReservationConfirm.module.sass';

const ReservationConfirm = () => {
  return (
    <div className={styles.reservationConfirm}>
      <h1>Your reservation has been confirmed.</h1>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ReservationConfirm;
