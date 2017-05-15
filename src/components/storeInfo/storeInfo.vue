<template>
    <transition name='fade'>
        <div v-show='info_show' class='store_info' @click='hideInfo' transition="fade">
            <div class="info_main">
                <h1 class="name">{{seller.name}}</h1>
                <div class="info_star">
                    <star :size='48' :score='seller.score'></star>
                </div>
    
                <div class="title">
                    <div class="line"></div>
                    <div class="text">优惠信息</div>
                    <div class="line"></div>
                </div>
                <ul class="support">
                    <li class="support_item" v-for="item in seller.supports">
                        <span class="icon" :class="'support_icon'+item.type"></span>
                        <span class="text">{{item.description}}</span>
                    </li>
                </ul>
                <div class="title">
                    <div class="line"></div>
                    <div class="text">商家公告</div>
                    <div class="line"></div>
                </div>
                <div class="bulletin">
                    <p class="content">{{seller.bulletin}}</p>
                </div>
            </div>
        </div>
    </transition>
</template>
<style lang="stylus" >
@import "storeInfo.styl"
</style>
<script>
import star from '../star/star'
export default {
  data() {
    return {
      info_show: true
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  methods: {
    hideInfo() {
      this.info_show = false
    }
  },
  components: {
    star
  }
}
</script>

