# Javascript Challenge v.1.3.0

Included in this repository is a blank HTML file containing the list of items stored in the *info* variable. This is a sample data that you might get when you are requesting data from a REST API endpoint.

Using the provided HTML file, please create a mobile web prototype that will list *ALL* the items separated by category. Please see the wireframe as a guide (wireframe.png). 

### Regarding the Wireframe:
Please note that this is just a "wireframe" and we would expect you to apply some designs. Using Bootstrap or Foundation should suffice.

## Requirements:
* HTML5 and CSS3 required.
* Items should be dynamically added when the page loads.
* Please use Javascript only. We can reconsider jQuery... no other frameworks (ReactJS, AngularJS, Vue.js, etc...)

## Please answer the following questions:
* Please explain how did you come up with the solution. We would like to see your train of thought.
* Please explain any design decisions made (why you chose the design/framework, etc.)
* Please indicate tools that you used for coming up with your solution.
* Choose one: Star Wars or Star Trek? Why?

TRAIN THOUGHT - ANSWERS

[1] First, I normalised the schema of the array to have a proper set of data. And created a searchByCategory function that I can use to easily classify and render the items by category. With the help of this function I can also determine which array is for Category and which one is for Items.
 The renderItems function is responsible for displaying the data with the help of append function. I used "for loop" to dynamically list the Category and inside the "for loop" I used "forEach loop" to list the items. 

 [2] Though I am experienced with other css frameworks like Bootstrap and foundation. I have decided to code my own CSS code. For it is easier for me to maintain and define the properties I needed. For this particular project i don't seem to be needing a css framework because it might only result to a "bloated code"; since frameworks have to cover multitude of different cases. They often come with more code than you needed.

 [3] I used sublime text v3 for the text editor.

 [4] I prefer Star Trek. Haha! Although they are both science fiction, Star trek evolves into a prospect of future humanity. And it's main focus is of space exploration which I am more interested in. It is also much more relatable since Star Trek's universe shares most of it's history with the real world. 