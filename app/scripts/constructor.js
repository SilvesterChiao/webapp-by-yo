/*
* Constructor
* 构造器模式
*/

// 将键值赋给一个对象
// newObject.someKey = 'Hello World!';
// var key = newObject.someKey;

// newObject['somekey'] = 'Hello World!';
// var key = newObject['someKey'];

// Object.defineProperty(newObject, 'someKey', {
//     value: 'for more controle of the property\'s behavior',
//     writable: true,
//     enumerable: true,
//     configurable: true
// });
var defineProp = function(obj, key, value){
    var config = {
        writable: true,
        enumerable: true,
        configurable: true
    }
    config.value = value;
    Object.defineProperty(obj, key, config);
};
var person = Object.create(null);
defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);

// Object.defineProperties(newObject, {
//     'someKey': {
//         value: 'Hello World!',
//         writable: true
//     },
//     'anotherKey': {
//         value: 'Foo bar',
//         writable: true
//     }
// });

var driver = Object.create(person);
defineProp(driver, 'topSpeed', '100mph');
console.log(driver.dateOfBirth);
console.log(driver.topSpeed);

// 基本构造器
// function Car(model, year, miles){
//     this.model = model;
//     this.year = year;
//     this.miles = miles;

//     this.toString = function(){
//         return this.model + ' has done ' + this.miles + ' miles';
//     }
// }

// 带原型的构造器
function Car(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function(){
    return this.model + ' has done ' + this.miles + ' miles';
}
