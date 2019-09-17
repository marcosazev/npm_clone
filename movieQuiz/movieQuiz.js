

const pergunta1 = {
  pergunta: "Quem dirigiu O Exorcista?",
  resposta_certa: "William Friedkin",
  respostas_erradas: ["Roman Polanski", "Francis Ford Copolla", "Steven Spielberg", "Andrew Davies"]
};
const pergunta2 = {
  pergunta: "Frank Capra é?",
  resposta_certa: " Diretor",
  respostas_erradas: ["Ator", "Roterista", "Roterista ", "Comediante"]
};
const pergunta3 = {
  pergunta: "Na equipe de O Poderoso Chefão participaram...",
  resposta_certa: "Marlon Brando, como ator, e Copolla, como diretor",
  respostas_erradas: ["John Cassavetes como ator e Polanski como diretor", "Steve McQueen como ator e Clint Eastwood como diretor", "Johnny Depp como ator e Tim Burton como diretor", "Marlon Brando como ator e Polanski como diretor"]
};
const pergunta4 = {
  pergunta: "Qual desses filmes Tim Burton não dirigiu?",
  resposta_certa: "Charada",
  respostas_erradas: ["Vincent", "Os Fantasmas se divertem", " Fantástica Fábrica de Chocolate", "Alice no País das Maravilhas"]
};

const pergunta5 = {
  pergunta: "De que gênero Calafrios de David Cronenberg é listado?",
  resposta_certa: "Horror",
  respostas_erradas: ["Romance", "Ação", "Aventura", "Drama"]
};
const pergunta6 = {
  pergunta: "Desde quando horror e terror concorrem ao Oscar?",
  resposta_certa: "Não concorrem",
  respostas_erradas: ["desde 1995", "desde 2018", "desde 1992", "desde 2013"]
};
const pergunta7 = {
  pergunta: "John Travolta fez que musicais?",
  resposta_certa: "Embalos de Sábado à noite e Hair Spray",
  respostas_erradas: ["Hair e Singing in the Rain", "Cats e Rent", "My Fair Lady e Pulp Fiction", "Embalos de Sábado à noite e Pulp Fiction"]
};
const pergunta9 = {
  pergunta: "Quentin Tarantino dirigiu quais filmes?",
  resposta_certa: "Jackie Brown; Bastardos Inglórios; Cães do Inferno",
  respostas_erradas: ["Felicidade não se compra, Cidadão Kane, Caminhos perigosos", "Interlúdio, Os Pássaros, Bastardos Inglórios;", "Pulp Fiction, Bastardos Inglorios e A Origem", "Kill Bill, Pulp Fiction e A Origem"]
};
const pergunta10 = {
  pergunta: "Qual foi o primeiro filme de Steven Spielberg?",
  resposta_certa: "Encurralado",
 respostas_erradas: ["Tubarão", "Jurasic Park", "nenhuma das alternativas","Et"]
 };
 const pergunta11 = {
  pergunta: "Qual foi o primeiro filme de Steven Spielberg?",
  resposta_certa: "Encurralado",
 respostas_erradas: ["Tubarão", "Jurasic Park", "nenhuma das alternativas","Et"]
 };
 const pergunta12 = {
  pergunta: "Qual foi o primeiro filme de Steven Spielberg?",
  resposta_certa: "Encurralado",
 respostas_erradas: ["Tubarão", "Jurasic Park", "nenhuma das alternativas","Et"]
 };
 const pergunta13 = {
  pergunta: "Qual foi o primeiro filme de Steven Spielberg?",
  resposta_certa: "Encurralado",
 respostas_erradas: ["Tubarão", "Jurasic Park", "nenhuma das alternativas","Et"]
 };

 let counterQuestions=0;
let counterRights=0;
questionsArr = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta9,pergunta10,pergunta11,pergunta12,pergunta13]


function randomQuestion(arr) {
 
  return arr.splice(Math.floor(Math.random() * (arr.length)),1)
  
}

function renderQuestion(arr){
  endGame();

  
  
  let showQuestion = document.getElementById("demo");

  showQuestion.innerHTML = arr.pergunta;
  let randomAnwser = document.querySelectorAll('button');
  
  let randomNumber = Math.floor(Math.random() * 4);

  if(randomNumber === 0){
    randomAnwser[0].innerHTML = arr.resposta_certa;
    randomAnwser[1].innerHTML = arr.respostas_erradas[1];
    randomAnwser[2].innerHTML = arr.respostas_erradas[2];
    randomAnwser[3].innerHTML = arr.respostas_erradas[3];
    randomAnwser[4].innerHTML = arr.respostas_erradas[0];

  }
  else if(randomNumber === 1){
    randomAnwser[0].innerHTML = arr.respostas_erradas[1];
    randomAnwser[1].innerHTML = arr.resposta_certa;
    randomAnwser[2].innerHTML = arr.respostas_erradas[2];
    randomAnwser[3].innerHTML = arr.respostas_erradas[3];
    randomAnwser[4].innerHTML = arr.respostas_erradas[0];
  }
  else if(randomNumber === 2){
  randomAnwser[0].innerHTML = arr.respostas_erradas[1];
  randomAnwser[2].innerHTML = arr.resposta_certa;
  randomAnwser[3].innerHTML = arr.respostas_erradas[2];
  randomAnwser[1].innerHTML = arr.respostas_erradas[3];
  randomAnwser[4].innerHTML = arr.respostas_erradas[0];
}

else if(randomNumber === 3){
  randomAnwser[0].innerHTML = arr.respostas_erradas[1];
  randomAnwser[4].innerHTML = arr.resposta_certa;
  randomAnwser[2].innerHTML = arr.respostas_erradas[2];
  randomAnwser[3].innerHTML = arr.respostas_erradas[3];
  randomAnwser[1].innerHTML = arr.respostas_erradas[0];
}

else if(randomNumber === 4){
  randomAnwser[0].innerHTML = arr.respostas_erradas[1];
  randomAnwser[3].innerHTML = arr.resposta_certa;
  randomAnwser[2].innerHTML = arr.respostas_erradas[2];
  randomAnwser[1].innerHTML = arr.respostas_erradas[3];
  randomAnwser[4].innerHTML = arr.respostas_erradas[0];
}
randomAnwser[0].onclick= ()=>{
  
  if(randomAnwser[0].innerHTML=== arr.resposta_certa){
    alert("rigth anwsser");
    
    counterRights+=1;
  }else{
    alert("wrong anwser")

      }
    counterQuestions+=1;
  setTimeout(renderQuestion(...randomQuestion(questionsArr)),200);
  
};
randomAnwser[1].onclick= ()=>{

  if(randomAnwser[1].innerHTML== arr.resposta_certa){
    alert("rigth anwsser")
    counterRights+=counterRights;
  }else{
    alert("wrong anwser")
  }
  counterQuestions+=1;
  setTimeout(renderQuestion(...randomQuestion(questionsArr)),200);
 
  
};
randomAnwser[2].onclick= ()=>{

  if(randomAnwser[2].innerHTML== arr.resposta_certa){
    counterRights+=1;
    alert("rigth anwsser")
  }else{
    alert("wrong anwser")
  }
  counterQuestions+=1;
  setTimeout(renderQuestion(...randomQuestion(questionsArr)),200);
  

};
randomAnwser[3].onclick= ()=>{
  
  if(randomAnwser[3].innerHTML== arr.resposta_certa){
    counterRights+=1;
    alert("rigth anwsser")
  }else{
    alert("wrong anwser")
  }
  counterQuestions+=1;
  setTimeout(renderQuestion(...randomQuestion(questionsArr)),200);
  
};
randomAnwser[4].onclick= ()=>{

  if(randomAnwser[4].innerHTML== arr.resposta_certa){
    counterRights+=1;
    alert("rigth anwsser")
  }else{
    alert("wrong anwser")
  }
  counterQuestions+=1;
  
  setTimeout(renderQuestion(...randomQuestion(questionsArr)),200);
  
};


}
function endGame(){
  if(counterQuestions===10){
    return alert("endgame");
  }
  
}
let perguntaSelecionada1= randomQuestion(questionsArr);
renderQuestion(...perguntaSelecionada1);





