<template>
	<div class="main-layout">
		<Navbar/>
		<router-view/>
	</div>
</template>

<script>
  import Navbar from "../components/Navbar";

  export default {
    name: "MainLayout",
		components: {
      Navbar
		}
  }
</script>

<style scoped>
</style>