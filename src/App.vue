<template>
  <div id="app">
    <HeaderComponent/>
    <router-view></router-view>
    <FooterComponent/>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent,
    },
    
    mounted(){
        document.title = "Delivery Food — доставка еды на дом"
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

  /* repsonsive design */
  @media (max-width: 1366px) {
    .container {
        max-width: 960px;
    }

    .pizza {
        background-position: center right -300px;
        background-size: 750px;
    }


    .kebab {
        background-position: top -5px right -93px;
        background-size: 530px;
    }

    .vegetables {
        background-position: top 0 right -93px;
        background-size: 820px;
    }

    .sushi {
        background-position: center right -90px;
    }

    .rating {
        margin-right: 15px;
    }

    .category,
    .price {
        font-size: 14px;
    }
}

@media (max-width: 992px) {
    .container {
        max-width: 750px;
    }



    .pizza {
        padding: 50px;
        background-size: 500px;
        background-position: center right -200px;
    }


    .kebab {
        background-position: top 55px right -100px;
        background-size: 385px;
    }

    .vegetables {
        background-position: top 0 right -280px;
        background-size: 810px;
    }

    .sushi {
        background-position: top 30px right -175px;
    }



    .promo-text {
        font-size: 18px;
        max-width: 400px;
    }

    .card {
        flex-basis: 49%;
    }

    .footer-link {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .container {
        max-width: 560px;
    }

    .card-info {
        flex-wrap: wrap;
    }

    .card .rating {
        flex-basis: 100%;
    }

    .card-title {
        font-size: 18px;
    }

    .card-text {
        min-height: 290px;
    }

    .card-price-bold {
        margin-left: 20px;
    }


    .pizza {
        background-size: 400px;
        background-position: bottom 50px right -200px;
    }


    .kebab {
        background-position: top -5px right -74px;
        background-size: 300px;
    }

    .vegetables {
        background-position: top 0 right -240px;
        background-size: 702px;
    }

    .sushi {
        background-position: top -24px right -75px;
        background-size: 302px;
    }

    .promo-title {
        font-size: 24px;
        line-height: 1.4;
    }

    .promo-text {
        margin-top: 0;
    }
}

@media (max-width: 578px) {
    .container {
        width: 90%;
    }

    .address {
        min-width: 100%;
        order: 1;
    }

    .header {
        flex-wrap: wrap;
    }

    .input-address {
        margin-top: 15px;
        order: 5;
        flex: 1;
    }

    .promo {
        background-image: none;
    }

    .promo-title {
        margin-bottom: 10px;
    }

    .section-title {
        font-size: 20px;
    }

    .card {
        flex-basis: 100%;
    }

    .card-text {
        min-height: auto;
    }

    .card-image {
        width: 100%;
    }

    .footer {
        padding: 30px 0;
    }

    .footer-block {
        align-items: flex-start;
    }

    .footer-nav {
        margin-left: 0;
        margin-right: 0;
        order: 0;
        display: flex;
        flex-direction: column;
    }

    .footer-logo {
        margin-right: 15px;
        order: 1;
    }

    .social-links {
        order: 2;
    }
}

@media (max-width: 480px) {
    .button-text {
        display: none;
    }

    .button-icon {
        margin: 0;
    }

    .user-name {
        margin: 10px;

    }

    .buttons {
        flex-wrap: wrap;
        margin-left: auto;
    }

    .button {
        min-height: 40px;
        padding: 5px 12px;

    }

    .button-out-svg {
        width: 24px;
        height: 24px;
        background-color: #fff;
        -webkit-mask: url(./assets/icons/logout.svg) no-repeat 50% 50%;
        mask: url(./assets/icons/logout.svg) no-repeat 50% 50%;
        background-repeat: no-repeat;
        -webkit-mask-size: 20px;
        mask-size: 20px;
    }

    .promo {
        padding: 20px;
    }

    .section-heading {
        flex-wrap: wrap;
    }

    .footer-block {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
    }

    .footer-logo {
        order: 0;
        margin-bottom: 20px;
    }

    .footer-nav {
        margin-bottom: 20px;
        text-align: center;
    }

    .footer-link:not(:last-child) {
        margin-right: 0;
    }
  }
</style>
