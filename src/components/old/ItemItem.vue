<script>
export default {
  props: ['item'],

  emits: ['item-deleted', 'item-edited'],

  data() {
    return {
      localItem: { ...this.item },
    }
  },

  methods: {
    edit() {
      this.localItem.isEditing = false
      this.$emit('item-edited', { ...this.localItem })
    },
  },
}
</script>
<template>
  <li>
    <h2>{{ item }}</h2>
    <div v-if="localItem.isEditing">
      <input
        v-bind:value="localItem.caption"
        v-on:input="localItem.caption = $event.target.value"
      />
      <button v-on:click="edit">OK</button>
    </div>
    <span v-else>
      <span>{{ localItem.caption }}</span>
      <button v-on:click="localItem.isEditing = true" type="button">
        Edit
      </button>
    </span>
    <button v-on:click="$emit('item-deleted', localItem.id)">
      Delete Item
    </button>
  </li>
</template>

<!-- <li>
        <h3>Роза</h3>
        <button>Редактировать</button>
        <button>Удалить</button>
      </li> -->
