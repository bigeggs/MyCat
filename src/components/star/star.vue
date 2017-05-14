<<template>
 <div class='star'>
  <div :class="sizeType"  class='star_item'>
<span v-for='span in spans':class='span'   class='star_item'></span>
  </div></div>
</template>
<style lang="stylus" rel=<style lang="stylus">
@import "star.stylus"
</style>
<script>
const maxStar = 5
const fullStyl = 'on'
const halfStyl = 'half'
const emptyStyl = 'off'

export default {
  props: {
    size: {
      type: Number,
      default: 48
    },
    score: {
      type: Number,
      require: true
    }
  },
  computed: {
    sizeType() {
      return 'star_' + this.size
    },
    spans() {
      let spans = []
      let score = Math.floor(this.score * 2) / 2
      let fullCount = Math.floor(score)
      while (spans.length < fullCount) {
        spans.push(fullStyl)
      }
      if (score / 1 !== 0) {
        spans.push(halfStyl)
      }
      while (spans.length < maxStar) {
        spans.push(emptyStyl)
      }
      return spans
    }
  }
}
</script>

