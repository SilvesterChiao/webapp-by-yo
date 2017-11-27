// Vue.component('add-todo', {
// 	template: '\
// 		<div>\
// 			<input type="text" v-model="addTodo.text" placeholder="新增事项">\
// 			<input type="text" v-model="addTodo.time" placeholder="时间">\
// 			<button v-on:click="addTodolist">添加</button>\
// 		</div>\
// 	',
// 	data: function(){
// 		return {
// 			addTodo: {
// 				text: '',
// 				time: ''
// 			}
// 		}
// 	},
// 	methods: {
// 		addTodolist: function(){
// 			var data = {
// 				text: this.addTodo.text,
// 				time: this.addTodo.time,
// 				number: 1,
// 				state: 'todo'
// 			};

// 			this.$emit('addTodolist', data);
// 			console.log('新增事项');
// 		}
// 	}
// });

// var todo = new Vue({
// 	el: '#todo',
// 	data: {
// 		todos: [
// 			{
// 				id: 0,
// 				date: '5.22',
// 				content: [
// 					{
// 						text: '吃饭',
// 						time: '18:30',
// 						number: 1,
// 						state: 'done'
// 					}
// 				]
// 			},
// 			{
// 				id: 1,
// 				date: '5.23',
// 				content: [
// 					{
// 						text: '吃饭',
// 						time: '18:30',
// 						number: 1,
// 						state: 'todo'
// 					}
// 				]
// 			},
// 			{
// 				id: 2,
// 				date: '装机',
// 				content: [
// 					{
// 						text: 'CPU',
// 						time: '18:30',
// 						number: 1,
// 						state: 'doing'
// 					},
// 					{
// 						text: '显卡',
// 						time: '18:30',
// 						number: 2,
// 						state: 'todo'
// 					},
// 					{
// 						text: '主板',
// 						time: '18:30',
// 						number: 3,
// 						state: 'todo'
// 					},
// 					{
// 						text: '内存条',
// 						time: '18:30',
// 						number: 4,
// 						state: 'todo'
// 					},
// 					{
// 						text: '显示器',
// 						time: '18:30',
// 						number: 5,
// 						state: 'todo'
// 					}
// 				]
// 			}
// 		]
// 	},
// 	methods: {
// 		addDay: function(event){
// 			var now = new Date();
// 			var year = now.getFullYear();
// 			var month = now.getMonth() + 1;
// 			var date = now.getDate();
// 			var today = year + '-' + month + '-' + date;
// 			this.todos.push({
// 				id: this.todos.length,
// 				date: today,
// 				content: []
// 			});
// 		},
// 		addTodo: function(newTodolist){
// 			console.log('新增事项');
// 			this.todos[0].content.push(newTodolist);
// 		}
// 	}
// });

var todo = new Vue({
	el: '#todo',
	data: {
		newTodo: {
			title: '',
			done: false
		},
		todoList: [
			{
				title: '吃饭',
				done: true
			}
		]
	},
	methods: {
		addTodo: function(){
			this.todoList.push(this.newTodo)
			this.newTodo = ''
		}
	}
})