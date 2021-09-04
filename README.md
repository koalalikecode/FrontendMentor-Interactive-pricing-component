# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![Destop-screenshot](./images/destop-screenshot.png)
![Mobile-screenshot](./images/mobile-screenshot.png)

### Links

- Solution URL: [github](https://github.com/koalalikecode/FrontendMentor-Interactive-pricing-component)
- Live Site URL: [github-page](https://koalalikecode.github.io/FrontendMentor-Interactive-pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- SASS/SCSS
- Flexbox
- Vanilla Js

### What I learned

I learned how to create a toggle and change the background's color of slide-input by javascript

```js
input_range.oninput = function () {
  let value = this.value;
  // change lower-fill and upper-fill in slide-input
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ${
    (value / 5) * 100
  }%, hsl(224, 65%, 95%) ${(value / 5) * 100}%, hsl(224, 65%, 95%) 100%)`;
}
```

## Author

- Frontend Mentor - [@koalalikecode](https://www.frontendmentor.io/profile/koalalikecode)

