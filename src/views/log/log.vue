<template>
    <div class="block">
        <aside>
            {{ $t('route.log') }}
        </aside>
        <el-timeline>
            <el-timeline-item
                v-for="(item,index) in list"
                v-bind:key="index"
                :timestamp="item.time"
                placement="top"
            >
                <el-card>
                    <h4>{{item.index}}</h4>
                    <p
                        v-for="(itn,idx) in item.content"
                        v-bind:key="idx"
                    >{{(idx+1) + ':' + itn}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          time: "2021-5-24",
          index: "第0.12版",
          content: ["新增telnet终端", "背包翻译", "新增日志"]
        },
        {
          time: "2021-5-21",
          index: "第0.11版",
          content: ["新增积分系统"]
        },
        {
          time: "2021-5-20",
          index: "第0.10版",
          content: ["新增公共回城"]
        },
        {
          time: "2021-5-19",
          index: "第0.9版",
          content: ["新增私人回家"]
        },
        {
          time: "2021-5-18",
          index: "第0.8版",
          content: ["新增玩家管理", "新增背包查看"]
        },
        {
          time: "2021-5-17",
          index: "第0.7版",
          content: ["新增游戏公共配置"]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.block {
  padding: 20px;
}
</style>
