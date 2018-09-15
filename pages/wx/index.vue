<template>
  <div class="main">
    <swipe-card></swipe-card>
    <div class="header">
      <div class="title-bar">
        <h3>夏季婚礼流行趋势发布会</h3>
      </div>
      <filter-tab v-model="current" :num="photosDisplay.length"></filter-tab>
    </div>
    <div class="content">
      <ul class="image-row">
        <li v-for="(photo, index) in photosDisplay" :key="index" @click="handlePhotoClick(photo)">
          <img :src="photo.tiny"/>
        </li>
      </ul>
      <div class="content-tip">没有更多图片啦</div>
    </div>
    <button class="footer" @click="openQrCode">点击了解更多圆桌技术</button>
    <adv :src="adv" v-model="showAdv"></adv>
  </div>
</template>

<script>
import SwipeCard from '../../components/swipe-card'
import FilterTab from '../../components/filter-tab'
import Adv from '../../components/adv'

export default {
  components: {
    Adv,
    SwipeCard,
    FilterTab
  },
  computed: {
    photosDisplay() {
      if (this.current === 0) {
        return this.photos
      } else if (this.current === 1) {
        return [this.photos[1], this.photos[3]]
      } else if (this.current === 2) {
        return [this.photos[0], this.photos[5]]
      } else if (this.current === 3) {
        return [this.photos[2], this.photos[4], this.photos[6]]
      }
    }
  },
  data() {
    return {
      showAdv: true,
      adv: 'http://oqzgtjqen.bkt.clouddn.com/%E5%B0%81%E9%9D%A2-1125X1815.jpg',
      current: 0,
      photos: [
        {
          normal: 'http://oqzgtjqen.bkt.clouddn.com/TIM_2638%E5%89%AF%E6%9C%AC.jpg',
          tiny: 'http://oqzgtjqen.bkt.clouddn.com/TIM_2638%E5%89%AF%E6%9C%AC.jpg'
        }, {
          normal: 'http://oqzgtjqen.bkt.clouddn.com/TIM_3965%E5%89%AF%E6%9C%AC.jpg',
          tiny: 'http://oqzgtjqen.bkt.clouddn.com/TIM_3965%E5%89%AF%E6%9C%AC-tiny.jpg'
        }, {
          normal: 'http://oqzgtjqen.bkt.clouddn.com/3E0A1532.jpg',
          tiny: 'http://oqzgtjqen.bkt.clouddn.com/3E0A1532-tiny.jpg'
        }, {
          normal: 'http://oqzgtjqen.bkt.clouddn.com/3E0A1646.jpg',
          tiny: 'http://oqzgtjqen.bkt.clouddn.com/3E0A1646-tiny.jpg'
        }, {
          normal: 'http://oqzgtjqen.bkt.clouddn.com/3E0A1868.jpg',
          tiny: 'http://oqzgtjqen.bkt.clouddn.com/3E0A1868-tiny.jpg'
        }, {
          normal: 'http://oqzgtjqen.bkt.clouddn.com/MEGA4250.jpg',
          tiny: 'http://oqzgtjqen.bkt.clouddn.com/MEGA4250-tiny.jpg'
        }, {
          normal: 'http://oqzgtjqen.bkt.clouddn.com/_MG_8877%20%E6%8B%B7%E8%B4%9D.jpg',
          tiny: 'http://oqzgtjqen.bkt.clouddn.com/_MG_8877%20%E6%8B%B7%E8%B4%9D-tiny.jpg'
        }
      ]
    }
  },
  methods: {
    handlePhotoClick(photo) {
      window.wx.previewImage({
        current: photo.normal,
        urls: [photo.normal]
      })
    },
    openQrCode() {
      window.wx.previewImage({
        current: 'http://os32fgzvj.bkt.clouddn.com/1536950878.png',
        urls: ['http://os32fgzvj.bkt.clouddn.com/1536950878.png']
      })
    }
  }
}
</script>

<style scoped>
.header {
  padding: 0 48px 0 48px;
}
.title-bar > h3 {
  font-size: 38px;
  font-weight: bold;
  padding-bottom: 48px;
}

.content {
  padding: 0 48px;
  padding-bottom: 120px;
}

.content .image-row {
  display: flex;
  justify-content: space-between;
  font-size: 0;
  flex-wrap: wrap;
}

.content .image-row li {
  width: 285px;
  height: 285px;
  background: pink;
  border: 12px solid #fff;
  border-radius: 5px;
  margin-bottom: 50px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, .1), -2px 0px 5px rgba(0, 0, 0, .1);
  overflow: hidden;
}
.content .image-row li img {
  width: auto;
	height: auto;
	max-width: 150%;
	max-height: 150%;
}


.content .content-tip {
  font-size: 26px;
  text-align: center;
  color: #c0c0c0;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  color: #fff;
  font-size: 30px;
  background: #f26465;
  opacity: .8;
}
</style>
