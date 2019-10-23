The assignment for this week was to create a password generator in Javascript.

At first I was stuck because I wasn't sure where to start. Then I spoke with my tutor who helped me think through the problem with psuedocode before attempting to write any code.

This step was very helpful! Originally I was overwhelemed by the sheer number of different ways to organize the concept.

The assignment requires that we ask the user what kind of characters they would like to use in their passwords and then generate a random string of characters to suit their choice.

The first step was to create variables for the different kinds of characters that are available, so one var for lower case, one for upper case, another for special characters and a 4th var for numbers.

I then created variables for all of the options that I wanted the user to have, as well as a variable for the password itself, a variable for the length of the final password and most importantly a variable called userChoices.

The main core of this program is the generate function, which takes the values of all of the user choices and if the user chose to add one of the different character types, that string gets .pushed into the userChoices variable.

From that userChoice variable the generate function chooses a random character and adds it to the password variable.

Once the generate function adds enough characters to reach the number designated by the passwordLength variable it moves onto the document.querySelector that adds the password to the textArea box in the middle of the page.


When I was testing my code I found out that if the user tried to generate more than one password in a row they were bound by the choices they made in the first attempt despite making different choices the 2nd time around.

To fix this I created another funtion called clearPass which resets all of the variables and is called after the password is added to the page.

It took me half a day to realize that at first I was clearing the wrong variable. Only through thorough testing was I able to find this bug and determine what was causing it.
