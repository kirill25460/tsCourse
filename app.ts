const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});


let age:number; age = 50;
let names:string; names = 'Max';
let toggle:boolean; toggle = true;
let empty:null; empty = null;
let notInitialize:undefined; notInitialize = undefined;
let callback = (a: number) => number;
callback = (a) => { return 100 + a };

let anything:any;
anything= 10;
anything= "fire";
anything= true;
anything= {};
