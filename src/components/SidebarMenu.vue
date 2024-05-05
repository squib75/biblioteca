<template>
  <div class="sidebar-menu">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index" @mouseover="hoverItem(index)" @mouseout="hoverItem(-1)" @click="selectItem(index)">
        <font-awesome-icon :icon="item.icon" />
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: ' Home ', icon: 'home' },
        { label: ' User ', icon: 'user' },
        { label: ' Settings ', icon: 'cog' }
      ],
      hoverIndex: -1,
      selectedIndex: -1
    }
  },
  methods: {
    hoverItem(index) {
      this.hoverIndex = index;
    },
    selectItem(index) {
      this.selectedIndex = index;
    }
  }
}
</script>

<style scoped>
.sidebar-menu ul {
  list-style-type: none;
  padding: 0;
}
.sidebar-menu li {
  padding: 10px;
  cursor: pointer;
}
.sidebar-menu li:hover, .sidebar-menu li.selected {
  background-color: #f0f0f0;
}
.icon {
  background-color: aqua;
}
</style>
