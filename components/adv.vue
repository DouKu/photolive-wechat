<template>
  <div class="adv" v-if="show">
    <span class="skip" @click="handleClose">跳过</span>
    <img width="100%" height="100%" :src="src"/>
  </div>
</template>

<script>
export default {
  props: ['value', 'src'],
  data() {
    return {
      show: true
    }
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
    }
  },
  created() {
    this.show = this.value
    setTimeout(() => {
      this.show = false
    }, 5000)
  },
  methods: {
    handleClose() {
      this.show = false
    }
  }
}
</script>


<style scoped>
.adv {
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
}
.skip {
  color: #fff;
  position: absolute;
  top: 30px;
  right: 48px; 
  width: 65px;
  height: 65px;
  text-align: center;
  line-height: 65px;
  border: 1.5px solid #fff;
  border-radius: 50%;
  font-size: 26px;
}
</style>
