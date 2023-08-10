<template>
    <section class="restaurants">
		<div class="section-heading">
			<h2 class="section-title">Рестораны</h2>
			<label class="search">
				<input v-model="searchInputValue" type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
			</label>
		</div>
		<div class="cards cards-restaurants">
			<div class="item" v-for="(card, index) in this.restaurants" v-bind:key="index">
                <RestaurantCard v-if="card.name.toLowerCase().includes(this.searchInputValue.toLowerCase())" v-bind:id="index" v-bind:data="card"/>
            </div>
		</div>
	</section>
</template>

<script>
    import RestaurantCard from "./RestaurantCard.vue";

    export default {
        name: "RestaurantsComponent",

        data(){
            return {
                searchInputValue: ""
            }
        },

        components: {
            RestaurantCard
        },

        props: {
            restaurants: Array
        },
    }
</script>

<style>
    .section-heading {
        display: flex;
        align-items: center;
        margin-bottom: 44px;
    }

    .item {
        background: #ffffff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        border-radius: 7px;
        overflow: hidden;
        margin-bottom: 30px;
        flex-basis: 31%;
        text-decoration: none;
    }

    .section-title {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        margin: 0 30px 0 0;
        color: #000000;
    }

    .cards {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .restaurants .card-text {
        min-height: auto;
    }

    .search {
        margin-left: auto;
    }

    .input-search {
        width: 300px;
        background-image: url(../assets/icons/search.svg);
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
</style>