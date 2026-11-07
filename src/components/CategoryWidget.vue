<script>
import CategorySubmitter from './CategorySubmitter.vue'
import CategoryList from './CategoryList.vue'

export default {
  components: { CategorySubmitter, CategoryList },
  // props: ['categories'],
  data() {
    return {
      categories: [
        {
          id: 100,
          name: 'Smartphones',
          items: [
            { id: 1, name: 'iPhone 15' },
            { id: 2, name: 'Samsung Galaxy S25' },
            { id: 3, name: 'Google Pixel 8' },
          ],
        },
      ],
    }
  },
}
</script>

<template>
  <CategorySubmitter v-on:category-submitted="categories.push($event)" />
  <CategoryList v-bind:categories="categories" />
</template>
