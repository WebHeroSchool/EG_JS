
let question1 = 'Сколько дней в году?'; 
let correctAnswer1 = '365';
let question2 = 'Сколько месяцев в году?';
let correctAnswer2 = '12';
let question3 = 'Сколько дней в апреле месяце?';
let correctAnswer3 = '30';
let	question4 = 'Сколько  часов в сутках?';
let correctAnswer4 = '24'; 

let correctResult = 4;
function userAnswer(question, correctAnswer)
{
    let answer = prompt(question);
    let count = 0;
    if (answer.toLowerCase() == correctAnswer)
    {
        correctResult++;
    }
}

userAnswer(question1, correctAnswer1[365]);
userAnswer(question2, correctAnswer2[12]);
userAnswer(question3, correctAnswer3[30]);
userAnswer(question4, correctAnswer4[24]);