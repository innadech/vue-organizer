<script>
import CategoryItem from './CategoryItem.vue'

export default {
  components: { CategoryItem },

  props: ['categories'],

  emits: [
    'categories-removed',
    'categories-edited',
    'items-removed',
    'items-edited',
  ],

  methods: {
    deleteCategoryById(id) {
      this.$emit(
        'categories-removed',
        this.categories.filter(c => c.id !== id),
      )
    },
    updateCategory(category) {
      // const updated = this.pets.map(p =>
      //   p.id === pet.id ? { ...p, ...pet, isEditing: true } : p
      // )
      const updated = this.categories.map(c =>
        c.id === category.id
          ? {
              id: c.id,
              caption: c.caption,
              isEditing: c.isEditing,
              id: category.id,
              caption: category.caption,
              isEditing: category.isEditing,
              isEditing: true,
            }
          : p,
      )
      this.$emit('categories-edited', updated)
    },
  },
}
</script>

<template>
  <ul>
    <CategoryItem
      v-for="category of categories"
      :key="category.id"
      :pet="category"
      v-on:category-deleted="deleteCategoryById($event)"
      v-on:category-edited="updateCategory($event)"
      v-on:items-removed="$emit('items-removed', $event)"
      v-on:items-edited="$emit('items-edited', $event)"
    />
  </ul>
</template>

<!-- <button v-on:click="$emit('removed-fruit', fruit)" class="deleteButton"></button> -->
