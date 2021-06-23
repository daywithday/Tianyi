<template>
  <div class="chat-history-container">
    <aside>
      {{ $t("route.ZombieKillReward") }}
    </aside>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item :label="$t('ZombieKillReward.triggerRequiredCount')">
        <el-input v-model="form.triggerRequiredCount" />
      </el-form-item>
      <el-form-item :label="$t('ZombieKillReward.rewardPoints')">
        <el-input v-model="form.rewardPoints" />
      </el-form-item>
      <el-form-item :label="$t('ZombieKillReward.rewardPointsTips')">
        <el-input v-model="form.rewardPointsTips" />
      </el-form-item>
      <el-form-item :label="$t('ZombieKillReward.isEnabled')">
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
  RetrieveZombieKillRewardConfig,
  UpdateZombieKillRewardConfig
} from '@/utils/api'
export default {
  data() {
    return {
      form: {
        triggerRequiredCount: '',
        rewardPoints: '',
        isEnabled: true,
        rewardPointsTips:true
      }
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      const that = this
      RetrieveZombieKillRewardConfig().then((res) => {
        console.log(res.data)
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then((_) => {
          UpdateZombieKillRewardConfig(that.form).then((res) => {
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

