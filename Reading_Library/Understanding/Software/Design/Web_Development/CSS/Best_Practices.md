# 	CSS Best Practices
1. Use a Preprocessor (SASS)
2. Separate global vs local style
3. Modularize your style
4. Lazy load stylesheets correctly
5. Be specific & not too specific
6. Read CSS as the Browser does
7. Style with HTML in mind for better performance
8. Avoid inline styles
9. Avoid !important
10. Write CSS consistensly
	1. Remain consistent in your naming convention, methodology, and organization
	2. Define your style, stick to it and improve over time.
11. Use a design system
	1. [Design Systems: Building for the future (CSS Tricks)](https://css-tricks.com/design-systems-building-future/)
	2. [Build your own bootstrap](https://speakerdeck.com/mdo/build-your-own-bootstrap)
	3. [What's a design system and why you need one (Dev To)](https://dev.to/graphqleditor/what-s-design-system-and-why-you-need-one-31fh)
12. Prefer shorthand (border, padding, margin)
13. Combine common styles
14. Turn common tricks into utility classes (center-flex, center-grid)
15. Use relative units more
16. Be aware of expensive properties
	1. Box-shadow, border-radius, position, filter, width, height
17. Minimize layout modification styles
18. Use "will-change" as a last resort
19. Coment your CSS
20. Normalize or Reset your CSS (Normalize.css, reset stylesheet)
21. Consider better font leading strategy
22. Avoid too many font files
23. Minimize CSS
24. Use CSS variables: Preprocessor
25. Don't remove the outline property, style it! (Critical for keyboard or screen reading)
26. Don't introduce a CSS library/Framework unnecessarily
27. Use double quotes
28. Avoid hard to maintain hacks: Keep them in a separate file
29. Format text with CSS: no need to write all caps, lower, or capitalized words
30. Validate CSS
31. Style to be responsive or at least fluid
32. Let the contenc define the size
33. Follow CSS [methodology](https://www.webfx.com/blog/web-design/css-methodologies/)
	1. BEM (Block Element Modifier): Block (components), Elements (component parts) and modifiers (component & element status)
	2. ITCSS (Inverted Triangle CSS): Generic to explicit, low to high specificity, far-reaching to localized style rules
	3. OOCSS (Object Oriented CSS): Separate Abstract independent snippets for reusabilicy following common object-oriented paradigm in CSS
		1. Like Bootstrap
	4. Scalable and Modular Architecture for CSS (SMACSS)
	5. SUIT CSS
	6. Systematic CSS
	7. Atomic CSS: Create a class selector for every repeating CSS declaration
34. Avoid constantly overwriting/undoing style
35. Add animation declarations last
36. Don't mix third-party CSS overwrites with yours
37. Specify the properties you need transition for
38. Avoid using id attributes everywhere
39. Be aware of styles order: CSS Specificity
40. Lint your style
41. Alphabetze CSS properties
42. Box size border-box everything ```*, *::after, *::before{boxsizing: border-box;}```
43. Avoid color names: Use hex
44. Let the parent take care of spacing, position, and sizing
45. Try to organize CSS to match the Markup Order
46. Keep HTML semantics and use CSS for styling
47. Hyphens or underscore?
	1. Most common is hyphen
	2. Whatever you do, stick to it
48. Find a CSS solution before you reach for Javascript Help
49. Remove Unused CSS
50. Use a PostProcessor