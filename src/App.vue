<template>
  <div class="app-content">
    <!-- окно уведомлений -->
    <BaseNotification />

    <header class="header container">
      <div class="header__wrapper">
        <span class="header__info">Каталог</span>

        <a
          class="header__logo"
          href="#"
          @click.prevent="$router.push({ name: 'catalog' })"
        >
          <img
            src="@/assets/svg/logo-moire.svg"
            alt="Логотип интернет магазина Moire"
            width="116"
            height="34"
          />
        </a>

        <a class="header__tel" href="tel:8 800 600 90 09"> 8 800 600 90 09 </a>

        <CartIndicator />
      </div>
    </header>

    <router-view />

    <footer class="footer container">
      <div class="footer__wrapper">
        <ul class="footer__links">
          <li>
            <a class="footer__link" href="#"> Каталог </a>
          </li>
          <li>
            <a class="footer__link" href="tel:88006009009"> 8 800 600 90 09 </a>
          </li>
          <li>
            <a class="footer__link" href="mailto:hi@technozavrrr.com">
              hi@technozavrrr.com
            </a>
          </li>
          <li>
            <a class="footer__link" href="#"> Распродажа </a>
          </li>
          <li>
            <a class="footer__link footer__link--medium" href="#">
              Заказать звонок
            </a>
          </li>
        </ul>

        <ul class="footer__social social">
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Вконтакте">
              <svg width="20" height="11" fill="currentColor">
                <use xlink:href="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Инстаграм">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-insta"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Facebook">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Twitter">
              <svg width="17" height="14" fill="currentColor">
                <use xlink:href="#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Telegram">
              <svg width="19" height="17" fill="currentColor">
                <use xlink:href="#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>

        <p class="footer__desc">
          Все права на материалы, находящиеся на сайте, охраняются в
          соответствии законодательством РФ, в том числе авторском праве и
          смежных правах.
        </p>

        <ul class="footer__data">
          <li>
            <a
              class="footer__link"
              href="#"
              target="_blank"
              rel="noopener"
              type="application/pdf"
            >
              Политика конфиденциальности
            </a>
          </li>
          <li>
            <a
              class="footer__link"
              href="#"
              target="_blank"
              rel="noopener"
              type="application/pdf"
            >
              Публичная оферта
            </a>
          </li>
        </ul>

        <span class="footer__copyright">
          © {{ new Date().getFullYear() }} Moire
        </span>
      </div>
    </footer>
    <div id="teleport-target"></div>
  </div>
</template>

<style lang="sass">
.app-content
  display: flex
  flex-direction: column
  flex-grow: 1
.footer
  margin-top: auto
</style>

<script>
import { mapActions, mapMutations } from 'vuex';
import CartIndicator from '@/components/cart/CartIndicator.vue';
import BaseNotification from '@/components/notifications/BaseNotification.vue';

export default {
  name: 'App',
  components: {
    CartIndicator,
    BaseNotification,
  },
  methods: {
    ...mapActions(['loadCart', 'addNotification']),
    ...mapMutations(['updateUserAccessKey']),
  },
  created() {
    // обновление ключа пользователя
    const userAccessKey = localStorage.getItem('userAccessKey');
    if (userAccessKey) {
      this.updateUserAccessKey(userAccessKey);
    }
    // загрузка корзины под пользователя
    this.loadCart();
  },
};
</script>
