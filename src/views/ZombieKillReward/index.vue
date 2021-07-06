<template>
  <div class="chat-history-container">
    <aside>
      {{ $t("route.ZombieKillReward") }}
    </aside>
    <inputLable :input-label="inputLabel" />
    <el-tabs :tab-position="device == 'mobile' ?'top':'left'">
      <el-tab-pane :label="$t('route.ZombieKillReward')">
        <el-form ref="form" :model="form" label-width="auto">
          <el-form-item :label="$t('ZombieKillReward.isEnabled')">
            <el-switch v-model="form.isEnabled" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">{{
              $t("button.save")
            }}</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane :label="$t('ZombieKillReward.reward')">
        <reward />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import {
  RetrieveZombieKillRewardConfig,
  UpdateZombieKillRewardConfig,
  KillRewardRetrieveAvailableVariables
} from '@/utils/api'
import reward from './components/reward.vue'
import { mapGetters } from 'vuex'
export default {
  components: { reward },
  data() {
    return {
      form: {
        triggerRequiredCount: '',
        rewardPoints: '',
        isEnabled: true,
        rewardPointsTips: true
      },
      inputLabel: ''
    }
  },
  computed: {
    ...mapGetters(['device'])
  },
  mounted() {
    this.getDate()
    this.getinputLabel()
  },
  methods: {
    getinputLabel() {
      const that = this
      KillRewardRetrieveAvailableVariables().then(res => {
        that.inputLabel = res.data
      })
    },
    getDate() {
      const that = this
      RetrieveZombieKillRewardConfig().then(res => {
        console.log(res.data)
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdateZombieKillRewardConfig(that.form).then(res => {
            that.$notify({
              title: 'Success',
              dangerouslyUseHTMLString: true,
              type: 'success'
            })
            that.getDate()
          })
        })
        .catch(_ => {})
    }
  }
}
</script>
<style lang="scss" scoped>
.chat-history-container {
  margin: 10px 20px 20px 20px;
  box-sizing: border-box;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}
</style>

