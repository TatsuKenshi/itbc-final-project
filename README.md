# My Free Games

My Free Games is a site that allows visitors to search free MMO games, game news, as well as MMO game giveaways. Visitors can also create accounts, favorite/unfavorite games, and buy mock merchandise with MFG (My Free Games) branding.

## Motivation

I made this site as my final project for IT Bootcamp, a ten-week course on front-end web development. I started the course with very little practical knowledge, and My Free Games is the end result of this awesome course.

## Build Status

The site is finished, with all the intended functionalities implemented. In the future, I plan to polish the project, as well as add some minor things such as social links and info inside the footer.

## Technologies Used

For this project, I went with a simple setup. The technologies used include:

- React.js
- React Router
- Styled Components
- axios
- db.json

## Features

My Free Games has several important features

- Homepage that displays a randomly selected featured game, news article, and giveaway
- Game Search page which lists all the available games
- Game News page with all the articles
- Merch section where users can buy mock merch
- Cart where users can finalize their purchases
- Giveaeays section with active giveaways
- Log in and Registration pages

## Installation
To get this little project up and running, you should:

1. download the zip from the main branch
2. unpack it inside the folder of your choosing
3. run the "npm install" command from the terminal
4. run the "npm start" command from the terminal

You don't need to run the "npm run server" command, because the database is hosted on heroku.

5. replace the first line in the package.json file "homepage": "http://TatsuKenshi.github.io/itbc-final-project" with "homepage": "http://localhost:3000"

Now, you're good to go.

### Live Version

If you just want to take a quick glance at the site, you can also jump over to https://tatsukenshi.github.io/itbc-final-project/. That's the project's github pages presentation. Due to the issues with react router and gh pages clashing with each other, please click on the company logo or the Home link (both in the navbar) when the site loads.

If you'd like to log in to check out all of the features:

regular user:
username: John2
pass: 1aB!555b

admin:
username: John
pass: 1aB!555a

## API
I used the mmobomb's https://www.mmobomb.com/api free API for this project. It is a great piece of API, which offers a list of 350+ games, around 50 news, and around a dozen giveaways. The API also allows fetching individual games.

## How to use

- The home page displays a random featured game, news article, and a giveaway.

- In the Seach Games section, users can browse the game catalog, which contains 350+ free MMO games. Each game is represented with a thumbnail, title, and essential info (platform, short description, developer, etc). Each game also has a dedicated page with additional info (system requirements, long description, a large screenshot, etc). Logged in users can favorite/unfavorite games as they wish.

- The Game News section lists all the current news from the MMO gaming world (currently, there's around 50 articles on the list). Each news item is represented with a thumbnail, title, and a short description. Users can also read full articles by clicking on the "read more" button.

- The Giveaways section contains all of the featured and currently active giveaways. Giveaways are represented in a similar fasnion to games and news, with each having a thumbnail, title, as well as the percentage of still available keys. Users who haven't logged in can't see individual giveaway pages (individual pages contain links to giveaways).

- The Merch section has a list of merch items (the list is currently limited to coffee mugs and a couple of unnamed products added for testing purposes). Users can browse the available merchandise, but they have to log in in order to add items to the cart.

- The Cart is a simple one. Logged in users can add and remove items, as well as increase and decrease the quantity of each desired item. The checkout button when clicked reveals the checkout form, where the user can enter their full name, billing address, and credit card details.

- Log in/Registration sections are straightforward, with login requiring the username and password. The Registration form also has the email field.

## Credits

Finally, I'd like to thank IT Bootcamp https://itbootcamp.rs/ and teachers there. Without them, this site wouldn't be possible, at least not at this time.
