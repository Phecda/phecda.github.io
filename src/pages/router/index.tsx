import { createHashRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { Home, HomeIndex } from '../Home';
import { NotFound } from '../NotFound';
import { routeLoading } from './renderRouteLoading';

const hashRouter = createHashRouter([
  {
    path: '/',
    element: <Home />,
    hydrateFallbackElement: routeLoading,
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
      {
        path: 'quicktools',
        lazy: () => import('../QuickTools'),
      },
      {
        path: 'fonts',
        lazy: () => import('../Fonts'),
        children: [
          {
            path: 'article/:slug',
            lazy: () => import('../Fonts/article'),
          },
        ],
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export function PageRouter() {
  return <RouterProvider router={hashRouter} />;
}
