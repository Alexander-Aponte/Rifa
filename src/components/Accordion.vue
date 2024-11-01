<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggle(index)">
        {{ item.title }}
      </div>
      <transition name="accordion">
        <div v-show="activeIndex === index" class="accordion-content">
          {{ item.content }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const activeIndex = ref(null)
    const items = ref([
      {
        title: 'Pago Movil Provincial',
        content: 'C.I.: 27925610, Telf.:0424-4485755, Provincial (0108)'
      },
      { title: 'Pago USDT', content: 'rosmiarismendi8@gmail.com, (2$ x ticket) ' }
    ])

    const toggle = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index
    }

    return {
      activeIndex,
      items,
      toggle
    }
  }
}
</script>

<style>
.accordion {
  border: 1px solid #1b1414;
  border-radius: 5px;
}
.accordion-item {
  border-bottom: 1px solid #ccc;
}
.accordion-header {
  background-color: rgb(58, 60, 80);
  padding: 10px;
  cursor: pointer;
}
.accordion-content {
  padding: 10px;
  background-color: #fff;
}
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease;
}
.accordion-enter,
.accordion-leave-to {
  max-height: 0;
}
</style>
