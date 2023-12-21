import React from 'react';
import Layout from 'src/components/Layout/Layout';
import ReservationForm from 'src/components/ReservationForm/ReservationForm';

const ReservationsPage: React.FC = () => {
  return (
    <Layout>
      <ReservationForm />
    </Layout>
  );
};

export default ReservationsPage;
