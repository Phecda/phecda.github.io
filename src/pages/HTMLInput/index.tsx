import { AutoComplete } from './AutoComplete';
import TypeGallery from './TypeGallery';

export function Component() {
  return (
    <div className="safe-background">
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

Component.displayName = 'HTMLInput';
