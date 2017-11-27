// class与style绑定
// 1.绑定HTML Class
// 1.1对象语法
// 1.1.1我们可以传给 v-bind:class一个对象，以动态切换class
var vm1 = new Vue({
	el: '#vm1',
	data: {
		isActive: false
	}
});
// 1.1.2也可以在对象中传入更多属性用来动态切换多个class
// v-bind:class指令可以与普通class属性共存
var vm2 = new Vue({
	el: '#vm2',
	data: {
		isActive: true,
		hasError: false
	}
});
// 1.1.3也可以直接绑定数据里的一个对象
var vm3 = new Vue({
	el: '#vm3',
	data: {
		classObject: {
			active: true,
			'text-danger': false
		}
	}
});
// 1.1.4也可以绑定返回对象的计算属性
// 这是一个常用且强大的模式
var vm4 = new Vue({
	el: '#vm4',
	data: {
		isActive: true,
		error: null
	},
	computed: {
		classObject: function(){
			return {
				active: this.isActive && !this.error,
				'text-danger': this.error && this.error.type === 'fatal'
			}
		}
	}
});


// 1.2数组语法
var vm5 = new Vue({
	el: '#vm5',
	data: {
		activeClass: 'active',
		errorClass: 'text-danger'
	}
});

var vm6 = new Vue({
	el: '#vm6',
	data: {
		activeClass: 'active',
		errorClass: 'text-danger',
		isActive: false
	}
});

var vm7 = new Vue({
	el: '#vm7',
	data: {
		activeClass: 'active',
		errorClass: 'text-danger',
		isActive: false
	}
});

// 1.3用在组件上

// 2绑定内联样式
// 2.1对象语法
// v-bind:style的对象语法十分直观
var vm10 = new Vue({
	el: '#vm10',
	data: {
		activeColor: 'red',
		fontSize: 30
	}
});
// 直接绑定到一个样式对象通常更好，让模板更清晰
var vm11 = new Vue({
	el: '#vm11',
	data: {
		styleObject: {
			color: 'red',
			fontSize: '30px'
		}
	}
});
// 2.2数组语法
// v-bind:style的数组语法可以将多个样式对象应用到一个元素上
var vm12 = new Vue({
	el: '#vm12',
	data: {
		baseStyles: {
			color: 'red'
		},
		overridingStyles: {
			fontSize: '30px'
		}
	}
});
// 2.3自动添加前缀
// 当 v-bind:class 使用需要特定前缀的css属性时，如transform， Vue.js会自动侦测并添加相应的前缀
var vm13 = new Vue({
	el: '#vm13',
	data: {
		borderStyles: {
			border: '1px solid blue',
			'border-radius': '5px',
			transform: 'rotate(-5deg)'
		}
	}
});