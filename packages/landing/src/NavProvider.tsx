import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { Pathname } from './util/Pathname';
import { App } from './view/App/App';
import { HomePage } from './view/Home/Page';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    index: true,
    element: <HomePage />,
  }, {
    path: Pathname.Tokenomics,
    lazy: () => import('./view/Tokenomics/Page'),
  }, {
    path: '*',
    element: <Navigate to="/" />,
  }],
}]);

export function NavProvider() {
  return <RouterProvider router={router} />;
}
