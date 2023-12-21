import { useForm } from 'react-hook-form';
import styles from './ReservationForm.module.sass'
import { useLocation, useNavigate } from 'react-router-dom';

const availableTimes = ['11:30', '12:30', '13:00', '13:30', '14:00', '14:30', '15:30', '16:30', '17:30'];
const occasions = ['Birthday', 'Anniversary', 'Other'];
const defaultData = {
  date: '2023-12-29',
  time: '11:30',
  guest: 1,
  occasion: '',
  name: 'Jhon Doe',
  phone: '',
  email: 'jhon-doe@demo.com',
};

const ReservationForm = () => {
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {...defaultData}
  })

  const onSubmit = (data: typeof defaultData) => {
    console.log({ data })
    navigate('/reservation-confirm')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.reservationForm}>
      <h2>Reservation info</h2>
      <label>
        Date:<i>*</i>
        <input data-testid='input-date' type='date' {...register('date', {required: true})} />
        {Boolean(errors.date) && <span className={styles.error}>{errors.date?.message || 'Required field'}</span>}
      </label>
      <label>
        Time:<i>*</i>
        <select
         data-testid='input-time'
          {...register('time', {required: true})}
        >
          {availableTimes.map((times) => (
            <option key={times}>
              {times}
            </option>
          ))}
        </select>
        {Boolean(errors.time) && <span className={styles.error}>{errors.time?.message || 'Required field'}</span>}
      </label>
      <label>
        Guest:<i>*</i> <input type='number' data-testid='input-guest' {...register('guest', {required: true, valueAsNumber: true})} />
        {Boolean(errors.guest) && <span className={styles.error}>{errors.guest?.message || 'Required field'}</span>}
      </label>
      <label>
        Occasion:
        <select
         data-testid='input-occasion'
          {...register('occasion')}

        >
          <option value="">-- Select --</option>
          {occasions.map((occasion) => (
            <option key={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </label>
      <h2 className={styles.personalData}>Personal data</h2>
      <label>
        Name:<i>*</i><input type='text' data-testid='input-name' {...register('name', {required: true})} />
        {Boolean(errors.name) && <span className={styles.error}>{errors.name?.message || 'Required field'}</span>}
      </label>
      <label>
        Phone: <input type='text' data-testid='input-phone' {...register('phone')} />
      </label>
      <label>
        Email:<i>*</i> <input type='email' data-testid='input-email' {...register('email', {required: true, validate: {email: (value) => /^[a-z-_+]+@[a-z]+\.[a-z]{2,5}$/.test(value) || 'Invalid format'}})} />
        {Boolean(errors.email) && <span className={styles.error}>{errors.email?.message || 'Required field'}</span>}
      </label>
      <button type='submit' disabled={Boolean(Object.keys(errors).length)}>Make your reservation</button>
    </form>
  );
};

export default ReservationForm;
