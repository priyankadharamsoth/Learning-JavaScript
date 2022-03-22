function Sum(a, b){
    c = a+b;
    console.log(c)
};

let a = 5
let b = 10
//Sum(a,b);


//anonymous function
let anon = function(a,b){
    return a+b
}
console.log(anon(5,6));

//another example. function parameter for another function
setTimeout(function(){
    console.log('in the anonymous funciton')
},3000); 


//using constructors:

let addFunct = new Function("a","b","console.log('in the constructor');return a+b;");
console.log(addFunct(5,6))

//using self-invoking 
(function (a,b){
    console.log('in self invokin gfunction')
    return a+b
})(5,6);

// (function (a){
//     console.log('in self invoking')
//     return a*a
// })(3);






//conditional statements:



//let list = [1,2,6,4,3,2];
// if (list[0] < list[1]){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }

