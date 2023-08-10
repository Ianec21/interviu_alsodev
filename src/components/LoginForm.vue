<template>
    <div v-if="this.isShowing" class="modal-auth">
		<div class="modal-dialog modal-dialog-auth">
			<button @click="this.closeFunction" class="close-auth">&times;</button>
			<form id="logInForm" @submit="this.handleLogin">
				<fieldset class="modal-body">
					<legend class="modal-title">Авторизация</legend>
					<label class="label-auth">
						<span>Логин</span>
						<input v-model="this.username" id="login" type="text">
					</label>
					<label class="label-auth">
						<span>Пароль</span>
						<input id="password" type="password">
					</label>
				</fieldset>
				<!-- /.modal-body -->
				<div class="modal-footer">
					<div class="footer-buttons">
						<button class="button button-primary button-login" type="submit">Войти</button>
					</div>
				</div>
			</form>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</template>

<script>
    export default {
        name: "LoginForm",

        props: {
            isShowing: Boolean,
            closeFunction: {
                type: Function
            }
        },

        data(){
            return {
                username: ""
            }
        },

        methods: {
            handleLogin() {
                sessionStorage.setItem("isLogged", "true");
                sessionStorage.setItem("username", this.username);
                this.closeFunction();

                this.$router.go();
            },
        },
        
        mounted(){
            
        }
    }
</script>

<style scoped>
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 999;
    }

    .modal-auth {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 999;
    }

    .is-open {
        display: flex;
    }

    .modal-dialog {
        max-width: 780px;
        width: 95%;
        background: #ffffff;
        border-radius: 5px;
        margin: auto;
        padding: 40px 45px;
    }

    .modal-dialog-auth {
        width: auto;
        position: relative;
    }

    .label-auth {
        display: block;
        margin: 30px;
    }

    .label-auth span {
        width: 80px;
        display: inline-block;
    }

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 45px;
    }

    .modal-title {
        margin: 0;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
    }

    .close {
        font-size: 36px;
        border: none;
        background-color: transparent;
    }

    .close-auth {
        font-size: 36px;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 10px;
        right: 20px;
    }

    .modal-body {
        margin-bottom: 22px;
    }

    .button-auth {
        background-position: 20px 13px;
    }

    .footer-buttons {
        display: flex;
        align-items: center;
    }
</style>