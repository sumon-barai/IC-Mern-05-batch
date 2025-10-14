# CSS- Sumon Barai

## Day-03

- **CSS Height & Width**
  ```css
  width: 500px;
  width: 100%;

  height: 500px;
  ```
- **CSS Min-height & Max-height**
  - fixed height overflows the content
  ```css
  min-height: 500px;
  max-height: 700px;
  ```
- **CSS Min-Width & Max-Width**
  - example with a image
  ```css
  min-width: 500px;
  max-width: 700px;
  ```
- **CSS Box-Sizing**
  - width + padding + border = actual width of an element
  - height + padding + border = actual height of an element
  ```css
  box-sizing: border-box;
  box-sizing: content-box;
  ```
- **CSS Overflow**
  - The CSS [`overflow`](https://www.w3schools.com/cssref/pr_pos_overflow.php) property controls what happens to content that is too big to fit into an area.
  - The [`overflow`](https://www.w3schools.com/cssref/pr_pos_overflow.php) property has the following values:
    - `visible` - Default. The overflow is not clipped. The content renders outside the element's box
    - `hidden` - The overflow is clipped, and the rest of the content is hidden
    - `scroll` - Scrollbars are added. User must scroll to see all content
    - `auto` - Similar to `scroll`, but adds scrollbars only when necessary
    ```css
    overflow: visible;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll; /* Add vertical scrollbar */
    ```
