<template>
  <div class="chat-history-container">
    <aside>
      {{ $t("route.OnlineReward") }}
    </aside>
    <inputLable :input-label="inputLabel" />
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item :label="$t('OnlineReward.rewardInterval')">
        <el-input v-model="form.rewardInterval" />
      </el-form-item>
      <el-form-item :label="$t('OnlineReward.rewardPoints')">
        <el-input v-model="form.rewardPoints" />
      </el-form-item>
      <el-form-item :label="$t('OnlineReward.rewardPointsTips')">
        <el-input v-model="form.rewardPointsTips" />
      </el-form-item>
      <el-form-item :label="$t('OnlineReward.isEnabled')">
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
  RetrieveOnlineRewardConfig,
  UpdateOnlineRewardConfig,
  RetrieveAvailableVariables_OnlineReward
} from '@/utils/api'
export default {
  data() {
    return {
      form: {
        rewardInterval: '',
        rewardPoints: '',
        isEnabled: true,
        rewardPointsTips: true
      },
      inputLabel: ''
    }
  },
  mounted() {
    this.getDate()
    this.getinputLabel()
  },
  methods: {
    getinputLabel() {
      const that = this
      RetrieveAvailableVariables_OnlineReward().then(res => {
        that.inputLabel = res.data
      })
    },
    getDate() {
      const that = this
      RetrieveOnlineRewardConfig().then((res) => {
        console.log(res.data)
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then((_) => {
          UpdateOnlineRewardConfig(that.form).then((res) => {
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
  margin: 10px 20px 20px 20px;
  box-sizing: border-box;
  max-height: calc(100vh - 120px);
  overflow-y:auto;
}
</style>

