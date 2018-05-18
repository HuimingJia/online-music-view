<template lang="html">
<div class="pagination">
  <button class="btn btn-dark pagination-btn" @click="lastPage()" :disabled="curPage == 0">Last Page</button>
  <button class="btn btn-dark pagination-btn" @click="nextPage()" :disabled="curPage == pages - 1">Next Page</button>
</div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      default: 0,
    },
    curPage: {
      type: Number,
      default: 0
    }
  },
  methods: {
    lastPage: function () {
      this.$emit("lastPage")
    },
    nextPage: function () {
      this.$emit("nextPage")
    },
  }
}
</script>

<style lang="css" scoped>
.pagination {
  display: flex;
  flex-direction: row;
}
/* .pagination-btn {
  opacity: 0.5
} */
</style>
