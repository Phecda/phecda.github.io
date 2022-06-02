import { AutoComplete } from './AutoComplete';
import TypeGallery from './TypeGallery';

export default function HTMLInput() {
  return (
    <div className="safe-background bg-below-top-bar">
      <main className="st-content wide-content">
        <h1>Input</h1>
        <h2>Type Gallery</h2>
        <TypeGallery />
        <h2>Auto Fill</h2>
        <AutoComplete />
      </main>
    </div>
  );
}
