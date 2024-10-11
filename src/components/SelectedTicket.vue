<script setup lang="ts">
import plus from '@/assets/icons/plus.svg'
import substarction from '@/assets/icons/substraction.svg'
// import search from '@/assets/icons/search.svg'

import { useTicketStore } from '@/stores/ticket'

const ticket = useTicketStore()

const fPlus = () => {
  ticket.selected.push(1)
}

const fSubstarction = () => {
  ticket.selected.pop()
}
</script>

<template>
  <div class="container">
    <h1 class="title">LISTA DE TICKETS</h1>
    <div class="counter">
      <button @click="fSubstarction" class="btn substarction scale">
        <img :src="substarction" alt="substarction" />
      </button>

      <span class="counter-ticket">
        {{ ticket.selectedUnit }}
      </span>

      <button @click="fPlus" class="btn plus scale">
        <img :src="plus" alt="plus" />
      </button>
    </div>

    <div class="total-price ubuntu-bold">
      <p>Total:</p>
      <span>
        {{ ticket.totalPrice }}
      </span>
      <span class="money"> VES </span>
    </div>

    <!-- <div class="filter">
            <input type="text" />
            <img :src="search" alt="filter" />
        </div> -->
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  border: none;
  inline-size: 2rem;
  block-size: 2rem;
  border-radius: 2.4rem;
  margin: 0.2rem;
  margin: 0 1rem;
}

.plus {
  background-color: var(--gray-app);
}

.substarction {
  background-color: var(--gray-app);
}

.filter {
  display: flex;
}

.counter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter-ticket {
  font-size: 2.7rem;
}

.total-price {
  display: flex;
  font-size: 2rem;
  align-items: center;
}

.total-price span {
  margin-block-start: 0.5rem;
  margin-right: 0.1rem;
}

.total-price p {
  margin: 0.5rem 0.5rem;
}

.money {
  font-size: 1.2rem;
}
</style>
