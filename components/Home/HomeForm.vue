<template>
  <div class="form__wrapper">
    <div class="container">
      <div class="form__wrap">
        <div class="row">
          <div class="col-lg-5 col-xs-12">
            <h4 class="form__title">
              Have any questions? <span class="blue">Contact us!</span>
            </h4>
            <p class="form__txt">
              If you have any questions about format or what you need to choose,
              leave your number - We will answer all your questions.
            </p>
          </div>
          <div class="col-lg-7 col-xs-12">
            <form action="">
              <div class="form__flexer">
                <div class="form__rower">
                  <input
                    type="text"
                    placeholder="Your name"
                    class="form__input"
                    required
                  />
                  <textarea
                    class="form__textarea"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <div class="form__rower">
                  <input
                    type="text"
                    placeholder="Company name"
                    class="form__input"
                  />
                  <input
                    type="number"
                    placeholder="Phone number"
                    class="form__input"
                    required
                  />
                  <button class="banner__btn"><p>Join us</p></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeForm',
}
</script>

<style>
.form__wrapper {
  padding-top: 120px;
  padding-bottom: 120px;
}
.form__wrap {
  background: #ffffff;
  border-radius: 40px;
  padding: 40px;
}
.form__title {
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  font-family: var(--decor-extra);
  text-transform: uppercase;
  margin-bottom: 40px;
}
.form__txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
}
.form__flexer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}
.form__rower {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.form__input,
.form__textarea {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 21px 24px;
  background: #fafafa;
  border: 1px solid #c9c9c9;
  border-radius: 12px;
  width: 100%;
}
.form__input::placeholder,
.form__textarea::placeholder {
  color: #777c84;
}
.form__textarea {
  height: -webkit-fill-available;
  resize: none;
}
.banner__btn {
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: white;
  background: var(--blue);
  border-radius: 12px;
  padding: 17px;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--blue);
  text-align: center;
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
</style>
