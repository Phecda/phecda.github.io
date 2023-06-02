import pinyin from 'pinyin';

export const getFirstLetters = (str: string) => {
  const firstLetters = pinyin(str, {
    style: pinyin.STYLE_FIRST_LETTER,
  });
  return firstLetters.map(item => item[0].toUpperCase()).join('');
};
