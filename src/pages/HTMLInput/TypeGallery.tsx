import { FunctionComponent } from 'preact';
import styles from './styles.module.css';

const FormItem: FunctionComponent = ({ children }) => {
  return <div className={styles.formItem}>{children}</div>;
};

const FormCheckbox: FunctionComponent<{
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

const FormRadio: FunctionComponent<{
  label?: string;
  value: string | number;
  name: string;
}> = ({ label, value, name }) => {
  const id = `c-${name}-${value}`;
  return (
    <FormItem>
      <input type="radio" id={id} name={name} value={value} />
      {!!label && <label htmlFor={id}>{label}</label>}
    </FormItem>
  );
};

const elements = ['pyro', 'hydro', 'anemo', 'electro', 'dendro', 'cryo', 'geo'];
const characters = ['aether', 'lumine'];

export default function TypeGallery() {
  return (
    <form
      className={styles.form}
      action=""
      onSubmit={e => {
        e.preventDefault();
        console.log(e);
        const formData = new FormData(e.target as HTMLFormElement);
        for (const [key, value] of formData.entries()) {
          console.log(key, value);
        }
      }}
    >
      <fieldset name="checkbox">
        <legend>Choose some elements</legend>
        {elements.map(element => (
          <FormCheckbox
            key={element}
            name="elements"
            value={element}
            label={element}
          />
        ))}
      </fieldset>
      <fieldset name="radio">
        <legend>Choose one from the two</legend>
        {characters.map(character => (
          <FormRadio
            key={character}
            value={character}
            label={character}
            name="character"
          />
        ))}
      </fieldset>
      <fieldset name="date">
        <legend>Time</legend>
        <FormItem>
          <label>Date</label>
          <input type="date" name="date" />
        </FormItem>
        <FormItem>
          <label>Time</label>
          <input type="time" name="time" />
        </FormItem>
        <FormItem>
          <label>DateTime</label>
          <input type="datetime-local" name="localDateTime" />
        </FormItem>
        <FormItem>
          <label>Month</label>
          <input type="month" name="month" />
        </FormItem>
        <FormItem>
          <label>Week</label>
          <input type="week" name="week" />
        </FormItem>
      </fieldset>
      <input type="submit" />
    </form>
  );
}
