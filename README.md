# ProjectWebsite

# Decrypt

This website was made as a way to advertise and promote a theoretical app that was devolved. The app that is being promoted is one that provides anonymity to people that work in fields such as journalism. The website also provides the user reasons in which why the app is important for the aforementioned user and highlights the isp of the app.
 
## UX
 
Use this section to provide insight into your UX process, focusing on whom this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This website was built for a particular user, somebody who is non-technical but works in a field that needs secure communications. This website would not be appropriate for somebody with in depth knowledge in cryptography secure communications as they would likely already be using the latest methods, this is however for non computer-literate users who need this service. 
Therefore i made sure the website highlights certain information, such as why is something important, why do i need it ect. This is the idea for the first page.
As the user won't be somebody who has in depth knowledge in this field, i made sure to keep most of the computer jargon out of the website, however kept some buzz words to show legitimacy to the user.
I tried to make sure the website was visually pleasing as a user is less likely to buy the product or show interest in the product if the website looks unprofessional.

I tried to program in responsive design so the user knows where everything is and won't have to try and figure out how to the use the website. The goal was to simplistically advertise a product/service.

Given the current climate, I think this webstie is somewhat relevant compared to a few years ago as there have been clear and documented cases of people needing anonymous communications. My idea is, if somebody needs a services like this, but aren't computer-literate, then a professional looking services that provides everything they need for a small cost, will likely be more in their interest that researching and implementing their own secure cryptographic communications.

This section is also where you would share links to any wire frames, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in a separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

please see https://github.com/ryanstedmanw/ProjectWebsite/blob/master/Wirefram-Dia/project%20webstite.pdf

## Features

Across all pages i have implemented a Bootstrap navigation bar, and used google fonts.


Index page *

On the index page you are greeted with a hero image that transitions into frame, over the image there is a black overlay that helps highlight the hero image text.

Below there is a card that spans the viewport width that shows the user a statement, what the website is going to be used for.

Under the hero image there are 4 linked cards that provide links to websties such as wikileaks and tor ect. These links that are there highlight in white when the user hover overs the link to provide feedback so that the user knows there is a function to the card.

Underneath the cards there is a standard footer which has no function.

Features page *

On the features page there is once again a hero image and statement, this is to maintain site identity across pages so that the user does not get lost on the webstie.

Underneath the statement there is a Tab section, which maintains the same feedback idea with hovered white text, which provides users with more in depth information relating to the information on the cards. I decided to maintain the color scheme with the tabs so that it was clear which tab was pressed at any given time, so not to confuse the user.

finally there is another footer.

BLM page *

On this page, there is again a hero image with statement text.

Below the hero image there is a set of 3 cards all which have a mission statement supporting the BLM movement. I belive this is a relevant page as it ties in with some of the ideas that have been presented in the other pages of the website. Furthermore, it shows that the company is relatable to the current climates.

The rest of the page retains UX design.

Contact Page *

The contact page contains a hero image but is different compared to the other pages as instead of it having a statement, it instead has a contact form that i have designed. However, I believe the user will be able to clearly understand how the page works as it is very simple. 


 
### Existing Features
Feature 1 - Bootstrap Nav bar 			| I have used the bootstrap navigation bar across all pages on my website as it has alot of built in functionality which means it consistently will work across multiple devices, also it comes with a professional feel.
Feature 2 - Bootstrap Col &amp; Row functions 	| Again, i have used bootstrap in this website to structure my pages as it means that the website should function in all devices and browsers without much hassle, it also means that the user will likely of had used a bootstrap website in the past and will have a familiar feel to it. furthermore i have used bootsrap as it is very versatile and there is no point reinventing the wheel.
Feature 3 - HeroImage Css Transition 		| I have used a simple Css transition to each of the hero images, the reason behind this is that it creats a feel of responsiveness to the website whilst remaining relatively static.
Feature 4 - Black Overlay			| Due to some of the contrasting colors of the Hero Images it became clear that the hero text would not be visual or led gable at certain viewport sizes. To over come this I implemented a opaque black overlay so that the white text pops over the image.
Feature 5 - Color hover white			| To create some more responsiveness to the website, I made some of the information in the cards change color to white when the user hovered over them, this wasn't a major feature but it does make the website look better.
Feature 6 - BootStrap tabs			| During the build process I decided that i wanted the website to be sleek, however this meant that too much information on the screen would over saturate the page. My tutor recommended that I implement a Tolerable tabs section on the features page so that I could have the information that I needed, but without taking up the screen real estate.


In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

Feature 1 - Marquee hero images 			| I would like to implement a marquee gallery hero images for the pages, this would hopefully make it feel less static.
Feature 2 - Playable video				| I would like to incorporate a video that plays on the blm page as the hero image, this would hopefully highlight the message further.


## Technologies Used

In this section, you should mention all the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
	- The project uses **JQuery** to simplify DOM manipulation.

-[BootStrap4](https://getbootstrap.com/)
	- This project uses BootStrap4 to help provide responsive design across devices and browsers

-[Guillemots](https://fonts.google.com/)
	- This project uses Guillemots to provide professional looking typography

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
 1. Go to the "Contact Us" page
 2. Try to submit the empty form and verify that an error message about the required fields appears
 3. Try to submit the form with an invalid email address and verify that a relevant error message appears
 4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

My testing progress for this project mainly relied on using multiple devices and developer tools from google chrome to check to visually see what the website looks like in different browsers and devices.

For every page my process was to implement a feature and then view it firstly in google chrome developer tools to see how the website looked and if any of the features where broken or not displayed correctly. If the website was not being displayed correctly, i was able to alter the css in dev tools to eventually reach the desired presentation. This required a lot of back and forth comparisons as sometimes a fix for one viewport size would not work for other view port sizes and browsers, in fact usually a fix at one size would actively break the webstie for another size.
One of the most recent bugs that i had was when using the black overlay, if i used padding to push the text to the middle of the screen, two of the three.hero-text would be incorrectly displayed off to the right of the page, the bug i found out eventually was caused by the COl-SM tag, instead of COL.
I made sure to use my (Samsung) and my friends (iphone) phones to double and triple check my work. Even though google chrome developer tools has both of these devices resolutions sizes built in, i made sure to test them with real life hardware, as you can never be sure that virtual software is correct.

Another main page that needed testing was the contact form page, for this i wanted to make sure that the forms where populated. To do this i used the required tag, and to test this, a simple hover over the form section would show a message if it was not populated.

Some interesting bugs i found during the page development where to do with the display of the bootstrap cards. When i was targeting the css, in some cases i over targeted the cards with css resulting in incorrect sizing of the cards across devices. The issues where fixed by looking at the documentation and using websites (such as stack overview) to see how professionals had implement the technology and to see where i was going wrong. I found that finding and fixing the bugs made me a better website programmer as I had to teach myself the correct way of doing things.

Another bug i found was when using the black overlay, in one instance; i had placed the div in the wrong place of the code, resulting in the overlay no populating the area correctly, this was a simple mistake but cost me a few hours as I could not see the problem, being that it was such a small one.

One of the most recent bugs / features was when implementing the bootstrap tabs, the tagged div that showed the information would not have the correct width. i tried targeting this to force the width to view port width but this didn't work. Eventually i found the problem was a max width tag that was being forced by the bootstrap tab itself, i found this when i was using chrome dev tools and could see a max width that i had not coded. To fix ths i targeted the offending tag in css and set the max width to none. this fixed this issue.
Another issue with this feature was that bootstrap wanted to have a white box with borders overlaid onto the card, which ruined the feel of the webstie, i used the same process of changing variables in dev tools to fix this issue.

I'm still not sure if the form was programmed correctly but im pretty sure it is.

## Deployment


This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

I developed this website on github and using the gitpop ide. The link to the repositry is here https://github.com/ryanstedmanw/ProjectWebsite

To run this version of the website in the gitpod IDE, you have to go onto the Github Repo, then onto branches, then click on GitPodPages and click the gitpod button. this will load the IDE. next type into the terminal; python3 -m http.server then make public and then view in browser or preview

To access the github pages you can either use this link https://ryanstedmanw.github.io/ProjectWebsite/ or go onto the reposity, then settings, then scroll down to github pages and click on the link there.

the main difference between the two branches (master and GitPodPages) is that the href link to the css and images are different and use relative and absoulte links. this was not a problem for me when i was desinging in gitpod however github uses different link terminolgy.


In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Con fig Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section BLM was copyed from the website https://www.degrowth.info/en/2020/06/%EF%BB%BFsolidarity-statement-with-black-lives-matter/

### Media
- The photos used in this site were obtained from ...
https://www.washingtonpost.com/gdpr-consent/?next_url=https%3a%2f%2fwww.washingtonpost.com%2fworld%2feurope%2feurope-said-us-influence-had-waned-under-trump-then-black-lives-matter-protests-rocked-the-continent%2f2020%2f06%2f17%2f23f88ff2-ab4c-11ea-a43b-be9f6494a87d_story.html
https://lh3.googleusercontent.com/WymaXTMLK-AADQWh02IlyRfi3lW81M2n2Hmb8fbfyJLGx7VTteJh_mOKrjVaY5n-5X6v=s128
https://lh3.googleusercontent.com/0xq4JYkf4J1QgbAlnfS481HfJ2n28YejjSU_sRgvJHx2iHkRD490PpPO3QwBWNMA0bo3-zQ=s128
https://lh3.googleusercontent.com/LIlEdpPcP7eCXzMU5uNwNt847agAQWQns3dcXGgsgAU6QcHIXMPYVwGMszHp2bSJn8Dd8ZQ=s128


### Acknowledgments

- I received inspiration for this project from multiple music websites such as apple, spotify. These webstiew gave me the idea of a black overlaid hero image
