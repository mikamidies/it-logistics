<template>
  <div>
    <ul class="accordion">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Accordion',
  provide() {
    return { Accordion: this.Accordion }
  },
  props: {},
  data() {
    return {
      Accordion: {
        count: 1,
        active: true,
      },
    }
  },
}
</script>

<style scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
  background: white;
  border-radius: 40px;
  padding: 40px;
}
.accordion__item:last-child {
  border-bottom: none;
}
</style>
