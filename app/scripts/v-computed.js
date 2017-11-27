// 计算属性
var vm = new Vue({
	el: '#example',
	data: {
		message: 'Hello'
	},
	computed: {
		reversedMessage: function(){
			return this.message.split('').reverse().join('');
		}
	}
});

// computed vs methods
// computed是基于他们的依赖进行缓存的，如果不希望有缓存，请用methods替代

// computed vs watch
var vm1 = new Vue({
	el: '#demo',
	data: {
		firstName: 'Foo',
		lastName: 'Bar'
	},
	computed: {
		fullName: function(){
			return this.firstName + ' ' + this.lastName;
		}
	}
});
var vm2 = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val;
    }
  }
});