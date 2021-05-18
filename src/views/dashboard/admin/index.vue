<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="margin-bottom:30px;">
        <box-card v-if="serverInfo" :serverState="serverState" :serverInfo="serverInfo"/>
      </el-col>
    </el-row>
    <panel-group />
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import BoxCard from './components/BoxCard'
import { RetrieveServerStats,RetrieveServerInfo } from '@/utils/api'
export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    PanelGroup,
    BoxCard
  },
  data() {
    return {
      serverState:'',
      serverInfo:''
    }
  },
  mounted(){
    let that = this
    RetrieveServerStats().then(res =>{
      that.serverState = res.data
    })
    RetrieveServerInfo().then(res =>{
      that.serverInfo = res.data
    })
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
