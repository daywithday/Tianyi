<template>
  <div class="dashboard-editor-container">
    <el-image
      style="width: 100%;height:150px;"
      :src="logoimg"
      fit="contain"
    />
    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 24}" style="margin-bottom:30px;">
        <box-card v-if="serverInfo && serverState" :server-state="serverState" :server-info="serverInfo" />
      </el-col>
    </el-row>

    <github-corner class="github-corner" />

    <!-- <panel-group v-if="serverInfoList" :server-info-list="serverInfoList" /> -->
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import BoxCard from './components/BoxCard'
import logo from '../../../../static/images/logo.png'
import { RetrieveServerStats, RetrieveServerInfo } from '@/utils/api'
import { getVersion, setVersion } from '@/utils/auth'
export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    BoxCard
  },
  data() {
    return {
      serverState: '',
      serverInfo: '',
      serverInfoList: '',
      logoimg: logo
    }
  },
  mounted() {
    const that = this
    const version = getVersion()
    if (version && version >= 14) {

    } else {
      setVersion(14)
      this.$router.push({ path: './log/log' })
    }
    RetrieveServerStats().then(res => {
      that.serverState = res.data
    })
    RetrieveServerInfo().then(res => {
      const newObj = {}
      const serverInfoList = []
      const bbj = {}
      for (const key in res.data) {
        const obj = {}
        obj.key = key
        bbj[key] = key
        obj.value = res.data[key].value + ''
        serverInfoList.push(obj)
        newObj[key] = res.data[key].value + ''
      }
      console.log(bbj)
      that.serverInfoList = serverInfoList
      that.serverInfo = newObj
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
