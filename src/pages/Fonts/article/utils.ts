import pinyin from 'pinyin';
import { VFile } from 'vfile';
import { matter } from 'vfile-matter';

export const fontArticleSlugs = ['dgjcg-1'] as const;

type ArticleMatter = {
  title?: string;
};

export type FontArticleSummary = {
  slug: string;
  title: string;
};

export type FontArticleDocument = FontArticleSummary & {
  content: string;
};

export const getFirstLetters = (str: string) => {
  const firstLetters = pinyin(str, {
    style: pinyin.STYLE_FIRST_LETTER,
  });
  return firstLetters.map(item => item[0].toUpperCase()).join('');
};

const markdownPrefixPatterns = [
  /^(#{1,6}\s+)/,
  /^(>\s+)/,
  /^([-*+]\s+)/,
  /^(\d+\.\s+)/,
];

export const transformMarkdownToLuofu = (markdown: string) => {
  return markdown
    .split('\n')
    .map(line => {
      if (!line.trim()) {
        return line;
      }

      for (const pattern of markdownPrefixPatterns) {
        const match = pattern.exec(line);

        if (match) {
          return `${match[1]}${getFirstLetters(line.slice(match[1].length))}`;
        }
      }

      return getFirstLetters(line);
    })
    .join('\n');
};

const parseArticleMarkdown = (slug: string, markdown: string) => {
  const file = new VFile({ value: markdown });

  matter(file, { strip: true });

  const articleMatter = file.data.matter as ArticleMatter;
  const title = articleMatter.title;

  if (!title) {
    throw new Error(`Missing title in frontmatter for slug "${slug}"`);
  }

  return {
    slug,
    title,
    content: String(file),
  };
};

export const fetchFontArticleDocument = async (slug: string) => {
  const resp = await fetch(`/posts/${slug}.md`);

  if (!resp.ok) {
    throw new Error(`Unexpected response status: ${resp.status}`);
  }

  const markdown = await resp.text();

  return parseArticleMarkdown(slug, markdown);
};

export const fetchFontArticleSummaries = async () => {
  const articles = await Promise.all(
    fontArticleSlugs.map(fetchFontArticleDocument)
  );

  return articles.map(({ slug, title }) => ({ slug, title }));
};
