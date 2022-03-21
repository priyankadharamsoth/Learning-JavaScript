//premitive datatypes
let name = 'priyanka';
let age = 22;
let isGraduated = true;
let job = undefined;
let salary = null;

//reference datatypes

let girl = {
    nameof: 'priyanka',
    ageof : 22,
    eyecolor : 'black'

};
//change any field
girl.nameof = 'priya';
//or 
girl['nameof'] = 'ammu';
//console.log(girl)


//arrays

let gadgets = ['laptops','mobiles','tabs'];
//you can access them using indexing
//console.log(gadgets[1])
//youu can add items to the list
gadgets.push(2)
gadgets.push('desktops')

console.log(gadgets.pop())
