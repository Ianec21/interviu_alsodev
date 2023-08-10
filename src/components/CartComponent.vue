<template>
    <div v-if="this.isShowing" class="modal modal-cart">
		<div class="modal-dialog">
			<div class="modal-header">
				<h3 class="modal-title">Корзина</h3>
				<button @click="this.openCloseCart" class="close">&times;</button>
			</div>
			<!-- /.modal-header -->
			<div class="modal-body">
				<FoodRow v-for="item in this.products" v-bind:key="item.id" v-bind:initialData="item"/>
			</div>
			<!-- /.modal-body -->
			<div class="modal-footer">
				<span class="modal-pricetag">{{ this.totalPrice }} ₽</span>
				<div class="footer-buttons">
					<button class="button button-primary">Оформить заказ</button>
					<button class="button clear-cart" @click="this.openCloseCart">Отмена</button>
				</div>
			</div>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</template>

<script>
    import FoodRow from './FoodRow.vue';

    export default {
    name: "CartComponent",

    data() {
        return {
            products: Object,
            totalPrice: 0,
            isShowing: false
        };
    },

    methods: {
        openCloseCart(){
            if(this.isShowing === false){
                this.isShowing = true;
            } else if(this.isShowing === true) {
                this.isShowing = false;
            }
        },

        getProducts(){
            this.totalPrice = 0;
            this.products = JSON.parse(sessionStorage.getItem("cart")) || {};  

            for (const key in this.products) {
                this.totalPrice = this.totalPrice + this.products[key].count * this.products[key].price;
            }
        },

        updateTotalPrice(value){
            this.totalPrice = this.totalPrice + value;
        }
    },

    mounted(){
        for (const key of Object.entries(this.products)) {
            this.totalPrice = this.totalPrice + this.products[key].count * this.products[key].price;
        }
    },

    components: { FoodRow },
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
        display: block;
        z-index: 999;
    }

    .modal-dialog {
        max-width: 780px;
        width: 95%;
        background: #ffffff;
        border-radius: 5px;
        margin: auto;
        padding: 40px 45px;
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

    .modal-body {
        margin-bottom: 22px;
    }

    .modal-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .modal-auth .modal-footer {
        justify-content: flex-end;
    }

    .footer-buttons {
        display: flex;
        align-items: center;
    }

    .modal-pricetag {
        background: #262626;
        border-radius: 5px;
        color: #ffffff;
        padding: 15px 20px;
        font-size: 20px;
        line-height: 23px;
    }
</style>