import { render } from 'preact';
import './styles/index.css';
import { App } from './app';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (window.confirm('The app needs update.')) {
      updateSW();
    }
  },
  onOfflineReady() {
    window.alert('The app is ready to use offline.');
  },
});

render(<App />, document.getElementById('app')!);
