<script setup lang="ts">
import GenerateTicket from '@/components/GenerateTicket.vue'
import Parallax from '@/components/ParallaxApp.vue'
import SelectedTicket from '@/components/SelectedTicket.vue'
import UserTicket from '@/components/UserTicket.vue'
import FormPaymet from '@/components/FormPaymet.vue'
import FooterVue from '../components/Footer.vue'

</script>

<template>
  <div class="home">
    <section class="parallax">
      <Parallax class="parallax" />
    </section>


    <main>
      <section class="section-tickets container-app">
        <SelectedTicket />
        <GenerateTicket class="separator" />
        <UserTicket class="separator" />
      </section>
    </main>

    <section class="section-form-paymet">
      <FormPaymet class="separator" />
    </section>

    <section class="section-footer">
      <FooterVue class="separator" />
      <Terms class="separator" />
    </section>
  </div>
 

</template>

<style scoped>
.section-tickets {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.parallax {
  display: flex;
  justify-content: center;
}

.separator {
  margin-bottom: 4rem;
}
</style>
