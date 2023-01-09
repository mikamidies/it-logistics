<template>
  <div class="form__wrapper">
    <div class="container">
      <div class="form__wrap">
        <div class="row">
          <div class="col-lg-5 col-xs-12">
            <h4 class="form__title">
              {{
                translations.find((item) => item.key == 'form-title')?.val[
                  getLang
                ] ??
                translations.find((item) => item.key == 'form-title')?.val.ru
              }}
              <span class="blue">{{
                translations.find((item) => item.key == 'form-blue')?.val[
                  getLang
                ] ??
                translations.find((item) => item.key == 'form-blue')?.val.ru
              }}</span>
            </h4>
            <p class="form__txt">
              {{
                translations.find((item) => item.key == 'form-sub')?.val[
                  getLang
                ] ?? translations.find((item) => item.key == 'form-sub')?.val.ru
              }}
            </p>
          </div>
          <div class="col-lg-7 col-xs-12">
            <form @submit.prevent="onSubmit">
              <div class="form__flexer">
                <div class="form__rower">
                  <input
                    v-model="name"
                    type="text"
                    :placeholder="
                      translations.find((item) => item.key == 'form-name')?.val[
                        getLang
                      ] ??
                      translations.find((item) => item.key == 'form-name')?.val
                        .ru
                    "
                    class="form__input"
                    required
                  />
                  <textarea
                    v-model="message"
                    class="form__textarea"
                    :placeholder="
                      translations.find((item) => item.key == 'form-comment')
                        ?.val[getLang] ??
                      translations.find((item) => item.key == 'form-comment')
                        ?.val.ru
                    "
                  ></textarea>
                </div>
                <div class="form__rower">
                  <input
                    v-model="company"
                    type="text"
                    :placeholder="
                      translations.find((item) => item.key == 'form-company')
                        ?.val[getLang] ??
                      translations.find((item) => item.key == 'form-company')
                        ?.val.ru
                    "
                    class="form__input"
                  />
                  <input
                    v-model="phone_number"
                    type="number"
                    :placeholder="
                      translations.find((item) => item.key == 'form-number')
                        ?.val[getLang] ??
                      translations.find((item) => item.key == 'form-number')
                        ?.val.ru
                    "
                    class="form__input"
                    required
                  />
                  <button type="submit" class="banner__btn">
                    <div v-if="sending" class="sending">
                      <div class="spinner lds-dual-ring"></div>
                    </div>
                    <div v-else>
                      <p>
                        {{
                          translations.find((item) => item.key == 'join')?.val[
                            getLang
                          ] ??
                          translations.find((item) => item.key == 'join')?.val
                            .ru
                        }}
                      </p>
                    </div>
                  </button>
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
import formApi from '@/api/form.js'

export default {
  name: 'HomeForm',

  data() {
    return {
      name: '',
      company: '',
      phone_number: '',
      message: '',
      page: 'https://plaza.choopon.uz',
      sending: false,
    }
  },

  props: ['translations'],

  computed: {
    getLang() {
      return this.$store.getters.language
    },
  },

  methods: {
    async onSubmit() {
      this.sending = true

      const formData = {
        name: this.name,
        company: this.company,
        phone_number: this.phone_number,
        message: this.message,
        page: this.page,
      }

      const res = await formApi.sendApplication(formData)

      if (res && res.status === 201) {
        this.$toast.success('Successfully sent')
      } else {
        this.$toast.error('Error')
      }

      this.name = ''
      this.company = ''
      this.phone_number = ''
      this.message = ''

      this.sending = false
    },
  },
}
</script>

<style scoped>
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
  padding: 21px 24px;
  background: #fafafa;
  border: 1px solid #c9c9c9;
  border-radius: 12px;
  width: 100%;
}
.form__input::placeholder,
.form__textarea::placeholder {
  color: #777c84;
  text-transform: uppercase;
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
  /* padding: 17px; */
  position: relative;
  overflow: hidden;
  border: 2px solid var(--blue);
  text-align: center;
  height: 60px;
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
.sending {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spinner {
  width: 30px;
  height: 30px;
}
.spinner::after {
  position: relative;
  z-index: 99;
  width: 100%;
  height: 100%;
  margin: 0;
}
@media screen and (max-width: 1024px) {
  .form__wrapper {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .form__wrap {
    padding: 28px 18px;
    border-radius: 16px;
  }
  .form__title {
    font-weight: 800;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 16px;
  }
  .form__txt {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 26px;
  }
  .form__flexer {
    display: flex;
    flex-direction: column;
  }
}
</style>
