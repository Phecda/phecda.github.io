import Router, { Route } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { hashHistory } from '../history';
import Home from '../Home';
import NotFound from '../NotFound';
import { renderRouteLoading } from './renderRouteLoading';

export default function PageRouter() {
  return (
    <>
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <AsyncRoute
          path="/device"
          loading={renderRouteLoading}
          getComponent={() => import('../DeviceInspector').then(m => m.default)}
        />
        <AsyncRoute
          path="/layout"
          loading={renderRouteLoading}
          getComponent={() => import('../LayoutInspector').then(m => m.default)}
        />
        <Route default component={NotFound} />
      </Router>
    </>
  );
}
