# @ramonak/react-progress-bar

> Progress Bar React Component (build with Typescript)

[![NPM](https://img.shields.io/npm/v/@ramonak/react-progress-bar.svg)](https://www.npmjs.com/package/@ramonak/react-progress-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)![npm bundle size](https://img.shields.io/bundlephobia/min/@ramonak/react-progress-bar)![GitHub](https://img.shields.io/github/license/katerinalupacheva/react-progress-bar)![npm](https://img.shields.io/npm/dw/@ramonak/react-progress-bar)

---

![demo](https://i.ibb.co/Fgh0BsD/animated-demo.gif)

---

[Playground / Code Generator](https://katerinalupacheva.github.io/react-progress-bar/)

---

## Install

```bash
npm install --save @ramonak/react-progress-bar
```

## Usage

```jsx
import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

const Example = () => {
  return <ProgressBar completed={60} />;
};
```

## Props

| Name                   | Type                                           | Default   | Description                                                                                                                 |
| ---------------------- | ---------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| `completed` (required) | `Number between 0 and` <br/>` 100 or string.`  |           | Percentage of completed progress bar value. <br/> If string, it will be bar label <br/> and the bar will be fully completed |
| `bgcolor`              | `string`                                       | `#6a1b9a` | Color of the completed bar                                                                                                  |
| `height`               | `string`                                       | `20px`    | Height of the bar                                                                                                           |
| `width`                | `string`                                       | `100%`    | Width of the bar                                                                                                            |
| `margin`               | `string`                                       |           | Margin                                                                                                                      |
| `padding`              | `string`                                       |           | Padding                                                                                                                     |
| `borderRadius`         | `string`                                       | `50px`    | Border radius of the bar                                                                                                    |
| `baseBgColor`          | `string`                                       | `#e0e0de` | Color of the "non-completed" bar                                                                                            |
| `labelAlignment`       | `string:` <br/> `left, center, right, outside` | `right`   | Position of the label inside the completed bar or outside bar                                                               |
| `labelColor`           | `string`                                       | `#fff`    | Color of the label text                                                                                                     |
| `labelSize`            | `string`                                       | `15px`    | Font-size of the label text                                                                                                 |
| `isLabelVisible`       | `boolean`                                      | `true`    | Visibility of the label                                                                                                     |

## License

MIT © [KaterinaLupacheva](https://github.com/KaterinaLupacheva)
