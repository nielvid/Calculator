//var btn = document.getElementsByTagName('button');
//btn[6].onclick = btn1();

//console.log(btn);
/*
c.childNodes[1].innerHTML = 2;
c.childNodes[2].innerHTML = 3;
console.log(c);*/
var display = document.getElementById('mem');
 

 var input = document.getElementsByTagName('input');
 input[0].value = " ";


function btnof(){
	var input = document.getElementsByTagName('input');
	input[0].value  = 0;

//input[0].value + = " ";
} 

function btn0(){
	var input = document.getElementsByTagName('input');
input[0].value += 0;

} 

function btn1(){
	var input = document.getElementsByTagName('input');
input[0].value += 1;

} 

function btn2(){
	var input = document.getElementsByTagName('input');
input[0].value += 2;

} 
function btn3(){
	var input = document.getElementsByTagName('input');
input[0].value += 3;

} 
function btn4(){
	var input = document.getElementsByTagName('input');
input[0].value += 4;

} 
function btn5(){
	var input = document.getElementsByTagName('input');
input[0].value += 5;

} 
function btn6(){
	var input = document.getElementsByTagName('input');
input[0].value += 6;

} 
function btn7(){
	var input = document.getElementsByTagName('input');
input[0].value += 7;

} 
function btn8(){
	var input = document.getElementsByTagName('input');
input[0].value += 8;

}
function btn9(){
	var input = document.getElementsByTagName('input');
input[0].value += 9;

}  
function btnM(){
	var input = document.getElementsByTagName('input');
input[0].value += '-';

} 
function btnMu(){
	var input = document.getElementsByTagName('input');
input[0].value += '*';

} 
function btnDv(){
	var input = document.getElementsByTagName('input');
input[0].value += '/';

} 

function btnMo(){
	var input = document.getElementsByTagName('input');
input[0].value += '%';

} 

function btnP(){
	var input = document.getElementsByTagName('input');
		

input[0].value += "+"

} 
function btnDot(){
	var input = document.getElementsByTagName('input');
input[0].value += ".";
display.innerHTML += '';

} 
function btnCl(){
	var input = document.getElementsByTagName('input');
input[0].value = " ";
display.innerHTML = '';

} 

function btnMem(){
	var input = document.getElementsByTagName('input');
input[0].value = eval(input[0].value);

 var operator; 

 switch(operator){

 	case '+':
 	display.innerHTML +=  input[0].value;
 	break;

 case '-':
 	display.innerHTML -=  input[0].value;
 	break;
case '/':
 	display.innerHTML /=  input[0].value;
 	break;

 }
/*
var y = input[0].value; 

 input[0].value += " ";

*/

} 

function btnBsp(){
	var input = document.getElementsByTagName('input');
input[0].value = input[0].value.substring(0, input[0].value.length - 1 );

} 
function btnR(){
	var input = document.getElementsByTagName('input');
//input[0].value = eval(input[0].value);
display.innerHTML = eval(input[0].value);

} 
function whatever(){
 
return input.value ;
}