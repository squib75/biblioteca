// Importa la funzione createApp da Vue 3
import { createApp } from 'vue';

// Importa createRouter e createWebHistory da Vue Router
// createRouter è usato per creare l'istanza del router
// createWebHistory è usato per abilitare la navigazione history-based
import { createRouter, createWebHistory } from 'vue-router';

// Importa il componente principale dell'applicazione
import App from './App.vue';
import HomePage from './views/HomePage.vue';
import ChiSiamo from './views/ChiSiamo.vue';


// Importa la funzione library da FontAwesome SVG Core
// Questa funzione è usata per aggiungere icone alla libreria di FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';

// Importa il componente FontAwesomeIcon da @fortawesome/vue-fontawesome
// Questo componente viene utilizzato per visualizzare le icone di FontAwesome nel tuo progetto Vue
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa le icone solid di FontAwesome
// Queste icone sono generalmente utilizzate per icone che rappresentano azioni o oggetti
import { fas } from '@fortawesome/free-solid-svg-icons';

// Importa le icone brands di FontAwesome
// Queste icone sono specifiche per i marchi e le aziende (ad esempio, Facebook, Twitter)
import { fab } from '@fortawesome/free-brands-svg-icons';


// Definisci le tue rotte qui
const routes = [
 // Esempio di rotta
 { path: '/', component: App },
 { path: '/HomePage', component: HomePage },
 { path: '/ChiSiamo', component: ChiSiamo }
 // Aggiungi altre rotte qui
];

// Crea l'istanza del router
const router = createRouter({
 history: createWebHistory(),
 routes
});

// Crea l'applicazione Vue
const app = createApp(App);

// Aggiungi FontAwesome alla libreria
library.add(fas, fab);

// Registra il componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Usa Vue Router nell'applicazione
app.use(router);

// Monta l'applicazione Vue
app.mount('#app');
