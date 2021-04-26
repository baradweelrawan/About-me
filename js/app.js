'user strict'
let username=  prompt('plaes Enter your name');
alert ('WELCOME IN About Me Website' + username)
//let username=  prompt('Do You Want To Know More Pleas Enter ? (Yes,No)');
//console.log(username);
//if (username == Yes)
//{console.log(username);

//}
alert ('lets\'s answer question 1')
let Question1=  prompt('can you Guess How Many Years I SPend Studing At University ?  (Yes,No)').toLowerCase;
switch (Question1)
{
    case 'yes':
        console.log('You can guess');
            break;
    case 'No':
        console.log('You can\'t guess');
            break;
}
alert ('lets\'s answer question 2')

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
alert ('lets\'s answer question 3')

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
alert ('lets\'s answer question 4')

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
alert ('lets\'s answer question 5')

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
alert ('Thank You ' + username)





