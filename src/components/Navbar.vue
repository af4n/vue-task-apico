<template>
	<div>
		<nav :class="[empty ? 'empty' : 'main', auth ? 'add-product': '']">
			<div class="nav-wrapper container">
				<router-link to="/" class="brand-logo">
					<img v-if="empty" src="../assets/images/Logofull-black.png" alt="Logofull">
					<img v-else src="../assets/images/Logofull.png" alt="Logofull">
				</router-link>
				<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
				<ul class="right hide-on-med-and-down">
					<li>
						<router-link class="add-product waves-effect btn" to="/add-product">{{empty ? 'Sell' : '+Add'}}</router-link>
					</li>
					<li>
						<router-link class="login" to="/login">{{auth ? 'Logout' : 'Login'}}</router-link>
					</li>
					<li>
						<router-link class="nav-favorite-icon" to="/favorite">
							<i v-if="FAVORITE.length" class="large material-icons">favorite</i>
							<i v-else class="large material-icons">favorite_border</i>
						</router-link>
					</li>
				</ul>
			</div>
			
			<div class="search-wrapper container">
				<form>
					<div class="row">
						<div class="input-field col s6">
							<i class="large material-icons">search</i>
							<input v-model.trim="searchName" placeholder="Search products by name" id="search_product" type="search" class="search-product validate">
						</div>
						<div class="input-field col s3">
							<i class="large material-icons location-icon">location_on</i>
							<input v-model.trim="searchLocation" placeholder="Location" id="location" type="search" class="location validate">
						</div>
						<div class="input-field col s3">
							<button class="waves-effect btn btn-search" @click.prevent="search(searchName)">Search</button>
						</div>
					</div>
				</form>
			</div>
		</nav>
		
		<ul class="sidenav" id="mobile-demo">
			<li><a href="sass.html">Sass</a></li>
			<li><a href="badges.html">Components</a></li>
		</ul>
	
	</div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'Navbar',
		data() {
      return {
        searchName: '',
        searchLocation: '',
        empty: this.$route.meta.layout === 'empty',
				addProduct: this.$route.name === 'add-product',
			}
		},
		computed: {
      ...mapGetters([
        'SEARCH_NAME',
				'FAVORITE'
			]),
			auth() {
        return this.$route.meta.auth
			}
		},
		methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX'
			]),
			search(searchName) {
        this.GET_SEARCH_VALUE_TO_VUEX(searchName)
        console.log('searchName:', searchName)
			},
      async logout() {
        await this.$store.dispatch('logout')
        this.$router.push('/')
			}
		}
  }
</script>

<style scoped lang="scss">
	.empty {
		background: #F2F2F2;
		height: 64px;
		box-shadow: none;
		
		.nav-wrapper {
			.login {
				color: #2B2B2B;
				line-height: 31px;
				&:hover {
					background: none;
				}
			}

			
			.nav-favorite-icon {
				&:hover {
					background: none;
				}
				i {
					color: #33333A;
					
					&.favorite {
						color: #349A89;
					}
				}
			}
		}
		
		.search-wrapper {
			display: none;
		}
	}
	
	.add-product {
		height: 64px;
		box-shadow: none;
		
		.nav-wrapper {
			.login {
				line-height: 31px;
				&:hover {
					background: none;
				}
				
				&-auth {
					background: #F1C40F;
				}
			}
			
			.nav-favorite-icon {
				&:hover {
					background: none;
				}
				i {
					color: #FFFFFF;
				}
			}
		}
		
		.search-wrapper {
			display: none;
		}
	}
	
	nav {
		background: linear-gradient(180deg, #090810 0%, #171236 100%);
		height: 166px;
		
		.nav-wrapper {
			max-width: 1140px;
			width: 100%;
			height: 77px;
			margin: 0 auto;
			
			.brand-logo {
				display: inline-block;
				
				img {
					vertical-align: middle;
				}
			}
			
			.add-product {
				width: 131px;
				height: 31px;
				background: #349A89;
				border-radius: 4px;
				font-style: normal;
				font-weight: normal;
				line-height: 31px;
				text-transform: uppercase;
				color: #FFFFFF;
			}
			
			.login {
				display: inline-block;
				font-size: 12px;
				line-height: 40px;
				letter-spacing: 1px;
				text-transform: uppercase;
				color: #FFFFFF;
				vertical-align: middle;
			}
		}
		
		.search-wrapper {
			form {
				margin-top: 25px;
				height: 50px;
				margin-left: 15px;
				margin-right: 15px;
				
				.input-field {
					display: inline-block;
					padding: 0 7px 0 0;
					&:last-child {
						padding-right: 0;
					}
					
					.material-icons {
						position: absolute;
						line-height: initial;
						height: 24px;
						top: 15px;
						left: 20px;
						color: #5C5C5C;
					}
					
					.search-product {
						width: 88%;
						height: 50px;
						background: #FFFFFF;
						border-radius: 4px;
						padding-left: 52px;
						border: none;
					}
					
					.location-icon {
						left: 10px;
					}
					
					.location {
						width: 82%;
						height: 50px;
						background: #FFFFFF;
						border-radius: 4px;
						padding-left: 38px;
						border: none;
					}
					
					input[type="search"]::placeholder {
						color: rgba(123, 123, 123, 0.776523);
					}
					
					.btn-search {
						width: 100%;
						vertical-align: top;
						height: 50px;
						line-height: 31px;
						color: #FFFFFF;
						background: #3E3961;
						border-radius: 4px;
					}
				}
			}
		}
	}
</style>
