<template>
    <div class="card-food">
	<img :src="getImageURL(this.data.image)" alt="image" class="card-image" />
		<div class="card-text">
			<div class="card-heading">
				<h3 class="card-title card-title-reg">{{ this.data.name }}</h3>
			</div>
			<div class="card-info">
				<div class="ingredients">
                    {{ this.data.description }}
				</div>
			</div>
			<div class="card-buttons">
				<button @click="handleCartAdd(this.data.id)" class="button button-primary button-add-cart">
					<span class="button-card-text">В корзину</span>
					<span class="button-cart-svg"></span>
				</button>
			<strong class="card-price-bold">{{ this.data.price }} ₽</strong>
		</div>
	</div>
	</div>
</template>

<script>
    export default {
        name: "FoodCard",

        props: {
            data: Object
        },

        methods: {
            getImageURL(path){
                return require(`../assets/` + path)
            },

            handleCartAdd(id){
                if(sessionStorage.getItem("isLogged") !== "true") return;

                let cart = sessionStorage.getItem("cart") || JSON.stringify({});
                cart = JSON.parse(cart);
                
                if(!cart[id]){
                    cart[id] = {id: id, count: 1, price: this.data.price, name: this.data.name};
                } else {
                    cart[id].count++;
                }

                sessionStorage.setItem("cart", JSON.stringify(cart));
            }
        },

        mounted(){
            if(!sessionStorage.getItem("cart")){
                sessionStorage.setItem("cart", JSON.stringify({}));
            }
        }
    }
</script>

<style>
    .card-food {
        background: #ffffff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        border-radius: 7px;
        overflow: hidden;
        margin-bottom: 30px;
        flex-basis: 31%;
        text-decoration: none;
    }

    .card-restaurant {
        cursor: pointer
    }

    .card-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }


    .card-text {
        padding: 20px 23px 35px;
        min-height: 275px;
        display: flex;
        flex-direction: column;
    }

    .card-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .card-title {
        margin: 0;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 32px;
    }

    .card-title-reg {
        font-weight: 400;
    }

    .card-tag {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
        background: #262626;
        border-radius: 2px;
        padding: 1px 8px;
    }

    .card-info {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .card-buttons {
        display: flex;
        margin-top: 24px;
        flex-grow: 1;
        align-items: flex-end;
    }

    .card-price-bold {
        font-weight: bold;
        font-size: 20px;
        line-height: 32px;
        margin-left: 30px;
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
        display: none;
        margin: 0 5px;
    }

    .price,
    .category {
        color: #8c8c8c;
        font-size: 18px;
        line-height: 32px;
    }

    .price {
        margin-right: 10px;
    }

    .ingredients {
        color: #8c8c8c;
        font-size: 18px;
        line-height: 21px;
    }
</style>