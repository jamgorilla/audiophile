## Audiophile e-commerce website

## Table of contents

- [Overview](#overview)
- [How to start the project](#how-to-start-the-project)
- [Functionality](#functionality)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built Using](#built-using)

- [What I learned](#what-i-learned)
- [Continued development on this project](#continued-development)
- [Author](#author)

## Overview

This multipage layout was a personal project built with Next.js. The design was taken from Frontend Mentor. I used context to preserve the session state variables between pages. This was a good opportunity to test front end skills like Grid, Flexbox and Sass as well as have a deeper exploration of react hooks and state management.

## How to start the project

To run the website locally on your machine, follow these steps:

1. Clone the repository:
   Open terminal, navigate to directory where you want to clone the repository:
   git clone https://github.com/jamgorilla/audiophile.git

2. CD into project folder
   cd audiophile

3. Start project
   npm run dev

(If your using yarn run 'yarn dev' instead)

### Functionality

Users functionlaity:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds £50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Add live site URL here](https://audiophile-theta.vercel.app/)
- Git Repo: https://github.com/jamgorilla/audiophile

### Built Using

- Semantic HTML5 markup
- CSS custom properties
- Sass
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework

### What I learned

First time using persistant session state variables in order to save customer selections between pages. Found that employing context can have a great deal of transferable application in future projects.

### Continued development on this project

If I were to consider future development of this project I could do the following:

- I could save the session state in browser localStorage using useEffect so that the session would persist even if the browser was refreshed.
- I could save user profiles including name, password and delivery address to a relational database
- I could also save user orders to a seperate table
- I would then create an admin area for the site administrator to login to to see current orders, their status and update delivery details
- I could enable the admin area to control access by integrating OAuth

## Author

- Development - [James Murphy](https://www.jamesmurphy.tech/)
- Design - Frontend Mentor
