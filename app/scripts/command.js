/*
* command
* 命令模式
*/

(function(){
    var CarManager = {
        // 请求信息
        requertInfo: function(model, id){
            return 'The infomation for ' + model + 'with ID' + id + ' is foobar';
        },
        // 订购汽车
        buyVehicle: function(model, id){
            return 'You have successfully purchased Item ' + id + ', a ' + model;
        },
        // 组织一个 view
        arrangeViewing: function(model, id){
            return 'You have successfully booked a viewing of ' + model + ' (' + id + ')';
        }
    };
})();
