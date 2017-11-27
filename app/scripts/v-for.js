var example1 = new Vue({
	el: '#example-1',
	data: {
		items: [
			{message: 'Foo'},
			{message: 'Bar'}
		]
	}
});

var example2 = new Vue({
	el: '#example-2',
	data: {
		parentMessage: 'Parent',
		items: [
			{message: 'Foo'},
			{message: 'Bar'}
		]
	}
});

// 对象迭代 v-for
var example3 = new Vue({
	el: '#example-3',
	data: {
		object: {
			FirstName: 'John',
			LastName: 'Doe',
			Age: 20
		}
	}
});

// 整数迭代 v-for
var example4 = new Vue({
	el: '#example-4'
});