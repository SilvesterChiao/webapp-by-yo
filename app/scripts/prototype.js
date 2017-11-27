/*
* Prototype
* 原型模式
*/

var myCar = {
    name: 'Ford Escort',
    drive: function(){
        console.log('Weeee. I\'m driving!');
    },
    panic: function(){
        console.log('Wait. How do you stop this thing?');
    }
};

var yourCar = Object.create(myCar);
console.log(yourCar.name);

// var vehicle = {
//     getModel: function(){
//         console.log('The model of this vehicle is.. ' + this.model);
//     }
// };

// var car = Object.create(vehicle, {
//     'id': {
//         value: MY_GLOBAL.nextId(),
//         enumerable: true
//     },
//     'model': {
//         value: 'Ford',
//         enumerable: true
//     }
// });

var vehiclePrototype = {
    init: function(carModel){
        this.model = carModel;
    },
    getModel: function(){
        console.log('The model of this vehicle is.. ' + this.model);
    }
};

function vehicle(model){
    function F(){  };
    F.prototype = vehiclePrototype;

    var f = new F();
    f.init(model);
    return f;
}

var car = vehicle('Ford Escort');
car.getModel();

var beget = (function(){
    function F(){  }
    return function(proto){
        F.prototype = proto;
        return new F();
    };
})();

// 原型，构造器混合模式
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}
Person.prototype = {
    constructor : Person,
        sayName : function(){
        alert(this.name);
    }
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
// alert(person1.friends); //"Shelby,Count,Van"
// alert(person2.friends); //"Shelby,Count"
// alert(person1.friends === person2.friends); //false
// alert(person1.sayName === person2.sayName); //true

// var Dog = function(name, age){
//     var _name = name;
//     var _age = age;
//     function eat(){
//         console.log('骨头');
//     }
// }

// var dog1 = Dog();
// Dog.eat();

(function(){
    var _SIL = function(){};

    _SIL.prototype.alert = function(){
        console.log('OK');
    }

    window.Sil = new _SIL();
})();

Sil.alert();
