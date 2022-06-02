import { FunctionComponent } from 'preact';
import type { JSXInternal } from 'preact/src/jsx';
import styles from './styles.module.css';

export const FormItem: FunctionComponent = ({ children }) => {
  return <div className={styles.formItem}>{children}</div>;
};

export const FormCheckbox: FunctionComponent<{
  label?: string;
  value: string | number;
  name: string;
}> = ({ label, value, name }) => {
  const id = `c-${name}-${value}`;
  return (
    <FormItem>
      <input type="checkbox" id={id} name={name} value={value} />
      {!!label && <label htmlFor={id}>{label}</label>}
    </FormItem>
  );
};

export const FormRadio: FunctionComponent<{
  label?: string;
  value: string | number;
  name: string;
}> = ({ label, value, name }) => {
  const id = `r-${name}-${value}`;
  return (
    <FormItem>
      <input type="radio" id={id} name={name} value={value} />
      {!!label && <label htmlFor={id}>{label}</label>}
    </FormItem>
  );
};

export const FormInput: FunctionComponent<
  { label?: string } & JSXInternal.HTMLAttributes<HTMLInputElement>
> = ({ label, name, id, children, ...inputProps }) => {
  const defaultId = id ?? `fi-${name}`;
  const defaultLabel = label ?? name;
  return (
    <FormItem>
      {!!defaultLabel && <label htmlFor={defaultId}>{defaultLabel}</label>}
      <input name={name} id={defaultId} {...inputProps} />
      {children}
    </FormItem>
  );
};
