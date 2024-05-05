<template>
  <div id="app">
   <router-view/>
   <HomePage/>
  </div>
</template>
 
 <script>
 // Importazione dei componenti necessari per l'applicazione
 import HomePage from './views/HomePage.vue'
 
 export default {
  name: 'App',
  // Registrazione dei componenti importati per l'utilizzo all'interno del template
  components: {
   HomePage
  }
 }
 </script>
 
 <style>
 /* Stili globali per l'applicazione */
 #app {
  background-color: #f6fa2a3a; /* Colore sfondo trasparente */
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Famiglia di font */
  -webkit-font-smoothing: antialiased; /* Antialiasing per font su WebKit */
  -moz-osx-font-smoothing: grayscale; /* Antialiasing per font su Firefox */
  text-align: center; /* Allineamento del testo al centro */
  color: #2c3e50; /* Colore del testo */
  margin-top: 60px; /* Margine superiore */
 }
 
 </style>
 