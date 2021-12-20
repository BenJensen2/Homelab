# CSS

- Grid or Table
  - Table: 2 dimensional data presentation
  - Grid: Table with interactivity

- Reset CSS:
  - Goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.

- import CSS: @import "stylesheet.css"

- Flexbox
  - Efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.
  - Direction-agnostic
  - Appropriate for small-scale layouts
  - Terminology
    - Parent: flex container
    - Children: flex items
    - main axis: Primary axis of a flex container along which flex items are laid out.
      - depends on flex-direction
    - main-start | main-end – The flex items are placed within the container starting from main-start and going to main-end.
    - main size – Flex item's main dimension (width or height)
    - cross axis – The axis perpendicular to the main axis
      - direction depends on the main axis direction.
    - cross-start | cross-end – Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.
    - cross size – The width or height of a flex item, whichever is in the cross dimension.

- Grid
  - Intended for larger scale layouts


#### References
- [CSS Best Practices and Guidelines to write better CSS (Medium)](https://medium.com/before-semicolon/50-css-best-practices-guidelines-to-write-better-css-c60807e9eee2)
-[HTML & CSS Code Samples (HTML & CSS Book)](https://www.htmlandcssbook.com/code-samples/)
- [To grid or not to grid (Sarah Higley)](https://sarahmhigley.com/writing/grids-part1/)
- [100% Correct way breakpoints](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)
- [CSSOM Specification (W3)](https://www.w3.org/TR/cssom-1/)