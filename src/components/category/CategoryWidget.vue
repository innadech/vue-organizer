<script>
export default {
  data() {
    return {
      categories: [],
    }
  },
}
</script>

<template>
  <div class="category-widget container">
    <h1>Categories</h1>

    <CategoryList />

    <CategorySubmitter v-on:category-submitted="console.log" />
  </div>
</template>
