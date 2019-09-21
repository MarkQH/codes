<template lang="pug">
 .scroll-box
  .scrol-box-header
    slot(name="scrol-box-header")
  .scroll-box-content(:style="contentHeight")
    .scroll-box-content-wrap(
      :style="scrollStyle"
    )
      slot(name="scroll-box-content-list")
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    scrollName: {
      default: 'scroll-up', // css动画名字
      type: String,
    },
    minLines: { // 内容最小行数
      default: 0,
      type: Number,
      required: true
    },
    list: { // 内容数组
      type: Array,
      required: true
    },
    lineHeight: { // 行高
      default: 0,
      type: Number,
      required: true
    },
    scrollDuration: { // 每行滚动持续时间
      default: 5,
      type: Number,
    }
  },
  computed: {
    ...mapState({
      size: state => state.size
    }),
    contentHeight() {
      return {
        height: this.minLines * this.lineHeight + 'px'
      };
    },
    scrollStyle() {
      return {
        animationName: this.scrollName,
        animationDuration: this.scrollDuration * this.list.length + 's',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      };
    }
  },
  watch: {
    list() {
      this.createStyleDom();
    },
  },
  mounted() {
    this.createStyleDom();
  },
  methods: {
    createStyleDom() {
      if (document.styleSheets[0]) {
        document.styleSheets[0].insertRule(`@keyframes ${this.scrollName}{ 0%{transform: translateY(0px)} 100%{transform:translateY(-${this.list.length * this.lineHeight}px)}}`, document.styleSheets[0].cssRules.length);
      } else {
        let styleHtml = document.createElement('style');
        document.getElementsByTagName('HEAD').item(0).appendChild(styleHtml);
        document.styleSheets[0].insertRule(`@keyframes ${this.scrollName}{ 0%{transform: translateY(0px)} 100%{transform:translateY(-${this.list.length * this.lineHeight}px)}}`, document.styleSheets[0].cssRules.length);
      }
    }
  },
};

</script>
<style lang="scss" scoped>
.scroll-box{
  width: 100%;
  height: 100%;
  &-content{
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    &-wrap{
      position: absolute;
      width: 100%;
      left:0;
      top:0;
      -webkit-backface-visibility: hidden;
      -webkit-transform-style: preserve-3d;
    }
  }
}
</style>
