<template>
  <!-- Componente HorizontalMenu viene utilizzato per visualizzare un menu orizzontale -->
  <HorizontalMenu/>
  <!-- Immagine del logo della biblioteca, con una classe "logo" per applicare stili specifici -->
  <img class="logo" alt="Logo Biblioteca" src="./assets/logo.png" />
  <!-- Componente HelloWorld viene utilizzato per visualizzare un messaggio di benvenuto -->
  <WelcomeHome msg="Piattaforma di Gestione Biblioteche Personali "/>
  <!-- Div con id "app" che contiene il menu laterale e la barra di ricerca -->
  <div id="app">
     <!-- Componente SidebarMenu viene utilizzato per visualizzare un menu laterale -->
     <SidebarMenu />
     <!-- Componente SearchBar viene utilizzato per fornire una barra di ricerca -->
     <SearchBar/>
  </div>
 </template>
 
 <script>
 // Importazione dei componenti necessari per l'applicazione
 import WelcomeHome from './components/WelcomeHome.vue'
 import SidebarMenu from './components/SidebarMenu.vue'
 import HorizontalMenu from './components/HorizontalMenu.vue'
 import SearchBar from './components/SearchBar.vue'
 
 export default {
  name: 'App',
  // Registrazione dei componenti importati per l'utilizzo all'interno del template
  components: {
     WelcomeHome, SidebarMenu, HorizontalMenu, SearchBar
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
 .logo {
  width: 20vw; /* Larghezza dell'immagine del logo basata sul 20% della larghezza della viewport */
  height: auto; /* Altezza dell'immagine del logo che si adatta automaticamente per mantenere le proporzioni originali */
 }
 </style>
 