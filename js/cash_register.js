var calc = calculatorModule();
var storedNum = calc.memory;
var clearScr = '0';

var btnBox = document.getElementById('buttonBox');
var clear = document.getElementById('clearDiv');

var clr = document.createElement('button');

var add = document.getElementById('addDiv');
var addBut = document.createElement('button');
var addDis = '+';

var sub = document.getElementById('subtractDiv');
var subBut = document.createElement('button');
var subDis = '-';

var mult = document.getElementById('multiplyDiv');
var multBut = document.createElement('button');
var multDis = '*';


var operators = ['+','=','*','/'];
var display = document.getElementById('display');


var equals = document.getElementById('equalsDiv');
var equalsBut = document.createElement('button');
var eqaulsDis = '=';

createNumButton([1,2,3,4,5,6,7,8,9]);
clearScreen();
addScreen();
equalsScreen();
subScreen();
multiplyScreen();

//var storedNum = 0;
var nextStoredNum = 0;


var total = 0;
var clickOperation;
function createNumButton(numbers){
  for (var i = 0; i < numbers.length; i++) {
    var btn = document.createElement('button');


    btn.id = numbers[i];
    btn.innerHTML = numbers[i];
    btn.addEventListener('click',function(){
      console.log(this.id); //
      // updates the display area
    display.innerHTML += this.id;
    storedNum = display.innerHTML;
    console.log('stored number',storedNum);
    });

    btnBox.appendChild(btn);
  }
}


function clearScreen(){

  clr.addEventListener('click',function(){
    console.log(this.id); //
        // updates the display area

    calc.clearMemory(Number(storedNum));
    display.innerHTML = clearScr;
    console.log('new stored number', storedNum);
  });
  clr.innerHTML ="clear";
  clear.appendChild(clr);
}

function addScreen(){
  addBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area
      calc.add(Number(storedNum));
    display.innerHTML = addDis;
  });
  addBut.innerHTML ="+";

 // clickOperation = '+';

    add.appendChild(addBut);


}

function subScreen(){
  subBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area
      calc.subtract(Number(storedNum));
    display.innerHTML = subDis;
  });
  subBut.innerHTML ="-";

  clickOperation = '-';

    sub.appendChild(subBut);


}

function multiplyScreen(){
  multBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area
      calc.multiply(Number(storedNum));
      console.log('running * function');
    display.innerHTML = multDis;
  });
  multBut.innerHTML ='*';

  clickOperation = '*';

    mult.appendChild(multBut);
}

function equalsScreen(){
  equalsBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area

    display.innerHTML = calc.getTotal();
  });
  equalsBut.innerHTML = "=";


  equals.appendChild(equalsBut);


}



function add(){
  var sum =display.innerHTML + display.innerHTML;
   }