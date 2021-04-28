<template>
	<div class="product">
		<div v-for="product in filterProducts" :key="product.id" class="col s12 m3">
			<div class="card">
				<div class="card-image">
					<router-link :to="'/product/' + product.id"><img :src="require('../assets/images/' + product.img)">
					</router-link>
					<a class="btn-floating halfway-fab waves-effect waves-light white">
						<i v-if="!product.favorite" @click="addToFavorite(product)" class="material-icons">favorite_border</i>
						<i v-else @click="deleteFromFavorite(product)" class="material-icons favorite">favorite</i>
					</a>
				</div>
				<div class="card-content">
					<span class="card-title">{{product.name}}</span>
					<p>${{product.price}}</p>
				</div>
			</div>
		</div>
	
	</div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "Product",
    data() {
      return {
        sortedProducts: [],
        isFavorite: false
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'SEARCH_NAME',
        'FAVORITE',
				'SELECT'
      ]),
      filterProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      }
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API'
      ]),
      sortProductsBySearchValue(searchName) {
        this.sortedProducts = [...this.PRODUCTS]
        if (searchName) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(searchName.toLowerCase())
          })
        } else {
          this.sortedProducts = this.PRODUCTS
				}
      },
      // sortProductsBySelectValue(value) {
      //   this.sortedProducts = [...this.PRODUCTS]
      //   if (value) {
      //     this.sortedProducts = this.sortedProducts.filter(function (item) {
      //       return item.value === this.value
      //     })
      //   } else {
      //     this.sortedProducts = this.PRODUCTS
			// 	}
			// },
      addToFavorite(product) {
        product.favorite = !product.favorite
        this.$store.dispatch('ADD_TO_FAVORITE', product)
      },
      deleteFromFavorite(product) {
        product.favorite = !product.favorite
        this.$store.dispatch('DELETE_FROM_FAVORITE')
			}
    },
    watch: {
      SEARCH_NAME() {
        this.sortProductsBySearchValue(this.SEARCH_NAME)
      },
			// SELECT() {
      //   this.sortProductsBySelectValue(this.SELECT)
			// }
    },
    mounted() {
      return this.PRODUCTS
      // this.GET_PRODUCTS_FROM_API()
      //   .then((response) => {
      //     if (response.data) {
      //       this.sortProductsBySearchValue(this.SEARCH_NAME)
      //     }
      //   })
    },
  }
</script>

<style scoped lang="scss">
	.col {
		padding: 0;
		display: flex;
		justify-content: center;
		
		.card {
			width: 209px;
			margin-bottom: 0;
			
			.card-image {
				display: flex;
				justify-content: center;
				
				img {
					width: 202px;
					top: 3px;
				}
				
				.btn-floating.halfway-fab {
					right: 7px;
				}
				
				.btn-floating i {
					color: #B7B7B7;
					
					&.favorite {
						color: #349A89;
					}
				}
				
				
			}
			
			.card-content {
				padding: 10px 12px;
				
				.card-title {
					font-size: 15px;
					line-height: 17px;
					color: #373738;
				}
				
				p {
					font-size: 18px;
					font-weight: bold;
					line-height: 21px;
					color: #101010;
				}
			}
		}
	}
</style>