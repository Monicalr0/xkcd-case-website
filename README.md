# xkcd-case-website by Minyi Ma
This is the technical case study assigned by Stratus360. Due to personal circumstances I was not able to commmit the too much time in the project, so sorry for submitting at the last hour and some orgnizing issue or imperfect part of this project. But I've implemented all the required features (including bonus) and write down my thoughts about the potential improvement I can make in the future.

### Bug fix on 2021/06/12
Sorry for making changes after the submission deadline. I just realized that my chrome extension was helping me resolved CORS issue which I thought already solved by middleware but actually not. TO actually solve this, I made a change to how I sned the request, not it works without extension. The extension was kept open before so I didn't realized the issue until today I tried to show the website on my phone. 

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
5. The heroku is deployed using master branch, in real world it might be better to use a separate test branch for testing. 
6. The guide for transcript is classified based on different symbol ("{{", "<<","((" etc.), I give the explanation based on one comics but found that they are not always corresponding to same thing. So this may be not accurate enough.

# Thank you for spending time reading this!
