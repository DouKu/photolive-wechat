<template>
  <div>
    <ul class="filter-tab">
      <li v-for="(tab, index) in tabs" :class="[{ active: index === current }]" :key="index" @click="handleTabClick(index)">{{tab}}</li>|
      <img class="photo" :src="photo"/>
      <span class="photo-count">{{num}}</span>
    </ul>
  </div>
</template>
<script>
import photo from '../assets/img/icon/photo.svg'

export default {
  props: [
    'value',
    'num'
  ],
  data() {
    return {
      photo,
      current: 0,
      tabs: [
        '全部照片',
        '婚礼前夕',
        '婚礼现场',
        '婚纱照'
      ]
    }
  },
  watch: {
    value(val) {
      this.current = val
    }
  },
  created() {
    this.current = this.value
  },
  methods: {
    handleTabClick(index) {
      this.$emit('input', index)
    }
  }
}
</script>

<style scoped>
.filter-tab {
  color: #c0c0c0;
  font-size: 26px;
  padding-bottom: 40px;
}

.filter-tab li {
  display: inline;
  margin-right: 30px;
}

.filter-tab .active {
  position: relative;
  color: #ff6c6c;
}

.filter-tab .active::after {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  content: '';
  width: 48px;
  height: 3.8px;
  border-radius: 2px;
  background: #ff6c6c;
}

.photo {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 28px;
  top: 6px;
  left: 35px;
}
.photo-count {
  position: relative;
  display: inline-block;
  left: 55px;
  top: 2px;
  font-size: 26px;
}
</style>
