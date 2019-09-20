

const pergunta1 = {
  pergunta: "When was The Matrix lauched?",
  resposta_certa: "1999",
  respostas_erradas: ["2001", "1997", "1989", "2003"],
  images: ["https://media.giphy.com/media/3rVfBUa9f0RErtMZBH/giphy.gif","https://media.giphy.com/media/33u9Z3aI6j5ni/giphy.gif","https://media.giphy.com/media/jK8GasNWDeNtS/giphy.gif"]
};
const pergunta2 = {
  pergunta: "Worked in Godfather as actor and director, respectively:",
  resposta_certa: "Marlon Brando e Copolla",
  respostas_erradas: ["John Cassavetes e Polanski", "Steve McQueen e Copolla", "Johnny Depp e Tim Burton", "Marlon Brando e Polanski"],
  images: ["https://media.giphy.com/media/NZBpOC0ZD0aoU/giphy.gif","https://media.giphy.com/media/hiAX0TKTGyRTG/giphy.gif","https://media.giphy.com/media/ADze48TCg6Hao/giphy.gif"]
};
const pergunta3 = {
  pergunta: "Toy Story was released in... ",
  resposta_certa: "1995",
  respostas_erradas: ["2001", "1997", "1999","2003"],
  images: ["https://media.giphy.com/media/2QJzmJv0PhAiI/giphy.gif","https://media.giphy.com/media/12h6h9U6ttjHdm/giphy.gif","https://media.giphy.com/media/Nry46O07xcwE/giphy.gif"]
};
const pergunta4 = {
  pergunta: "Wich of this movies was not directed by Tim Burton?",
  resposta_certa: "It",
  respostas_erradas: ["Dumbo", "Planet of the Alpes", "Batman", "Alice in Wonderland"],
  images: ["https://media.giphy.com/media/drnuk03HbIDMk/giphy.gif","https://media.giphy.com/media/qjM9x8EptT6c8/giphy.gif","https://media.giphy.com/media/R0JceC4zJgXh6/giphy.gif"]
};

const pergunta5 = {
  pergunta: "What is the name of the Forest Gump's company?",
  resposta_certa: "Bubba Gump",
  respostas_erradas: ["Forest Gump", "Shrimp Cocktail", "Shrimp Forest", "Forest Gump Shrimps"],
  images: ["https://media.giphy.com/media/z5EthizqZYAFi/giphy.gif","https://media.giphy.com/media/YEstHTHc74bw4/giphy.gif","https://media.giphy.com/media/2xYvMTbasyeti/giphy.gif"]
};
const pergunta6 = {
  pergunta: "When did horror movies start to compete as a categoryin the Oscar?",
  resposta_certa: "none",
  respostas_erradas: ["1995", "2018", "1992", "2013"],
  images: ["https://media.giphy.com/media/vZukXkUsBbaKY/giphy.gif","https://media.giphy.com/media/56X8SpbmuiNuE/giphy.gif","https://media.giphy.com/media/tE4xsEvS1t1fO/giphy.gif"]
};
const pergunta7 = {
  pergunta: "John Travolta worked in...",
  resposta_certa: "Embalos de Sábado à noite e Hair Spray",
  respostas_erradas: ["Hair and Django", "Cats and Rent", "Django and Pulp Fiction", "Titanic and Pulp Fiction"],
  images: ["https://media.giphy.com/media/d4bn3nUNo6XpUZ4A/giphy.gif","https://media.giphy.com/media/l41Yh18f5TbiWHE0o/giphy.gif","https://media.giphy.com/media/l2YWhZx01Ie6Q3k7m/giphy.gif"]
};
const pergunta9 = {
  pergunta: "Quentin Tarantino directed...",
  resposta_certa: "Sin City and Kill Bill",
  respostas_erradas: ["Django and Hair", "Inglorious Basterds and Hair", "Pulp Fictio and Titanic", "Kill Bill and 300"],
  images: ["https://media.giphy.com/media/D8XHjpjl46xwc/giphy.gif","https://media.giphy.com/media/xTiTnBs0yRD4gOrowo/giphy.gif","https://media.giphy.com/media/3o7aTFlRixw0iZTsE8/giphy.gif"]
};
const pergunta10 = {
  pergunta: "Who directed Titanic?",
  resposta_certa: "James Cameron",
  respostas_erradas: ["Steven Spielberg", "Ridley Scott", "Suzy Amis", "Quentin Tarantino"],
  images: ["https://media.giphy.com/media/XOY5y7YXjTD7q/giphy.gif","https://media.giphy.com/media/tk39314j32wGk/giphy.gif","https://media.giphy.com/media/YE9A1qSEn0gV2/giphy.gif"]
};
const pergunta11 = {
  pergunta: "What is the highest grossing movie directed by Steven Spielberg?",
  resposta_certa: "Jurassic Park",
  respostas_erradas: ["Jaws", "Indiana Jones", "none", "ET: The Extra-Terrestrial"],
  images: ["https://media.giphy.com/media/gHcPh3ehbRGik/giphy.gif","https://media.giphy.com/media/Up0NsMRidfOso/giphy.gif","https://media.giphy.com/media/9J8gnvAxmDFbG/giphy.gif"]
  };
const pergunta12 = {
  pergunta: "The movie 300 was about...",
  resposta_certa: "Persian and Greeks battle",
  respostas_erradas: ["Greeks and Vikings battle", "a american love story movie", "none of the alternatives", "Vikings and Germans battle"],
  images: ["https://media.giphy.com/media/pKybtEYgE8ESc/giphy.gif","https://media.giphy.com/media/d43LZUOH0H9te/giphy.gif","https://media.giphy.com/media/Y747L7ratlUgo/giphy.gif"]
};?
const pergunta13 = {
  pergunta: "Who won the Oscarin 1994?",
  resposta_certa: "Schindler's List",
  respostas_erradas: ["Titanic", "Pulp Fiction", "The English Patient", "Apollo 13"],
  images: ["https://media.giphy.com/media/tk39314j32wGk/giphy.gif","https://media.giphy.com/media/odAJqW0LWF3Py/giphy.gif","https://media.giphy.com/media/4Hx5nJBfi8FzFWxztb/giphy.gif"]
};

 
let timerCount = 0;
let timerElement = document.getElementById("timer");
let counterQuestions = 0;
let counterRights = 0;
questionsArr = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta9, pergunta10, pergunta11, pergunta12, pergunta13]
let gameControl = {
  intervalFunction : function(){
     this.interval = setInterval(() => {
      timerCount += 1;
      timerElement.value = timer;
      console.log(timerCount);
      if (timerCount === 10) {
        console.log("loose");
        counterQuestions += 1;
        document.getElementById("error-box").style.display = "inherit";
        timerCount= 0;
        clearInterval(this.interval);
      }
  
    }, 1000);
  }
}

function randomQuestion(arr) {

  return arr.splice(Math.floor(Math.random() * (arr.length-1)), 1)

}

function renderQuestion(arr) {
 // gameControl.intervalFunction();
  endGame();
  

  let countRightDiv= document.getElementById("countRightDiv")
   countRightDiv.innerHTML= counterRights;
  let showQuestion = document.getElementById("question");
  showQuestion.innerHTML = arr.pergunta;
document.getElementById("img1").src = arr.images[0];
document.getElementById("img2").src = arr.images[1];
document.getElementById("img3").src = arr.images[2];
  let randomAnwser = document.querySelectorAll('.anwsersHtml button span');

  let randomNumber = Math.floor(Math.random() * 4);

  if (randomNumber === 0) {
    randomAnwser[0].innerHTML = arr.resposta_certa;
    randomAnwser[1].innerHTML = arr.respostas_erradas[1];
    randomAnwser[2].innerHTML = arr.respostas_erradas[2];
    randomAnwser[3].innerHTML = arr.respostas_erradas[3];
    randomAnwser[4].innerHTML = arr.respostas_erradas[0];

  }
  else if (randomNumber === 1) {
    randomAnwser[0].innerHTML = arr.respostas_erradas[1];
    randomAnwser[1].innerHTML = arr.resposta_certa;
    randomAnwser[2].innerHTML = arr.respostas_erradas[2];
    randomAnwser[3].innerHTML = arr.respostas_erradas[3];
    randomAnwser[4].innerHTML = arr.respostas_erradas[0];
  }
  else if (randomNumber === 2) {
    randomAnwser[0].innerHTML = arr.respostas_erradas[1];
    randomAnwser[2].innerHTML = arr.resposta_certa;
    randomAnwser[3].innerHTML = arr.respostas_erradas[2];
    randomAnwser[1].innerHTML = arr.respostas_erradas[3];
    randomAnwser[4].innerHTML = arr.respostas_erradas[0];
  }

  else if (randomNumber === 3) {
    randomAnwser[0].innerHTML = arr.respostas_erradas[1];
    randomAnwser[4].innerHTML = arr.resposta_certa;
    randomAnwser[2].innerHTML = arr.respostas_erradas[2];
    randomAnwser[3].innerHTML = arr.respostas_erradas[3];
    randomAnwser[1].innerHTML = arr.respostas_erradas[0];
  }

  else if (randomNumber === 4) {
    randomAnwser[0].innerHTML = arr.respostas_erradas[1];
    randomAnwser[3].innerHTML = arr.resposta_certa;
    randomAnwser[2].innerHTML = arr.respostas_erradas[2];
    randomAnwser[1].innerHTML = arr.respostas_erradas[3];
    randomAnwser[4].innerHTML = arr.respostas_erradas[0];
  }
  randomAnwser[0].onclick = () => {

    counterQuestions += 1;
    if (randomAnwser[0].innerHTML === arr.resposta_certa) {
      document.getElementById("success-box").style.display = "inherit";


      counterRights += 1;
    } else {
      timerCount = 0
      clearInterval(gameControl.interval)
      document.getElementById("error-box").style.display = "inherit";

    }



  };
  randomAnwser[1].onclick = () => {

    counterQuestions += 1;
    if (randomAnwser[1].innerHTML == arr.resposta_certa) {
      document.getElementById("success-box").style.display = "inherit";
      counterRights += 1;
    } else {
      timerCount = 0
      clearInterval(gameControl.interval)
      document.getElementById("error-box").style.display = "inherit";
    }




  };
  randomAnwser[2].onclick = () => {

    counterQuestions += 1;
    if (randomAnwser[2].innerHTML == arr.resposta_certa) {
      counterRights += 1;
      document.getElementById("success-box").style.display = "inherit";
    } else {
      timerCount = 0
      clearInterval(gameControl.interval)
      document.getElementById("error-box").style.display = "inherit";
    }




  };
  randomAnwser[3].onclick = () => {

    counterQuestions += 1;
    if (randomAnwser[3].innerHTML == arr.resposta_certa) {
      counterRights += 1;
      document.getElementById("success-box").style.display = "inherit";
    } else {
      timerCount = 0
      clearInterval(gameControl.interval)
      document.getElementById("error-box").style.display = "inherit";
    }



  };
  randomAnwser[4].onclick = () => {

    counterQuestions += 1;
    if (randomAnwser[4].innerHTML == arr.resposta_certa) {
      counterRights += 1;
      document.getElementById("success-box").style.display = "inherit";

    } else {
      timerCount = 0
      clearInterval(gameControl.interval)
      document.getElementById("error-box").style.display = "inherit";
    }

  };


}
function endGame() {
  if (counterQuestions == 10) {
    document.getElementById("score").innerHTML=`you got ${counterRights} point(s)`;
    document.getElementById("endGameDiv").style.display = "inherit";
    
  }

}

let start = document.getElementById("start");
start.onclick = () => {

  let perguntaSelecionada1 = randomQuestion(questionsArr);
  document.getElementById('startGame').style.display = "none";
  document.getElementById('test').style.display = "inherit";
  // document.getElementById("backgroundDiv").style.backgroundImage = "url('./sources/giphy.gif')";

  // setTimeout(()=>{ 
  //document.getElementById("backgroundDiv").style.backgroundImage="none";

  //} ,1700);



  renderQuestion(...perguntaSelecionada1);

}

let nextQuestionFalse = document.getElementById("falseContinue");
let nextQuestionRight = document.getElementById("rightContinue");
let startAgain= document.getElementById("startAgainButton");

nextQuestionRight.onclick = () => {
  document.getElementById("success-box").style.display = "none";
  renderQuestion(...randomQuestion(questionsArr));


}
nextQuestionFalse.onclick = () => {
  document.getElementById("error-box").style.display = "none";
  renderQuestion(...randomQuestion(questionsArr));


}

startAgain.onclick = () => {
  
  document.getElementById("endGameDiv").style.display = "none";
  document.getElementById("startGame").style.display = "flex";
  document.getElementById('test').style.display = "none";
  counterQuestions = 0;
  questionsArr = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta9, pergunta10, pergunta11, pergunta12, pergunta13];
  counterRights = 0;


}








