// 0 什么是组件
// 0.1 组件是Vue.js最强大的功能之一。组件可以扩展HTML元素，封装可重用的代码。
// 1 使用组件
// 1.1 注册
Vue.component('my-component', {
	// 选项
	template: '<div>A custom component!</div>'
});


new Vue({
	el: '#vm1'
});

// 1.2 局部注册
var Child = {
	template: '<p>A custom component!</p>'
};

var vm2 = new Vue({
	el: '#vm2',
	components: {
		'your-component': Child
	}
});

// 1.3 DOM模板解析说明

// 1.4 data必须是函数
var data = { counter: 0 };

Vue.component('simple-counter', {
	template: '<button v-on:click="counter += 1">{{ counter }}</button>',
	data: function(){
		// return data;
		return {
			counter: 0
		}
	}
});

var vm3 = new Vue({
	el: '#vm3'
});

// 1.5 构成组件


// 2 Prop
// 2.1 使用Prop传递数据
Vue.component('child', {
	props: ['myMessage'],
	template: '<span>{{ myMessage }}</span>'
});

var vm4 = new Vue({
	el: '#vm4'
});

// 2.2 动态Prop

// new Vue({
// 	el: '#vm5',
// 	data: {
// 		parentMsg: 'Message from parent'
// 	},
// 	components: {
// 		child: {
// 			props: {
// 				myMessage: {
// 					type: String
// 				}
// 			},
// 			template: '<span>{{ myMessage }}</span>'
// 		}
// 	}
// });
new Vue({
    el: '#vm5',
    data: {
        todo: {
            text: 'Learn Vue',
            isComplete: true
        }
    },
    components: {
        child: {
            props: ['text', 'isComplete'],
            template: '<span v-if="isComplete">{{ text }}</span>'
        }
    }
});

// 2.3 字面量语法 vs 动态语法

// 2.4 单向数据流

// 2.5 Prop验证


// 3 自定义事件
// 3.1 使用v-on绑定自定义事件
Vue.component('button-counter', {
	template: '<button v-on:click="increment">{{ counter }}</button>',
	data: function(){
		return {
			counter: 0
		}
	},
	methods: {
		increment: function(){
			this.counter += 1;
			this.$emit('increment');
		}
	}
});

new Vue({
	el: '#vm6',
	data: {
		total: 0
	},
	methods: {
		incrementTotal: function(){
			this.total += 1;
		}
	}
});

// 3.2 使用自定义事件的表单输入组件
Vue.component('currency-input', {
	template: '\
		<span>\
			$\
			<input\
				ref="input"\
				v-bind:value="value"\
				v-on:input="updateValue($event.target.value)"\
			>\
		</span>\
	',
	props: ['value'],
	methods: {
		// 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
		updateValue: function(value){
			var formattedValue = value
			// 删除两侧的空格符
			.trim()
			// 保留2小数位
			.slice(0, value.indexOf('.') + 3)
			// 如果值不统一，手动覆盖以保持一致
			if(formattedValue !== value){
				this.$refs.input.value = formattedValue
			}
			// 通过input事件发出数值
			this.$emit('input', Number(formattedValue))
		}
	}
});

new Vue({
	el: '#vm7',
	data: {
		price: 0
	}
});
// 3.3 非父子组件通信


// 4 使用Slot分发内容


// 5 动态组件


// 6 杂项


// example
new Vue({
    el: '#example',
    data: {
        msg: 'parent',
        number: 0
    },
    methods: {
        parentAdd: function(msg){
            this.number += 1;
            console.log(msg);
        }
    },
    components: {
        child: {
            props: {
                parentMsg: {
                    type: String
                }
            },
            data: function(){
                return {
                    childMsg: 'child'
                }
            },
            template: '<div><span>{{ parentMsg }} - {{ childMsg }}</span><button v-on:click="add">加1</button></div>',
            methods: {
                add: function(){
                    console.log('发送add事件');
                    this.$emit('add', this.childMsg);
                }
            }
        }
    }
});

// transition
new Vue({
    el: '#demo',
    data: {
        show: true
    }
})
