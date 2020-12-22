<template>
	<div id="show-blogs">
		<h1>All Blog Articles</h1>
		<input type="text" v-model="search">
		<div class="single-blog" v-for="blog in filteredBlogs">
		 <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase }}</h2></router-link>
		 <article>{{ blog.content }}</article>
		</div>
	</div>
</template>

<script>
	import searchMixin from '../mixins/searchmixin'
	
	export default {

		data () {
			return {
				blogs: [],
				search: ''
			}
		},
		methods: {
				
		},
		computed: {

		},
		created() {
			this.$http.get('https://vue-blog-c8dd3-default-rtdb.firebaseio.com/posts.json').then(function(data){
				return data.json();
			}).then(function(data){
				var blogsArray = [];

				for(let key in data) {
					console.log(data[key]);
					data[key].id = key;

					blogsArray.push(data[key]);
				}

				this.blogs = blogsArray;


			});
		},

		//locally registered

		filters: {
			toUppercase (value) {
				return value.toUpperCase();
			}
		},
		directives: {
			'rainbow': {
				bind(el, binding, vnode) {
					el.style.color = "#" + Math.random().toString().slice(2,8);
				}
			}
		},
		mixins: [searchMixin]
	}
</script>
</script>

<style>

	#show-blogs {
		max-width: 800px;
		margin: 0 auto;
	}

	.single-blog {
		padding: 20px;
		margin: 20px 0;
		box-sizing: border-box;
		background: #eee;
	}
	
</style>