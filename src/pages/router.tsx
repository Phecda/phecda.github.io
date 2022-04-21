import Router, { Route } from 'preact-router';
import DeviceInspector from './DeviceInspector';
import Home from './Home';

export default function PageRouter() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/device" component={DeviceInspector} />
    </Router>
  );
}
