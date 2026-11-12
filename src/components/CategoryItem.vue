<script>
import ItemList from './ItemList.vue'
export default {
  props: ['category'],

  emits: ['category-deleted', 'category-edited'],

  data() {
    return {
      localCategory: { ...this.category },
    }
  },

  methods: {
    edit() {
      this.localCategory.isEditing = false
      this.$emit('category-edited', { ...this.localCategory })
    },
  },
}
</script>

<template>
  <div class="category">
    <div class="category-header">
      <span class="category-title">Android</span>
      <button id="elButtonEdit">edit</button>
      <button id="elButtonDelete">delete</button>
    </div>
    <div class="item-list">
      <div class="item-row">
        <span>1Phone 15</span>
        <button>edit</button>
        <button>delete</button>
      </div>
      <div class="item-row">
        <span>Samsung Galaxy S25</span>
        <button>edit</button>
        <button>delete</button>
      </div>
      <div class="item-row">
        <span>Huawei H15</span>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
    <div class="add-row">
      <input id="elInputItem" type="text" />
      <button id="elButtonAddItem">add</button>
    </div>
  </div>
</template>

<template>
  <li>
    <h2>{{ category }}</h2>
    <div v-if="localCategory.isEditing">
      <input
        v-bind:value="localCategory.caption"
        v-on:input="localCategory.caption = $event.target.value"
      />
      <button v-on:click="edit">OK</button>
    </div>
    <span v-else>
      <span>{{ localCategory.caption }}</span>
      <button v-on:click="localCategory.isEditing = true" type="button">
        Edit
      </button>
    </span>
    <button v-on:click="$emit('category-deleted', localCategory.id)">
      Delete Category
    </button>
    <ol>
      <!-- <li>
        <h3>Роза</h3>
        <button>Редактировать</button>
        <button>Удалить</button>
      </li> -->
      <ItemList
        :items="category.items"
        v-on:items-removed="
          $emit('items-removed', { categoryId: category.id, items: $event })
        "
        v-on:items-edited="
          $emit('items-edited', { categoryId: category.id, items: $event })
        "
      />
      <li>
        <input type="text" />
        <button>Add Item</button>
      </li>
    </ol>
  </li>
</template>
