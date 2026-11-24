<script>
export default {
  emits: ['category-submitted'],

  props: ['categories'],

  data() {
    return {
      newCategory: this.currentCategory(),
      err: null,
    }
  },

  methods: {
    submitCategory() {
      this.err = null
      const cleanString = String(this.newCategory).replaceAll(' ', '')
      // const amount = parseInt(cleanString) || 0
      if (cleanString === '' || amount <= 0) {
        this.err = 'Insert correct category'
        return
      }
      // if (!this.newIncome.category) {
      //   this.err = 'Select category'
      //   return
      // }
      this.newCategory.name = this.newCategory.name.toLowerCase()
      this.$emit('category-submitted', { ...this.newCategory })
      this.newCategory = this.currentCategory()
      this.$refs.elInput.focus()
    },

    currentCategory() {
      return {
        id: this.makeId(),
        name: '',
      }
    },

    makeId() {
      return crypto.randomUUID().split('-').at(0)
    },
  },
}
</script>

<template>
  <div class="main-add">
    <input
      v-bind:value="newCategory.name"
      v-on:input="newCategory.name = +$event.target.value"
      ref="elInput"
      id="elInputAddCategory"
      type="text"
    />
    <button v-on:click="submitCategory" id="elButtonAddCategory">add</button>
  </div>
</template>
