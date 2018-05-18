<template lang="html">
  <div class="pagination d-flex justify-content-between">
    <!-- <div class="pagination-wrapper"> -->
      <button class="btn btn-light pagination-btn-left  float-left" @click="lastPage()" :disabled="curPage == 0">&#171; Last Page</button>
      <button class="btn btn-light pagination-btn-right float-right" @click="nextPage()" :disabled="curPage == pages - 1">Next Page &#187;</button>
    <!-- </div> -->
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
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
}

.pagination-btn-left, .pagination-btn-right {
  /* background: white;
  color: black; */
  opacity: 0.8;
  margin: 0;
}
.pagination-btn-left{
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.pagination-btn-right{
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
