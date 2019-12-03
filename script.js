const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const nextButton = document.querySelector(".nextButton");
const question = document.querySelector(".question");
const image = document.querySelector(".imageWindow");
const total = document.querySelector(".total");
let numberTotal = 0;
let correctAnswer;
let qArray = [
    {
    aQuestion:"What is the ratio of Stanley Nickels to Schrute Bucks?",
    bName1: "Flapjacks to Applesauce",
    bNAme2: "Werewolves to Vampires",
    bName3: "Unicorns to Leprechauns",
    correctAnswer: 3,
    image: "url(schrutebuck.jpg)",
    fontSize: "20px"
    },
    {
    aQuestion:"Where does Toby announce he's moving after awkwardly touching Pam's knee?",
    bName1: "Costa Rica",
    bNAme2: "The Dominican Republic",
    bName3: "Mexico",
    correctAnswer: 1,
    image: "url(toby.jpg)",
    fontSize: "20px"
    },
    {
    aQuestion:"What ingredient does Kevin undercook in his famous chili recipe?",
    bName1: "Onions",
    bNAme2: "Tomatoes",
    bName3: "Peppers",
    correctAnswer: 1,
    image: "url(kevinchili.jpg)",
    fontSize: "30px"
	},
	{
	aQuestion:"Where do Holly's parents live?",
	bName1: "Boulder, CO",
	bNAme2: "Omaha, NE",
	bName3: "Detroit, MI",
	correctAnswer: 1,
	image: "url(holly.gif)",
	fontSize: "30px"
	},
    {
    aQuestion:"What name did Pam and Angela fight over for the name of their boys?",
    bName1: "William",
    bNAme2: "Matthew",
    bName3: "Phillip",
    correctAnswer: 3,
    image: "url(angelapam.jpg)",
    fontSize: "30px"
    },
    {
    aQuestion:"Who is the check made out to during the Michael Scott Fun Run for the Cure?",
    bName1: "Rabies",
    bNAme2: "Science",
    bName3: "Research",
    correctAnswer: 2,
    image: "url(funrun.jpg)",
    fontSize: "30px"
    }];

nextButton.style.visibility = "visible";
nextButton.innerHTML="Start Game!";
question.innerHTML="Welcome to The Office The Game! Press the Start button to begin playing."
image.style.backgroundImage = "url(theOffice.jpeg";
button1.style.visibility = "hidden";
button2.style.visibility = "hidden";
button3.style.visibility = "hidden";

button1.addEventListener("click",rightWrong1);
button2.addEventListener("click",rightWrong2);
button3.addEventListener("click",rightWrong3);
nextButton.addEventListener("click",nextQuestion);

function rightWrong1(){
    if(correctAnswer==1){
    image.style.backgroundImage = "url(happy.gif)";
    question.innerHTML = "Correct!"
    numberTotal++;
    total.innerHTML="Total: "+numberTotal;
    }
    else{
    image.style.backgroundImage = "url(sad.gif)";
    question.innerHTML = "Wrong!"
    }
    nextButton.style.visibility = "visible";
    if(qArray.length<1){
        nextButton.innerHTML="Game Over!";
        button1.style.visibility = "hidden";
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }
    else{
    nextButton.innerHTML="Next Question";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
    }
}

function rightWrong2(){
    if(correctAnswer==2){
    image.style.backgroundImage = "url(happy.gif)";
    question.innerHTML = "Correct!"
    numberTotal++;
    total.innerHTML="Total: "+numberTotal;
    }
    else{
    image.style.backgroundImage = "url(sad.gif)";
    question.innerHTML = "Wrong!"
    }
    nextButton.style.visibility = "visible";
    if(qArray.length<1){
        nextButton.innerHTML="Game Over!";
        button1.style.visibility = "hidden";
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }
    else{
    nextButton.innerHTML="Next Question";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
    }
}

function rightWrong3(){
    if(correctAnswer==3){
    image.style.backgroundImage = "url(happy.gif)";
    question.innerHTML = "Correct!"
    numberTotal++;
    total.innerHTML="Total: "+numberTotal;
    }
    else{
    image.style.backgroundImage = "url(sad.gif)";
    question.innerHTML = "Wrong!"
    }
    nextButton.style.visibility = "visible";
    if(qArray.length<1){
        nextButton.innerHTML="Game Over!";
        button1.style.visibility = "hidden";
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }
    else{
    nextButton.innerHTML="Next Question";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
    }
}

function nextQuestion(){
    if((qArray.length)<1){
        question.innerHTML = "Congratulations, you scored "+numberTotal+" points!";
        nextButton.style.visibility="hidden";
        image.style.backgroundImage = "url(gameOver.gif)";

        }
    else{
    let arrayNumber=Math.floor(Math.random()*(qArray.length));

    nextButton.style.visibility = "hidden";
    button1.style.visibility = "visible";
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";
            
    question.innerHTML=qArray[arrayNumber].aQuestion;
    button1.innerHTML=qArray[arrayNumber].bName1;
    button1.style.fontSize=qArray[arrayNumber].fontSize;
    button2.innerHTML=qArray[arrayNumber].bNAme2;
    button2.style.fontSize=qArray[arrayNumber].fontSize;
    button3.innerHTML=qArray[arrayNumber].bName3;
    button3.style.fontSize=qArray[arrayNumber].fontSize;

    correctAnswer = qArray[arrayNumber].correctAnswer;
    image.style.backgroundImage = qArray[arrayNumber].image;
    qArray.splice(arrayNumber,1);
    }
}