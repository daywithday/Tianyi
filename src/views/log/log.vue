<template>
  <div class="block">
    <aside>
      {{ $t('route.log') }}
    </aside>
    <el-timeline>
      <el-timeline-item
        v-for="(item,index) in list"
        :key="index"
        :timestamp="item.time"
        placement="top"
      >
        <el-card>
          <h4>{{ item.index }}</h4>
          <p
            v-for="(itn,idx) in item.content"
            :key="idx"
          >{{ (idx+1) + ':' + itn }}</p>
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
          time: '2021-7-8',
          index: '第0.19版',
          content: ['新增CDKey兑换，可自定义CDK']
        },
        {
          time: '2021-7-6',
          index: '第0.18版',
          content: ['接口调整', '新增辅助输入提示，{}内为可用数据字段，[]为颜色定义，具体自行多研究研究', '调整击杀奖励为悬赏奖励，可以自定义奖励了。']
        },
        {
          time: '2021-7-2',
          index: '第0.17版',
          content: ['功能归类具体自己多按按看', '新增一键重启服务器功能，再也不用担心人在外面服务器卡了怎么办了！']
        },
        {
          time: '2021-6-23',
          index: '第0.16版',
          content: ['新增抽奖系统', '新增好友传送', '新增死亡惩罚', '新增在线奖励', '新增击杀奖励']
        },
        {
          time: '2021-6-8',
          index: '第0.15版',
          content: ['新增在线商城']
        },
        {
          time: '2021-6-1',
          index: '第0.14版',
          content: ['完善GPS地图插件，已与原版一致。']
        },
        {
          time: '2021-5-28',
          index: '第0.13版',
          content: ['新增GPS地图插件']
        },
        {
          time: '2021-5-24',
          index: '第0.12版',
          content: ['新增telnet终端', '背包翻译', '新增日志']
        },
        {
          time: '2021-5-21',
          index: '第0.11版',
          content: ['新增积分系统']
        },
        {
          time: '2021-5-20',
          index: '第0.10版',
          content: ['新增公共回城']
        },
        {
          time: '2021-5-19',
          index: '第0.9版',
          content: ['新增私人回家']
        },
        {
          time: '2021-5-18',
          index: '第0.8版',
          content: ['新增玩家管理', '新增背包查看']
        },
        {
          time: '2021-5-17',
          index: '第0.7版',
          content: ['新增游戏公共配置']
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.block {
  padding: 20px;
  box-sizing: border-box;
  max-height: calc(100vh - 80px);
  overflow-y:auto;
}
</style>
