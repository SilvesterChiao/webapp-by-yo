// 表单控件绑定
// 基础用法
// 你可以用v-model指令在表单控件元素上创建双向数据绑定。

// 1.文本
var example1 = new Vue({
	el: '#example-1',
	data: {
		message: ''
	}
});

// 2.多行文本
var example2 = new Vue({
	el: '#example-2',
	data: {
		message: ''
	}
});

// 3.复选框
var example3 = new Vue({
	el: '#example-3',
	data: {
		checked: false
	}
});

var example4 = new Vue({
	el: '#example-4',
	data: {
		checkedNames: []
	}
});

// 4.单选按钮
var example5 = new Vue({
	el: '#example-5',
	data: {
		picked: ''
	}
});

// 5.选择列表
var example6 = new Vue({
	el: '#example-6',
	data: {
		selected: null
	}
});

var example7 = new Vue({
	el: '#example-7',
	data: {
		selected: []
	}
});

var example8 = new Vue({
	el: '#example-8',
	data: {
		selected: 'A',
		options: [
			{ text: 'One', value: 'A' },
			{ text: 'Two', value: 'B' },
			{ text: 'Three', value: 'C' }
		]
	}
});