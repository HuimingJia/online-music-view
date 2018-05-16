<template lang="html">
  <div class="singer-bar"  @click="goTo(mid)">
    <img class="singer-bar-img my-auto" height="35px" v-lazy="img" :alt="name">
    <div class="singer-bar-name my-auto">
      {{sort}}. {{name}}
    </div>
    <div class="singer-bar-btn-group my-auto">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
    mid: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    other_name: {
      type: String,
      default: null,
    },
    genre: {
      type: String,
      default: null,
    },
    area: {
      type: String,
      default: null,
    },
    sort: {
      type: Number,
      default: null,
    },
    index: {
      type: String,
      default: null,
    }
  },
  computed: {
    img: function(){
      return this.mid !== null ? 'https://y.gtimg.cn/music/photo_new/T001R150x150M000' + this.mid + '.jpg?max_age=2592000' : require('@/assets/imgs/singer-cover.png')
    },
  },
  methods: {
    goTo: function(id) {
      this.$router.push({name: 'singer', params: {id: id}})
    }
  }

}
</script>

<style lang="css" scoped>
.singer-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  margin-bottom: 0px;
}

.singer-bar:hover {
  background: rgba(0, 0, 0, 0.8);
}

.singer-bar-img {
  border-radius: 25px;
  margin-left: 15px;
  margin-right: 15px;
}

.singer-bar-name {
  font-size: 14px;
  color: white;
  flex: 1;
 }

.singer-bar-btn-group{
  min-width: 100px;
  display: flex;
  flex-direction: column;
  background: red;
}
</style>
