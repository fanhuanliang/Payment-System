import { css } from 'styled-components';
import variable from './variable.style.jsx';

console.log(variable)
export const reset = css`
// style lint-disable at-rule-no-vendor-prefix, declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix

// CSS reset
//
// Normalization of HTML elements, manually forked from Normalize.css to remove
// styles targeting irrelevant browsers while applying new styles.
//
// Normalize is licensed MIT. https://github.com/necolas/normalize.css

// Document
//

// Change from 'box-sizing: content - box' so that 'width' is not affected by 'padding' or 'border'.
*,
*::before,
*::after {
  box-sizing: border-box;
}

// Body
//
// 1. Remove the margin in all browsers.
// 2. As a best practice, apply a default "background - color".
// 3. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.
// 4. Change the default tap highlight to be completely transparent in iOS.
body {
  margin: 0; // 1
  padding: 0;
  font-family: ${variable.font_family_base};
  font-size: ${variable.font_size_base};
  font-weight: ${variable.font_weight_base};
  line-height: $line-height-base;
  color: ${variable.gray_900};
  text-align: $body-text-align;
  background-color: $body-bg; // 2
  -webkit-text-size-adjust: 100%; // 3
  -webkit-tap-highlight-color: rgba($black, 0); // 4
}
`