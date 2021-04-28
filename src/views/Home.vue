<template>
	<div class="home">
		<Sort/>
		<Products/>
	</div>
</template>

<script>
  import Sort from "@/components/Sort";
  import Products from "@/components/Products";

  export default {
    name: 'Home',
    components: {
      Sort, Products
    }
  }
</script>
