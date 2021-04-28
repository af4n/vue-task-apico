<template>
  <div id="app">
		<component :is="layout">
			<router-view/>
		</component>
  </div>
</template>

<script>
	import EmptyLayout from "./layouts/EmptyLayout";
  import MainLayout from "./layouts/MainLayout";

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: {
      EmptyLayout, MainLayout
    }
	}
	
</script>

<style lang="scss">
	@import '~materialize-css/sass/materialize';
	body {
		font-family: Helvetica;
		font-size: 14px;
		background: #F2F2F2;
	}
	.container {
		margin: 0 auto;
		max-width: 885px;
		width: 100%;
	}
	@media only screen and (min-width : 601px) {
		.container {
			width: 85%;
		}
		.nav-wrapper {
			width: 90%;
		}
	}
	@media only screen and (min-width : 993px) {
		.container {
			width: 70%;
		}
		.nav-wrapper {
			width: 80%;
		}
	}
</style>
