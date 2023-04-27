import { useState } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';

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

const operations: Record<string, (value: string) => string> = {
  'Encode to Base64': encodeToBase64,
  'Decode from Base64': decodeFromBase64,
  'Encode with JSON': encodeWithJSON,
  'Decode with JSON': decodeWithJSON,
  'Hex color to RGB color': hexColorToRGB,
  'RGB color to hex color': rgbColorToHex,
};

export function Component() {
  const [validated, setValidated] = useState(false);
  const [outputError, setOutputError] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const valid = form.checkValidity();

    setValidated(true);

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
    setOutputError('');
  };

  return (
    <div className="safe-background">
      <Container>
        <h1>Quick Tools</h1>
        <Form
          noValidate
          validated={validated}
          onSubmit={onSubmit}
          onReset={onReset}
          action=""
        >
          <Row className="gy-4">
            <Form.Group as={Col} xs={12} lg={4} controlId="inputString">
              <Form.Label>Input</Form.Label>
              <Form.Control required as="textarea" rows={4} />
              <Form.Control.Feedback type="invalid">
                Please enter a valid value.
              </Form.Control.Feedback>
            </Form.Group>
            <Col xs={12} lg={4}>
              <Stack gap={4}>
                <Form.Group controlId="operation">
                  <Form.Label>Operation</Form.Label>
                  <Form.Select>
                    {Object.keys(operations).map(name => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Stack direction="horizontal" gap={4}>
                  <Button variant="primary" type="submit">
                    Go
                  </Button>
                  <Button variant="secondary" type="reset">
                    Clear
                  </Button>
                </Stack>
              </Stack>
            </Col>
            <Form.Group as={Col} xs={12} lg={4} controlId="outputString">
              <Form.Label>Output</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                readOnly
                isInvalid={!!outputError}
              />
              <Form.Control.Feedback type="invalid">
                {outputError}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

Component.displayName = 'QuickTools';
