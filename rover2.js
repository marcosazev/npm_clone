var board = 
[["rover1", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "","rover2", "", "", "", ""],
["", "", "", "", "obstacle", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "obstacle", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""]];



let rover1 = {
  direction: "N",
  x: 0,
  y: 0,
  name: "rover1",
  travelLog: [{ x: 0, y: 0 }],
  
};

let rover2 = {
  direction: "S",
  x: 3,
  y: 5,
  name: "rover2",
  travelLog: [{ x: 3, y: 5 }]
}



function turnLeft(object) {
  switch (object.direction) {
    case "N":
      object.direction = "W";
      break;
    case "W":
      object.direction = "S";
      break;
    case "S":
      object.direction = "E";
      break;
    case "E":
      object.direction = "N";
  }
  console.log("turnLeft was called!")

}

function turnRight(object) {
  switch (object.direction) {
    case "N":
      object.direction = "E";
      break;
    case "E":
      object.direction = "S";
      break;
    case "S":
      object.direction = "W";
      break;
    case "W":
      object.direction = "N";
  }

  console.log("turnRight was called!");
}

function moveForward(object) {

  console.log("moveForward was called");
  if (object.direction === "W") {
    if( object.y <=0){
      console.log("unable to move: border ahead");
    }else if (board[object.x][object.y -1] !==  ""){
      console.log("unable to move: object ahead");
    }else{
    board[object.x][object.y]="";
    object.y--;
    
  }
  } else if (object.direction === "N"){
    if(object.x <=0){
      console.log("unable to move: border ahead")
    
    }else if(board[object.x-1][object.y] !== ""){
      console.log("unable to move: object ahead")
    }else{
      board[object.x][object.y]="";
      object.x--;}
  
    } else if (object.direction === "S"){
      if(object.x >=10){
        console.log("unable to move: border ahead");
      }else if(board[object.x +1][object.y] !== ""){
        console.log("unable to move: object ahead")
      }else {
        board[object.x][object.y]="";
        object.x++;}
    } else if (object.direction === "E"){
      if(object.y +1 >= 10){
        console.log("unable to move: border ahead");
      }else if (board[object.x][object.y + 1] !== ""){
        console.log("unable to move: object ahead"); 
      }else{
        board[object.x][object.y]="";
        object.y++;
      };
    }
 
    board[object.x][object.y] = object.name;
    
  let newPosition = { x: object.x, y: object.y };
  object.travelLog.push(newPosition);
    }

  
  function moveBackward(object) {
  if (object.direction === "E") {
    if( object.y <=0){
      console.log("unable to move: border ahead");
    }else if (board[object.x][object.y -1] !==  ""){
      console.log("unable to move: object ahead");
    }else{
    board[object.x][object.y]="";
    object.y--;}
  } else if (object.direction === "S"){
    if(object.x <=0){
      console.log("unable to move: border ahead")
    
    }else if(board[object.x-1][object.y] !== ""){
      console.log("unable to move: object ahead")
    }else{
      board[object.x][object.y]="";
      object.x--;}
  
    } else if (object.direction === "N"){
      if(object.x >=10){
        console.log("unable to move: border ahead");
      }else if(board[object.x +1][object.y] !== ""){
        console.log("unable to move: object ahead")
      }else {
        board[object.x][object.y]="";
        object.x++;}
    } else if (object.direction === "W"){
      if(object.y +1 >= 10){
        console.log("unable to move: border ahead");
      }else if (board[object.x][object.y + 1] !== ""){
        console.log("unable to move: object ahead"); 
      }else{
        board[object.x][object.y]="";
        object.y++;
      };
    }
      
    board[object.x][object.y] = object.name;

  console.log("moveBackward was called");
  let newPosition = { x: object.x, y: object.y };
  object.travelLog.push(newPosition);
}


function command(orders, object) {

  for (let i = 0; i < orders.length; i++) {

    let order = orders[i];
    if (order !== "l" && order !== "r" && order !== "f" && order !== "b") {
      console.log("wrong command");
    } else {

      switch (order) {
        case "l": // left
          turnLeft(object);
          break;
        case "r": // right
          turnRight(object);
          break;
        case "f": // forward
          moveForward(object);
          break;
           case "b": // forward
          moveBackward(object);
          break;
      };
      
      console.log(object.travelLog);

    }
  }
}

console.log(board);
command("rfffffrffffbbzbbbb", rover1);
console.log(board);