import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'src/pages/HomePage';
import ReservationConfirmPage from 'src/pages/ReservationConfirmPage';
import ReservationsPage from 'src/pages/ReservationsPage';
import UnderConstructionPage from 'src/pages/UnderConstruction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <UnderConstructionPage />,
  },
  {
    path: '/menu',
    element: <UnderConstructionPage />,
  },
  {
    path: '/reservations',
    element: <ReservationsPage />,
  },
  {
    path: '/reservation-confirm',
    element: <ReservationConfirmPage />,
  },
  {
    path: '/order-online',
    element: <UnderConstructionPage />,
  },
  {
    path: '/login',
    element: <UnderConstructionPage />,
  },
]);

export default router;
