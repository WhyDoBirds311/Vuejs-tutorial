<template>
	<div>
		<app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
		<app-ninja v-bind:ninjas="ninjas"></app-ninja>
		<app-footer v-bind:title="title"></app-footer>
	</div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Ninjas from './components/ninjas.vue'

export default {
components: {
	'app-header': Header,
	'app-footer': Footer,
	'app-ninja': Ninjas
},
data () {
    return {  
        ninjas: [
          {name: 'Ryu', specialty: 'Vue Components', show: false},
          {name: 'Crystal', specialty: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', specialty: 'Click Events', show: false},
          {name: 'Tango', specialty: 'Conditionals', show: false},
          {name: 'Kami', specialty: 'Webpack', show: false},
          {name: 'Yoshi', specialty: 'Data Diggin', show: false}
        ],
        title: "Vasdasdasie"
    }
  },
  methods: {
  	updateTitle: function(t){
  		this.title = t;
  	}
  }
}
</script>

<style>

</style>
