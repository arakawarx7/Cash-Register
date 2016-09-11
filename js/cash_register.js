var calc = calculatorModule();
var storedNum = calc.memory;
var clearScr = '';

var btnBox = document.getElementById('buttonBox');
//var clear = document.getElementById('clearDiv');
var clearContainer = document.getElementById('clearDiv');
var clr = createClearButton( clearContainer );


var add = document.getElementById('addDiv');
var addBut = document.createElement('button');
//var addDis = '+';

var sub = document.getElementById('subtractDiv');
var subBut = document.createElement('button');
//var subDis = '-';

var mult = document.getElementById('multiplyDiv');
var multBut = document.createElement('button');
//var multDis = '*';

var div = document.getElementById('divideDiv');
var divBut = document.createElement('button');
//var divDis = '/';

var operators = ['+','=','*','/'];
var display = document.getElementById('display');


var equals = document.getElementById('equalsDiv');
var equalsBut = document.createElement('button');
//var eqaulsDis = '=';

var bal = document.getElementById('specialButDiv');
var balBut = document.createElement('button');

var depBut =  document.createElement('button');
var withBut = document.createElement('button');

var balance = 0;
createNumButton([1,2,3,4,5,6,7,8,9,0,]);

addScreen();
equalsScreen();
subScreen();
multiplyScreen();
divideScreen();
balanceScreen();
depositScreen();
withdrawScreen();

//var storedNum = 0;
var nextStoredNum = 0;
var clickOperation ="";
function createNumButton(numbers){
  for (var i = 0; i < numbers.length; i++) {
    var btn = document.createElement('button');


    btn.id = numbers[i];
    btn.innerHTML = numbers[i];
    btn.addEventListener('click',function(){
      console.log(this.id); //
      // updates the display area
    display.innerHTML += this.id;
    memory = display.innerHTML;

    console.log('calc.total , memory',calc.total,memory);

    });

    btnBox.appendChild(btn);
  }
}
function createClearButton( container ){
  var button = document.createElement('button');
  button.addEventListener('click',function(){
    calc.clearMemory(parseInt(display.innerHTML));
    display.innerHTML = clearScr;
  });
  button.innerHTML ="clear";
  container.appendChild(button);

  return button;
}

// function clearScreen(){

//   clr.addEventListener('click',function(){
//     console.log(this.id); //
//         // updates the display area

//     calc.clearMemory(Number(storedNum));
//     display.innerHTML = clearScr;
//     console.log('new stored number', storedNum);
//   });
//   clr.innerHTML ="clear";
//   clear.appendChild(clr);
// }

function addScreen(){
  addBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area
    calc.load(parseInt(display.innerHTML));
    console.log('total', calc.total);
    display.innerHTML = "";
    console.log('+');
    clickOperation = '+';
  });
  addBut.innerHTML ="+";


  //console.log('clickOperation',clickOperation);
  add.appendChild(addBut);


}

function subScreen(){
  subBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area
    calc.load(parseInt(display.innerHTML));
    //calc.subtract(parseInt(display.innerHTML));
    display.innerHTML = "";
    clickOperation = '-';
    console.log( '-');
  });
  subBut.innerHTML ="-";

  //conosole.log('clickOperation',clickOperation);
  add.appendChild(subBut);
}

function multiplyScreen(){
  multBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area
    calc.load(parseInt(display.innerHTML));
    display.innerHTML = "";
    console.log('running * function');
    clickOperation = '*';
  });
  multBut.innerHTML ='*';

  add.appendChild(multBut);
}

function divideScreen(){
  divBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area
    calc.load(parseInt(display.innerHTML));
    display.innerHTML = "";
    console.log('running / function');
    clickOperation = '/';
  });
  divBut.innerHTML ='/';

  add.appendChild(divBut);
}

function balanceScreen(){
  balBut.addEventListener('click',function(){
      // updates the display area
    display.innerHTML = parseInt(balance);
    console.log(balance);
    clickOperation = 'bal';
  });
  balBut.innerHTML ='get balance';

  add.appendChild(balBut);
}

function depositScreen(){
  depBut.addEventListener('click',function(){
      // updates the display area
      balance += parseInt(display.innerHTML);
    display.innerHTML = "";
    console.log('depsit', balance);
    clickOperation = 'dep';
  });
  depBut.innerHTML ='deposit cash';

  bal.appendChild(depBut);
}

function withdrawScreen(){
  withBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area
    balance -= parseInt(display.innerHTML);
    display.innerHTML = "";
    console.log('withdraw', balance);
    clickOperation = 'dep';
  });
  withBut.innerHTML ='withdraw cash';

  bal.appendChild(withBut);
}






function equalsScreen(){
  equalsBut.addEventListener('click',function(){
    console.log(this.id); //
      // updates the display area()
     if(clickOperation === "+"){
      calc.add(parseInt(display.innerHTML));
      display.innerHTML = calc.getTotal();
    }if(clickOperation === "-"){
      calc.subtract(parseInt(display.innerHTML));
      display.innerHTML = calc.getTotal();
    }if(clickOperation === "*"){
      calc.multiply(parseInt(display.innerHTML));
      display.innerHTML = calc.getTotal();
    }if(clickOperation === "/"){
      calc.divide(parseInt(display.innerHTML));
      display.innerHTML = calc.getTotal();
    // }if(clickOperation === "get"){
    //   calc.recalMemory(parseInt(display.innerHTML));
    //   display.innerHTML = calc.getTotal();
    }
  });
  equalsBut.innerHTML = "=";
  add.appendChild(equalsBut);


}



function add(){
  var sum =display.innerHTML + display.innerHTML;
   }