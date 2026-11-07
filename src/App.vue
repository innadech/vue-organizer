<script setup></script>

<template>
  <div class="container">
    <h1>Categories</h1>

    <div class="tree">
      <div class="category">
        <ul id="categoryList" class="category"></ul>
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
    </div>

    <!-- <div class="category">
          <div class="category-header">
            <span class="category-title">Laptops</span>
            <button>edit</button>
            <button>delete</button>
          </div>
          <div class="item-list">
            <div class="item-row">
              <span>Lenovo</span>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div class="item-row">
              <span>Macbook Air</span>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div class="add-row">
              <input type="text" />
              <button>add</button>
            </div>
          </div>
        </div> -->

    <!-- <div class="category">
          <div class="category-header">
            <span class="category-title">VacuumsCleaners</span>
            <button>edit</button>
            <button>delete</button>
          </div>
          <div class="item-list">
            <div class="item-row">
              <span>Dream</span>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div class="item-row">
              <span>Ecovox T50</span>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div class="add-row">
              <input type="text" />
              <button>add</button>
            </div>
          </div>
        </div> -->

    <!-- <div class="category">
          <div class="category-header">
            <span class="category-title">Flowers</span>
            <button>edit</button>
            <button>delete</button>
          </div>
          <div class="item-list">
            <div class="item-row">
              <span>White Roses</span>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div class="item-row">
              <span>Yellow Tulips</span>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div class="add-row">
              <input type="text" />
              <button>add</button>
            </div>
          </div>
        </div>
      </div> -->

    <div class="main-add">
      <input id="elInputAddCategory" type="text" />
      <button id="elButtonAddCategory">add</button>
    </div>
  </div>
</template>

<style scoped></style>
