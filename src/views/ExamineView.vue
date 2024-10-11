<script setup lang="ts">
import router from '@/router'
import axios from 'axios'
import { onMounted, ref } from 'vue'

interface Paymet {
  idDePago: string
  nombre: string
  todosLosTickets: string
  cantidadDeTickets: number
  fechaDeCreacion: Date
}

const examine = ref<Paymet[]>([])

const refrence = router.currentRoute.value.params.paymetReference
const url = 'https://vps-4438780-x.dattaweb.com/api/v1'

const img = ref('')
const urlImg = 'https://vps-4438780-x.dattaweb.com/uploads/'

const processString = (serverString: string) => {
  let splitString = serverString.split('/')
  return splitString.length > 1 ? splitString[1] : ''
}

// const processString = (serverString: string) => {
//   let splitString = serverString.split('\\')
//   return splitString[1]
// }

async function deleteT(item): Promise<void> {
  if (confirm(`¿Estás seguro de que deseas eliminar el pago ID: ${item.idDePago}?`)) {
    await axios.delete(`${url}/examine/delete/${item.idDePago}`)
    router.push('/')
  } else {
    alert('Eliminación cancelada.')
  }
}

onMounted(async () => {
  try {
    const response = await axios.get(`${url}/examine/${refrence}`)
    const responseImg = await axios.get(`${url}/examineImg/${refrence}`)
    const nameImg = processString(responseImg.data[0].path)
    img.value = urlImg.concat(nameImg)
    examine.value = response.data
    console.log(nameImg)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

// onMounted(async () => {
//   const response = await axios.get(`${url}/examine/${refrence}`)
//   const responseImg = await axios.get(`${url}/examineImg/${refrence}`)
//   const nameImg = processString(responseImg.data[0].path)
//   img.value = urlImg.concat(nameImg)
//   examine.value = response.data
// })
</script>

<template>
  <div class="container-app">
    <div class="examine">
      <table class="styled-table">
        <thead>
          <tr>
            <th>Id De Pago</th>
            <th>Nombre</th>
            <th>Todos Los Tickets</th>
            <th>Cantidad De Tickets</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in examine" :key="item.idDePago">
            <td>{{ item.idDePago }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.todosLosTickets }}</td>
            <td>{{ item.cantidadDeTickets }}</td>
            <td>
              <button class="boton-eliminar" @click="deleteT(item)">Eliminar Pago</button>
              <!-- Botón agregado -->
            </td>
          </tr>
        </tbody>
      </table>

      <button class="boton-regresar" @click="$router.go(-1)">Regresar</button>

      <div class="payment-image">
        <h2 class="subtitle">COMPROBANTE DE PAGO</h2>
        <img class="img" :src="img" alt="payment" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.examine {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.payment-image {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.img {
  height: 30rem;
  width: 15rem;
}

.subtitle {
  background-color: yellow;
  max-width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  .examine {
    flex-direction: column;
  }

  .payment-image {
    margin-top: 2rem;
  }

  .img {
    max-width: 100%;
  }
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  text-align: left;
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr:hover {
  background-color: #f1f1f1;
}

.boton-eliminar {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.boton-eliminar:hover {
  background-color: #ff1a1a;
}

.boton-regresar{
  background-color: #06c951;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.boton-regresar:hover {
  background-color: #275238;
}

@media (min-width: 768px) {
  .examine {
    flex-direction: column;
  }

  .payment-image {
    margin-top: 2rem;
  }

  .img {
    max-width: 100%;
  }
}
</style>
