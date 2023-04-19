import { useState } from 'react';
import { FormCheckbox, FormRadio, FormInput, FormItem } from './formFields';
import styles from './styles.module.css';

const elements = ['pyro', 'hydro', 'anemo', 'electro', 'dendro', 'cryo', 'geo'];
const characters = ['aether', 'lumine'];

export default function TypeGallery() {
  const [result, setResult] = useState<string>();
  return (
    <form
      className={styles.form}
      action=""
      onSubmit={e => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const obj: Record<string, unknown> = {};
        for (const [key, value] of formData.entries()) {
          const already = obj[key];
          if (already) {
            if (Array.isArray(already)) {
              already.push(value);
            } else {
              obj[key] = [already, value];
            }
          } else {
            obj[key] = value;
          }
        }
        setResult(JSON.stringify(obj, null, 2));
      }}
      onReset={() => {
        setResult('');
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
        <FormInput label="Date" type="date" name="date" />
        <FormInput label="Time" type="time" name="time" />
        <FormInput
          label="DateTime"
          type="datetime-local"
          name="localDateTime"
        />
        <FormInput label="Month" type="month" name="month" />
        <FormInput label="Week" type="week" name="week" />
      </fieldset>
      <fieldset name="text">
        <legend>Something like text</legend>
        <FormInput label="email" type="email" name="email" />
        <FormInput label="number" type="number" name="number" />
        <FormInput label="password" type="password" name="password" />
        <FormInput label="search" type="search" name="search" list="trending">
          <datalist id="trending">
            <option value="Trending 1" />
            <option value="Trending 2" />
            <option value="Trending 3" />
            <option value="Trending 4" />
            <option value="Trending 5" />
          </datalist>
        </FormInput>
        <FormInput label="telephone" type="tel" name="tel" />
        <FormInput label="url" type="url" name="url" />
      </fieldset>
      <fieldset name="special">
        <legend>Special</legend>
        <FormInput label="color" type="color" name="color" />
        <FormInput label="file" type="file" name="file" />
        <FormInput
          label="range"
          type="range"
          name="range"
          id="range-input"
          min={0}
          max={100}
          list="range-list"
        >
          <datalist id="range-list">
            <option value={10} />
            <option value={80} />
          </datalist>
        </FormInput>
      </fieldset>
      <fieldset name="actions">
        <legend>Buttons</legend>
        <FormItem>
          <input type="submit" />
        </FormItem>
        <FormItem>
          <input type="reset" />
        </FormItem>
        <FormItem>
          <input type="image" alt="image submit button" />
        </FormItem>
      </fieldset>
      <fieldset name="result">
        <legend>Result</legend>
        <output name="result">
          <pre>{result}</pre>
        </output>
      </fieldset>
    </form>
  );
}
