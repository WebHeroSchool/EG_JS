let num = '0';
let score;

const questions = [
	{ question: 'question1', answer1: 'a', correctAnswer: 'b', answer3: 'c' }, 
	{ question: 'question2', answer1: 'a', answer2: 'b', correctAnswer: 'c' },
	{ question: 'question3', correctAnswer: 'a', answer2: 'b', answer3: 'c' },
	{ question: 'question4', answer1: 'a', answer2: 'b', correctAnswer: 'c' },
] 

const result = questions.filter((item) => {
  return item.correctAnswer === 'c';
})

console.log(result);