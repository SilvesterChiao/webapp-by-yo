// jquery插件
;(function($, window, document, undefined){
    // 定义Beautifier的构造函数
    var Beautifier = function(ele, opt){
        this.$element = ele;
        this.defaults = {
            color: 'red',
            fontSize: '12px',
            textDecoration: 'none'
        };
        this.options = $.extend({}, this.defaults, opt);
    }

    // 定义Beautifier的方法
    Beautifier.prototype = {
        beautify: function(){
            return this.$element.css({
                color: this.options.color,
                fontSize: this.options.fontSize,
                textDecoration: this.options.textDecoration
            })
        }
    }

    // 在插件中使用Beautifier对象
    $.fn.myPlugin = function(options){
        // 创建Beautifier的实体
        var beautifier = new Beautifier(this, options);
        // 调用其方法
        return beautifier.beautify();
    }
})(jQuery, window, document);

// 原生ajax
var xmlrequest;
function createXMLHttpRequest(){
	if (window.XMLHttpRequest) {
		xmlrequest = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		//IE浏览器
		try{
			xmlrequest = new ActiveXObject("Msxm12.XMLPTTP");
		}catch(e){
			try{
				xmlrequest = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){

			}
		}
	}
}

function click(){
	console.log("点击按钮");
	//初始化XMLHttpRequest对象
	createXMLHttpRequest();
	//设置请求响应的URL
	var uri = "http://localhost:3004/user";
	//打开与服务器响应地址的连接
	xmlrequest.open("POST",uri,true);
	//设置请求头
	xmlrequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//设置处理响应的回调函数
	xmlrequest.onreadystatechange = processResponse;
	//发送请求
	xmlrequest.send(null);
}
//定义处理响应的回调函数
function processResponse(){
	//响应完成且响应正常
	if(xmlrequest.readyState == 4){
		if(xmlrequest.status == 200){
			//信息已经成功返回，开始处理信息
			var headers = xmlrequest.getAllResponseHeaders();
			//通过警告框输出响应头
			console.log("响应头的类型：" + typeof headers + "\n" + headers);
			//在页面输出所有响应头
			$("#ajax-output-js").text(headers);
			// 返回数据
			// console.log(xmlrequest.responseText);
			// JSON化
			// console.log(JSON.parse(xmlrequest.responseText));
			var userInfo = JSON.parse(xmlrequest.responseText);
			var str = "姓名：" + userInfo.name + "\n";
			str += "年龄：" + userInfo.age + "\n";
			document.getElementById("ajax-info-js").innerHTML = str;
		}else{
			//页面不正常
			console.log(xmlrequest.status);
			console.log("您所请求的页面有异常。");
		}
	}
}

$("#ajax-btn-js").on('click',click);

// jQuery ajax
$("#ajax-btn-jq").on('click',function(){
	$.ajax({
		url: 'http://localhost:3004/user',
		type: 'POST',
		dataType: 'JSON',
		success: function(data){
			var user = data;
			console.log(user);
			//获取模板
			var template = $("#user-tem").html();
			//预编译模板
			Mustache.parse(template);
			//渲染模板，并指定tem到user的映射
			var view = Mustache.render(template,{tem:user});
			$("#ajax-info-jq").empty().append(view);
		}
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
});

// jQuery get
$("#jq-get").on('click',function(){
	$.get('',function(d){
		console.log(d);
	});
});

// jsonp
$("#ajax-btn-jsonp").on('click',function(){
	$.get('http://localhost:3004/getinfo', function(d){
	    // $("#ajax-output-jsonp").text(d.email);
	    $("#ajax-info-jsonp").text('email:' + d.email + ', name:' + d.name);
	}, 'jsonp');
});
