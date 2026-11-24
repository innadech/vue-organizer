<script>
import ItemSubmitter from './ItemSubmitter.vue'
import ItemList from './ItemList.vue'

export default {
  components: { ItemSubmitter, ItemList },
  // props: ['categories'],
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Smartphones',
        },
      ],
    }
  },
}
</script>

<template>
  <ItemSubmitter v-on:item-submitted="items.push($event)" />
  <ItemList v-bind:items="items" />
</template>
