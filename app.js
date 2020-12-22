Vue.component('greeting', {
	template: '<p>hey There {{ name }}. <button v-on:click="changeName">Change name</button></p>',
	data: function() {
		return {
			name: 'Yoshi'
		}
	},
	methods: {
		changeName: function () {
			this.name = 'Mario';
		}
	}
});

var one = new Vue({
	el: '#vue-app',
	data: {
		title: 'Hello World!',
		name: '',
		job: 'janitor',
		website: 'http://google.com',
		websiteTag: '<a href="http://google.com">The Net Ninja</a>',
		age: '',
		ag3: 20,
		x: 0,
		y: 0,
		a: 0,
		b: 0,
		available: false,
		nearby: false,
		error: false,
		success: false,
		characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
		ninjas :[
			{ name: 'Ryu', age: 25},
			{ name: 'Yoshi', age: 35},
			{ name: 'Ken', age: 55}
		],
		output: 'Your fav food'
	},
	methods: {
		greet: function (time) {
			return 'Good ' + time + ' ' +  this.name;
		},
		add: function (inc) {
			return this.age += inc;
		},
		subtract: function (dec) {
			return this.age -= dec;
		},
		updateXY: function (event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		click: function() {
			alert("you clicked");
		},
		logName: function() {
			console.log('entered name');
		},
		logAge: function() {
			console.log('entered age');
		},
		greet: function() {
			return 'Hey! one';
		},
		readRefs: function() {
			console.log(this.$refs.test.innerText);
			this.output = this.$refs.input.value;
		}
	},
	computed: {
		addToA: function() {
			console.log('addToA');
			return this.a + this.ag3;
		},
		addToB: function() {
			console.log('addToB');
			return this.b + this.ag3;
		},
		compClasses: function() {
			return {
				available: this.available,
				nearby: this.nearby
			}	
		}
	}
});

var two = new Vue({
	el: '#two',
	data: {
		title: 'vue App',
	},
	methods: {
		greet: function() {
			return 'Hey!';
		},
		changeApp: function() {
			one.title = "asdasdasdas";
		}
	},
	computed: {

	}
});
