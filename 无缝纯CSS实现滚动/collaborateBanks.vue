<template lang="pug">
.wraper.wraper-3840x2160(v-if="size=='3840x2160'")
  baseScrollup(
    scroll-name="co-banks"
    :line-height="lineHeight"
    :min-lines="minLines"
    :list="propsList"
    :scrollDuration=3
  )
    .scroll-header(slot="scrol-box-header")
      .scroll-header-item(v-t="'linkfinance.cooperative_bank'")
    .scroll-content-list(slot="scroll-box-content-list")
      .scroll-content-list-line(v-for="item of cloneList")
        .scroll-content-list-line-bg(:style="{ backgroundImage: `url(${item})` }")

.wraper.wraper-2560x1080(v-else)
  baseScrollup(
    scroll-name="co-banks"
    :line-height="lineHeight"
    :min-lines="minLines"
    :list="propsList"
  )
    .scroll-header(slot="scrol-box-header")
      .scroll-header-item(v-t="'linkfinance.cooperative_bank'")
    .scroll-content-list(slot="scroll-box-content-list")
      .scroll-content-list-line(v-for="item of cloneList")
        .scroll-content-list-line-bg(:style="{ backgroundImage: `url(${item})` }")
</template>

<script>
import baseScrollup from "./baseScrollUpList.vue";
import { mapState } from "vuex";
export default {
  components: {
    baseScrollup
  },
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState({
      size: state => state.size
    }),
    lineHeight() {
      return this.size == "3840x2160" ? 101 : 63; // 滚动列表每一行的高度
    },
    minLines() {
      return this.size == "3840x2160" ? 6 : 5; // 滚动盒子至少要满足的行数
    },
    cloneList() {
      let clone = [];
      if (!this.list.length) return [];
      if (this.list.length > this.minLines) return this.list.concat(this.list);
      while (clone.length <= this.minLines) {
        clone = clone.concat(this.list);
      }
      return clone.concat(clone);
    },
    propsList() {
      let clone = [];
      if (!this.list.length) return [];
      if (this.list.length > this.minLines) return this.list;
      while (clone.length <= this.minLines) {
        clone = clone.concat(this.list);
      }
      return clone;
    }
  },
  watch: {
    size() {
      this.resetBg();
    }
  },
  mounted() {
    this.resetBg();
  },
  methods: {
    resetBg() {
      if (this.size == "3840x2160") {
        this.list = [
          "../images/zhongguo_bank-3840x2160.png",
          "../images/guilin_bank-3840x2160.png",
          "../images/jianshe_bank-3840x2160.png",
          "../images/jiaotong_bank-3840x2160.png",
          "../images/mingsheng_bank-3840x2160.png",
          "../images/nongye_bank-3840x2160.png",
          "../images/zhongxin_bank-3840x2160.png",
          "../images/gongshang_bank-3840x2160.png"
        ];
      } else {
        this.list = [
          "../images/zhongguo_bank.png",
          "../images/guilin_bank.png",
          "../images/jianshe_bank.png",
          "../images/jiaotong_bank.png",
          "../images/mingsheng_bank.png",
          "../images/nongye_bank.png",
          "../images/zhongxin_bank.png",
          "../images/gongshang_bank.png"
        ];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wraper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .scroll-header {
    width: 100%;
    box-sizing: border-box;
    background-color: #022986;
    &-item {
      font-weight: bold;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .scroll-content-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-line {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      &-bg {
        display: flex;
        height: 61px;
        width: 100%;
        align-items: center;
        background-color: #102769;
        background-repeat: no-repeat;
      }
    }
  }
}
.wraper-2560x1080 {
  .scroll-header {
    margin-bottom: 5px;
    &-item {
      height: 40px;
      font-size: 18px;
    }
  }
  .scroll-content-list {
    &-line {
      height: 63px;
      &-bg {
        height: 61px;
        background-position: 70px center;
      }
    }
  }
}
.wraper-3840x2160 {
  .scroll-header {
    margin-bottom: 2px;
    &-item {
      height: 108px;
      font-size: 32px;
    }
  }
  .scroll-content-list {
    &-line {
      height: 101px;
      &-bg {
        height: 100px;
        background-position: 100px center;
      }
    }
  }
}
</style>
