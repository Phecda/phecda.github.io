import { Container } from 'react-bootstrap';
import { AutoComplete } from './AutoComplete';
import TypeGallery from './TypeGallery';

export function Component() {
  return (
    <div className="safe-background">
      <Container>
        <h1>Input</h1>
        <h2>Type Gallery</h2>
        <TypeGallery />
        <h2>Auto Fill</h2>
        <AutoComplete />
      </Container>
    </div>
  );
}

Component.displayName = 'HTMLInput';
