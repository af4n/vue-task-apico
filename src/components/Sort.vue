<template>
	<div class="sort-wrapper container">
		<form>
			<div class="row">
				<div class="input-field col s4">
					<span class="grid-icon"></span>
					<span class="arrow-icon"></span>
					<select v-model="select" class="select" ref="select">
						<option value="" disabled selected>Choose Category</option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
						<option value="3">Option 3</option>
					</select>
				</div>
				<div class="input-field input-field price-from col s3">
					<input placeholder="Price from (USD)" id="price-from" type="text" class="validate">
				</div>
				<div class="input-field price-to col s3">
					<input placeholder="Price to (USD)" id="price-to" type="text" class="validate">
				</div>
			</div>
		</form>
	</div>
</template>

<script>
  export default {
    name: "Sort",
    data() {
      return {
        select: null
      }
    },
    mounted() {
      // eslint-disable-next-line no-undef
      this.select = M.FormSelect.init(this.$refs.select)
    },
		watch: {
      select(value) {
        this.$store.dispatch('GET_SELECT', value)
        console.log(value)
			}
		}
  }
</script>

<style scoped lang="scss">
	.sort-wrapper {

		form {
			height: 59px;
			box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.217111);
			border-radius: 4px;
			margin: 19px 15px 12px 15px;
			
			.row {
				height: 59px;
				display: block;
				
				&:after {
					clear: none;
				}
				
				.input-field {
					position: relative;
					height: 35px;
					margin-top: 12px;
					margin-bottom: 12px;
					
					.grid-icon {
						position: absolute;
						content: '';
						width: 17px;
						height: 17px;
						display: inline-block;
						background-image: url('../assets/images/grid.svg');
						top: 9px;
						left: 24px;
						z-index: 2;
					}
					
					.arrow-icon {
						position: absolute;
						content: '';
						width: 16px;
						height: 10px;
						display: inline-block;
						background-image: url('../assets/images/arrow.svg');
						top: 12px;
						right: 20px;
						z-index: 2;
					}
					
					.select-wrapper {
						height: 35px;
						background: #F9FAFB;
						border: 1px solid #DEDEE0;
						box-sizing: border-box;
						border-radius: 5px;
					}
					
					input {
						width: 143px;
						height: 35px;
						background: #F9FAFB;
						border: 1px solid #DEDEE0;
						box-sizing: border-box;
						border-radius: 5px;
						padding-left: 9px;
						line-height: 16px;
						letter-spacing: 0.35px;
						color: #505050;
					}
				}
				
				.price-from {
					width: 174px;
					padding-right: 6px;
					
					&:after {
						content: '';
						display: inline-block;
						width: 12px;
						height: 1px;
						background: #DEDEE0;
						position: relative;
						left: 7px;
						bottom: 5px;
					}
				}
				
				.price-to {
					padding-left: 7px;
				}
			}
		}
	}
</style>