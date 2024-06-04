import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Navs from '../pages/Navs/Navs';
import Selects from '../pages/Selects/Selects';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'navs',
    element: <Navs />,
  },
  {
    path: 'selects',
    element: <Selects />,
  },
]);
