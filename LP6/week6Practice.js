var output = document.getElementById("outputs");

function while100(){
  output.innerHTML = "";
  var number1 = 0;
  var sum1 = 0;
  while(number1 < 100){
    number1++
    sum1 = sum1 + number1;
  }
  output.innerHTML = sum1;
}

function do100(){
  output.innerHTML = "";
  var number2 = 0;
  var sum2 = 0;
  do{
    number2++
    sum2 = sum2 + number2;
  }
  while(number2 < 100);
  output.innerHTML = sum2;
}

function for100(){
  output.innerHTML = "";
  var sum3 = 0;
  for(var number3 = 0; number3 < 100;){
    number3++;
    sum3 = sum3 + number3;
  }
  output.innerHTML = sum3;
}

var i = 0;
function fizzBuzz(){
  for(i = 0; i < 100; i++){
    isEven();
  }
}

function isEven(){
  output.innerHTML = "";
  if(i % 2 == 0){
    console.log("Fizz");
    output = output + 1;
  }else{
    isOdd();
  }
}

function isOdd(){
  if(Math.abs(i % 2) == 1){
    console.log("Buzz");
    output = output + 1;
  }else{
    isEven();
  }
}

function asciiTable(){
  output.innerHTML = "";
  var text = "";
  for(var i=0; i<256; i++){
    text += i + ": " + String.fromCharCode(i) + "<br>";
    console.log(String.fromCharCode(i));
  }
  output.innerHTML = text;
}

function nonEmpty(){
  output.innerHTML = "";
  var array = []
  var i = 0;
  if(i <= (array.length - 1)){
    output.innerHTML = ("Array has values! " + array);
    console.log(array);
  }else{
    output.innerHTML = ("Array is empty! " + array);
    console.log(array);
  }
}

var emailList = [];
function emails(){
  output.innerHTML = "";
  var email = prompt("Enter email below:\n*hit cancel or leave blank to end list\n**input clear or empty to clear list");
  if(!email){
    output.innerHTML = emailList;
    return;
  }
  emailList.push(email);
  if(email === "clear" || email === "empty"){
    emailList.length = 0;
  }
  emails();
}
