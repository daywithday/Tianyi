<template>
    <div class="chat-history-container">
        <aside>
      {{$t('route.chats')}}
    </aside>
        <ul
            class="infinite-list"
            v-infinite-scroll="load"
            style="overflow:auto"
        >
            <li
                v-for="(i,index) in list"
                v-bind:key="index"
                class="infinite-list-item"
            >
                {{i.createdDate.split('.')[0]+'   '+(i.playerName?i.playerName:i.steamId)+' : '+i.message}}
            </li>
        </ul>
    </div>
</template>
<script>
import { RetrieveChatLogPaged } from "@/utils/api";
export default {
  data() {
    return {
      count: 0,
      list: [],
      pageIndex: 0,
      pageSize: 10
    };
  },
  mounted() {
    this.getDate();
  },
  methods: {
    load() {
      let that = this;
      this.pageIndex += 1;
      RetrieveChatLogPaged({
        pageIndex: that.pageIndex,
        pageSize: that.pageSize
      }).then(res => {
        that.list = that.list.concat(res.data);
      });
    },
    getDate() {
      let that = this;
      RetrieveChatLogPaged({
        pageIndex: that.pageIndex,
        pageSize: that.pageSize
      }).then(res => {
        that.list = res.data;
      });
    }
  }
};
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

