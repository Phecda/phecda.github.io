type ClassName = string | false | null | undefined;

export const combineClassName = (...classes: ClassName[]) =>
  classes
    .filter((className): className is string => typeof className === 'string')
    .join(' ');
