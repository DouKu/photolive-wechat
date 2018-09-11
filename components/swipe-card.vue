<template>
  <div class="swiper-container swipe-card">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536695841968&di=9bb8af9b01bd7afd4295236d3bc6a95a&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2Fq6uwFIOGOzag6eeFjoM6bQ%3D%3D%2F2626443007705072164.jpg"/>
        </div>
        <div class="swiper-slide">
          <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536695958485&di=6578af8ba64af1e51745a0774768ff36&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3De2637c42da1373f0e13267dfcd772e97%2F8718367adab44aed1d535addb81c8701a18bfbee.jpg"/>
        </div>
        <div class="swiper-slide">
          <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536695995411&di=251eee720fd15d889076641a81e2b3b4&imgtype=0&src=http%3A%2F%2Fpic44.nipic.com%2F20140716%2F1369025_132747698000_2.jpg"/>
        </div>
    </div>
    <div class="swiper-pagination pagination"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: {}
    }
  },
  mounted() {
    this.swiper = new window.Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000
      },
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style scoped>
.swipe-card {
  height: 400px;
  padding-top: 48px;
  padding-bottom: 48px;
}

.swipe-card .swiper-wrapper div {
  width: 100% !important;
  overflow: hidden;
  height: 100%;
  border-radius: 10px;
  background: #fabbaa;
}

.pagination {
  width: 100%;
  bottom: 50px;
}
</style>
