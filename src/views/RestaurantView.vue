<template>
  <div class="container">
			<section class="menu">
				<div class="heading">
					<div class="section-heading">
            <h2 class="section-title restaurant-title">{{ this.data.name }}</h2>
            <div class="card-info">
              <div class="rating">
                {{ this.data.stars }}
              </div>
              <div class="price">От {{ this.data.price }} ₽</div>
              <div class="category">{{ this.data.kitchen }}</div>
            </div>
          </div>

          <div>
            <select @change="this.selectAsc" class="select">
              <option value="asc">Сначала дорогие</option>
              <option value="desc">Сначала дешевые</option>
            </select>
          </div>
					<!-- /.card-info -->
				</div>

        <div class="cards cards-menu">
          <FoodCard v-for="(food, index) in this.products" v-bind:key="index" v-bind:data="food"/>
        </div>
      </section>
  </div>
</template>

<script>
  import dbFile from "../db/db.json";
  import FoodCard from "../components/FoodCard.vue";

  export default {
    name: "RestaurantView",
    components: {
      FoodCard
    },
    data() {
      return {
        data: [],
        products: []
      }
    },

    methods: {
      selectAsc(event){
        if(event.target.value === "asc"){
          const sortedAsc = this.products.slice().sort((a, b) => b.price - a.price);
          console.log(sortedAsc);
          this.products = sortedAsc;
        } else {
          const sortedDesc = this.products.slice().sort((a, b) => a.price - b.price);
          this.products = sortedDesc;
        }
      }
    },

    mounted(){
      dbFile.db.partners.map(partner => {
        if(partner.products.includes(this.$route.params.slug)){
          this.data = partner;
          import(`@/db/` + partner.products).then((module) => {
            this.products = module.default;
          });
          return true;
        }
      })
    },
  }
</script>

<style scoped>
  .heading{
    display: flex;
    justify-content: space-between;
  }

  .rating {
    margin-right: 15px;
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

  select {
    border: none;
    font-size: 15px;
    outline: none;
  }
</style>