<template>
  <footer class="footer">
    <p>© 2024 Rifa RA. Todos los derechos reservados.</p>
    <p>
      Contacto: <a href="mailto:rastreaming5@gmail.com">rastreaming5@gmail.com</a> |  Tel: +58
      414-584-7093
    </p>
    <p>
      <a href="/Terms">Términos y Condiciones</a> | <a href="/privacy">Política de Privacidad</a>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white-app);
  background: #02060c;
  padding: 20px 50px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
}

.footer a {
  color: var(--white-app);
  text-decoration: none;
  margin: 0 10px;
}

.footer a:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.social-icons a {
  margin: 0 5px;
}

@media (max-width: 600px) {
  .footer {
    padding: 10px 20px;
  }

  .footer a {
    margin: 0 5px;
  }
}
</style>
