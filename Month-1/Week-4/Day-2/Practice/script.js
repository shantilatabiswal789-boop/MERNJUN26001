// what is array
let arr=[1,2,3,4,6,5];

// arr.push(21);
// console.log(arr);
// arr.pop()
// arr.pop()
// console.log(arr);

// arr.unshift(-1,0);
// console.log(arr);
// arr.shift()
// console.log(arr);

// console.log(arr.length);
// console.log(arr.concat([11,22,33]));
// console.log(arr);//0,1,2,3,4,5
// arr.splice(3,2,19)
// console.log(arr);

// console.log(arr.join(""));

// console.log(arr.toReversed());
// onsole.log(arr);
console.log(arr.sort());

// function
// types of function
// Anynomous fun
// named fun
// Expressional fun
// Arrow fun

//function(){

//}
function fun1 (){
    console.log("this is a named function")
}
fun1()

let fun2=function(){
    console.log("this is the expression fun")
}
fun2()

console.log(typeof fun2);

let arrFun=()=>{
    console.log("this is arrow function")
}
arrFun()

let checkEvenNumber=function(number){
  if (number%2==0){
    console.log(number + " is even num")
  }
}
checkEvenNumber(24);
checkEvenNumber(40);
// higher order function
function returnValue(){
    return 30
}
let value=returnValue();
console.log(value)

function hof(func){
    func()
}
hof(()=>{
    console.log("this is arrow function")
})
// console.log("hii" + 30)

// special function of array 
// forEach()
// map()
// filter()
// reduce()
// sort()

// forEach()
let arr1=[1,2,3,4,5,6];
arr.forEach((v,i)=>{
   console.log(v+1)
})

let updateArr=arr1.map((v,i)=>{
    return v * v;
});
console.log(updateArr);
