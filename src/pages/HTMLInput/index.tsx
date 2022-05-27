import styles from './styles.module.css';

const inputTypes = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
  'datetime',
];

const autoCompleteList: CascadeAutoComplete[] = [
  {
    autoComplete: 'name',
    children: [
      {
        autoComplete: 'honorific-prefix',
      },
      {
        autoComplete: 'given-name',
      },
      {
        autoComplete: 'additional-name',
      },
      {
        autoComplete: 'family-name',
      },
      {
        autoComplete: 'honorific-suffix',
      },
    ],
  },
  {
    autoComplete: 'nickname',
  },
  {
    autoComplete: 'email',
  },
  {
    autoComplete: 'username',
  },
  {
    autoComplete: 'new-password',
    type: 'password',
  },
  {
    autoComplete: 'current-password',
    type: 'password',
  },
  {
    autoComplete: 'one-time-code',
    type: 'password',
  },
  {
    autoComplete: 'organization-title',
  },
  {
    autoComplete: 'organization',
  },
  {
    autoComplete: 'street-address',
    type: 'multiline',
    children: [
      {
        autoComplete: 'address-line1',
      },
      {
        autoComplete: 'address-line2',
      },
      {
        autoComplete: 'address-line3',
      },
    ],
  },
  {
    autoComplete: 'address-level4',
  },
  {
    autoComplete: 'address-level3',
  },
  {
    autoComplete: 'address-level2',
  },
  {
    autoComplete: 'address-level1',
  },
  {
    autoComplete: 'country',
  },
  {
    autoComplete: 'country-name',
  },
  {
    autoComplete: 'postal-code',
  },
  {
    autoComplete: 'cc-name',
    children: [
      {
        autoComplete: 'cc-given-name',
      },
      {
        autoComplete: 'cc-additional-name',
      },
      {
        autoComplete: 'cc-family-name',
      },
    ],
  },
  {
    autoComplete: 'cc-number',
  },
  {
    autoComplete: 'cc-exp',
    type: 'month',
    children: [
      {
        autoComplete: 'cc-exp-month',
        type: 'number',
      },
      {
        autoComplete: 'cc-exp-year',
        type: 'number',
      },
    ],
  },
  {
    autoComplete: 'cc-csc',
  },
  {
    autoComplete: 'cc-type',
  },
  {
    autoComplete: 'transaction-currency',
  },
  {
    autoComplete: 'transaction-amount',
    type: 'number',
  },
  {
    autoComplete: 'language',
  },
  {
    autoComplete: 'bday',
    type: 'date',
    children: [
      {
        autoComplete: 'bday-day',
        type: 'number',
      },
      {
        autoComplete: 'bday-month',
        type: 'number',
      },
      {
        autoComplete: 'bday-year',
        type: 'number',
      },
    ],
  },
  {
    autoComplete: 'sex',
  },
  {
    autoComplete: 'tel',
    type: 'tel',
    children: [
      {
        autoComplete: 'tel-country-code',
      },
      {
        autoComplete: 'tel-national',
        children: [
          {
            autoComplete: 'tel-area-code',
          },
          {
            autoComplete: 'tel-local',
            children: [
              {
                autoComplete: 'tel-local-prefix',
              },
              {
                autoComplete: 'tel-local-suffix',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    autoComplete: 'tel-extension',
  },
  {
    autoComplete: 'impp',
    type: 'url',
  },
  {
    autoComplete: 'url',
    type: 'url',
  },
  {
    autoComplete: 'photo',
    type: 'url',
  },
];

interface CascadeAutoComplete {
  autoComplete: string;
  type?: string;
  children?: CascadeAutoComplete[];
}

function renderAutoComplete(list: CascadeAutoComplete[]) {
  return list.map(({ children, autoComplete, ...item }) => {
    const self = (
      <div className={styles.inputField}>
        <label htmlFor={autoComplete}>{autoComplete}</label>
        {item.type === 'multiline' ? (
          <textarea rows={5} id={autoComplete} autoComplete={autoComplete} />
        ) : (
          <input id={autoComplete} autoComplete={autoComplete} {...item} />
        )}
      </div>
    );
    if (children) {
      return (
        <>
          {self}
          <fieldset>
            <legend>{autoComplete}</legend>
            {renderAutoComplete(children)}
          </fieldset>
        </>
      );
    }
    return self;
  });
}

export default function HTMLInput() {
  return (
    <div className="safe-background bg-below-top-bar">
      <main className="st-content wide-content">
        <h1>Input</h1>
        <details>
          <summary>input types</summary>
          <table className={styles.typeTable}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              {inputTypes.map(type => (
                <tr key={type}>
                  <td>{type}</td>
                  <td>
                    <input type={type} name={type} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
        <h2>AutoComplete</h2>
        <form>{renderAutoComplete(autoCompleteList)}</form>
      </main>
    </div>
  );
}
