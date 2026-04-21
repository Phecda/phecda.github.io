import { Link, useOutlet } from 'react-router';
import { PageContainer } from '@/components/PageContainer';

const fontArticles = [
  {
    slug: 'dgjcg-1',
    title: '帝弓迹躔歌·其一',
  },
];

function FontsIndex() {
  return (
    <section className="space-y-6 py-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Fancy Fonts</h1>
        <p className="text-(--color-text-2)">
          Browse the available articles rendered with the current font set.
        </p>
      </header>
      <div className="grid gap-4">
        {fontArticles.map(article => (
          <Link
            key={article.slug}
            to={`article/${article.slug}`}
            viewTransition
            className="block rounded-3xl border border-(--color-separator-opaque) bg-(--color-bg-2) p-5 shadow-sm transition hover:border-(--color-brand) hover:bg-(--color-bg-3) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-brand)"
          >
            <h2 className="text-xl font-semibold">{article.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Component() {
  const outlet = useOutlet();

  return (
    <div className="safe-background">
      <PageContainer>{outlet ?? <FontsIndex />}</PageContainer>
    </div>
  );
}
