<template>
  <div class="navbar">
    
    <router-link to="/verify" class="nav-item">Verificador</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #37526e7c;
  padding: 10px;
}
.nav-item {
  margin: 10px 0;
  text-decoration: none;
  color: #000;
}
.nav-item:hover {
  color: #007bff;
}
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    width: 100%;
  }
  .nav-item {
    margin: 0 10px;
  }
}
</style>
