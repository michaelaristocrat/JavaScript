/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, 
together with the possible answers (each question should have a number) 
(Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends 
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. 
So include the option to quit the game if the user writes 'exit' instead of the answer. 
In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! 
So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, but you don't have to, 
just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
	var Question = function(question, answers, correct) {
	    this.question = question;
	    this.answers = answers;
	    this.correct = correct;
	};

	var mikesFavColorQues = new Question('What is Michael\'s favorite color?', [
		'blue', 'red', 'black', 'green'], 
		'4');
	var mikesFavNumQues = new Question('What is Michael\'s favorite number?', 
		['2', '4', '1', '6'], 
		'3');
	var mikesFavArtistQues = new Question('What is Michael\'s favorite artist?', 
		['Eric Prydz', 'Deadmau5', 'Rezz', 'Michael Jackson'], 
		'4');

	//3. 
	var quesArr = [mikesFavColorQues, mikesFavNumQues, mikesFavArtistQues];
	var score = 0;

	var printAns = function(array) {
	    for (i = 0; i < array.length; i++) {
	        console.log(i + 1 + ': '+ array[i])
	    }
	}

	var printQues = function(question) {
	    console.log(question);

	}

	var nextQuestion = function() {
		console.log('Your current score: ' 
			+ score + '\n--------------------------------');
		randomQuestion(quesArr);

	}

	var answerCheck = function(correct, answer) {
	    if (answer === correct) {
	        console.log('You\'re Right!');
	        score += 1
	    } else {
	        console.log('Wrong:(');
	    }
	    nextQuestion();
	}


	randomQuestion = function(quesArr) {
	    var numberInArr, selectedQues, correctResponsObj;
	    selectedQues = quesArr[Math.floor(Math.random() * 3)];
	    printQues(selectedQues.question);
	    printAns(selectedQues.answers);
	    
	    var userAnswer = prompt('Please choose a number between 1 and ' 
	    	+ selectedQues.answers.length + '.\nIf you would like to stop, type exit.', 'Answer here');
	    if (userAnswer !== 'exit') {
	    	answerCheck(selectedQues.correct, userAnswer);
	    } else {
	    	console.log('Thanks for playing!')
	    }
	}

	randomQuestion(quesArr);
})();