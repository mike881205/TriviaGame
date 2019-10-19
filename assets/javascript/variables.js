//===============================================================
// Questions
//===============================================================

let questions = [
    {
        question : "Who were the creators of the Ninja Turtles?",
        imgSrc : "img/html.png",
        choiceA : "Kevin Eastman & Peter Laird",
        choiceB : "Lewis & Clark",
        choiceC : "Stan Lee",
        correct : "A",
        answer : "Kevin Eastman & Peter Laird created the TMNT"
    },{
        question : "In the beginning, all of the turtles wore the same color bandana. What color were they?",
        imgSrc : "img/html.png",
        choiceA : "Blue",
        choiceB : "Red",
        choiceC : "Green",
        correct : "B",
        answer : "The original color of the turtles' bandanas was red"
    },{
        question : "What is the real name of the Turtles' arch nemesis 'The Shredder'?",
        imgSrc : "img/html.png",
        choiceA : "Norman Osborn",
        choiceB : "Lex Luther",
        choiceC : "Oroku Saki",
        correct : "C",
        answer : "The Shredder's real name is Oroku Saki"
    },{
        question : "What is the name of the company who made the ooze that mutated the turtles?",
        imgSrc : "img/html.png",
        choiceA : "TGRI",
        choiceB : "Haliburton",
        choiceC : "Enron",
        correct : "A",
        answer : "TGRI is the company that created the ooze"
    },{
        question : "The evil henchmen Bebop and Rocksteady are what kind of animals?",
        imgSrc : "img/html.png",
        choiceA : "Rabbit & Fox",
        choiceB : "Warthog & Rhinoceros",
        choiceC : "Armadillo & Bear",
        correct : "B",
        answer : "Bebop and Rocksteady are a warthog & rhinoceros"
    },{
        question : "What is April O'Neil's profession?",
        imgSrc : "img/html.png",
        choiceA : "Mail Carrier",
        choiceB : "Radio Jockey",
        choiceC : "News Reporter",
        correct : "C",
        answer : "April O'neil is a news reporter"
    },{
        question : "Which turtle is known as the 'Party Dude'?",
        imgSrc : "img/html.png",
        choiceA : "Michelangelo",
        choiceB : "Raphael",
        choiceC : "Leonardo",
        correct : "A",
        answer : "Michelangelo is a party dude!"
    },{
        question : "What famous entertainer performed the song 'Ninja Rap' in the second live action movie 'Secret of the Ooze'?",
        imgSrc : "img/html.png",
        choiceA : "Mos Def",
        choiceB : "Vanilla Ice",
        choiceC : "Jay-Z",
        correct : "B",
        answer : "Vanilla Ice performed the song 'Ninja Rap'"
    },{
        question : "What year was the very first issue of the Teenage Mutant Ninja Turtles comic book published?",
        imgSrc : "img/html.png",
        choiceA : "1988",
        choiceB : "1991",
        choiceC : "1984",
        correct : "C",
        answer : "The first TMNT comic was published in 1984"
    },{
        question : "What year was the very first issue of the Teenage Mutant Ninja Turtles comic book published?",
        imgSrc : "img/html.png",
        choiceA : "1988",
        choiceB : "1991",
        choiceC : "1984",
        correct : "C",
        answer : "The first TMNT comic was published in 1984"
    }
  ]

//===============================================================
// Global Variables
//===============================================================

const intro = $("#intro");
const start = $("#start");
const quiz = $("#showQuiz");
const showQuestion = $("#showQuestion");
const timer = $("#timer");
const question = $("#question");
const choices = $("#choices");
const choiceA = $("#A");
const choiceB = $("#B");
const choiceC = $("#C");
const sumbit = $("#submit");
const showAnswer = $("#showAnswer");
const answerHeader = $("#answerHeader");
const qImg = $("#qImg");
const answer = $("#answer");
const next = $("#next");
const showResults = $("#showResults");
const scoreDiv = $("#scoreDiv");

let clockRunning = false;
let seconds = 15;
let countdownTimer;

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

let checked = false;
let userChoice = $("input");
let userAnswer;