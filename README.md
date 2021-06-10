# xkcd-case-website by Minyi Ma
This is the technical case study assigned by Stratus360. Sorry for submitting at the last hour and some orgnizing or imperfect part of this project, which caused by I was really busy this week. But I tried to implement all the required feature (including bonus) and thought about the potential improvement I can do in the future.

## Deployed Website: 
The link to the website deployed using Heroku can be found at: https://damp-shelf-27004.herokuapp.com. Here my assumption is it will start by a welcoming page, then by clicking random or input comic strips to the URL, the user will be redirect to corresponding comic strips page.

## Implemented Features: 
● Use the xkcd API (see https://xkcd.com/json.html)

● Hosted on Heroku

● Display 1 comic strip per page

● Buttons to navigate to the previous and next comic strip

● Display the date of when the comic strip was created

● Ability to navigate to a specific comic strip by including a comic # in the URL

● Parse transcript from API into a more readable format & display on the page -> also add a guide for different color and font.

● Done in Node.js with Express.

● Style accordingly with CSS (Didn't use bootstrap etc. but did use my own css)

● A random button that goes to a random comic strip

● Each comic page has a counter that displays the amount of times this specific comic strip has been viewed on the site.

## Possible Improvement / Problem
1. Add regex to prevent user input a route with id outside of range. (Based on test, the API only offer #1 - 2474)
2. The transcript block should be set to hide if there is no transcript, to show that is not a bug I keep it there and leave alternative text.
3. The code is not organized enough and lack of comment. 
4. The way I parsed transcript is quite brute force, maybe some less complex approach can be taken. 

# Thank you for spending time reading this!
