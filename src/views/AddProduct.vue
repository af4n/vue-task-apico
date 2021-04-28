<template>
	<div class="add-product container">
		<div class="row">
			<form @submit.prevent="submitHandler" class="col s12">
				<span class="form-title">Add product</span>
				<div class="row">
					<div class="input-field col s12">
						<span class="label">Title</span>
						<input v-model="name" type="text" class="validate" placeholder="For example: Iron man suit">
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<span class="label">Location</span>
						<input v-model="location" type="text" class="validate" placeholder="For example: Los Angeles, CA">
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<span class="label">Description</span>
						<textarea v-model="description" class="materialize-textarea" rows="7"
											placeholder="For example: Iron man suit"/>
					</div>
				</div>
				<div class="row">
					<div class="custom-input-field col s12">
						<span class="label">Photos</span>
						<label class="custom-file-upload">
							<input id="photos" type="file" class="validate">
							<span><i class="material-icons">add</i></span>
						</label>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<span class="label">Price</span>
						<input v-model="price" type="number" class="validate" placeholder="For example: Los Angeles, CA">
					</div>
				</div>
				<div class="row">
					<div class="col s12 center">
						<button type="submit" class="waves-effect btn">SUBMIT</button>
					</div>
				</div>
			</form>
		</div>
	</div>

</template>

<script>
  export default {
    name: "AddProduct",
    data() {
      return {
        name: '',
        location: '',
        description: '',
        price: '',
        id: 12,
        img: 13885650
      }
    },
    methods: {
      submitHandler() {
        const product = {
          name: this.name,
          location: this.location,
          description: this.description,
          img: `${this.img}.png`,
          price: this.price,
          id: ++this.id,
          favorite: false
        }
        console.log('product:', product)
        this.$store.dispatch('CREATE_PRODUCT', product)
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped lang="scss">
	
	.container {
		max-width: 1136px;
	}
	
	.add-product {
		width: 1136px;
		padding: 36px 236px 32px 236px;
		background: #FFFFFF;
		box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
		border-radius: 7px;
		margin-top: 36px;
		
		.row {
			margin-bottom: 0;
		}
		
		form {
			
			.form-title {
				display: flex;
				justify-content: center;
				font-size: 22px;
				line-height: 25px;
				color: #282828;
				margin-bottom: 30px;
			}
			
			.row {
				margin-bottom: 0;
				
				.input-field {
					position: relative;
					margin: 0;
					
					.label {
						font-size: 12px;
						line-height: 14px;
						letter-spacing: 0.3px;
						text-transform: uppercase;
						color: #303030;
					}
					
					input, textarea {
						height: 58px;
						background: #F9FAFB;
						border: 1px solid #DEDEE0;
						box-sizing: border-box;
						border-radius: 5px;
						padding-left: 13px;
						margin-top: 4px;
					}
					
					.materialize-textarea {
						height: 100%;
					}
				}
				
				.custom-input-field {
					display: flex;
					flex-direction: column;
					
					input[type="file"] {
						display: none;
					}
					
					.label {
						font-size: 12px;
						line-height: 14px;
						letter-spacing: 0.3px;
						text-transform: uppercase;
						color: #303030;
					}
					
					.custom-file-upload {
						display: inline-block;
						padding: 16px;
						background: #F9FAFB;
						border: 1px solid #DEDEE0;
						box-sizing: border-box;
						border-radius: 5px;
						cursor: pointer;
						margin-top: 4px;
						margin-bottom: 8px;
						
						span {
							display: block;
							height: 92px;
							width: 92px;
							color: #349A89;
							padding-top: 25px;
							text-align: center;
							background: #E4E4E4;
							border-radius: 4px;
							margin-top: 4px;
						}
						
						.material-icons {
							font-size: 40px;
						}
					}
				}
				
				.btn {
					width: 377px;
					height: 58px;
					margin-top: 16px;
					background: #349A89;
				}
			}
		}
	}
</style>