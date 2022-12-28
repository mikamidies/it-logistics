<template>
  <div>
    <div class="container">
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
</template>

<script>
export default {
  name: 'DesktopFooter',
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
</style>
