<template>
  <div data-aos="fade-up">
    <div class="container">
      <div class="auth__wrap">
        <div class="row">
          <div class="col-lg-2 col-xs-12">
            <img src="@/assets/img/conte.jpg" alt="" class="auth__img" />
          </div>
          <div class="col-lg-10 col-xs-12">
            <h4 class="auth__name">{{translations.find(item => item.key == 'owner-name')?.val[getLang] ?? translations.find(item => item.key == 'owner-name')?.val.ru }}</h4>
            <p class="auth__status">{{translations.find(item => item.key == 'owner-status')?.val[getLang] ?? translations.find(item => item.key == 'owner-status')?.val.ru }}</p>
            <p class="auth__word">
              {{translations.find(item => item.key == 'owner-txt')?.val[getLang] ?? translations.find(item => item.key == 'owner-txt')?.val.ru }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAuthor',

  props: ['translations'],

  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
}
</script>

<style>
.auth__wrap {
  background: #ffffff;
  border-radius: 40px;
  padding: 32px;
  margin-top: 24px;
}
.auth__wrap .row {
  align-items: center;
}
.auth__img {
  border-radius: 24px;
  width: 100%;
  height: 221px;
  object-fit: cover;
}
.auth__name {
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  font-family: var(--decor-bold);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.auth__status {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #777c84;
  letter-spacing: 0.04em;
  margin-bottom: 32px;
}
.auth__word {
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  max-width: 80%;
}
@media screen and (max-width: 1024px) {
  .auth__wrap {
    padding: 16px;
    border-radius: 16px;
  }
  .auth__img {
    margin-bottom: 16px;
  }
  .auth__name {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 12px;
  }
  .auth__status {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 20px;
  }
  .auth__word {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }
}
</style>
