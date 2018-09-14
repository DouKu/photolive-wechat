<template>
  <div class="main">
    <div class="header">
      <swipe-card></swipe-card>
      <div class="title-bar">
        <h3>夏季婚礼流行趋势发布会</h3>
      </div>
      <filter-tab :num="photos.length"></filter-tab>
    </div>
    <div class="content">
      <ul class="image-row">
        <li v-for="(photo, index) in photos" :key="index" @click="handlePhotoClick(photo)">
          <img :src="photo"/>
        </li>
      </ul>
      <div class="content-tip">没有更多图片啦</div>
    </div>
    <button class="footer">点击了解更多圆桌技术</button>
  </div>
</template>

<script>
import SwipeCard from '../../components/swipe-card'
import FilterTab from '../../components/filter-tab'

export default {
  components: {
    SwipeCard,
    FilterTab
  },
  data() {
    return {
      photos: [
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=666816027,1584309640&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=574572877,904876359&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291929&di=f41838537159ab2ef421d87575cfbeed&imgtype=jpg&er=1&src=http%3A%2F%2Fimg007.hc360.cn%2Fy1%2FM06%2F97%2F31%2FwKhQc1SbmmaEW6slAAAAAHwGj-s672.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536697236841&di=9ef9fc3462b0dee764d1e0e7cf3919e4&imgtype=0&src=http%3A%2F%2Fm.020bom.com%2Fimages%2FTB1AQ_lFVXXXXXfXXXXXXXXXXXX_%2521%25210-item_pic.jpg_200x200.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537291980&di=c4b4d2f15f67659a502ee3bd280345d6&imgtype=jpg&er=1&src=http%3A%2F%2Fs1.sinaimg.cn%2Fbmiddle%2F5e3a0eee07034bd1d4200',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=917178670,4125601835&fm=26&gp=0.jpg',
        'http://img000.hc360.cn/y1/M03/EE/8C/wKhQc1SYCb6EE_FuAAAAAD45jfE597.jpg..300x300.jpg'
      ]
    }
  },
  mehtod: {
    handlePhotoClick(photo) {
      window.wx.previewImage({
        current: photo
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
}

.content .content-tip {
  font-size: 18px;
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
