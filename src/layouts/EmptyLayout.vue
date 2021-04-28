<template>
	<div class="empty-layout">
		<Navbar/>
		<router-view/>
	</div>
</template>

<script>
  import Navbar from "../components/Navbar";

  export default {
    name: "EmptyLayout",
    components: {
      Navbar
    }
  }
</script>

<style scoped>
</style>