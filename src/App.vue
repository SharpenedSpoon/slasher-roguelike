<template>
	<img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>

	<div class="characters">
		<div class="character" v-for="character in characters">
			{{ character }}
		</div>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue';
	import { ref, reactive, computed, watch } from 'vue';
	import Teenager from '@/classes/characters/Teenager';

	export default {
		name: 'App',
		components: {
			HelloWorld
		},

		setup() {
			const characters = ref([]);
			characters.value.push(new Teenager());

			return {
				characters
			}
		},
	}
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
