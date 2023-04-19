import { FunctionComponent, InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { PropsWithChildren } from 'react';

export const FormItem: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
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
  { label?: string } & InputHTMLAttributes<HTMLInputElement>
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
