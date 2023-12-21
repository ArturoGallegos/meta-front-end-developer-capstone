import { render, screen } from '@testing-library/react';
import BookingForm from 'src/components/BookingForm/BookingForm';

const availableTimes = ['11:30', '12:30', '13:00', '13:30', '14:00', '14:30', '15:30', '16:30', '17:30'];

describe('Reservation form', () => {
  test('check inputs', async () => {
    render(<BookingForm availableTimes={availableTimes} />);
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
