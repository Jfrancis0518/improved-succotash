//var correct = 0
//var incorrect = 0 


function startCountdown(seconds) {
let counter = seconds;

const interval = setInterval() => {
console.log(counter);
coumter--

if (counter < 0) {
    clearInterval(interval);
    console.log("Complete!")
    startCountdown(60);
}
}, 1000;
};

var score = 0;
var questions = [
    {
        prompt: "Which of this options control the styling for a webpage?\n(a) HTML\n\ (b) Photoshop\n\ (c) Google\n(d) CSS",
        answer: "d" 
    },
    {
        prompt: "What do we use to allow CSS amd JavaScript to select and access specific elements?\n(a) Class\n\ (b) src\n\ (c) alt\n(d) Semantic tags",
        amswer: "a"
    },
    {
        prompt: "which of the following formats are used for highligting text? \n(a) sub\n\ (b) mark\n (c) del\n\ (d)em",
        answer: "b"
    },
    {
        prompt: "Which of the following should you add to your ReadMe?n\(a) project name\n\ (b) project description\n\ (c) what you learned\n (d) all of the above?",
        answer: "d"
    },
    {
        prompt: "What is A programming language originally created to be run in the browser with the intention of enhancing a webpage's capabilities?\n\(a) conditional statements\ (b) CSS\n\ (c) JavaScript\n (d)HTML",
        answer: "c"
    },
]

for(var i=0; 1 < questions.length; i++){
 var response = window.prompt(questions[i].prompt)
 if(response == questions [i].answer){
   score++;
   alert ("Correct!");
    } else {
        alert("Incorrect!");
    }
}
alert("Congratulations! you got" + score + "/" + question.lengths);
//var startQuiz = function() {
    //
//}
