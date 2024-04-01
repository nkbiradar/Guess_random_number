# Guess_random_number
this is a small game , made by using javascript 

A maximum number is set as a upper limit (not exceed) and advised the user to guess the random number that is generated , 
in this there are two cases : 
1) if the maximum number is small then its easy to guess . ex :  5 or 10
2) if the max number is big . ex : 100 .....1000 it is difficult to predict the number
 so to make it interesting and predictable ,
 we will be adding if else conditions
if the guess < random number then we will provide a hint as
the guess number is smaller than the random number .try again
or else if the number > random number ........ the number is greater than the random number , try again .

--->  DRY RUN OF THE CODE :-  <---

SUPPOSE THE MAX NUM = 100
AND THE RANDOM NUMBER IS GENERATED = 75
FIRST GUESS BY USER = 50
THE NUMBER IS LESSER THAN THE RANDOM NUMBER PLEASE TRY AGAIN 
NEXT THE GUESS IS MADE AS = 80 
THE NUMBER IS GREATER THAN THE RANDOM , TRY AGAIN 
SO WITH THIS THE NUMBER LIES BTW 50 - 80
NEXT GUESS  = 70 (THE NUMBER IS LESSER THAN THE RANDOM , TRY AGAIN)
HENCE THE NUMBER LIES BTW 70 - 80 

like this we will guess the random number generated . 

