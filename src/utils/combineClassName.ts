export const combineClassName = (...classes: any[]) =>
  classes.filter(c => !!c && typeof c === 'string').join(' ');
