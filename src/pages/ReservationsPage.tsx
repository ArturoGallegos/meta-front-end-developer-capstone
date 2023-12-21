import React from 'react';
import Layout from 'src/components/Layout/Layout';
import BookingForm from 'src/components/BookingForm/BookingForm';

const availableTimes = ['11:30', '12:30', '13:00', '13:30', '14:00', '14:30', '15:30', '16:30', '17:30'];

const ReservationsPage: React.FC = () => {
  return (
    <Layout>
      <BookingForm availableTimes={availableTimes} />
    </Layout>
  );
};

export default ReservationsPage;
