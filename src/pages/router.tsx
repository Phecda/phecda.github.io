import Router, { Route } from 'preact-router';
import DeviceInspector from './DeviceInspector';
import { hashHistory } from './history';
import Home from './Home';
import NotFound from './NotFound';

export default function PageRouter() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/device/:id?" component={DeviceInspector} />
      <Route default component={NotFound} />
    </Router>
  );
}
