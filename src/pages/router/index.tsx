import DeviceInspector from '../DeviceInspector';
import Home from '../Home';
import LayoutInspector from '../LayoutInspector';
import NotFound from '../NotFound';
import { HashRouter, Switch, Route, RouteProps } from 'react-router-dom';
import StyleInspector from '../StyleInspector';
import HTMLInput from '../HTMLInput';
import PageHeader from '@/components/PageHeader';

const hashRouter: RouteProps[] = [
  { path: '/', component: Home, exact: true },
  {
    path: '/device',
    component: DeviceInspector,
  },
  {
    path: '/layout',
    component: LayoutInspector,
  },
  {
    path: '/style',
    component: StyleInspector,
  },
  {
    path: '/inputs',
    component: HTMLInput,
  },
  { path: '*', component: NotFound },
];

export default function PageRouter() {
  return (
    <HashRouter>
      <PageHeader />
      <Switch>
        {hashRouter.map(routeProps => (
          <Route key={routeProps.path as string} {...routeProps} />
        ))}
      </Switch>
    </HashRouter>
  );
}
