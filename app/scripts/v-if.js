// 条件渲染


// v-if
var vm1 = new Vue({
	el: '#vm1',
	data: {
		ok: false
	}
});

// template中v-if 条件组
var vm2 = new Vue({
	el: '#vm2',
	data: {
		ok: true
	}
});

// v-else
var vm3 = new Vue({
	el: '#vm3',
	data: {

	}
});

// v-if-else
var vm4 = new Vue({
	el: '#vm4',
	data: {
		type: 'C'
	}
});

// 用key管理可复用的元素


// v-show