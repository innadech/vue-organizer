<script>
import ItemItem from './ItemItem.vue'

export default {
  components: { ItemItem },

  props: ['items'],

  emit: ['items-removed', 'items-edited'],

  methods: {
    deleteItemById(id) {
      this.$emit(
        'items-removed',
        this.items.filter(item => item.id !== id),
      )
    },
    updateItem(item) {
      // const updated = this.pets.map(p =>
      //   p.id === pet.id ? { ...p, ...pet, isEditing: true } : p
      // )
      const updated = this.items.map(i =>
        i.id === item.id
          ? {
              id: i.id,
              caption: i.caption,
              isEditing: i.isEditing,
              id: item.id,
              caption: item.caption,
              isEditing: item.isEditing,
              isEditing: true,
            }
          : i,
      )
      this.$emit('items-edited', updated)
    },
  },
}
</script>

<template>
  <ol>
    <ItemItem
      v-for="item of items"
      :key="item.id"
      :item="item"
      v-on:item-deleted="deleteItemById($event)"
      v-on:item-edited="updateItem($event)"
    />
  </ol>
</template>
