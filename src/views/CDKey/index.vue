<template>
  <div class="chat-history-container">
    <aside>
      {{ $t("route.CDKey") }}
    </aside>
    <inputLable :input-label="inputLabel" />
    <el-tabs :tab-position="device == 'mobile' ?'top':'left'">
      <el-tab-pane :label="$t('route.CDKey')">
        <el-form ref="form" :model="form" label-width="auto">
          <el-form-item :label="$t('CDKey.exchangeSuccessfullyTips')">
            <el-input v-model="form.exchangeSuccessfullyTips" />
          </el-form-item>
          <el-form-item :label="$t('CDKey.invalidKeyTips')">
            <el-input v-model="form.invalidKeyTips" />
          </el-form-item>
          <el-form-item :label="$t('CDKey.isEnabled')">
            <el-switch v-model="form.isEnabled" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">{{
              $t("button.save")
            }}</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane :label="$t('CDKey.reward')">
        <reward />
      </el-tab-pane>
      <el-tab-pane :label="$t('CDKey.rewardList')">
        <rewardList />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import {
  RetrieveCDKeyExchangeConfig,
  UpdateCDKeyExchangeConfig,
  CDKeyExchangeRetrieveAvailableVariables
} from '@/utils/api'
import reward from './components/reward.vue'
import rewardList from './components/rewardList.vue'
import { mapGetters } from 'vuex'
export default {
  components: { reward, rewardList },
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
      CDKeyExchangeRetrieveAvailableVariables().then(res => {
        that.inputLabel = res.data
      })
    },
    getDate() {
      const that = this
      RetrieveCDKeyExchangeConfig().then(res => {
        console.log(res.data)
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdateCDKeyExchangeConfig(that.form).then(res => {
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

