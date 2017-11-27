var example1 = new Vue({
	el: '#example-1',
	data: {
		counter: 0
	}
})

var example2 = new Vue({
	el: '#example-2',
	data: {
		name: 'Vue.js'
	},
	methods: {
		greet: function(event){
			// 'this'在方法里指当前Vue实例
			alert('Hello ' + this.name + '!');
			// 'event'是原生DOM事件
			alert(event.target.tagName)
		}
	}
})

var example3 = new Vue({
	el: '#example-3',
	methods: {
		say: function(message){
			alert(message)
		}
	}
})

var example4 = new Vue({
	el: '#example-4',
	methods: {
		warn: function(message, event){
			if(event) event.preventDefault()
				alert(message)
		}
	}
})

Vue.config.keyCodes.f2 = 113

var example6 = new Vue({
	el: '#example-6',
	methods: {
		submit: function(event){
			// console.log('ok')
			console.log(event.key)
		}
	}
})