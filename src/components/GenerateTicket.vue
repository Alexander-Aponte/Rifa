<script setup lang="ts">
import { useTicketStore } from '@/stores/ticket'
import axios from 'axios'
import { onMounted } from 'vue'
const ticket = useTicketStore()

const selectedTicket = (e: Event) => {
  const target = e.target as HTMLElement

  // Verifica si el tercer hijo tiene la clase 'disabled'
  const secondChild = target.children[0] as HTMLElement
  const thirdChild = secondChild.children[0]

  if (thirdChild && thirdChild.classList.contains('disabled')) {
    return // Si el tercer hijo tiene la clase 'disabled', no hace nada
  }

  const ticketValue = target.innerText || target.textContent
  if (ticketValue != null) {
    const newTicket: number = parseInt(ticketValue)
    ticket.add(newTicket)
    // ticket.selected.push(newTicket)
  }
}

onMounted(async () => {
  const { data } = await axios.get('https://vps-4438780-x.dattaweb.com/api/v1/find/ticket')
  ticket.unit = data
})
</script>

<template>
  <div class="container-ticket shadow">
    <div
      @click="selectedTicket"
      class="ticket shadow ubuntu-bold"
      v-for="item in ticket.unit"
      :key="item.value"
    >
      <div class="ticket-text disabled">
        <span
          :class="{ active: item.statusT === 'active', disabled: item.statusT === 'inactive' }"
          >{{ item.value }}</span
        >
        <!-- <span class="disabled">{{ item.value }}</span> -->
      </div>
    </div>
  </div>

  <!-- <div>{{ ticket.totalPrice }}</div> -->
</template>

<style scoped>
.container-ticket {
  display: grid;
  padding: 0.5rem;
  margin-block-start: 2rem;
  grid-template-columns: repeat(10, 1fr);
  height: 25rem;
  inline-size: 80%;
  background-color: var(--gray-app);
  border-radius: 1.5rem;
  overflow: scroll;
}

.ticket {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--white-app);
  color: var(--black-app);
  inline-size: 3rem;
  block-size: 2rem;
}

.ticket:hover {
  transition: 0.2s;
  scale: 120%;
  background-color: var(--dark-gray-app);
  color: var(--white-app);
  cursor: pointer;
}

.disabled {
  pointer-events: none;
  user-select: none;
  opacity: 0.5;
}

/* .inactive {
  background-color: var(--dark-gray-app);
  background-color: brown;
  text-decoration-color: aqua
} */

/* .container {
    display: flex;

} */
</style>
