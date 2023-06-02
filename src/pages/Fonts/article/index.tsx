import { Alert, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import {
  LoaderFunction,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from 'react-router-dom';
import styles from './styles.module.css';
import { getFirstLetters } from './utils';
import { useState } from 'react';

type ArticleData = {
  title: string;
  paragraphs: string[];
};

type LoaderData = {
  hanzi: ArticleData;
  luofu: ArticleData;
};

type TextMode = 'hanzi' | 'luofu';

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  try {
    const resp = await fetch(`/posts/${slug}.json`);

    const json = await resp.json();

    const { title, paragraphs } = json;

    const hanzi = {
      title,
      paragraphs,
    };
    const luofu = {
      title: getFirstLetters(title),
      paragraphs: paragraphs.map(getFirstLetters),
    };
    return { hanzi, luofu };
  } catch (error) {
    throw new Response(
      `We did not find any articles related to slug "${params.slug}"`,
      { status: 404, statusText: 'Article Not Found' }
    );
  }
};

function ArticlePage() {
  const loaderData = useLoaderData() as LoaderData;

  const [textMode, setTextMode] = useState<TextMode>('hanzi');
  const { title, paragraphs } = loaderData[textMode];

  const handleChange = (value: TextMode) => {
    setTextMode(value);
  };

  return (
    <div className={styles.container}>
      <header>
        <ToggleButtonGroup
          name="text-mode"
          type="radio"
          value={textMode}
          onChange={handleChange}
        >
          <ToggleButton
            variant="outline-primary"
            id="radio-text-mode-hanzi"
            value="hanzi"
          >
            漢
          </ToggleButton>
          <ToggleButton
            variant="outline-primary"
            id="radio-text-mode-luofu"
            value="luofu"
          >
            羅
          </ToggleButton>
        </ToggleButtonGroup>
      </header>
      <article className={styles.article} data-mode={textMode}>
        <h1 className={styles.title}>{title}</h1>
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
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
    <Alert variant="danger">
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
}
