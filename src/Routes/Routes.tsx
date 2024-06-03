import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Navs from '../pages/Navs/Navs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'navs',
    element: <Navs />,
  },
]);
