<template>
	<div class="products">
		<div class="product container">
			<div class="row">
				<Product/>
			</div>
		</div>
	</div>
</template>

<script>
  import Product from "./Product";
  export default {
    name: "Products",
    components: {Product}
  }
</script>

<style scoped lang="scss">
	.row {
		margin-left: 12px;
		margin-right: 12px;
	}
</style>