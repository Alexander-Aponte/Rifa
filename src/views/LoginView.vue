<template>
    <div class="login-container">
      <form @submit.prevent="login">
        <h2>Iniciar Sesión</h2>
        <label for="email">Correo Electrónico:</label>
        <input type="email" v-model="email" required>
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" required>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.email === 'alex@gmail.com' && this.password === '123asd') {
          this.$router.push('/dashboard');
        } else {
          alert('Credenciales incorrectas');
        }
      }
    }
  };
  </script>
  
  <style>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label, input, button {
    margin-bottom: 1em;
  }
  
  button {
    padding: 0.5em;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  