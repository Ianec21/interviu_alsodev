<template>
    <div class="main">
      <main>
        <div class="container">
          <PromoContainer/>
          <Restaurants v-if="!this.isLoading" v-bind:restaurants="this.db.partners"/>
        </div>
      </main>
    </div>
</template>
  
<script>
  import PromoContainer from '../components/PromoContainer.vue';
  import Restaurants from '../components/Restaurants.vue';
  import dbFile from "../db/db.json";
  
  export default {
    name: 'App',
    components: {
      PromoContainer,
      Restaurants,
  },
  
    data() {
      return {
        db: [],
        isLoading: false
      }
    },
  
    mounted() {
      this.db = dbFile.db;
    },
  }
  </script>
  
  <style>
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic");
  
    * {
      box-sizing: border-box;
    }
  
    body {
      font-family: "Roboto", sans-serif;
      padding-top: 44px;
    }
  
    .container {
      max-width: 1200px;
      margin: auto;
    }
  
    a,
    button {
        cursor: pointer;
        color: inherit;
    }
  
    .main {
        background: linear-gradient(180deg, rgba(245, 245, 245, 0) 1.04%, #f5f5f5 100%);
    }
</style>
  