class Person {

    talk() {
        console.log('I am a talking person');
    }
}


console.dir(Person);
let megu = new Person();


Person.prototype.walking = function () {
    console.log('I am walking');
}
console.log(megu);


// class under the hood in javascript

//  creates function Person(){}
//      creates Person.prototype.talk = function(){
//          console.log('I am a talking person');


function PersonFunc(){
    this.personFuncTalking = function(){
        console.log('I am a  person func talking');
    }
}

console.dir(PersonFunc);
PersonFunc.prototype.walking = function () {
    console.log('I am walking 123');
}

let trial = new PersonFunc();
let trial1 = new PersonFunc();

console.dir(trial);
console.log(trial.walking());

console.log(trial1.walking());

trial.personFuncTalking =  function(){
    console.log('I am a  person func talking123');
}

trial.personFuncTalking();
trial1.personFuncTalking();

class SuperHumman extends Person{
    fly() {
        return "I am Flying"
    }
}

let aquaman = new SuperHumman();


