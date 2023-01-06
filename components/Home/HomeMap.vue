<template>
  <div class="map__wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12">
          <div class="map">
            <div class="iframe" v-html="about.map"></div>
          </div>
        </div>
        <div class="col-lg-7 col-xs-12">
          <div class="map__content">
            <p class="map__sup">Location</p>
            <h4 class="map__title">
              We are located in the <br />
              <span class="blue"> IT park office </span>
            </h4>
            <div class="map__items">
              <div class="map__item">
                <p class="item__sup">Contacts:</p>
                <a :href="`tel:${about.phone_number}`" class="item__txt">{{
                  about.phone_number
                }}</a>
              </div>
              <div class="map__item">
                <p class="item__sup">Email:</p>
                <a :href="`mailto:${about.email}`" class="item__txt">{{
                  about.email
                }}</a>
              </div>
              <div class="map__item">
                <p class="item__sup">Address:</p>
                <a href="#" class="item__txt">{{ about.address.en }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="contacts" class="target"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeMap',

  props: {
    about: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.map__wrap {
  padding-top: 120px;
}
.map iframe {
  height: 442px !important;
  width: 100% !important;
  border: 1px solid #c2c2c3;
  border-radius: 40px;
}
.map__content {
  background: #ffffff;
  border-radius: 40px;
  padding: 40px;
  height: 100%;
}
.map__sup {
  font-weight: 600;
  font-size: 14px;
  line-height: 32px;
  color: #777c84;
  margin-bottom: 8px;
  text-transform: uppercase;
}
.map__title {
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  font-family: var(--decor-extra);
  text-transform: uppercase;
  margin-bottom: 40px;
}
.map__items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  row-gap: 40px;
}
.map__item:last-child {
  grid-column: 1/3;
}
.item__sup {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #777c84;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.item__txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: var(--black);
  max-width: 70%;
  display: block;
  transition: 0.4s;
}
.item__txt:hover {
  color: var(--blue);
  text-decoration: none;
}
@media screen and (max-width: 1024px) {
  .map__wrap {
    padding-top: 40px;
  }
  .map iframe {
    height: 221px !important;
    border-radius: 16px;
    margin-bottom: 16px;
  }
  .map__content {
    border-radius: 16px;
    padding: 18px;
  }
  .map__sup {
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .map__title {
    font-weight: 800;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 16px;
  }
  .map__items {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
  .map__item:last-child {
    grid-column: initial;
  }
  .item__txt {
    max-width: 100%;
  }
}
</style>
