<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import { format } from 'date-fns'

export interface Root {
  id: number
  name: string
  lastname: string
  email: string
  phone: string
  paymentReference: string
  createdAt: string
}

const customers = ref<Root[]>([])
const url = 'https://vps-4438780-x.dattaweb.com/api/v1'

const examine = (paymentReference: string) => {
  router.push(`/examine/${paymentReference}`)
}

onMounted(async () => {
  const { data } = await axios.get(`${url}/customers`)
  data.map((customer: Root) => {
    customers.value.push(customer)
  })
})

const customer = ref({ createdAt: '2024-10-07T15:59:43Z' })

const formatDateTime = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy HH:mm:ss')
}
</script>

<template>
  <div class="container-app">
    <div class="scroll">
      <div class="cont-verify shadow transition" v-for="(customer, index) in customers" :key="customer.id">
        <div class="verify">
          {{ index + 1 }}. <br>  {{ customer.name }}
        </div>
        <div class="verify">
           {{ customer.lastname }}
        </div>
        <div class="verify">
           {{ customer.email }}
        </div>
        <div class="verify">
           {{ customer.phone }}
        </div>
        <div class="verify">
           {{ formatDateTime(customer.createdAt) }}
        </div>
        <div class="btn-prod">
          <button @click="examine(customer.paymentReference)" class="btn ubuntu-bold shadow">
            Examinar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.cont-verify {
  display: flex;
  flex-direction: column;
  background-color: var(--gray-app);
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 900px;
  align-items: center;
}

.verify {
  margin: 0.5rem 0;
}

.btn {
  border: none;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
  color: var(--white-app);
  background-color: var(--secundary-app);
}

.btn:hover {
  cursor: pointer;
}

@media (min-width: 868px) {
  .cont-verify {
    flex-direction: row;
    justify-content: space-between;
  }

  .verify {
    flex: 1;
    margin: 0.5rem;
  }
}
</style>
