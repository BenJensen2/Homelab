# HTML Best Practices
1. Avoid inline styling
2. Add critical style first then the rest later
	1. Keep Separate Style Sheets
3. Avoid Script tag with code when possible
4. Script Tags go at the bottom
5. Reduce the number of external links
6. Always add an alt tag to images
7. Don't forget the Page Title
8. Some elements tags require a title
	1. Alternate Stylesheets ```<link/>```
	2. Abbreviations ```<abbr/>```
	3. Inputs ```<input/>```
9. One h1 tag per page 
	1. Non-critical (Depends on preferences)
10. Include meta tags (SEO)
11. Add prefetch font links to the head (Site fonts)
12. Always use responsive meta tags
13. Custom companent needs to be accessible 
	1. Add accessibilty to custom tags
14. Prefer default role and built-in accessibility
	1. Use default tags as much as possible
15. Avoid adding HTML tags for styling purposes
16. Avoid formatting text yourself
17. Use appropriate containers tags (div vs section vs article)
	1. Avoid using div tags everywhere
18. Always go for semantic tags
	1. If there is a semantic tag, use it.
	2. Always have your HTML speak for itself.
	3. Helps you avoid unneccessary roles & classes
	4. minimal style can help as well.
19. Don't use the img tag for non-content imagery
	1. Learn when to use img vs css backgroud as soon as possible
	2. If the image does not help the content make sense it should not be an image tag.
20. Always close or self-close the tags
21. Add favicon file to the root directory
	1. Browser automatically fetches it
	2. Include many sizes & target
22. Add a manifest: Required for PWA
	1. json file link in head
23. Always specify DOCTYPE: Ensures correct rendering
24. Always specify Page language of the mojority of the content
25. Escape special characters ('&<>"')
26. Use data-* correctly*
	1. Don't use to include sensitive data or things that class and other attributes can be more appropriate for.
27. Add DateTime to time tag: Allows easy add to calendar
28. Can omit the "for" and "placeholder" attribute when used together
29. Stop using hgroup tag
30. Follow a consistent HTML format
31. Avoid SIBU tags (s, i, b, u)
	1. strong instead of b
	2. em instead of i
	3. text-decoration: underline instead of u
	4. text-decoration: line-through instead of s
32. Omit boolean attribute values
33. You can put social links inside the address tag
34. Dont put block tags inside inline tags
35. Beware the base meta tag
36. Continue to use tables
37. Get in the habit of using role ande aria attributes
38. Use comments at the end of a container to make it easier to spot things when collapsed
	1. Never ship commented out markup
39. Always specify multiple backup sourrces for media
40. Prefer picture over images where it applies
41. Stop supporting IE: Microsoft is in Mid 2021
42. Avoid too much HTML
	1. Load just enough for initial render
	2. Keep on a different page or lome button by Javascript
	3. Too much HTML means longer parsing time and unneccessary in general
43. Lazy load images
44. Always specify preload option for video
45. Videos are better than gif at times: Always compare
46. Always specify the button type
47. Blockquote wraps the tag containing the text and the q tag is almost useless
	1. Put the text in a p tag then wrap the p tag with the blockquote
48. Avoid Div and Span tags
	1. Always prefer semantic tags
	2. Di is for blocks
	3. Span is for inline tags
49. Minify your HTML
50. Validate your HTML
	1. Can even be added to your build process