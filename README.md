# @ramonak/react-progress-bar

> Progress Bar React Component

[![NPM](https://img.shields.io/npm/v/@ramonak/react-progress-bar.svg)](https://www.npmjs.com/package/@ramonak/react-progress-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)![npm bundle size](https://img.shields.io/bundlephobia/min/@ramonak/react-progress-bar)![GitHub](https://img.shields.io/github/license/katerinalupacheva/react-progress-bar)

---

![demo](https://i.ibb.co/Fgh0BsD/animated-demo.gif)

---

## Install

```bash
npm install --save @ramonak/react-progress-bar
```

## Usage

```jsx
import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

const Example = () => {
    return <ProgressBar completed={60}/>
};
```

## Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `completed` (required) | `number between 0 and 100` |  | Percentage of completed progress bar value |
| `bgcolor` | `string` | `#6a1b9a` | Color of the completed bar |
| `height` | `string` | `20px` | Height of the bar |
| `width` | `string` | `100%` | Width of the bar |
| `margin` | `string` |  | Margin |
| `padding` | `string` | | Padding |
| `baseBgColor` | `string` | `#e0e0de` | Color of the "non-completed" bar |
| `labelAlignment` | `string: left, center, right` | `right`| Position of the label inside the completed bar |
| `labelColor` | `string` | `#fff` | Color of the label text |
| `labelSize` | `string` | `15px`| Font-size of the label text |

## License

MIT © [KaterinaLupacheva](https://github.com/KaterinaLupacheva)
