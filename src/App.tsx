import { RouterProvider } from 'react-router-dom';
import 'src/styles/styles.sass'
import router from 'src/router';

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
