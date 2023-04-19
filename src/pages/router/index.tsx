import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home, { HomeIndex } from '../Home';
import NotFound from '../NotFound';
import { routeLoading } from './renderRouteLoading';

const hashRouter = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
      {
        path: 'device',
        lazy: () => import('../DeviceInspector'),
      },
      {
        path: 'layout',
        lazy: () => import('../LayoutInspector'),
      },
      {
        path: 'style',
        lazy: () => import('../StyleInspector'),
      },
      {
        path: 'inputs',
        lazy: () => import('../HTMLInput'),
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default function PageRouter() {
  return <RouterProvider router={hashRouter} fallbackElement={routeLoading} />;
}
