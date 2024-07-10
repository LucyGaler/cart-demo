<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <img :src="goodData.thumb" class="avatar" alt="">
    </div>
    <!-- 右侧商品区域 -->
    <div class="right">
      <!-- 标题 -->
      <div class="title">{{goodData.name}}</div>
      <div class="info">
        <!-- 单价 -->
        <span class="price">￥{{goodData.price}}</span>
        <div class="btns">
          <!-- 按钮区域 -->
          <button class="btn btn-light" @click="buttonClick(-1)">-</button>
          <span class="count">{{goodData.count}}</span>
          <button class="btn btn-light" @click="buttonClick(1)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CartItem',
  props: {
    goodData: Object
  },
  methods: {
    ...mapActions('cart', ['changeCount']),
    buttonClick (move) {
      console.log('reduceClick', move)
      const newCount = this.goodData.count + move
      if (newCount > 0) {
        // 调vuex action
        this.changeCount({ id: this.goodData.id, count: newCount })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  display: flex;
  padding: 10px;
  + .goods-container {
    border-top: 1px solid #f8f8f8;
  }
  .left {
    .avatar {
      width: 100px;
      height: 100px;
    }
    margin-right: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .title {
      font-weight: bold;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
      .btns {
        .count {
          display: inline-block;
          width: 30px;
          text-align: center;
        }
      }
    }
  }
}

.custom-control-label::before,
.custom-control-label::after {
  top: 3.6rem;
}
</style>
