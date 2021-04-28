<template>
	<div class="product-info container">
		<div class="row center">
			<h1>{{product.name}}</h1>
			<img :src="require('../assets/images/' + product.img)">
			<p>Description: {{product.description}}</p>
			<p>Location: {{product.location}}</p>
			<p>Price: ${{product.price}}</p>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      product() {
        return this.$store.getters.PRODUCT_BY_ID(+this.$route.params.id)
      }
		}
  }
</script>

<style scoped lang="scss">
	.add-product {
		width: 1136px;
		padding: 36px 236px 32px 236px;
		background: #FFFFFF;
		box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
		border-radius: 7px;
		margin-top: 36px;
	}
</style>