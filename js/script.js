let num = '0';
let score;

const q = [
	{ question: 'question1', answer1: 'a', correctAnswer: 'b', answer3: 'c' }, 
	{ question: 'question2', answer1: 'a', answer2: 'b', correctAnswer: 'c' },
	{ question: 'question3', correctAnswer: 'a', answer2: 'b', answer3: 'c' },
	{ question: 'question4', answer1: 'a', answer2: 'b', correctAnswer: 'c' },
] 

function bildQuiz(q){
	for(let i = 0;i < q.length;i++) {
		if (i = 'b') {
			console.log (q[i]);
		}
	}
}

bildQuiz(q)