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
          <!-- <div class="nav__lang">
            <p class="current__lang">En <i class="bx bx-chevron-down"></i></p>
            <div class="lang__drop">
              <a href="#" class="next__lang">Eng</a>
            </div>
          </div> -->
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
            <a href="#about" class="mob__link">About us</a>
          </li>
          <li><a href="#services" class="mob__link">Services</a></li>
          <li><a href="#recruiting" class="mob__link">Recruiting</a></li>
          <li><a href="#contacts" class="mob__link">Contacts</a></li>
        </ul>

        <div>
          <div class="footer__wrap">
            <div class="left">
              <p>Copyright © 2022 IT LOGISTIC GLOBAL.</p>
              <p>All rights reserved.</p>
            </div>
            <div class="footer__right">
              <p class="author">Developed by:</p>
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
    }
  },

  watch: {
    $route() {
      this.isMenuOpen = false
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
  background: #f5f5f7;
  z-index: 999;
  position: relative;
  transition: 0.2s;
  padding-bottom: 32px;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100%);
  pointer-events: none;
  display: none;
}
.mob__body.show-nav {
  opacity: 1;
  visibility: visible;
  transform: translateX(0%);
  pointer-events: initial;
  display: block;
}
.mob__body .container {
  min-height: 90vh;
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
  font-size: 16px;
  line-height: 24px;
  color: var(--black);
  position: relative;
}
.mob__link::after {
  width: 6px;
  height: 6px;
  background: var(--blue);
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.mob__link:hover {
  color: var(--black);
  text-decoration: none;
}
@media screen and (max-width: 1024px) {
  .mob__wrap {
    display: block;
  }
}
</style>
