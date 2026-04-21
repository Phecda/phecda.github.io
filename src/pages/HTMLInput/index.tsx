import { PageContainer } from '@/components/PageContainer';
import { AutoComplete } from './AutoComplete';
import { TypeGallery } from './TypeGallery';

export function Component() {
  return (
    <div className="safe-background">
      <PageContainer className="space-y-4">
        <h1>Input</h1>
        <h2>Type Gallery</h2>
        <TypeGallery />
        <h2>Auto Fill</h2>
        <AutoComplete />
      </PageContainer>
    </div>
  );
}

Component.displayName = 'HTMLInput';
