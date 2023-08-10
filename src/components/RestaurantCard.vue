<template>
    <router-link :to="'/restaurants/' + this.slug" class="card card-restaurant">
		<img :src="getImageURL(this.data.image)" alt="image" class="card-image" />
		<div class="card-text">
			<div class="card-heading">
				<h3 class="card-title">{{ this.data.name }}</h3>
				<span class="card-tag tag">{{  this.data.time_of_delivery }} мин</span>
			</div>
			<!-- /.card-heading -->
			<div class="card-info">
				<div class="rating">
					{{ this.data.stars }}
				</div>
				<div class="price">От {{ this.data.price }} ₽</div>
				<div class="category">{{ this.data.kitchen }}</div>
			</div>
			<!-- /.card-info -->
		</div>
		<!-- /.card-text -->
	</router-link>
</template>

<script>
    export default {
        name: "RestaurantCard",

        data(){
            return {
                slug: this.data.products.replace(".json", "")
            }
        },

        props: {
            data: Object,
            id: Number,
        },

        methods: {
            getImageURL(path){
                return require(`../assets/images` + path);
            }
        }
    }
</script>

<style scoped>
    .card {
        background: #ffffff;
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

    .rating {
        background-image: url("../assets/icons/rating.svg");
        background-repeat: no-repeat;
        background-position: 0 7px;
        padding-left: 20px;
        margin-right: 26px;
        color: #ffc107;
        font-weight: bold;
        font-size: 18px;
        line-height: 32px;
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
</style>