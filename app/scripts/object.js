/*
* Object
* 对象
*/

// 创建， 设置， 查找， 删除， 检测， 枚举
// 属性特性：可写， 可枚举， 可配置
// 对象特性: 原型， 类， 扩展标记
// 内置对象， 宿主对象， 自定义对象， 自有属性， 继承属性

// 创建对象: 对象直接量， new， Object.create()
var empty = {};
var point = {
    x: 0,
    y: 0
};
var point2 = {
    x: point.x,
    y: point.y + 1
};
var book = {
    "main title": "JavaScript",
    "sub-title": "The Definitive Guide",
    "for": "all audiences",
    author: {
        firstname: 'David',
        surname: 'Flanagan'
    }
};

var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp('js');

var o1 = Object.create({x: 1, y: 2});


function inherit(p){
    if(p == null) throw TypeError();
    if(Object.create){
        return Object.create(p);
    }
    var t = typeof p;
    if(t !== 'object' && t !== 'function') throw TypeError();
    function f(){};
    f.prototype = p;
    return new f();
}

// var o = {};
// o.x = 1;
// var p = inherit(o);
// p.y = 2;
// var q = inherit(p);
// q.z = 3;
// var s = q.toString();
// console.log(q.x + q.y);
// console.log(q.hasOwnProperty('z'));

var p = {
    x: 1.0,
    y: 1.0,
    get r(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    set r(newvalue){
        var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newvalue / oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta(){
        return Math.atan2(this.y, this.x);
    }
};

var q = inherit(p);
q.x = 1, q.y = 1;
console.log(q.r);
console.log(q.theta);
