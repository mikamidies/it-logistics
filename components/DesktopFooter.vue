<template>
  <div>
    <div class="container">
      <div class="footer__wrap">
        <div class="left">
          <p>
            {{
              translations.find((item) => item.key == 'footer-txt')?.val[
                getLang
              ] ?? translations.find((item) => item.key == 'footer-txt')?.val.ru
            }}
          </p>
          <p>
            {{
              translations.find((item) => item.key == 'footer-right')?.val[
                getLang
              ] ??
              translations.find((item) => item.key == 'footer-right')?.val.ru
            }}
          </p>
        </div>
        <div class="footer__right">
          <p class="author">
            {{
              translations.find((item) => item.key == 'developed-by')?.val[
                getLang
              ] ??
              translations.find((item) => item.key == 'developed-by')?.val.ru
            }}
          </p>
          <a class="d-flex" target="_blank" href="http://ndc.uz">
            <img src="@/assets/img/logo/ndc.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopFooter',

  props: ['translations'],

  computed: {
    getLang() {
      return this.$store.getters.language
    },
  },
}
</script>

<style>
.footer__wrap {
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
}
.footer p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 4px;
}
.footer__right {
  display: flex;
  align-items: center;
  gap: 4px;
}
.author {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.right a {
  display: flex;
}
@media screen and (max-width: 1024px) {
  .footer__wrap {
    margin-bottom: 16px;
    padding: 28px 18px;
    border-radius: 16px;
    flex-direction: column;
    gap: 24px;
  }
  .footer__wrap p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
