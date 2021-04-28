<template>
	<div class="favorite container">
		<div class="row center">
			<div v-for="product in FAVORITE" :key="product.id" class="col s6">
				<div class="card">
					<h1>{{product.name}}</h1>
					<img :src="require('../assets/images/' + product.img)">
					<p>Description: {{product.description}}</p>
					<p>Location: {{product.location}}</p>
					<p>Price: ${{product.price}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Favorite",
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'FAVORITE'
      ])
    }
  }
</script>

<style scoped>

</style>