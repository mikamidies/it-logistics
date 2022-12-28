<template>
  <div class="map__wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5993.783585060493!2d69.28243815250103!3d41.31121755083045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0J_QsNGA0Log0JDQvNC40YDQsCDQotC10LzRg9GA0LA!5e0!3m2!1sru!2s!4v1672234246628!5m2!1sru!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
                <a href="#" class="item__txt">Contacts:</a>
              </div>
              <div class="map__item">
                <p class="item__sup">Email:</p>
                <a href="#" class="item__txt">office@itlogisticglobal.uz</a>
              </div>
              <div class="map__item">
                <p class="item__sup">Address:</p>
                <a href="#" class="item__txt"
                  >Republic of Uzbekistan, Tashkent, Mirabad district, Kizil
                  arvat str. 2-passage, house 37</a
                >
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
</style>
