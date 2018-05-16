<template lang="html">
<div id="singer-selector-bar">
<div class="types input-group"><div class="tag">TYPE:</div><div v-for="(value, key) in types" @click="setType(value)" :class="[type == value?'active': '','type', 'btn', 'btn-outline-dark']" >{{key}}</div></div>
<div class="names input-group"><div class="tag">NAME:</div><div v-for="(value,inedx) in names" @click="setName(value)" :class="[name == value?'name-active': '','name', 'btn']">{{value}}</div></div>
</div>
</template>

<script>
import * as vars from '@/global/vars'
export default {
  data() {
    return {
      types: vars.TYPES,
      names: vars.NAMES,
      type: "all_all",
      name: "all",
    }
  },
  computed: {
    params: function(){
      var params = this.type + '_' + this.name
      return params
    }
  },
  methods: {
    setType(value) {
      this.type = value == this.type? 'all_all' : value;
    },
    setName(value) {
      this.name = value == this.name? 'all' : value;
    },
  },
  watch: {
    type: function(val){
      this.$emit('updateKey', this.params);
    },
    name: function(val){
      this.$emit('updateKey', this.params);
    },
  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: 'Monoton';
  src: url('~@/assets/fonts/Monoton-Regular.ttf') format('truetype');
}

#singer-selector-bar {
  background: rgba(255, 255, 255, 0.8);
  box-shadow:
  0 15px 30px 0 rgba(0,0,0,0.11),
  0 5px 15px 0 rgba(0,0,0,0.08);
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 15px;
}

.types, .regions, .names {
  display: flex;
  flex-direction: row;
  /* margin-bottom: 15px; */
}

.tag {
  width: 120px;
  font-family: Monoton;
  font-size: 20px;
  display: flex;
  flex-direction: row;
}
.type, .region, .name {
  margin-right: 15px;
  margin-bottom: 15px;
}


.name-active {
  background-color: #272C31;
  color: white;
}
</style>
