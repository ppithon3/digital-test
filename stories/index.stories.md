```js script
import { html } from '@open-wc/demoing-storybook';
import '../digital-test.js';

export default {
  title: 'DigitalTest',
  component: 'digital-test',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# DigitalTest

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add digital-test
```

```js
import 'digital-test/digital-test.js';
```

```js preview-story
export const Simple = () => html`
  <digital-test></digital-test>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <digital-test title="Hello World"></digital-test>
`;
```
