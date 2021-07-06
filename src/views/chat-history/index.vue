<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.chats') }}
    </aside>
    <ul
      v-infinite-scroll="load"
      class="infinite-list"
      style="overflow:auto"
    >
      <li
        v-for="(i,index) in list"
        :key="index"
        class="infinite-list-item"
      >
        <span style="color:red">{{ i.createdDate.split('.')[0] }} : </span>
        <span style="color:blue">{{ (i.playerName?i.playerName:i.steamId) }} : </span>
        <span style="color:orange">{{ i.message }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { RetrieveChatLogPaged } from '@/utils/api'
export default {
  data() {
    return {
      count: 0,
      list: [],
      pageIndex: 0,
      pageSize: 10
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    load() {
      const that = this
      this.pageIndex += 1
      RetrieveChatLogPaged({
        pageIndex: that.pageIndex,
        pageSize: that.pageSize
      }).then(res => {
        that.list = that.list.concat(res.data.items)
      })
    },
    getDate() {
      const that = this
      RetrieveChatLogPaged({
        pageIndex: that.pageIndex,
        pageSize: that.pageSize
      }).then(res => {
        that.list = res.data.items
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.chat-history-container {
  margin: 10px 20px 0;
  overflow: hidden;
}
.infinite-list {
  height: 350px;
}
</style>

