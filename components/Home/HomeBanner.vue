<template>
  <div class="banner__wrapper" data-aos="fade-up">
    <div class="container">
      <div class="banner__wrap">
        <div class="banner__lefr">
          <h4 class="banner__title">
            <span class="blue">More</span> than just a career
          </h4>
          <p class="banner__txt">
            We believe our business would not have been as half succesful with
            our great employees! Thats why our employees are like family members
            to us, many have grown to be top executives! 
          </p>
          <div class="banner__white">
            <p class="white__num">250+</p>
            <p class="white__txt">Employees working in our company</p>
          </div>
        </div>
        <div class="banner__right">
          <button onclick="location.href='#contacts'" class="banner__btn long">
            <p>Join us</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
}
</script>

<style>
.banner__wrapper {
  padding-top: 120px;
}
.banner__wrap {
  background-image: url('@/assets/img/banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 40px;
  padding: 60px 70px 72px 70px;
  display: flex;
}
.banner__title {
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color: white;
  font-family: var(--decor-bold);
  text-transform: uppercase;
  max-width: 436px;
  margin-bottom: 40px;
}
.banner__txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: white;
  max-width: 677px;
  margin-bottom: 120px;
}
.banner__white {
  background: #ffffff;
  border-radius: 12px;
  max-width: 366px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  gap: 18px;
}
.white__num {
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: var(--blue);
}
.white__txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
}
.banner__right {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: -webkit-fill-available;
}
.banner__btn {
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: white;
  background: var(--blue);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--blue);
}
.banner__btn.long {
  padding: 17px 86px;
}
.banner__btn::after {
  content: '';
  background: white;
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s;
}
.banner__btn p {
  position: relative;
  z-index: 9;
}
.banner__btn:hover p {
  color: var(--blue);
  transition: 0.4s;
}
.banner__btn:hover::after {
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .banner__wrapper {
    padding-top: 40px;
  }
  .banner__wrap {
    padding: 28px 16px;
    flex-direction: column;
    border-radius: 16px;
  }
  .banner__title {
    font-weight: 800;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 20px;
  }
  .banner__txt {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .white__num {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  .white__txt {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .banner__white {
    padding: 20px;
    margin-bottom: 16px;
  }
  .banner__right {
    display: block;
  }
  .banner__btn {
    width: 100%;
  }
}
</style>
