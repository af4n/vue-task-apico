<template>
	<div>
		<div class="login container">
			<div class="row">
				<form @submit.prevent="submitHandler" class="col s12">
					<span class="form-title">Login</span>
					<div class="row">
						<div class="input-field col s12">
							<span class="label">Email</span>
							<input v-model.trim="email" id="email" type="email" :class="{invalid: ($v.email.$dirty && !$v.email.email) || ($v.email.$dirty && !$v.email.required)}" placeholder="Example@gmail.com">
						</div>
					</div>
					<div class="row">
						<div class="input-field col s12">
							<span class="label">Password</span>
							<input v-model.trim="password" id="password" type="password" :class="{invalid: ($v.password.$dirty && !$v.password.minLength) || ($v.password.$dirty && !$v.password.required)}">
							<small class="right">Don’t remember password?</small>
							<span class="eye"></span>
						</div>
					</div>
					<div class="row">
						<div class="col s12">
							<button class="waves-effect btn">Continue</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="register container">
			<div class="row">
				<div class="col s12">
					<p>I have no account,
						<router-link to="/register">REGISTER NOW</router-link>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import {required, minLength, email} from 'vuelidate/lib/validators'

  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: '',
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
		methods: {
      async submitHandler () {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        const loginFormData = {
          email: this.email,
          password: this.password
        }
        console.log('formData:', loginFormData)
        try {
          await this.$store.dispatch('login', loginFormData)
          this.$router.push('/')
        } catch (e) {
          console.log('e:', e)
        }
			}
		}

  }
</script>

<style scoped lang="scss">
	.login {
		width: 425px;
		padding: 25px 24px 21px 24px;
		background: #FFFFFF;
		box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
		border-radius: 7px;
		margin-top: 70px;
		
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
					
					input {
						height: 58px;
						background: #F9FAFB;
						border: 1px solid #DEDEE0;
						box-sizing: border-box;
						border-radius: 5px;
						padding-left: 13px;
						margin-top: 4px;
					}
					
					small {
						font-size: 14px;
						line-height: 16px;
						letter-spacing: 0.4px;
						color: #8C8C8C;
					}
					
					.eye {
						content: '';
						position: absolute;
						right: 25px;
						top: 45px;
						width: 24px;
						height: 16px;
						display: inline-block;
						background-image: url('../assets/images/eye.svg');
					}
				}
				
				.btn {
					width: 100%;
					height: 58px;
					margin-top: 16px;
					background: #349A89;
				}
			}
		}
	}
	
	.register {
		width: 425px;
		background: #FFFFFF;
		box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
		border-radius: 7px;
		margin-top: 21px;
		
		p {
			padding-top: 30px;
			padding-bottom: 30px;
			margin: 0;
			text-align: center;
			line-height: 16px;
			letter-spacing: 0.4px;
			color: #2A2A2A;
			
			a {
				color: #349A89;
			}
		}
	}
</style>