<template>
  <div class="wrap">
    <div class="illusion">
      <img src="@/assets/img/logo/figure.svg" alt="" class="home__back" />
    </div>
    <div class="container">
      <h4 class="evangelion">
        Fly me to the moon
      </h4>
      <h1 class="title">
        {{
          translations.find((item) => item.key == 'title')?.val[getLang] ??
          translations.find((item) => item.key == 'title')?.val.ru
        }}
        <span class="blue">
          {{
            translations.find((item) => item.key == 'blue')?.val[getLang] ??
            translations.find((item) => item.key == 'blue')?.val.ru
          }}
        </span>
      </h1>
      <p class="sub" id="about">
        {{
          translations.find((item) => item.key == 'sub')?.val[getLang] ??
          translations.find((item) => item.key == 'sub')?.val.ru
        }}
      </p>
    </div>
    <div class="bottom">
      <div class="row">
        <div class="col-lg-6 col-xs-12 left">
          <video
            autoplay
            loop
            playsinline
            muted
            src="@/assets/videos/homme.mp4"
          ></video>
        </div>
        <div class="col-lg-6 col-xs-12 right">
          <p class="sub__title">
            {{
              translations.find((item) => item.key == 'stats')?.val[getLang] ??
              translations.find((item) => item.key == 'stats')?.val.ru
            }}
            <span class="blue">{{
              translations.find((item) => item.key == 'stats-blue')?.val[
                getLang
              ] ?? translations.find((item) => item.key == 'stas-blue')?.val.ru
            }}</span>
          </p>
          <div class="sub__items">
            <div class="item">
              <p class="item__num"><span class="blue"> 250 </span> +</p>
              <p class="item__txt">
                {{
                  translations.find((item) => item.key == 'employees')?.val[
                    getLang
                  ] ??
                  translations.find((item) => item.key == 'employees')?.val.ru
                }}
              </p>
            </div>
            <div class="item">
              <p class="item__num">
                {{
                  translations.find((item) => item.key == 'since')?.val[
                    getLang
                  ] ?? translations.find((item) => item.key == 'since')?.val.ru
                }}<span class="blue"> 2022 </span>
              </p>
              <p class="item__txt">
                {{
                  translations.find((item) => item.key == 'established')?.val[
                    getLang
                  ] ??
                  translations.find((item) => item.key == 'established')?.val.ru
                }}
              </p>
            </div>
          </div>
          <button onclick="location.href='#contacts'" class="btn">
            <p>
              {{
                translations.find((item) => item.key == 'connect')?.val[
                  getLang
                ] ?? translations.find((item) => item.key == 'connect')?.val.ru
              }}
            </p>
          </button>
        </div>
      </div>
    </div>
    <div id="services" class="targer"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHome',

  props: ['translations'],

  computed: {
    getLang() {
      return this.$store.getters.language
    },
  },
}
</script>

<style scoped>
.evangelion{
  font-size: 100px;
  text-align: center;
  font-family: var(--decor-extra);
  margin-bottom: 32px;
}
.wrap {
  padding: 180px 0 120px 0;
  overflow-x: hidden;
}
.title {
  font-weight: 900;
  font-size: 80px;
  line-height: 88px;
  text-align: center;
  font-family: var(--decor-extra);
  text-transform: uppercase;
  margin-bottom: 40px;
}
.sub {
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  max-width: 618px;
  margin: 0 auto;
  margin-bottom: 58px;
}
.left {
  overflow: hidden;
  height: 100%;
}
.right {
  padding-left: 54px;
}
.bottom {
  position: relative;
  height: 545px;
}
.row {
  height: 100%;
  align-items: center;
}
video {
  position: absolute;
  top: 0;
  left: 0;
  /* transform: scale(1.5); */
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px 40px 40px 0px;
}
.sub__title {
  font-weight: 900;
  font-size: 32px;
  line-height: 48px;
  font-family: var(--decor-extra);
  max-width: 50%;
  text-transform: uppercase;
  margin-bottom: 32px;
}
.sub__items {
  display: flex;
  align-items: center;
  margin-bottom: 72px;
}
.item__num {
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  font-family: var(--decor-extra);
  margin-bottom: 8px;
}
.item__txt {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  max-width: 70%;
}
.btn {
  padding: 22px 0;
  width: 586px;
  background: var(--blue);
  position: relative;
  border-radius: 16px;
  border: 2px solid var(--blue);
  overflow: hidden;
}
.btn:focus {
  box-shadow: none;
}
.btn p {
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  font-family: var(--decor-bold);
  color: white;
  position: relative;
  z-index: 8;
  transition: 0.4s;
}
.btn::after {
  content: '';
  background: #f5f5f7;
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s;
}
.btn:hover p {
  color: var(--blue);
}
.btn:hover::after {
  width: 100%;
}
.home__back {
  position: absolute;
  right: 0;
  top: 0;
  pointer-events: none;
  /* animation: rotate 300s infinite linear; */
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-top: 144px;
    padding-bottom: 77px;
  }
  video {
    position: static;
    height: 210px;
    margin-bottom: 20px;
    border-radius: 16px;
  }
  .left {
    padding: 0;
    overflow: visible;
  }
  .title {
    font-weight: 900;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 16px;
  }
  .sub {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .right {
    padding: 0;
  }
  .bottom {
    height: 100%;
    padding: 0 16px;
  }
  .bottom .row {
    margin: 0 !important;
    padding: 0 !important;
  }
  .sub__title {
    font-weight: 900;
    font-size: 20px;
    line-height: 26px;
    max-width: 80%;
    margin-bottom: 20px;
  }
  .sub__items {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  .item__num {
    font-weight: 800;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 8px;
  }
  .item__txt {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    max-width: 100%;
  }
  .btn {
    width: 100%;
  }
  .illusion {
    display: none;
  }
}
</style>
