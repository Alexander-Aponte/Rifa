<script setup lang="ts">
import { ref, watch } from 'vue'
import axios from 'axios'
import { useTicketStore } from '@/stores/ticket'
import { v4 as uuidv4 } from 'uuid'

// vee-validate
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const ticket = useTicketStore()

const url = 'https://vps-4438780-x.dattaweb.com/api/v1' // /newUser

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Correo electrónico no válido')
    .required('Correo electrónico es requerido'),
  phone: yup.string().required('Teléfono es requerido')
})

const { handleSubmit, errors } = useForm({
  validationSchema
})

const name = ref('')
const lastname = ref('')
const { value: userEmail } = useField('email')
const { value: userPhone } = useField('phone')

const captureFile = ref<File>()

const isActive = ref(false)
const validate = () => {
  console.log(ticket.selected.length)
  if (ticket.selected.length <= 1) {
    return true
  } else {
    return false
  }
}

// validate()
const submit = async (e: Event) => {
  e.preventDefault()
  if (validate()) {
    //alert('SELECIONE LOS TICKETS QUE SEA COMPRAR<br> Minimo 2 Tickets')
    alert('SELECIONE LOS TICKETS QUE SEA COMPRAR\nMINIMO 2 TICKETS')
  } else {
    const formData = new FormData(e.target as HTMLFormElement)
    formData.append('image', captureFile.value as File)

    // Generate PaymentReference
    const reference = generatePaymetReference()
    formData.append('reference', JSON.stringify(reference))

    console.log(formData.values)

    try {
      const response = await axios.post(`${url}/new/customer`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      alert('Datos Enviados Exitosamente, Sera Verificado en un Plazo de 3 Horas ')
      ;(e.target as HTMLFormElement).submit() // Limpia los campos del formulario
    } catch (error) {
      alert(`Error enviando datos: ${error}`)
    }
  }
}

// Tets code
const addDatePaymet = () => {
  name.value = 'administrator'
  lastname.value = 'vue-app-test'
  userEmail.value = 'admin@alicecorp.com'
  userPhone.value = '00000000000'
}

const addFile = (file: File) => {
  // HACER LAS VALIDACIONES CORRESPONDIENTES
  captureFile.value = file
}

const addPaymet = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files) {
    if (input.files.length > 0) {
      isActive.value = true
      addFile(input.files[0])
    } else {
      isActive.value = false
    }
  }
}

const getUserTicket = () => {
  return ticket.selected
}

interface Service {
  idTicket: Number
  paymentReference: String
}

const generatePaymetReference = () => {
  const paymetReference = [] as Service[]
  const selectedTicket = getUserTicket()
  const id = uuidv4()

  selectedTicket.map((idTicket) => {
    paymetReference.push({ idTicket: idTicket, paymentReference: id })
  })

  return paymetReference
}
</script>

<template>
  <div class="h container-app">
    <div class="form-paymet shadow">
      <form class="form" @submit="submit">
        <div class="personalData">
          <label class="ubuntu-bold" for="name">NOMBRES: </label>
          <input v-model="name" class="name shadow" type="text" name="name" required />

          <label class="lastname ubuntu-bold" for="lastname">APELLIDOS: </label>
          <input v-model="lastname" class="lastname shadow" type="text" name="lastname" required />
        </div>

        <div class="email-phone separator">
          <label class="ubuntu-bold" for="email">CORREO ELECTRÓNICO: </label>
          <input
            v-model="userEmail"
            class="email shadow"
            type="text"
            id="email"
            name="email"
            required
          />
          <span v-if="errors.email">{{ errors.email }}</span>
          <label class="phone ubuntu-bold" for="phone">TELÉFONO: </label>
          <input
            v-model="userPhone"
            class="phone shadow"
            type="text"
            id="phone"
            name="phone"
            required
          />
        </div>
        <div class="cap-paymet separator ubuntu-bold">
          <label :class="{ 'active-class': isActive, 'inactive-class': !isActive }" for="file"
            >SOPORTE DE PAGO</label
          >
          <input @change="addPaymet" type="file" id="file" required />
        </div>
        <!-- <button @click="addDatePaymet" type="button">add-data-paymet</button> -->
        <button class="btn scale shadow separator ubuntu-bold">ENVIAR PAGO</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-paymet {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 1rem;
  background-color: var(--gray-app);
  border-radius: 2.4rem;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: 1rem 0;
  background-color: var(--gray-app);
  border-radius: 2.4rem;
}

/* .name {
  margin-right: 1rem;
} */

label {
  margin: 1rem;
}

input {
  border: none;
  height: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  color: var(--dark-gray-app);
  background-color: var(--white-app);
}

input:focus {
  outline: none;
  transition: 0.1s;
  scale: 102%;
}

.personalData {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.email-phone {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.separator {
  margin-bottom: 1.5rem;
}

.file-input {
  display: none;
}

.active-class {
  background-color: var(--green-app);
  color: var(--dark-gray-app);
}

.inactive-class {
  background-color: var(--dark-gray-app);
  color: var(--white-app);
}

.cap-paymet input {
  background-color: var(--gray-app);
}

.file-label {
  background-color: var(--secundary-app);
  color: var(--white-app);
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 1rem;
}

/* .file-label:hover {
  background-color: darkblue;
} */

.btn {
  border: none;
  border-radius: 1rem;
  width: 80%;
  height: 5rem;
  color: var(--white-app);
  background-color: var(--secundary-app);
}
</style>
