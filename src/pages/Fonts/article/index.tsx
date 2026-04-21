import { Radio, RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { LoaderFunction } from 'react-router';
import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from 'react-router';
import styles from './styles.module.css';
import {
  fetchFontArticleDocument,
  getFirstLetters,
  transformMarkdownToLuofu,
} from './utils';

type ArticleData = {
  title: string;
  content: string;
};

type LoaderData = {
  hanzi: ArticleData;
  luofu: ArticleData;
};

type TextMode = 'hanzi' | 'luofu';

const textModeOptions: { label: string; value: TextMode }[] = [
  { label: '漢', value: 'hanzi' },
  { label: '羅', value: 'luofu' },
];

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  try {
    if (!slug) {
      throw new Error('Missing article slug');
    }

    const { title, content } = await fetchFontArticleDocument(slug);

    const hanzi = {
      title,
      content,
    };
    const luofu = {
      title: getFirstLetters(title),
      content: transformMarkdownToLuofu(content),
    };
    return { hanzi, luofu };
  } catch {
    throw new Response(
      `We did not find any articles related to slug "${params.slug}"`,
      { status: 404, statusText: 'Article Not Found' }
    );
  }
};

function ArticlePage() {
  const loaderData = useLoaderData() as LoaderData;

  const [textMode, setTextMode] = useState<TextMode>('hanzi');
  const { title, content } = loaderData[textMode];

  const handleChange = (value: TextMode) => {
    setTextMode(value);
  };

  return (
    <div className={styles.container}>
      <header className="mb-6 flex justify-center">
        <RadioGroup
          value={textMode}
          onChange={handleChange}
          aria-label="Text mode"
          className="inline-flex gap-2 rounded-full border border-(--color-separator-opaque) bg-(--color-bg-2) p-1 shadow-sm"
        >
          {textModeOptions.map(option => (
            <Radio
              key={option.value}
              value={option.value}
              className="cursor-pointer rounded-full px-4 py-2 text-lg font-semibold text-(--color-text-2) transition focus-visible:outline-none data-checked:bg-(--color-brand) data-checked:text-(--color-brand-text) data-focus:ring-2 data-focus:ring-(--color-brand)"
            >
              {option.label}
            </Radio>
          ))}
        </RadioGroup>
      </header>
      <article className={styles.article} data-mode={textMode}>
        <h1>{title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}

export { ArticlePage as Component };

export function ErrorBoundary() {
  const error = useRouteError();
  let title = 'Something went wrong!';
  let message = 'Please try again later.';

  if (isRouteErrorResponse(error)) {
    title = error.statusText;
    message = error.data;
  } else {
    console.log(error);
  }

  return (
    <div className="rounded-4xl border border-(--color-red) bg-(--color-bg-2) p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-(--color-red)">{title}</h2>
      <p className="mt-2 text-sm text-(--color-text-2)">{message}</p>
    </div>
  );
}
