# Testing

## Contents

This site has been tested using the following testing procedures

* [Code Validation](#Code-validation)  

* [Lighthouse Testing](#Lighthouse-Testing)

* [Browser Compatibility](#Browser-Compatibility)

* [Manual Testing](#Manual-Testing)

* [Bug Reporting](#Bug-Reporting)


## Code Validation  



## Lighthouse Testing  



**Index**  



## Browser Compatibility 
  
**Desktop**  
  
 
  
**Mobile**  




## Manual Testing  

During the manual testing, I tested the sites functionality, usability and responsiveness. 

## Automatic Testing  

During automatic testing i initially tested the basic functionality of jest be making sure a simple test passed. For this example I used true === true.  
The function that i decided to test in my code using automatic testing was the incrementScore function. By doing this, i was testing that the score was correctly incrementing based on the difficulty level of quiz that was selected. For example, a correct answer on a Rookie question scored 1 point, a correct answer on a seasoned driver question scored 5 points and a question on expert difficulty scored 10 points. Inluding the jest test, all 4 tests passed.  

![Autmatic testing screenshot](README-images/automatic-testing.png "Optional title")


#### Functionality

**Quiz Logic**

- During the initial phase of implementing the quiz logic, I realised that multiple answers could be selected for each individual question. To correct this, i appropriately modified the ternary operator that i had already included so that only one answer could be selected at a time for each question. I also realised that i had not added a message at the end of the quiz to notify users that the quiz was finished, to correct this, I added a short congratulatory message letting users know the quiz was finished, accomponied by a button which takes users back to the main menu.  

- correct answer printing 4 times in console log because i had incorrectly placed it isnide a for loop that i used to generate buttons for the answers.  

- Timer counting down below zero.  

- The 'next question' button that was initally implemented still appeared after all questions loaded, to correct this, i removed the button and adapted the code to resume automatically once an answer was selected after a short delay.  

- Another issue with the 'next question' button, even if correct answer was selected, timer still ran down and registered incorrect answer. This contributed to my decision in removing the 'next question' button altogether.  

- random code/text appearing because not corectly implemented.  

- Automated testing issues; duplicating files.  

- Having to change hover so that it is just border to stop clashes.



**Usability**  


**Responsiveness**  




## Bug Reporting


[Back to README.md](https://github.com/ojalaw/Formula_One_Quiz_MP2)
