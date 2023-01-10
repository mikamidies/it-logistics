<template>
  <div class="mob__wrap" id="nav">
    <div class="container">
      <div class="mob__head">
        <div class="mob__logo">
          <a href="#">
            <img src="@/assets/img/logo/brand.svg" alt="" class="mob__pic" />
          </a>
        </div>
        <div class="mob__right">
          <div class="mob__lang nav__lang">
            <p class="current__lang"
              @click="isLangOpen = !isLangOpen"
            >
              {{ getLang }} <i class="bx bx-chevron-down"></i>
            </p>
            <div class="lang__modal" :class="{ 'show-lang': isLangOpen }">
              <div class="lang__wrap" @click="isLangOpen = !isLangOpen">
              </div>
              <div class="lang__drop">
                <p @click="changeLang('en')" class="next__lang">English</p>
                <p @click="changeLang('ru')" class="next__lang">Russian</p>
              </div>
            </div>
          </div>
          <div class="mob__burger">
            <button
              :class="{ 'toggle-x': isMenuOpen }"
              @click="isMenuOpen = !isMenuOpen"
            >
              <div class="stick"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mob__body" :class="{ 'show-nav': isMenuOpen }">
      <div class="container">
        <ul>
          <li>
            <a href="#about" class="mob__link">{{
              translations.find((item) => item.key == 'about')?.val[getLang] ??
              translations.find((item) => item.key == 'about')?.val.ru
            }}</a>
          </li>
          <li>
            <a href="#services" class="mob__link">{{
              translations.find((item) => item.key == 'services')?.val[
                getLang
              ] ?? translations.find((item) => item.key == 'services')?.val.ru
            }}</a>
          </li>
          <li>
            <a href="#recruiting" class="mob__link">{{
              translations.find((item) => item.key == 'recruiting')?.val[
                getLang
              ] ?? translations.find((item) => item.key == 'recruiting')?.val.ru
            }}</a>
          </li>
          <li>
            <a href="#contacts" class="mob__link">{{
              translations.find((item) => item.key == 'contact')?.val[
                getLang
              ] ?? translations.find((item) => item.key == 'contact')?.val.ru
            }}</a>
          </li>
        </ul>

        <div>
          <div class="footer__wrap">
            <div class="left">
              <p>
                {{
                  translations.find((item) => item.key == 'footer-txt')?.val[
                    getLang
                  ] ??
                  translations.find((item) => item.key == 'footer-txt')?.val.ru
                }}
              </p>
              <p>
                {{
                  translations.find((item) => item.key == 'footer-right')?.val[
                    getLang
                  ] ??
                  translations.find((item) => item.key == 'footer-right')?.val
                    .ru
                }}
              </p>
            </div>
            <div class="footer__right">
              <p class="author">
                {{
                  translations.find((item) => item.key == 'developed-by')?.val[
                    getLang
                  ] ??
                  translations.find((item) => item.key == 'developed-by')?.val
                    .ru
                }}
              </p>
              <a href="#">
                <img src="@/assets/img/logo/ndc.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileHeader',

  data() {
    return {
      isMenuOpen: false,
      isLangOpen: false,
    }
  },

  watch: {
    $route() {
      this.isMenuOpen = false;
      this.isLangOpen = false;
    },
  },

  mounted() {
    function scrollHeader() {
      const navbar = document.getElementById('nav')
      if (this.scrollY >= 50) {
        navbar.classList.add('scroll-header')
      } else {
        navbar.classList.remove('scroll-header')
      }
    }
    window.addEventListener('scroll', scrollHeader)

    console.log(this.$store.getters);
  },

  props: ['translations'],

  computed: {
    getLang() {
      return this.$store.getters.language
    },
  },

  methods: {
    changeLang(code) {
      this.$store.dispatch('actionLangRu', code)
      this.$router.replace({
        params: {
          lang: code,
        },
      })
      localStorage.setItem('Lang', code)
    },
  },
}
</script>

<style>
.mob__wrap.scroll-header {
  background: white;
  box-shadow: 0px 4px 84px rgba(0, 0, 0, 0.08);
}
.mob__wrap {
  display: none;
  transition: 0.2s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: #f5f5f7;
}
.mob__pic {
  width: 110px;
  height: auto;
}
.mob__head {
  justify-content: space-between;
  display: flex;
  padding: 24px 16px;
  align-items: center;
}
.mob__right {
  display: flex;
  gap: 40px;
  align-items: center;
}
.nav__lang {
  position: relative;
  cursor: pointer;
}

.mob__burger {
  display: flex;
  align-items: center;
  justify-content: center;
}
.stick {
  position: relative;
  width: 30px;
  height: 2px;
  background: var(--black);
  transition: 0.3s;
}
.stick::after {
  content: '';
  width: 30px;
  height: 2px;
  background: var(--black);
  position: absolute;
  top: 10px;
  left: 0;
  transition: 0.3s;
}
.stick::before {
  content: '';
  width: 30px;
  height: 2px;
  background: var(--black);
  position: absolute;
  top: -10px;
  left: 0;
}
.toggle-x .stick {
  transform: rotate(45deg);
}
.toggle-x .stick::after {
  transform: rotate(90deg);
  top: 0;
}
.toggle-x .stick::before {
  display: none;
}
.mob__body {
  background:#D5D5D5;
  z-index: 999;
  position: relative;
  transition: 0.2s;
  padding-bottom: 32px;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100%);
  pointer-events: none;
  display: none;
  height: 100%;
}
.mob__body.show-nav {
  opacity: 1;
  visibility: visible;
  transform: translateX(0%);
  pointer-events: initial;
  display: block;
  height: 90vh;
}
.mob__body .container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.mob__wrap.scroll-header .mob__body {
  background: white;
}
.mob__body ul {
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.mob__link {
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  color: var(--black);
  position: relative;
}

.mob__link:hover {
  color: var(--black);
  text-decoration: none;
}
.next__lang,
.current__lang {
  text-transform: capitalize;
}
.lang__drop {
  position: absolute;
  top: 70px;
  right: 30px;
  background: white;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.2);
  border-radius: 8px;
  transition: 0.4s;
  z-index: 999999;
}
.lang__modal{
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.lang__wrap{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.lang__modal.show-lang{
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: initial;
  z-index: 99999999999999;
}
.next__lang:last-child{
  border-bottom: none;
}
@media screen and (max-width: 1024px) {
  .mob__wrap {
    display: block;
  }
}
</style>
