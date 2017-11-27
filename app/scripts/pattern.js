// Constructor
// var civic = new Car('Honda Civic', 2009, 20000);
// var mondeo = new Car('Ford Mondeo', 2010, 5000);

// console.log(civic.toString());
// console.log(mondeo.toString());

// Module
var myModule = {
    myProperty: 'someValue',
    // 对象字面量可以包含属性和方法
    // 例如，可以声明模块配置对象
    myConfig: {
        useCaching: true,
        language: 'en'
    },
    // 基本方法
    myMethod: function(){
        console.log('Where in the world is Paul Irish today?');
    },
    // 根据当前配置输出信息
    myMethod2: function(){
        console.log('Caching is:' + (this.myConfig.useCaching) ? 'enabled' : 'disabled');
    },
    // 重写当前的配置
    myMethod3: function(newConfig){
        if(typeof newConfig === 'object'){
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
}

myModule.myMethod();
myModule.myMethod3({
    language: 'fr',
    useCaching: false
})

// Factory
function VehicleFactory(){  }
VehicleFactory.prototype.VehicleClass = Car;
VehicleFactory.prototype.createVehicle = function(options){
    if(options.vehicleType === 'car'){
        this.vehicleClass = Car;
    }else{
        this.vehicleClass = Truck;
    }
    return new this.vehicleClass(options);
};
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6
});

console.log(car instanceof Car);
console.log(car);
