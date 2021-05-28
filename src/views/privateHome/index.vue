<template>
  <div class="chat-history-container">
    <aside>
      {{ $t("route.privateHome") }}
    </aside>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item :label="$t('privateHome.coolingTips')">
        <el-input v-model="form.coolingTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.deleteHomeCmdPrefix')">
        <el-input v-model="form.deleteHomeCmdPrefix" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.deleteSucceedTips')">
        <el-input v-model="form.deleteSucceedTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.functionName')">
        <el-input v-model="form.functionName" disabled />
      </el-form-item>
      <el-form-item :label="$t('privateHome.homeNotFoundTips')">
        <el-input v-model="form.homeNotFoundTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.homePositionTips')">
        <el-input v-model="form.homePositionTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.maxCanSetCount')">
        <el-input v-model="form.maxCanSetCount" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.noneHaveHomeTips')">
        <el-input v-model="form.noneHaveHomeTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.overLimitTips')">
        <el-input v-model="form.overLimitTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.overwriteOldSucceedTips')">
        <el-input v-model="form.overwriteOldSucceedTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.ownedHomeTips')">
        <el-input v-model="form.ownedHomeTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.pointsRequiredForSet')">
        <el-input v-model="form.pointsRequiredForSet" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.pointsRequiredForTele')">
        <el-input v-model="form.pointsRequiredForTele" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.queryListCmd')">
        <el-input v-model="form.queryListCmd" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.setHomeCmdPrefix')">
        <el-input v-model="form.setHomeCmdPrefix" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.setPointsNotEnoughTips')">
        <el-input v-model="form.setPointsNotEnoughTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.setSucceedTips')">
        <el-input v-model="form.setSucceedTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.teleHomeCmdPrefix')">
        <el-input v-model="form.teleHomeCmdPrefix" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.teleInterval')">
        <el-input v-model="form.teleInterval" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.telePointsNotEnoughTips')">
        <el-input v-model="form.telePointsNotEnoughTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.teleSucceedTips')">
        <el-input v-model="form.teleSucceedTips" />
      </el-form-item>
      <el-form-item :label="$t('privateHome.isEnabled')">
        <el-switch v-model="form.isEnabled" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{
          $t("button.save")
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  RetrieveTeleportHomeConfig,
  UpdateTeleportHomeConfig
} from '@/utils/api'
export default {
  data() {
    return {
      form: {
        coolingTips: '',
        deleteHomeCmdPrefix: '',
        deleteSucceedTips: '',
        functionName: '',
        homeNotFoundTips: '',
        homePositionTips: '',
        isEnabled: true,
        maxCanSetCount: '',
        noneHaveHomeTips: '',
        overLimitTips: '',
        overwriteOldSucceedTips: '',
        ownedHomeTips: '',
        pointsRequiredForSet: '',
        pointsRequiredForTele: '',
        queryListCmd: '',
        setHomeCmdPrefix: '',
        setPointsNotEnoughTips: '',
        setSucceedTips: '',
        teleHomeCmdPrefix: '',
        teleInterval: '',
        telePointsNotEnoughTips: '',
        teleSucceedTips: ''
      }
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      const that = this
      RetrieveTeleportHomeConfig().then((res) => {
        console.log(res.data)
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then((_) => {
          UpdateTeleportHomeConfig(that.form).then((res) => {
            that.$notify({
              title: 'Success',
              dangerouslyUseHTMLString: true,
              type: 'success'
            })
            that.getDate()
          })
        })
        .catch((_) => {})
    }
  }
}
</script>
<style lang="scss" scoped>
.chat-history-container {
  margin: 10px 20px 0;
  padding: 20px;
  box-sizing: border-box;
  max-height: calc(100vh - 80px);
  overflow-y:auto; 
}
</style>

