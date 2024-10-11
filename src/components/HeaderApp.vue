<script setup lang="ts">
import check from '@/assets/icons/check.svg'
import contact from '@/assets/icons/contact.svg'
import home from '@/assets/icons/home.svg'
import logo from '@/assets/img/RASTREAMING.png'
</script>

<template>
  <header class="header container-app">
    <div class="container-navbar">
      <nav class="navbar">
        <div class="navbar-logo scale">
          <img class="navbar-logo-img" :src="logo" alt="logo" />
          <H3>RIFAS RA</H3>
        </div>
        <ul class="navbar-list">
          <li class="navbar-item scale">
            <img class="navbar-item-img" :src="home" alt="home" />
            <router-link to="/" class="link">
              <span class="navbar-item-span ubuntu-bold">INICIO</span>
            </router-link>
          </li>
          <li class="navbar-item scale">
            <img class="navbar-item-img" :src="check" alt="check.svg" />
            <router-link class="link" to="/verify">
              <span class="navbar-item-span ubuntu-bold">VERIFICADOR</span></router-link
            >
          </li>
          <li class="navbar-item scale">
            <img class="navbar-item-img" :src="contact" alt="contact.svg" />
            <span class="navbar-item-span ubuntu-bold">CONTACTO</span>
          </li>
          <li class="navbar-item scale">
            <button class="navbar-btn shadow">
              <span class="navbar-item-span ubuntu-bold">LISTA DE BOLETOS</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1rem solid var(--gray-app);
  height: 5.5rem;
  background-color: #010408da;
  color: var(--white-app);
  padding: 0 1rem;
}

.container-navbar {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo-img {
  height: 55px;
  width: 120px;
}

.navbar-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-item {
  display: flex;
  align-items: center;
  margin: 0 1rem;
}

.navbar-item-img {
  margin-right: 0.5rem;
}

.link {
  text-decoration: none;
  color: var(--white-app);
  margin-left: 0.5rem;
}

.navbar-btn {
  display: flex;
  align-items: center;
  border: none;
  border-radius: 2rem;
  height: 3rem;
  padding: 0 1rem;
  background-color: var(--gray-app);
  color: var(--white-app);
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar-list {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-item {
    margin: 0.5rem 0;
  }
}
</style>
