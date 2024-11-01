<script setup lang="ts">
import { useTicketStore } from '@/stores/ticket'

const ticket = useTicketStore()

const deleteTicket = (e: Event) => {
  const target = e.target as HTMLElement
  const ticketValue = target.innerText || target.textContent
  if (ticketValue != null) {
    ticket.delete(ticketValue)
  }
}
</script>

<template>
  <div class="container shadow">
    <div @click="deleteTicket" class="cont-ticket" v-for="ticket in ticket.selected" :key="ticket">
      <div class="ticket ubuntu-bold scale shadow">
        {{ ticket }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  background-color: var(--gray-app);
  border-radius: 1rem;
  width: 79%;
  margin: 0 auto;
  padding: 1rem;
}

.ticket {
  position: relative;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem;
  background-color: var(--secundary-app);
  border-radius: 1rem;
  color: var(--white-app);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.ticket:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .container {
    width: 79%;
    padding: 0.5rem;
  }

  .ticket {
    margin: 0.5rem 0;
  }
}
</style>
