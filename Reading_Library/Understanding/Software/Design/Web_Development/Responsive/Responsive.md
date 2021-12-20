# Responsive Web Design

- Meta tag on each page
	- ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```
- Width 100%
- Max & Min Width
- Different images depending upon browser width
```
<picture>  
 <source srcset="img_smallflower.jpg" media="(max-width: 600px)">  
 <source srcset="img_flowers.jpg" media="(max-width: 1500px)">  
 <source srcset="flowers.jpg">  
 <img src="img_smallflower.jpg" alt="Flowers">  
</picture>
```
- Responsive Text Size: width: vw 
- Media Queries
- Flexbox


- Responsive vs Fluid
	- Responsive is based upon fixed units of pixels
	- Fuild design uses percentages to automatically resize
		- Beware of Fluid, it can get too small and too big
- Use at least 3 breakpoints
	- min-width
	- max-width
- Start with min-width breakpoints
- Prioritize content
	- Collapsible and expandable menus
- Take buttons seriously: Make sure it's easy to click on a desktop.



- Optimize images for different breakpoints
- Pay attention to Font Sizes
	- Use real text rather than text within graphics
	- Make big headlines responsive, at least 1.6x text they support
	- Make body text responsive
- Define the smallest views first
	- Avoid large graphics
	- Test how your design looks and works on a real device
- Design scalable navigation
	- Priority Plus: 
		- Top priority options will be always visible.
		- Other options will be revealed based upon their importance
- Create solid visual hierarchy on all screen resolutions

#### Reference
- [Responsive Design Best Practices(UX Planet)](https://uxplanet.org/responsive-design-best-practices-c6d3f5fd163b)