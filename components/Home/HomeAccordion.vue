<template>
  <div data-aos="fade-up">
    <div class="container">
      <div class="acc__wrapper">
        <Accordion>
          <h4 class="acc__title">
            What we actually can do for your <span class="blue">business</span>
          </h4>
          <AccordionItem v-for="item in faq" :key="item.id">
            <template slot="accordion-trigger">
              <div class="acc__wrap">
                <div class="top">
                  <h3 class="top__title">
                    {{ item.question.en }}
                  </h3>
                </div>
                <div>
                  <div class="plus__wrap">
                    <div class="plus">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 31L16 1"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 16L16 1L31 16"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template slot="accordion-content">
              <div class="content__wrap">
                <div v-html="item.answer.en"></div>
              </div>
            </template>
          </AccordionItem>
        </Accordion>
        <div id="recruiting" class="target"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion'
import AccordionItem from '@/components/AccordionItem'

export default {
  name: 'MainFAQS',

  components: {
    Accordion,
    AccordionItem,
  },

  props: {
    faq: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.acc__title {
  max-width: 741px;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  font-family: var(--decor-extra);
  margin-bottom: 16px;
  text-transform: uppercase;
}
.top__title {
  font-weight: 800;
  font-size: 28px;
  line-height: 52px;
  font-family: var(--decor-extra);
  text-transform: uppercase;
}
.acc__wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 32px 0;
  border-bottom: 1px solid #cfd0d2;
}
.plus {
  width: 66px;
  height: 66px;
  font-size: 40px;
  transform: rotate(180deg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  transition: 0.4s;
  border: 1px solid #cfd0d2;
}
.plus path {
  stroke: #cfd0d2 !important;
}
.accordion__item:last-child .acc__wrap {
  border-bottom: none;
  padding-bottom: 0;
}
.accordion__trigger_active .acc__wrap {
  border-bottom: none;
  padding-bottom: 32px !important;
}
.accordion__trigger_active .plus {
  background: var(--blue) !important;
  transform: rotate(0);
  border-color: var(--blue);
}
.accordion__trigger_active .plus path {
  stroke: white !important;
}
.content__wrap p {
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #353437;
  margin-bottom: 24px;
  max-width: 90%;
}
.content__wrap p:last-child {
  margin-bottom: 0;
}
@media screen and (max-width: 1024px) {
  .acc__title {
    font-weight: 800;
    font-size: 22px;
    line-height: 28px;
  }
  .accordion {
    padding: 24px 16px !important;
    border-radius: 20px !important;
  }
  .top__title {
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
  }
  .plus {
    width: 33px;
    height: 33px;
    padding: 0;
  }
  .plus svg {
    width: 16px;
  }
  .content__wrap p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }
  .acc__wrap {
    padding: 24px 0;
  }
}
</style>
