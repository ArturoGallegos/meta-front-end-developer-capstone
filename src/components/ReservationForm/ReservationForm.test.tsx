import { fireEvent, render, screen } from '@testing-library/react';
import ReservationForm from 'src/components/ReservationForm/ReservationForm';

describe('Reservation form', () => {
  const submitData = jest.fn();
  test('check inputs', async () => {
    render(<ReservationForm />);
    // const element = screen.getByTestId(/Date/i);
    const inputDate = screen.getByTestId('input-date');
    expect(inputDate).toBeInTheDocument();

    const inputTime = screen.getByTestId('input-time');
    expect(inputTime).toBeInTheDocument();

    const inputGuest = screen.getByTestId('input-guest');
    expect(inputGuest).toBeInTheDocument();

    const inputOccasion = screen.getByTestId('input-occasion');
    expect(inputOccasion).toBeInTheDocument();

    const inputName = screen.getByTestId('input-name');
    expect(inputName).toBeInTheDocument();

    const inputPhone = screen.getByTestId('input-phone');
    expect(inputPhone).toBeInTheDocument();

    const inputEmail = screen.getByTestId('input-email');
    expect(inputEmail).toBeInTheDocument();
  });

});
