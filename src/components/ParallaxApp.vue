<script setup lang="ts">
import { ref } from 'vue'
import calendar from '@/assets/icons/calendar.svg'
import clock from '@/assets/icons/clock.svg'
//import moto from '@/assets/img/IMG_4361.png'
import phone from '@/assets/img/a15phone.png'
import Accordion from '../components/Accordion.vue';

const title = ref('SAMSUNG Galaxy A15 Dual SIM <br>6 GB Ram y 128 GB de Interna')
// const ticketValue = ref(2)
const dateReffles = ref('13/10/2024')
const time = ref('7:15:00 PM')
const numbersDraw = ref('100')
</script>

<template>
  <div class="container-parallax container-app shadow">
    <div class="parallax">
      <div class="parallax-card">
        <img class="scale" :src="phone" alt="parallaxVuetify" />
      </div>
      <div class="parallax-text">
        <div class="parallax-text-container-calendar-clock">
          <div class="parallax-text-calendar">
            <img class="parallax-ico" :src="calendar" alt="calendar.svg" />
            <span>13 Octubre 2024</span>
          </div>
          <div class="parallax-text-clock">
            <img class="parallax-ico" :src="clock" alt="clock.svg" />
            <span> 7:15 PM</span>
          </div>
        </div>
        <h1 class="parallax-text-title" v-html="title"></h1>
        <div class="parallax-text-parrafo">
          <p class="parallax-text-parrafo-p">
            <strong>Valor del Ticket:</strong> 70 Bs. 
          </p>
          <Accordion />
          <p class="parallax-text-parrafo-p">
            <strong>Fecha del Sorteo:</strong> {{ dateReffles }}
          </p>
          <p class="parallax-text-parrafo-p"><strong>Hora:</strong> {{ time }} <br><strong>(Resultado Loteria EL Terminalito)</strong></p>
          <p class="parallax-text-parrafo-p">
            <strong>Números a Sortear:</strong> {{ numbersDraw }}
          </p>
          <p class="parallax-text-parrafo-p">Participa y Gana💰🤑</p>
        </div>

        
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-parallax {
  border-radius: 1rem;
  background-color: rgb(94, 86, 101);
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.parallax {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
}

.parallax-card {
  width: 100%;
  max-width: 25rem;
  height: auto;
  margin-bottom: 1rem;
}

.parallax-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.parallax-text-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.parallax-text-parrafo {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 1rem;
  text-align:left
}

.parallax-text-parrafo-p {
  margin: 0.5rem 0;
}

.parallax-text-container-calendar-clock {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
}

.parallax-text-calendar,
.parallax-text-clock {
  display: flex;
  align-items: center;
  margin: 0 1rem;
}

.parallax-ico {
  width: 1.2rem;
  margin-right: 0.5rem;
}

@media (min-width: 768px) {
  .parallax {
    flex-direction: row;
  }

  .parallax-card {
    margin-bottom: 0;
  }

  .parallax-text {
    align-items: flex-start;
    text-align: left;
    margin-left: 2rem;
  }

  .parallax-text-container-calendar-clock {
    justify-content: flex-start;
  }
}
</style>
