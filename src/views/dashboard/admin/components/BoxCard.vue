<template>
  <el-card class="box-card-component" style="">
    <div slot="header" class="box-card-header">
      <img src="../../../../../static/images/logo.png">
    </div>
    <div style="position:relative;">
      <pan-thumb :image="avatar" class="panThumb" /><br>
      <mallki class-name="mallki-text" :text="serverInfo.GameHost.value" /> <br>
      <mallki class-name="mallki-text2" :text="'Days:' + serverState.gametime.days +','+ serverState.gametime.hours+':'+ serverState.gametime.minutes" />
      <div style="padding-top:35px;" class="progress-item">
        <span>{{$t('serverInfo.players') +'&#x3000;' + serverState.players+' / '+serverInfo.MaxPlayers.value}}</span>
        <el-progress :percentage="serverState.players / serverInfo.MaxPlayers.value" />
      </div>
      <div class="progress-item">
        <span>{{$t('serverInfo.hostiles') +'&#x3000;' + serverState.hostiles +'/'+ serverInfo.MaxSpawnedZombies.value}}</span>
        <el-progress :percentage="serverState.hostiles / serverInfo.MaxSpawnedZombies.value" />
      </div>
      <div class="progress-item">
        <span>{{$t('serverInfo.animals') +'&#x3000;' + serverState.animals +'/'+ serverInfo.MaxSpawnedAnimals.value}}</span>
        <el-progress :percentage="serverState.animals / serverInfo.MaxSpawnedAnimals.value" />
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components/TextHoverEffect/Mallki'

export default {
  components: { PanThumb, Mallki },
  props:['serverState','serverInfo'],
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang="scss" >
.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: relative;
    font-size: 20px;
    font-weight: bold;
  }.mallki-text2 {
    position: relative;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px!important;
    width: 70px!important;
    // position: absolute!important;
    // top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none!important;
    ::v-deep .pan-info {
      box-shadow: none!important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 310px){
    .mallki-text{
      display: none;
    }
  }
}
</style>
