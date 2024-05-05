<template>
  <!-- Il componente del menu orizzontale -->
  <div class="horizontal-menu">
    <ul>
      <!-- Utilizza v-for per iterare attraverso ciascuna voce del menu nell'array menuItems -->
      <li v-for="(item, index) in menuItems" :key="index" @mouseover="hoverIndex = index" @mouseout="hoverIndex = -1" @click="selectItem(index)">
        <!-- Utilizza il componente FontAwesomeIcon per visualizzare l'icona specificata per ogni voce del menu -->
        <font-awesome-icon :icon="item.icon" :class="{ 'icon-hover': hoverIndex === index }" class="menu-icon" /> <!-- La classe 'icon-hover' viene applicata quando l'elemento è in hover -->
        <!-- Etichetta visualizzata come testo accanto all'icona -->
        <span class="menu-label">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Definisce un array di oggetti, ognuno rappresentante una voce del menu con un'etichetta e un'icona associata
      menuItems: [
        { label: 'Home', icon: 'home', path: '/HomePage' },
        { label: 'Chi siamo', icon: 'people-group', path: '/ChiSiamo' },
        { label: 'Community', icon: 'fas fa-share' },
        { label: 'User', icon: 'user' },
        { label: 'Info', icon: 'info-circle' },
        { label: 'Settings', icon: 'cog' },
        { label: 'Social', icon: "fa-brands fa-facebook" } // Utilizza il prefisso "fab" per le icone di Font Awesome Brands
      ],
      // Indice dell'elemento del menu attualmente in hover
      // Questo indice viene utilizzato per applicare la classe 'icon-hover' all'icona del menu in hover
      hoverIndex: -1,
      // Indice dell'elemento del menu attualmente selezionato
      // Questo indice viene utilizzato per identificare quale elemento del menu è stato selezionato dall'utente
      selectedIndex: -1
    };
  },
  methods: {
    // Metodo per selezionare un elemento del menu
    // Quando un elemento del menu viene cliccato, questo metodo viene chiamato con l'indice dell'elemento come argomento
    // Il metodo aggiorna 'selectedIndex' con l'indice dell'elemento selezionato, indicando quale elemento è stato selezionato
    selectItem(index) {
      this.selectedIndex = index;
      // Utilizza $router.push() per navigare alla rotta specificata
      this.$router.push(this.menuItems[index].path);
    }
  }
};
</script>

<style scoped>
/* Stili CSS specifici del componente */

/* Stile del menu orizzontale */
.horizontal-menu {
  background-color: #b8fa7e; /* Colore di sfondo del menu */
  color: #221616; /* Colore del testo del menu */
  height: 5vw; /* Altezza del menu in viewport (parte visibile pagina web)*/
  padding: 0px; /* Spaziatura interna del menu */
  margin-bottom: 10px; /* Margine inferiore del menu */
}

/* Stile della lista non ordinata */
.horizontal-menu ul {
  list-style-type: none; /* Rimuovi i punti elenco */
  padding: 0;
  display: flex; /* Visualizza gli elementi come flexbox */
  justify-content: space-around; /* Distribuisci uniformemente gli elementi lungo l'asse principale */
}

/* Stile degli elementi della lista */
.horizontal-menu li {
  padding: 10px; /* Spaziatura interna degli elementi */
  cursor: pointer; /* Il cursore diventa mano al passaggio del mouse */
  font-size: 2vw; /* Dimensione del testo */
  display: flex; /* Visualizza gli elementi come flexbox */
  align-items: center; /* Centra verticalmente il contenuto */
}

/* Stile dell'icona del menu */
.menu-icon {
  margin-right: 10px; /* Margine dx per separare l'icona dal testo */
  font-size: 3vw; /* Dimensione dell'icona */
  color: #221616; /* Colore dell'icona */
}

/* Stile dell'icona quando al passaggio del mouse */
.icon-hover {
  color: rgba(45, 45, 46, 0.397); /* Cambia il colore e opacizza l'icona al passaggio del mouse */
  transform: translate(2px, -1px); /* Effetto di traslazione lieve */
}
</style>
