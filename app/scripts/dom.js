/*
* DOM
*/

// 选取文档元素
// 通过ID选取
var section1 = document.getElementById('section1');
console.log(section1.nodeType + '-' + section1.nodeName + '-' + section1.nodeValue);

function getElements(){
    var elements = {};

    for(var i = 0; i < arguments.length; i++){
        var id = arguments[i];
        var elt = document.getElementById(id);
        if(elt == null){
            throw new Error('No element with id: ' + id);
        }
        elements[id] = elt;
    }

    return elements;
}
