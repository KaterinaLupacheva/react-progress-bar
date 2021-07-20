# @ramonak/react-progress-bar

> Progress Bar React Component (build with Typescript)

[![NPM](https://img.shields.io/npm/v/@ramonak/react-progress-bar.svg)](https://www.npmjs.com/package/@ramonak/react-progress-bar) ![npm bundle size](https://img.shields.io/bundlephobia/min/@ramonak/react-progress-bar)![GitHub](https://img.shields.io/github/license/katerinalupacheva/react-progress-bar)![npm](https://img.shields.io/npm/dw/@ramonak/react-progress-bar)

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

| Name                       | Type                                                           | Default       | Description                                                   |
| -------------------------- | -------------------------------------------------------------- | ------------- | ------------------------------------------------------------- |
| `completed` (required)     | `Number between 0 and` <br/>` 100 or string.`                  |               | Percentage of completed progress bar value. <br/>             |
| `bgColor`                  | `string`                                                       | `#6a1b9a`     | Color of the completed bar                                    |
| `height`                   | `string`                                                       | `20px`        | Height of the bar                                             |
| `width`                    | `string`                                                       | `100%`        | Width of the bar                                              |
| `margin`                   | `string`                                                       |               | Margin                                                        |
| `padding`                  | `string`                                                       |               | Padding                                                       |
| `borderRadius`             | `string`                                                       | `50px`        | Border radius of the bar                                      |
| `baseBgColor`              | `string`                                                       | `#e0e0de`     | Color of the "non-completed" bar                              |
| `labelAlignment`           | `string:` <br/> `left, center, right, outside`                 | `right`       | Position of the label inside the completed bar or outside bar |
| `labelColor`               | `string`                                                       | `#fff`        | Color of the label text                                       |
| `labelSize`                | `string`                                                       | `15px`        | Font-size of the label text                                   |
| `isLabelVisible`           | `boolean`                                                      | `true`        | Visibility of the label                                       |
| `transitionDuration`       | `string`                                                       | `1s`          | Duration of the width transition                              |
| `transitionTimingFunction` | `string:` <br/> `ease, linear, ease-in, ease-out, ease-in-out` | `ease-in-out` | Timing function of the width transition                       |
| `className`                | `string`                                                       |               | Add a `className` to the parent `div`
| `dir`                      | `string:` <br/> `ltr, rtl, auto`                                                       |  `ltr`        | Progressbar HTML direction
| `ariaValuemin`             | `number`                                                       |  `0`          | accessibility: Defines the minimum allowed value for a range
| `ariaValuemax`             | `number`                                                       |  `100`        | accessibility: Defines the maximum allowed value for a range
| `ariaValuetext`            | `number`                                               |  `null`       | accessibility: Defines the human readable text alternative of aria-valuenow (defaults to completed if not passed)


## License

MIT © [KaterinaLupacheva](https://github.com/KaterinaLupacheva)
