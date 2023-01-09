<template>
  <div class="nav__wrap" id="navbar">
    <div class="container">
      <div class="nav__left">
        <div class="nav__img">
          <a href="#">
            <img src="@/assets/img/logo/brand.svg" alt="" class="nav__pic" />
          </a>
        </div>
        <div class="nav__links">
          <ul>
            <li>
              <a href="#about" class="nav__link">About us</a>
            </li>
            <li>
              <a href="#services" class="nav__link">Services</a>
            </li>
            <li>
              <a href="#recruiting" class="nav__link">Recruiting</a>
            </li>
            <li>
              <a href="#contacts" class="nav__link">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav__right">
        <div class="nav__lang">
          <p class="current__lang">{{getLang}} <i class="bx bx-chevron-down"></i></p>
          <div class="lang__drop">
            <p @click="changeLang('ru')" class="next__lang">Ru</p>
            <p @click="changeLang('uz')" class="next__lang">Uz</p>
          </div>
        </div>
        <button class="nav__btn" onclick="location.href='#contacts'">
          <p>Contact with us</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable
import faqApi from '@/api/faq.js'

export default {
  name: 'DesktopNavbar',

  async asyncData({ $axios }) {
    const translations = await faqApi.getFaq($axios);

    return {
      translations,
    }
  },

  mounted() {
    function scrollHeader() {
      const navbar = document.getElementById('navbar')
      if (this.scrollY >= 50) {
        navbar.classList.add('scroll-header')
      } else {
        navbar.classList.remove('scroll-header')
      }
    }
    window.addEventListener('scroll', scrollHeader)

    console.log(this.faq)
  },

  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
  
  methods: {
    changeLang(code) {
      this.$store.dispatch("actionLangRu", code);
        this.$router.replace({
          params: {
            lang: code,
          },
        });
      localStorage.setItem("Lang", code);
    },
  },
}
</script>

<style scoped>
.nav__wrap {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background: transparent;
  padding: 21px 0;
  transition: 0.2s;
}
.nav__wrap.scroll-header {
  background: white;
  box-shadow: 0px 4px 84px rgba(0, 0, 0, 0.08);
}
.nav__wrap .container {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.nav__left {
  display: flex;
  align-items: center;
  gap: 99px;
}
.nav__links ul {
  display: flex;
  align-items: center;
  gap: 80px;
}
.nav__right {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav__lang {
  position: relative;
  cursor: pointer;
}
.lang__drop {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  pointer-events: none;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 12px;
  background: white;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.2);
  border-radius: 8px;
  transition: 0.4s;
}
.nav__lang:hover .lang__drop {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: initial;
}
.nav__link,
.current__lang,
.next__lang {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--black);
  position: relative;
  transition: 0.4s;
}
.nav__link:hover,
.current__lang:hover,
.next__lang:hover {
  text-decoration: none;
}
.nav__link::after {
  width: 0%;
  height: 2px;
  background: var(--blue);
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  transition: 0.4s;
}
.nav__link:hover::after {
  width: 100%;
}
.next__lang:hover {
  color: var(--blue);
}
.nav__pic {
  width: 150px;
  height: auto;
  object-fit: contain;
  transition: 0.4s;
}
/* .nav__pic:hover {
  transform: scale(0.97);
} */
.nav__btn {
  text-transform: uppercase;
  padding: 18px 56px;
  border: 2px solid var(--blue);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}
.nav__btn p {
  position: relative;
  z-index: 9;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: var(--blue);
  transition: 0.4s;
}
.nav__btn::after {
  content: '';
  background: var(--blue);
  height: 100%;
  width: 0%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s;
}
.nav__btn:hover p {
  color: white;
}
.nav__btn:hover::after {
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .nav__wrap {
    display: none;
  }
}
</style>
