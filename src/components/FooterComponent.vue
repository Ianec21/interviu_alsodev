<template>
    <footer class="footer">
		<div class="container">
			<div class="footer-block">
				<img src="../assets/icons/logo.svg" alt="logo" class="logo footer-logo" />
				<nav class="footer-nav">
					<a href="#" class="footer-link">Ресторанам </a>
					<a href="#" class="footer-link">Курьерам</a>
					<a href="#" class="footer-link">Пресс-центр</a>
					<a href="#" class="footer-link">Контакты</a>
				</nav>
				<div class="social-links">
					<a href="#" class="social-link"><img src="../assets/icons/instagram.svg" alt="instagram" /></a>
					<a href="#" class="social-link"><img src="../assets/icons/fb.svg" alt="facebook" /></a>
					<a href="#" class="social-link"><img src="../assets/icons/vk.svg" alt="vk" /></a>
				</div>
				<!-- /.social-links -->
			</div>
			<!-- /.footer-block -->
		</div>
	</footer>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style>
    .footer {
        padding: 60px 0;
        background-color: white;
    }

    .footer-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footer-nav {
        margin-left: 35px;
        margin-right: auto;
    }

    .footer-link {
        display: inline-block;
        color: #595959;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-decoration: none;
    }

    .footer-link:not(:last-child) {
        margin-right: 15px;
    }

    .social-links {
        display: flex;
        align-items: center;
    }

    .social-link:not(:last-child) {
        margin-right: 21px;
    }
</style>