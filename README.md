# Travel Website
## Motivation
This is a project for postgraduate studies at Wroclaw School of Banking. The main language I used in Java Script. It is one of the most
[popular scripting languages](https://insights.stackoverflow.com/survey/2020#technology-programming-scripting-and-markup-languages) which influenced my motivation to explore its secrets. The fact that with JS you can write both frontend and backend applications is its additional advantage.
## How to open it
You have to open this link: [Travel Website](https://ula-nawrot.github.io/Travel-Website/)

**!!! Important !!!**

The API for hotels is hosted on Heroku, which after 30 minutes of inactivity (no requests to the API) puts the Web Service to sleep, which in the case of Heroku requests wakes it up, which can take several seconds.  So in case of alert with message **"TypeError: Failed to fetch", try again in a few seconds.**
## Description
The Travel Website allows to book hotels in different cities in Europe in chosen time range
### User story description
_the feature/function to be developed from a user perspective_

As a user, I would like to have list of hotels in a chosen place, so I can book a hotel.

### Persona

![Persona](https://github.com/Ula-Nawrot/Travel-App/blob/3cc2ea900b3734e35ccce53975ed0a1a1e8be853/images%20for%20ReadMe/Persona.jpg)

### Acceptance Criteria 
_the minimum conditions the solution must meet for the end user to accept the solution_

- Enable user to choose a place
- Enable user to choose a date from-to
- Display a list of hotels in a chosen place
- Enable user to chosen a certain hotel
- Enable user to fill a form
- Enable user to add additional options
- Enable user to submit form

### Process Flow
- Open the website
- Navigate to the serach bar
- Search for a place the user would like to go
- Choose a date when he want to travel
- Accepte a chosen data
- Select a hotel
- Fill a form
- Add additional options
- Submit a form
- Display a summary

### Use Case

![Use Case](https://github.com/Ula-Nawrot/Travel-App/blob/f9cac262692926d899ee29780c6aa48f5221c88c/images%20for%20ReadMe/UseCases.JPG)

### Mockups

I designed the app in AdobeXD

![Page1](https://github.com/Ula-Nawrot/Travel-App/blob/8f2ea15a985abbb897d9ca9a60dfd42ae55194dd/images%20for%20ReadMe/Mockup/Main%20page.jpg)

![Page2](https://github.com/Ula-Nawrot/Travel-App/blob/8f2ea15a985abbb897d9ca9a60dfd42ae55194dd/images%20for%20ReadMe/Mockup/Page%202.jpg)

![Page3](https://github.com/Ula-Nawrot/Travel-App/blob/8f2ea15a985abbb897d9ca9a60dfd42ae55194dd/images%20for%20ReadMe/Mockup/Page%203.jpg)

![Page4](https://github.com/Ula-Nawrot/Travel-App/blob/8f2ea15a985abbb897d9ca9a60dfd42ae55194dd/images%20for%20ReadMe/Mockup/Page%204.jpg)

## Future improvment
1. I would program the ability to change the departure and arrival dates with immediate price conversion and the ability to change the number of people.
     - I have already started changing the code in the inputDates method in the View class to handle fields on two pages, this is what I used the forEach method to do. 
     - The function I started to change the date on the second page is called "updatePriceOfHotel". It is commented out and not deleted in case I want to finish this idea.
2. I programmed that if the user selects the departure date, the return date can be selected only from the next day of the month. However, this does not work if the user selects a date at the turn of two months. I would use the moment.js library to work with dates in the future.



## Resources
* To create this project, I used the knowledge I gained during studies at the Wrocław School of Banking, specialization: Front-end developer.
* I also finished a course on Udemy: The Complete JavaScript Course 2021: From Zero to Expert!
