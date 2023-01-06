<template>
  <div class="wrap">
    <div class="illusion">
      <img src="@/assets/img/logo/figure.svg" alt="" class="home__back" />
    </div>
    <div class="container">
      <h1 class="title">
        We are trucking industry <span class="blue"> experts </span>
      </h1>
      <p class="sub" id="about">
        Outsource your dispatching, payroll, safety to us, we will do it better
        than anyone else!
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
            src="@/assets/videos/home.mp4"
          ></video>
        </div>
        <div class="col-lg-6 col-xs-12 right">
          <p class="sub__title">
            Some interesting stats <span class="blue">about us</span>
          </p>
          <div class="sub__items">
            <div class="item">
              <p class="item__num"><span class="blue"> 500 </span> +</p>
              <p class="item__txt">Employees working in our company</p>
            </div>
            <div class="item">
              <p class="item__num">Since<span class="blue"> 2020 </span></p>
              <p class="item__txt">
                The company was established on September 01, 2020
              </p>
            </div>
          </div>
          <button onclick="location.href='#contacts'" class="btn">
            <p>Connect with us</p>
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
}
</script>

<style scoped>
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
  /* pointer-events: none; */
  animation: rotate 300s infinite linear;
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
    margin-left: -16px;
    margin-bottom: 20px;
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
