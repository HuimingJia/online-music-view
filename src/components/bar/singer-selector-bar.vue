<template lang="html">
<div id="singer-selector-bar">
<div class="types input-group"><div class="tag">TYPE:</div><div class="type btn btn-outline-dark" v-for="(param, type) in types" @click="setType(type)">{{type}}</div></div>
<div class="regions input-group"><div class="tag">REGION:</div><div class="region btn btn-dark" v-for="(param, region) in regions" @click="setRegion(region)">{{region}}</div></div>
<div class="names input-group"><div class="tag">NAME:</div><div class="name btn" v-for="name in names" @click="setName(name)">{{name}}</div></div>
</div>
</template>

<script>
import * as vars from '@/global/vars'
export default {
  data() {
    return {
      types: vars.TYPES,
      regions: vars.REGIONS,
      names: vars.NAMES,
      type: "all",
      region: "all",
      name: "all",

    }
  },
  methods: {
    setType(type) {
      this.type = type == this.type? 'all' : type;
    },
    setRegion(region) {
      this.region = region == this.region? 'all' : region;
    },
    setName(name) {
      this.name = name == this.name? 'all' : name;
    },
  },
  watch: {
    type: function(val){
      this.$emit('updateKey', [this.type, this.region, this.name]);
    },
    region: function(val){
      this.$emit('updateKey', [this.type, this.region, this.name]);
    },
    name: function(val){
      this.$emit('updateKey', [this.type, this.region, this.name]);
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
</style>
