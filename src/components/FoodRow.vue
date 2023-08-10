<template>
    <div v-if="this.data" class="food-row">
		<span class="food-name">{{ this.data.name }}</span>
		<strong class="food-price">{{ this.data.price }} ₽</strong>
		<div class="food-counter">
			<button @click="this.handleCounterDec" class="counter-button">-</button>
			<span class="counter">{{ this.data.count }}</span>
			<button @click="this.handleCounterInc" class="counter-button">+</button>
		</div>
	</div>
</template>

<script>
    export default {
        name: "FoodRow",

        props: ['initialData'],

        data(){
            return {
                data: {}
            }
        },

        methods: {
            handleCounterDec(){
                if(this.data.id){
                    let cart = sessionStorage.getItem("cart") || JSON.stringify({});
                    cart = JSON.parse(cart);
                    cart[this.data.id].count--;

                    this.$parent.updateTotalPrice(-cart[this.data.id].price);
                    if(cart[this.data.id].count <= 0){
                        delete cart[this.data.id];

                        sessionStorage.setItem("cart", JSON.stringify(cart));
                        this.data = cart[this.data.id];
                        return;
                    } else {
                        sessionStorage.setItem("cart", JSON.stringify(cart));
                        this.data = cart[this.data.id];
                    }
                }
            },

            handleCounterInc(){
                if(this.data.id){
                    let cart = sessionStorage.getItem("cart") || JSON.stringify({});
                    cart = JSON.parse(cart);
                    cart[this.data.id].count++;

                    this.$parent.updateTotalPrice(cart[this.data.id].price);
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                    this.data = cart[this.data.id];
                }
            }
        },
        
        mounted(){
            this.data = this.initialData;
            console.log(this.data);
        }
    }
</script>

<style scoped>
    .food-row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-bottom: 8px;
        border-bottom: 1px solid #d9d9d9;
        margin-bottom: 15px;
    }

    .food-name {
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
    }

    .food-price {
        margin-left: auto;
        margin-right: 47px;
        font-weight: bold;
        font-size: 20px;
        line-height: 32px;
    }

    .food-counter {
        display: flex;
        align-items: center;
    }

    .counter-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 39px;
        height: 32px;
        background: #ffffff;
        border: 1px solid #40a9ff;
        box-sizing: border-box;
        border-radius: 2px;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #40a9ff;
    }

    .counter-button:hover {
        background: #40a9ff;
        border: 1px solid #ffffff;
        color: #ffffff;
    }

    .counter {
        font-size: 16px;
        line-height: 24px;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>