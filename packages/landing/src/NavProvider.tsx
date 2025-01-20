import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { App } from './view/App/App';
import { HomePage } from './view/Home/Page';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    index: true,
    element: <HomePage />,
  }, {
    path: '*',
    element: <Navigate to="/" />,
  }],
}]);

export function NavProvider() {
  return <RouterProvider router={router} />;
}
