//object creation

function createHuman(){
    let human = new Object();
    human.name = 'priyanka';
    human.age = 22;
    human.isGraduated = true;
    return human
}
//second way to create an object
function createPerson(){
    let person = {};
    person.name = 'Ammu';
    person.age = 22;
    person.isGraduated = true;
    return person
}
//third way is like we use square notation instead of dot notation

function createhuman(){
    let human = new Object();
    human['name'] = 'priya';
    human['age']= 22;
    human['isGraduate'] = true;
    return human
}
// let priya = createhuman();
// alert("name:"+" "+priya.name)

//method-4
//function createperson(){
let person = {
        name : 'PRIYANKA',
        age : 22,
        isGraduated : true,
        printIntroduction : function(){
            console.log(`My name is ${this.name}. Am I
                studying?: ${this.isGraduated}.`)
    },
}

let obj1 = Object.create(person);
obj1.name = 'chotulu'
obj1.isGraduated = true;
obj1.printIntroduction();

//console.log(createperson())
//method-5

function Animal(){
    this.name = 'dog',
    this.color = 'white'
}
let obj = new Animal();
//alert('name'+" "+obj.name+" "+obj.color)

let dog = Object.create(Animal);
dog.name = 'snoopy';
dog.color = 'black';
dog.age = 2;

//console.log(dog.name)

//delete a propert

let Birds = {
    name : 'dove',
    color: 'white'
}
let blank = "";
for (i in Birds){
    blank += i+ " ";
}

//console.log(blank)


