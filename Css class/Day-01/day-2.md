# CSS- Sumon Barai

## Day-02

- **CSS Writing-Mode**
  - writing-mode: horizontal-tb (default )|vertical-rl|vertical-lr;
    | horizontal-tb | Let the text flow horizontally from left to right, vertically from top to bottom | |
    | ------------- | -------------------------------------------------------------------------------- | --- |
    | vertical-rl | Let the text flow vertically from top to bottom, horizontally from right to left | |
    | vertical-lr | Let the text flow vertically from top to bottom, horizontally from left to right | |
- **CSS Border**

  ```css
  border-width: 3px
  border-color: red
  border-style: solid

  ```

  - border style
    - `dotted` - Defines a dotted border
    - `dashed` - Defines a dashed border
    - `solid` - Defines a solid border
    - `double` - Defines a double border
    - `groove` - Defines a 3D grooved border. The effect depends on the border-color value
    - `ridge` - Defines a 3D ridged border. The effect depends on the border-color value
    - `inset` - Defines a 3D inset border. The effect depends on the border-color value
    - `outset` - Defines a 3D outset border. The effect depends on the border-color value
    - `none` - Defines no border
    - `hidden` - Defines a hidden border
  - border short hands
    ```css
    p {
      border: 5px solid red;
    }
    ```
  - border side

    ```css
    border-top: 5px solid red;
    border-right: 5px solid red;

    border-bottom: 5px solid red;
    border-left: 5px solid red;
    ```

- **Border-Inline & Border-Block**
  **Border-Inline**

  ```css
  border-inline means left or right site
  		left means start
  		right means end
  border-inline-width:10px
  border-inline-style :solid
  border-inline-color:red

  short hand
    border-inline: 4px dotted blue;
    border-inline-start: 4px dotted blue;
    border-inline-end: 4px dotted blue;
  ```

  **Note:** The related CSS properties writing-mode text-orientation and direction define inline direction. This affects where the start and end of a line is and the result of the `border-inline` property. For pages in English, inline direction is left to right and block direction is downward.
  **Border-Block**

  ```css
  border-block means top or bottom site
  		left means start
  		right means end
  border-block-width:10px
  border-block-style :solid
  border-block-color:red

  short hand
    border-block: 4px dotted blue;
    border-block-start: 4px dotted blue;
    border-block-end: 4px dotted blue;
  ```

- **CSS Outline**

  ```css
  outline-width: 3px
  outline-color: red
  outline-style: solid
  outline-offset:5px

  short hand
  outline: 2px solid black

  ```

  - outline style
    - `dotted` - Defines a dotted border
    - `dashed` - Defines a dashed border
    - `solid` - Defines a solid border
    - `double` - Defines a double border
    - `groove` - Defines a 3D grooved border. The effect depends on the border-color value
    - `ridge` - Defines a 3D ridged border. The effect depends on the border-color value
    - `inset` - Defines a 3D inset border. The effect depends on the border-color value
    - `outset` - Defines a 3D outset border. The effect depends on the border-color value
    - `none` - Defines no border
    - `hidden` - Defines a hidden border

- **CSS Padding**

  ```css
  padding-top - sets the top padding of an element
  padding-right - sets the right padding of an element
  padding-bottom - sets the bottom padding of an element
  padding-left - sets the left padding of an element

  padding-top:20px;
  padding-right:20px;
  padding-bottom:20px;
  padding-left:20px;

  Shorthand
  padding: 25px;
  padding: 25px 50px 75px 100px;
  padding: 25px 50px;
  padding: 25px 50px 75px;
  ```

  **Note:** Negative values are not allowed.

- **CSS Padding-Inline & Padding-Block**

  - **Padding-Inline**

  ```css
  padding-inline-start: 10px;
  padding-inline-end:10px;

  shorthand
  padding-inline: 10px 50px;
  		padding at start is 10px
  		padding at end is 50px

  padding-inline: 10px;
  		padding at start and end is 10px
  ```

  - **Padding-block**

    ```css
    padding-inline-start: 10px;
    padding-inline-end:10px;

    shorthand
    padding-block: 10px 50px;
    		padding at top is 10px
    		padding at bottom is 50px

    padding-block: 10px;
    		padding at top and bottom is 10px
    ```

- **CSS margin**
- **CSS margin-Inline & margin-Block**
