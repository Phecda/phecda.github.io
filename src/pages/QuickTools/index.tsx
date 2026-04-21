import { useState } from 'react';
import { PageContainer } from '@/components/PageContainer';
import { combineClassName } from '@/utils/combineClassName';

function encodeToBase64(value: string) {
  return btoa(value);
}

function decodeFromBase64(value: string) {
  return atob(value);
}

function encodeWithJSON(value: string) {
  return JSON.stringify(value);
}

function decodeWithJSON(value: string) {
  return JSON.parse(value);
}

/**
 * 转换十六进制颜色值为 RGB 颜色值
 * @param hex #RRGGBB #RGB
 * @returns rgb(R, G, B)
 */
function hexColorToRGB(hex: string) {
  const hexColor = hex.replace('#', '');
  const hexColorLength = hexColor.length;
  const rgbColor = [];
  if (hexColorLength === 3) {
    for (let i = 0; i < 3; i++) {
      rgbColor.push(parseInt(hexColor.slice(i, i + 1).repeat(2), 16));
    }
  } else if (hexColorLength === 6) {
    for (let i = 0; i < 3; i++) {
      rgbColor.push(parseInt(hexColor.slice(i * 2, i * 2 + 2), 16));
    }
  } else {
    throw new Error('Invalid hex color value.');
  }
  return `rgb(${rgbColor.join(', ')})`;
}

/**
 * 转换 RGB 颜色值为十六进制颜色值
 * @param rgb rgb(R, G, B)
 * @returns #RRGGBB
 */
function rgbColorToHex(rgb: string) {
  const rgbColor = rgb.replace(/[^\d,]/g, '').split(',');
  const hexColor = [];
  for (let i = 0; i < 3; i++) {
    const hex = Number(rgbColor[i]).toString(16);
    if (hex.length < 2) {
      hexColor.push(`0${hex}`);
    } else {
      hexColor.push(hex);
    }
  }
  return `#${hexColor.join('')}`.toUpperCase();
}

function encodeURIComp(value: string) {
  return encodeURIComponent(value);
}

function decodeURIComp(value: string) {
  return decodeURIComponent(value);
}

const operations: Record<string, (value: string) => string> = {
  'Encode to Base64': encodeToBase64,
  'Decode from Base64': decodeFromBase64,
  'Encode with JSON': encodeWithJSON,
  'Decode with JSON': decodeWithJSON,
  'Hex color to RGB color': hexColorToRGB,
  'RGB color to hex color': rgbColorToHex,
  'Encode URI component': encodeURIComp,
  'Decode URI component': decodeURIComp,
};

const fieldClassName =
  'block w-full rounded-md border border-(--color-separator-opaque) bg-(--color-bg-1) px-3 py-2 text-base text-(--color-text-1) transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-brand)';

const textareaClassName = `${fieldClassName} min-h-28 resize-y`;

const labelClassName = 'mb-2 block font-medium';

const buttonBaseClassName =
  'inline-flex items-center justify-center rounded-md border px-3 py-2 text-base transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-brand)';

export function Component() {
  const [validated, setValidated] = useState(false);
  const [inputInvalid, setInputInvalid] = useState(false);
  const [outputError, setOutputError] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const valid = form.checkValidity();

    setValidated(true);
    const input = form.elements.namedItem('inputString') as HTMLTextAreaElement;
    setInputInvalid(!input.checkValidity());

    if (valid) {
      const input = form.elements.namedItem(
        'inputString'
      ) as HTMLTextAreaElement;
      const output = form.elements.namedItem(
        'outputString'
      ) as HTMLTextAreaElement;
      const operation = form.elements.namedItem(
        'operation'
      ) as HTMLSelectElement;

      try {
        output.value = operations[operation.value](input.value.trim());
        setOutputError('');
      } catch (error) {
        setOutputError(error instanceof Error ? error.message : String(error));
      }
    }
  };

  const onReset = () => {
    setValidated(false);
    setInputInvalid(false);
    setOutputError('');
  };

  return (
    <div className="safe-background">
      <PageContainer className="space-y-4">
        <h1>Quick Tools</h1>
        <form
          noValidate
          onSubmit={onSubmit}
          onReset={onReset}
          className="grid gap-4 lg:grid-cols-3"
        >
          <section>
            <label className={labelClassName} htmlFor="inputString">
              Input
            </label>
            <textarea
              id="inputString"
              name="inputString"
              required
              rows={4}
              aria-invalid={validated && inputInvalid}
              onInput={() => setInputInvalid(false)}
              className={combineClassName(
                textareaClassName,
                validated &&
                  inputInvalid &&
                  'border-(--color-red) focus-visible:ring-(--color-red)'
              )}
            />
            {validated && inputInvalid ? (
              <p className="mt-1 text-sm text-(--color-red)">
                Please enter a valid value.
              </p>
            ) : null}
          </section>
          <section className="space-y-4">
            <div>
              <label className={labelClassName} htmlFor="operation">
                Operation
              </label>
              <select
                id="operation"
                name="operation"
                className={fieldClassName}
              >
                {Object.keys(operations).map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className={combineClassName(
                  buttonBaseClassName,
                  'border-(--color-brand) bg-(--color-brand) text-(--color-brand-text) hover:brightness-110'
                )}
                type="submit"
              >
                Go
              </button>
              <button
                className={combineClassName(
                  buttonBaseClassName,
                  'border-(--color-separator-opaque) bg-(--color-bg-3) text-(--color-text-1) hover:bg-(--color-fill-3)'
                )}
                type="reset"
              >
                Clear
              </button>
            </div>
          </section>
          <section>
            <label className={labelClassName} htmlFor="outputString">
              Output
            </label>
            <textarea
              id="outputString"
              name="outputString"
              rows={4}
              readOnly
              aria-invalid={!!outputError}
              className={combineClassName(
                textareaClassName,
                outputError &&
                  'border-(--color-red) focus-visible:ring-(--color-red)'
              )}
            />
            {outputError ? (
              <p className="mt-1 text-sm text-(--color-red)">{outputError}</p>
            ) : null}
          </section>
        </form>
      </PageContainer>
    </div>
  );
}

Component.displayName = 'QuickTools';
