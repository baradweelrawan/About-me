'user strict'
let username=  prompt('please Enter your name');
alert ('Welcome In About Me Website' + username)
//let username=  prompt('Do You Want To Know More Pleas Enter ? (Yes,No)');
//console.log(username);
//if (username == Yes)
//{console.log(username);

//}
alert ('lets\'s answer question 1')
function ques1(){
let Question1=  prompt('can you Guess How Many Years I Spend Studing At University ?  (Yes,No)').toLowerCase;
switch (Question1)
{
    case 'yes':
        console.log('You can guess');
            break;
    case 'No':
        console.log('You can\'t guess');
            break;
}
} ques1();
alert ('lets\'s answer question 2')
function ques2(){
let Question2=  prompt('can you Guess if i have a problem of going to my university ?  (Yes,No)').toLowerCase;
switch (Question2)
{
    case 'yes':
        console.log('You can guess');
            break;
    case 'No':
        console.log('You can\'t guess');
            break;
}
}ques2();
alert ('lets\'s answer question 3')
function ques3(){

let Question3=  prompt('can you Guess if there are a traffic jam in my city ?  (Yes,No)').toLowerCase;
switch (Question3)
{
    case 'yes':
        console.log('You can guess');
            break;
    case 'No':
        console.log('You can\'t guess');
            break;
}
} ques3();
alert ('lets\'s answer question 4')
function ques4(){
let Question4=  prompt('Dose the COVID 19 affects where i live ? (Yes,No)').toLowerCase;
switch (Question4)
{
    case 'yes':
        console.log('You can guess');
            break;
    case 'No':
        console.log('You can\'t guess');
            break;
}
} ques4();
alert ('lets\'s answer question 5')

function ques5(){
let Question5=  prompt('Do you know any thing about my city ? (Yes,No)').toLowerCase;
switch (Question5)
{
    case 'yes':
        console.log('You can guess');
            break;
    case 'No':
        console.log('You can\'t guess');
            break;
}
} ques5();
function ques6(){
let guessNumber =155;
let userGuessing= parseInt(prompt('what is your guessing number?'));
let gues = false;
let GuesOpportunities =0;

for (let i = 0 ; i <= GuesOpportunities  ; i++)
{
  if ( userGuessing === guessNumber )
  {
      console.log('you guessing it ')
      gues = true;
     break;
 // }
} 
if (gues === false)
  { 
     for (let GuesOpportunities = 0 ; GuesOpportunities <=4 ; GuesOpportunities++)
     {
          alert (' your guessing is wrong please try again ');
          console.log('please try again  ')
          let userGuessing= parseInt(prompt('what is your guessing number?'));
          {
            if (100 < userGuessing || 180 < userGuessing < 200  )
            {
                console.log('you guessing it too low ')
                alert ('you guessing it too low')
                let userGuessing= parseInt(prompt('what is your guessing number?'));
            } else
            {
                console.log('you guessing it too high ')
                alert ('you guessing it too high')
            }
            break;
          }
        //  break;
      }
    
     console.log('The currect guessing are ' + guessNumber );
     alert ('The currect guessing are ' + guessNumber) ;
     
 }

 // else if (150 < userGuessing <155  )
 // {
//     console.log('you guessing it too low ')
 //     alert ('you guessing it too low')
      
 // }
//  else if (100 < userGuessing || 180 < userGuessing < 200  )
//  {
 //     console.log('you guessing it too high ')
 //     alert ('you guessing it too high')
     
 // }
//  break;
//}
if (userGuessing === false)
{
    console.log('The currect guessing is ' + guessNumber1 );
    alert ('The currect guessing is' + + guessNumber1)
}
}ques6();
alert ('please  guess a number just to make some fun')
//let Question7=  prompt('please  guess the answer to a question that could have many possibilities ');
function ques7(){
let NumbersArr=[30,31,32,35,60,69,62,65];
let userGues= parseInt(prompt('what is your guessing number?'));
let guess = false;
//let attempts=6;
for (let i = 0 ;i < NumbersArr.length; i++)
{
    if ( userGues === NumbersArr[i] )
    {
        console.log('you guessing it ')
        alert ('you guessing it')
        guess = true;
        break;
    }   

    }
   
if (guess === false)
    { 
        for (let attempts =1  ; attempts <= 6; attempts++)
        {
            alert (' your guessing is wrong please try again ');
            console.log('please try again  ')
            let userGues1= parseInt(prompt('what is your guessing number?'));
            
        }
      
       console.log('The currect guessing are ' + NumbersArr );
       alert ('The currect guessing are ' + NumbersArr) ;
    }
}ques7();
    console.log('Thank You ' + username ); 
    alert ('Thank You ' + username) 
}

