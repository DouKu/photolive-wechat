<template>
  <div>
    <ul class="filter-tab">
      <li class="active">全部照片</li>
      <li>婚礼前夕</li>
      <li>婚礼现场</li>
      <li>婚纱照</li>|
      <img class="photo" :src="photo"/>
      <span class="photo-count">{{num}}</span>
    </ul>
  </div>
</template>
<script>
import photo from '../assets/img/icon/photo.svg'

export default {
  props: [
    'num'
  ],
  data() {
    return {
      photo
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
  font-size: 20px;
  display: inline;
  margin-right: 35px;
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
  width: 30px;
  height: 26px;
  top: 6px;
  left: 35px;
}
.photo-count {
  position: relative;
  display: inline-block;
  left: 55px;
  top: 2px;
  font-size: 18px;
}
</style>
