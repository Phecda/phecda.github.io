import { FormInput, FormItem } from './formFields';
import styles from './styles.module.css';

export function AutoComplete() {
  return (
    <form
      action=""
      className={styles.form}
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <fieldset name="profile">
        <legend>Profile</legend>
        <FormInput name="name" autoComplete="name" />
        <FormInput name="email" autoComplete="email" />
        <FormInput name="organization" autoComplete="organization" />
        <FormInput name="title" autoComplete="organization-title" />
        <FormItem>
          <label>Address</label>
          <textarea name="streetAddress" autoComplete="street-address" />
        </FormItem>
        <FormInput name="address-level4" autoComplete="address-level4" />
        <FormInput name="address-level3" autoComplete="address-level3" />
        <FormInput name="address-level2" autoComplete="address-level2" />
        <FormInput name="address-level1" autoComplete="address-level1" />
        <FormInput name="country" autoComplete="country" />
        <FormInput name="countryName" autoComplete="country-name" />
        <FormInput name="postalCode" autoComplete="postal-code" />
        <FormInput name="birthday" autoComplete="bday" type="date" />
      </fieldset>
      <fieldset name="contacts">
        <legend>Contact</legend>
        <FormInput name="tel" type="tel" autoComplete="tel" />
        <FormInput name="tel-country-code" autoComplete="tel-country-code" />
        <FormInput name="tel-national" autoComplete="tel-national" />
        <FormInput name="tel-area-code" autoComplete="tel-area-code" />
        <FormInput name="tel-local" autoComplete="tel-local" />
        <FormInput name="tel-local-prefix" autoComplete="tel-local-prefix" />
        <FormInput name="tel-local-suffix" autoComplete="tel-local-suffix" />
        <FormInput name="tel-extension" autoComplete="tel-extension" />
      </fieldset>
      <fieldset name="auth">
        <legend>Authentication</legend>
        <FormInput name="username" autoComplete="username" />
        <FormInput
          name="password"
          autoComplete="current-password"
          type="password"
        />
        <FormInput
          name="newPassword"
          autoComplete="new-password"
          type="password"
        />
        <FormInput name="OTC" autoComplete="one-time-code" />
      </fieldset>
      <fieldset name="cc">
        <legend>Credit Card</legend>
        <FormInput label="name" name="cc-name" autoComplete="cc-name" />
        <FormInput
          label="givenName"
          name="cc-given-name"
          autoComplete="cc-given-name"
        />
        <FormInput
          label="additionalName"
          name="cc-additional-name"
          autoComplete="cc-additional-name"
        />
        <FormInput
          label="familyName"
          name="cc-family-name"
          autoComplete="cc-family-name"
        />
        <FormInput label="number" name="cc-number" autoComplete="cc-number" />
        <FormInput
          label="exp"
          name="cc-exp"
          autoComplete="cc-exp"
          type="month"
        />
        <FormInput
          label="exp-month"
          name="cc-exp-month"
          autoComplete="cc-exp-month"
          type="number"
        />
        <FormInput
          label="exp-year"
          name="cc-exp-year"
          autoComplete="cc-exp-year"
          type="number"
        />
        <FormInput label="CSC" name="cc-csc" autoComplete="cc-csc" />
        <FormInput label="type" name="cc-type" autoComplete="cc-type" />
      </fieldset>
      <fieldset>
        <FormItem>
          <input type="submit" />
        </FormItem>
      </fieldset>
    </form>
  );
}
