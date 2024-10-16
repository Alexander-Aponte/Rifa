<script>


export default {
  name: 'TermsAndConditions',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>


<template>
    <div class="terms-and-conditions">
      <h1>Términos y Condiciones</h1>
      <ol>
        <li>
          Los números disponibles a comprar de cada una de nuestras rifas serán descritos en la página de detalles de las mismas.
        </li>
        <li>
          Solo pueden participar personas naturales mayores de 18 años con nacionalidad venezolana o extranjeros residentes en Venezuela.
        </li>
        <li>
          Los premios deben ser retirados personalmente en el lugar indicado en cada rifa, entregaremos personalmente solamente en la dirección indicada por el ganador del primer premio o premio mayor.
        </li>
        <li>
          El ganador deberá aceptar que Rifas RA difunda en todas sus redes sociales fotografías y videos con la presencia del ganador luego de haber sido entregados los premios.
        </li>
      </ol>
      
    </div>
    <button class="back-button" @click="goBack">Regresar</button>
  </template>
  

  
  <style scoped>
  .terms-and-conditions {
    padding: 20px;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 20px auto;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-size: 2em;
  }
  
  ol {
    list-style-type: decimal;
    padding-left: 20px;
    color: #555;
  }
  
  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
  
  .back-button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
  }
  
  .back-button:hover {
    background-color: #218838;
  }
  
  @media (max-width: 600px) {
    .terms-and-conditions {
      padding: 10px;
    }
  
    h1 {
      font-size: 1.5em;
    }
  
    ol {
      padding-left: 15px;
    }
  
    li {
      font-size: 0.9em;
    }
  
    .back-button {
      font-size: 0.9em;
      padding: 8px 16px;
    }
  }
  </style>
  