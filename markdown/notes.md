# Markdown Syntax

**Markdown** হলো lightweight markup language, যেটি দিয়ে সহজে ফরম্যাট করা টেক্সট লেখা যায় — যেমন হেডিং, তালিকা, লিংক, বোল্ড/ইটালিক, কোড ব্লক ইত্যাদি — সাধারণ প্লেইন টেক্সটে।

### কোথায় ব্যবহৃত হয়?

- GitHub README ফাইল
- ডকুমেন্টেশন লেখায়
- নোট লেখার অ্যাপে (যেমন Obsidian, Notion)

For preview in VS Code, use the command Ctrl+Shift + V

For useful extension for markdown, **Markdown All in One Markdown Emoji**

- **Heading text**
  To create a heading, add number signs (`#`) in front of a word or phrase.
  ```markdown
  # Heading level 1

  ## Heading level 2

  ### Heading level 3

  #### Heading level 4

  ##### Heading level 5

  ###### Heading level 6
  ```
  **Alternate Syntax**
  Alternatively, on the line below the text, add any number of `==` characters for heading level 1 or `--` characters for heading level 2.
  ```markdown
  # Heading level 1

  ## Heading level 2
  ```
- **Horizontal Rules**
  To create a horizontal rule, use three or more asterisks (`***`), dashes (`---`), or underscores (`___`) on a line by themselves.
  ```markdown
  ---

  --- for use best practise

  ---
  ```
- **Paragraphs**
  To create paragraphs, use a blank line to separate one or more lines of text.
  ```markdown
  I really like using Markdown.

  I think I'll use it to format all of my documents from now on.
  ```
- **Line Breaks**
  To create a line break or new line (<br>), end a line with two or more spaces, then type return.
  ```markdown
  First line with two spaces after.  
  And the next line.

  First line with the HTML tag after.<br>
  And the next line.
  ```
- **Bold**
  Add two asterisks or underscores before and after a word or phrase to bold text. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.
  ```markdown
  I just love **bold text**. // best practise
  Love**is**bold // best practise  
  I just love **bold text**. // bad practise
  ```
- **Italic**
  To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.
  ```markdown
  Italicized text is the _cat's meow_. // best pratise
  A*cat*meow // best pratise  
  Italicized text is the _cat's meow_. // bad pratise
  ```
- **Bold and Italic**
  To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.
  ```markdown
  This text is **_really important_**. // best pratise
  This is really**_very_**important text. // best pratise
  This text is **_really important_**. // bad pratise
  ```
- **Strikethrough test**
  use two tilda sign (~)
  ```markdown
  ~~test here~~
  ```
- **Blockquotes**
  To create a blockquote, add a `>` in front of a paragraph.
  ```markdown
  > Dorothy followed her through many of the beautiful rooms in her castle.
  ```
- **Blockquotes with Multiple Paragraphs**
  Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.
  ```markdown
  > Dorothy followed her through many of the beautiful rooms in her castle.
  >
  > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
  ```
- **Nested Blockquotes**
  Blockquotes can be nested. Add a `>>` in front of the paragraph you want to nest.
  ```markdown
  > Dorothy followed her through many of the beautiful rooms in her castle.
  >
  > > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
  ```
- **Blockquotes with Other Elements**
  Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.
  ```markdown
  > #### The quarterly results look great!
  >
  > - Revenue was off the chart.
  > - Profits were higher than ever.
  >
  >   _Everything_ is going according to **plan**.
  ```
- **Ordered Lists**
  To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.
  ```markdown
  1. First item
  2. Second item
  3. Third item
  4. Fourth item

  5. First item
  6. Second item
  7. Third item
  8. Fourth item

  9. First item
  10. Second item
  11. Third item
  12. Fourth item

  13. First item
  14. Second item
  15. Third item
      1. Indented item
      2. Indented item
  16. Fourth item
  ```
- **Unordered Lists**
  To create an unordered list, add dashes (`-`), asterisks (`*`), or plus signs (`+`) in front of line items. Indent one or more items to create a nested list.
  ```markdown
  - First item
  - Second item
  - Third item
  - Fourth item

  * First item
  * Second item
  * Third item
  * Fourth item

  - First item
  - Second item
  - Third item
  - Fourth item

  * First item
  * Second item
  * Third item
    - Indented item
    - Indented item
  * Fourth item
  ```
- **Code**
  To denote a word or phrase as code, enclose it in backticks (```).
  ```markdown
  At the command prompt, type `nano`.
  ```
- **Escaping Backticks**
  If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (````)
  ```markdown
  `` Use `code` in your Markdown file. ``
  ```
- **Code Blocks**
  To create code blocks, indent every line of the block by at least four spaces or one tab.
  alternative use 3 **Backticks opening and ending**
  ````markdown
      <html>
        <head>
        </head>
      </html>

      ```laguage name
       long is the
       long is the
       long is the
      ```
  ````
- **Links**
  To create a link, enclose the link text in brackets (e.g., `[Duck Duck Go]`) and then follow it immediately with the URL in parentheses (e.g., `(https://duckduckgo.com)`).
  ```markdown
  [link name](link)

  search engine is [Duck Duck Go](https://duckduckgo.com).

  add title to tooltip:
  search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

  formatting link:
  I love supporting the **[EFF](https://eff.org)**.
  This is the _[Markdown Guide](https://www.markdownguide.org)_.
  See the section on [`code`](#code).
  ```
- **Internal Link**
  ```markdown
  # heading one

  [links](#heading-one) if heading is two word then use (-)
  ```
- **Reference link**
  it is one kind of variable
  ```markdown
  [youtube]: https://www.youtube.com/
  [youtube]: https://www.youtube.com/ "title hear"

  [links][youtube]
  ```
- **Images**
  To add an image, add an exclamation mark (`!`), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.
  ```markdown
  ![alt text](linkorimgpath)

  ![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")

  ![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png "San Juan Mountains")

  // click able image
  [![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png "San Juan Mountains")](https://google.com)
  ```
- **Table**
  To create a table in a `README.md` file (Markdown format), you can use the Markdown table syntax
  Use `|` to separate columns.
  Use `---` under the headers to define them.
  use `:` is define text is left | middle | right
  ```markdown
  | Left Align | Center Align | Right Align |
  | :--------- | :----------: | ----------: |
  | Left       |    Center    |       Right |
  | Text       |   Aligned    |    Properly |

  | Column 1 | Column 2 | Column 3 |
  | -------- | -------- | -------- |
  | Row 1    | Data     | More     |
  | Row 2    | Info     | Here     |

  | name  | age |
  | ----- | --- |
  | sumon | 60  |
  | sumon | 60  |
  ```
- **Task list**
  You can see task is complete or not
  ```markdown
  # Task List

  - [x] task 1
  - [x] task 1
  - [] task 1
  - [] task 1
  ```
- **Emoji**
  You can use emojis in your markdown file
  ```markdown
  Emoji name is :joy:
  Emoji name is :tada:
  ```
- **Comments**
  ```markdown
  [this is my comment]: #

  or
  [//]: # (this is comment)
  ```
- **Toggle**
  ```markdown
  # Toggle

  <details open> 
     <summary> one</summary>
     here is my text
  </details>
  ```
- Simple Project
  ````markdown
  # Random Person Selector

  This app takes a list of names from input and selects number of random persons given by input.

  ## Stack

  - vite
  - React
  - context API
  - Tailwind

  ## Features

  - Clean and reusable code
  - State managed using cotext API
  - styled with Taiwind CSS
  - Random Person Can be any number set by user
  - Count of Person List

  ## Usage

  1. Clone the repository using

     ```
     git clone https://github.com/DevZiaus/random-persons-selector.git
     ```

  2. Go to the directory

     ```
     cd random-persons-selector
     ```

  3. Install Dependencies
     ```
     npm i
     ```
  4. Run the development Server
     ```
     npm run dev
     ```
  5. open
     ```
     http://localhost:5173
     ```
     in your browser
  ````
