<template>
  <div>
     <input type="text" v-model="input" placeholder="Cerca..." />
     <div class="item" v-for="item in filteredList" :key="item">
       <p>{{ item }}</p>
     </div>
     <div class="item error" v-if="input && !filteredList.length">
       <p>Nessun risultato trovato!</p>
     </div>
  </div>
 </template>
 
 <script>
export default {
 data() {
    return {
      input: '',
      items: ['Home', 'Elemento 2', 'Elemento 3'] // Sostituisci con i tuoi dati
    };
 },
 computed: {
    filteredList() {
      return this.items.filter(item =>
        item.toLowerCase().includes(this.input.toLowerCase())
      );
    }
 }
};
</script>

<style scoped>
.item {
 padding: 10px;
 margin-bottom: 10px;
 background-color: #f0f0f0;
 border-radius: 5px;
}
.error {
 background-color: #ffcccc;
}
</style>
