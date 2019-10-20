//===============================================================
// Questions
//===============================================================

let questions = [
    {
        question : "Who were the creators of the Ninja Turtles?",
        imgSrc : "https://live.staticflickr.com/2366/2454492362_0e6c63d45b.jpg",
        choiceA : "Kevin Eastman & Peter Laird",
        choiceB : "Lewis & Clark",
        choiceC : "Stan Lee",
        correct : "A",
        answer : "Kevin Eastman & Peter Laird created the TMNT"
    },{
        question : "In the beginning, all of the turtles wore the same color bandana. What color were they?",
        imgSrc : "https://images.penguinrandomhouse.com/cover/9781684053889",
        choiceA : "Blue",
        choiceB : "Red",
        choiceC : "Green",
        correct : "B",
        answer : "The original color of the turtles' bandanas was red"
    },{
        question : "What is the real name of the Turtles' arch nemesis 'The Shredder'?",
        imgSrc : "https://www.syfy.com/sites/syfy/files/styles/1170xauto/public/shredder_in_hell_slice_1.png",
        choiceA : "Norman Osborn",
        choiceB : "Lex Luther",
        choiceC : "Oroku Saki",
        correct : "C",
        answer : "The Shredder's real name is Oroku Saki"
    },{
        question : "What is the name of the company who made the ooze that mutated the turtles?",
        imgSrc : "https://live.staticflickr.com/7405/11259387984_902fda5466_b.jpg",
        choiceA : "TGRI",
        choiceB : "Haliburton",
        choiceC : "Enron",
        correct : "A",
        answer : "TGRI is the company that created the ooze"
    },{
        question : "The evil henchmen Bebop and Rocksteady are what kind of animals?",
        imgSrc : "https://vignette.wikia.nocookie.net/monstermovies/images/c/c1/Bebop_%26_Rocksteady.jpg/revision/latest?cb=20170705125706",
        choiceA : "Rabbit & Fox",
        choiceB : "Warthog & Rhinoceros",
        choiceC : "Armadillo & Bear",
        correct : "B",
        answer : "Bebop and Rocksteady are a warthog & rhinoceros"
    },{
        question : "What is April O'Neil's profession?",
        imgSrc : "https://am23.akamaized.net/tms/cnt/uploads/2018/07/teenage-mutant-ninja-turtles-1200x675.jpg",
        choiceA : "Mail Carrier",
        choiceB : "Radio Jockey",
        choiceC : "News Reporter",
        correct : "C",
        answer : "April O'neil is a news reporter"
    },{
        question : "Which turtle is known as the 'Party Dude'?",
        imgSrc : "https://i.pinimg.com/originals/4d/2a/a8/4d2aa8438fd7e3409ec0a1fdddb2398f.jpg",
        choiceA : "Michelangelo",
        choiceB : "Raphael",
        choiceC : "Leonardo",
        correct : "A",
        answer : "Michelangelo is a party dude!"
    },{
        question : "What famous entertainer performed the song 'Ninja Rap' in the second live action movie 'Secret of the Ooze'?",
        imgSrc : "http://iwatchstuff.com/2014/08/05/vanilla-ice-turtles.jpg",
        choiceA : "Mos Def",
        choiceB : "Vanilla Ice",
        choiceC : "Jay-Z",
        correct : "B",
        answer : "Vanilla Ice performed the song 'Ninja Rap'"
    },{
        question : "What year was the very first issue of the Teenage Mutant Ninja Turtles comic book published?",
        imgSrc : "https://www.idwpublishing.com/wp-content/uploads/2016/12/TMNT-AE-cvr.jpg",
        choiceA : "1988",
        choiceB : "1991",
        choiceC : "1984",
        correct : "C",
        answer : "The first TMNT comic was published in 1984"
    },{
        question : "How many years did the cartoon series run for?",
        imgSrc : "https://pm1.narvii.com/6100/2dbc921e1e869b6d98abe5361620abec40b3a2b8_hq.jpg",
        choiceA : "10",
        choiceB : "15",
        choiceC : "5",
        correct : "A",
        answer : "The cartoon series ran for 10 years"
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
const qImg = $("<img id='qImg'>");
const answer = $("#answer");
const next = $("#next");
const showResults = $("#showResults");
const scoreDiv = $("#scoreDiv");

let clockRunning = false;
let seconds = 20;
let countdownTimer;

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

let checked = false;
let userChoice = $("input");
let userAnswer;