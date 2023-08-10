<template>
    <div class="container">
        <nav class="nav">
            <img src="../assets/icons/logo.svg"/>
            
            <label class="address">
                <input class="input input-address" type="text" placeholder="Адрес доставки"/>
            </label>

            <div class="buttons">
				<span v-if="this.isLogged" class="user-name">{{ this.username }}</span>
				<button v-if="!this.isLogged" @click="this.handleLogin" class="button button-primary button-auth">
					<span class="button-auth-svg"></span>
					<span class="button-text">Войти</span>
				</button>
				<button v-if="this.isLogged" class="button button-cart" id="cart-button" @click="this.handleCart">
					<span class="button-cart-svg"></span>
					<span class="button-text">Корзина</span>
				</button>
				<button v-if="this.isLogged" @click="this.handleLogout" class="button button-primary button-out">
					<span class="button-text">Выйти</span>
					<span class="button-out-svg"></span>
				</button>
			</div>
        </nav>

        <CartComponent :closeFunction="this.handleCart" :isShowing="this.showCart"/>
        <LoginForm :closeFunction="this.handleLogin" :isShowing="this.showLogin"/>
    </div>
</template>

<script>
import CartComponent from './CartComponent.vue'
import LoginForm from './LoginForm.vue';

    export default {
    name: "HeaderComponent",
    data() {
        return {
            isLogged: false,
            showCart: false,
            showLogin: false,
            username: ""
        };
    },
    methods: {
        handleLogout() {
            sessionStorage.setItem("isLogged", "false");
            if (sessionStorage.getItem("isLogged")) {
                this.isLogged = false;
            }
        },

        handleCart() {
            if(sessionStorage.getItem('showCart') === "false"){
                this.showCart = true
                sessionStorage.setItem('showCart', 'true');
            } else {
                this.showCart = false
                sessionStorage.setItem('showCart', 'false');
            }
        },

        handleLogin() {
            if(sessionStorage.getItem('showLogin') === "false"){
                this.showLogin = true
                sessionStorage.setItem('showLogin', 'true');
            } else {
                this.showLogin = false
                sessionStorage.setItem('showLogin', 'false');
            }
        }
    },
    mounted() {
        if (sessionStorage.getItem("isLogged") === "true") {
            this.isLogged = true;
        }
        else if (sessionStorage.getItem("isLogged") === "false") {
            this.isLogged = false;
        }

        this.username = sessionStorage.getItem("username").toString() || "";
    },
    components: { CartComponent, LoginForm }
}
</script>

<style scoped>
    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .input {
        background-color: #ffffff;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        font-size: 16px;
        line-height: 24px;
        padding: 8px 8px 8px 35px;
        background-repeat: no-repeat;
        background-position: left 11px center;
    }

    .address {
        flex: 0.8;
    }

    .input-address {
        width: 100%;
        background-image: url(../assets/icons/home.svg);
    }

    .buttons {
        display: flex;
        align-items: center;
    }

    .button {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        background: #ffffff;
        border: 1px solid #d9d9d9;
        box-sizing: border-box;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.0015);
        border-radius: 2px;
        color: #595959;
        font-size: 16px;
        line-height: 24px;
    }

    .button:hover {
        background: #1890ff;
        border: 1px solid #1890ff;
        color: #fff;
    }


    .button-primary {
        background: #1890ff;
        border: 1px solid #1890ff;
        color: #fff;
        margin-right: 10px;
    }

    .button-primary:hover {
        background: #ffffff;
        border: 1px solid #d9d9d9;
        color: #595959;
    }

    .button-icon {
        margin-right: 6px;
    }

    .button-card-text {
        margin-right: 10px;
    }

    .button-auth {
        background-position: 20px 13px;
    }

    .button-primary .button-auth-svg {
        width: 24px;
        height: 24px;
        background-color: #fff;
        -webkit-mask: url("../assets/icons/user.svg") no-repeat 50% 50%;
        mask: url("../assets/icons/user.svg") no-repeat 50% 50%;
        background-repeat: no-repeat;
    }

    .button-primary:hover .button-auth-svg {
        background-color: #595959;
    }

    .button .button-cart-svg {
        width: 24px;
        height: 24px;
        background-color: #595959;
        -webkit-mask: url("../assets/icons/shopping-cart.svg") no-repeat 50% 50%;
        mask: url("../assets/icons/shopping-cart.svg") no-repeat 50% 50%;
        background-repeat: no-repeat;
    }

    .button-primary .button-cart-svg {
        background-color: #fff;
    }

    .button:hover .button-cart-svg {
        background-color: #fff;
    }

    .button-primary:hover .button-cart-svg {
        background-color: #595959;
    }

    .button-cart {
        margin: 0 5px;
    }

    .button-out {
        margin: 0 5px;
    }

    .user-name {
        margin-right: 20px;
        font-weight: bold;
        font-size: 18px;
    }
</style>