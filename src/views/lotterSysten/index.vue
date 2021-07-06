<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.lotterSysten') }}
    </aside>
    <inputLable :input-label="inputLabel" />
    <el-tabs :tab-position="device == 'mobile' ?'top':'left'">
      <el-tab-pane :label="$t('route.lotterSysten')">
        <el-form
          ref="form"
          :model="form"
          label-width="auto"
        >
          <el-form-item :label="$t('lotterSysten.currentLotteryCmd')">
            <el-input v-model="form.currentLotteryCmd" />
          </el-form-item>
          <el-form-item :label="$t('lotterSysten.endLotteryTips')">
            <el-input v-model="form.endLotteryTips" />
          </el-form-item>
          <el-form-item :label="$t('lotterSysten.lotteryDuration')">
            <el-input v-model="form.lotteryDuration" />
          </el-form-item>
          <el-form-item :label="$t('lotterSysten.lotteryInterval')">
            <el-input v-model="form.lotteryInterval" />
          </el-form-item>
          <el-form-item :label="$t('lotterSysten.maxWinnerCount')">
            <el-input v-model="form.maxWinnerCount" />
          </el-form-item>
          <el-form-item :label="$t('lotterSysten.notWinningTips')">
            <el-input v-model="form.notWinningTips" />
          </el-form-item>
          <el-form-item :label="$t('lotterSysten.startLotteryTips')">
            <el-input v-model="form.startLotteryTips" />
          </el-form-item>
          <el-form-item :label="$t('lotterSysten.winningTips')">
            <el-input v-model="form.winningTips" />
          </el-form-item>
          <el-form-item :label="$t('lotterSysten.isEnabled')">
            <el-switch v-model="form.isEnabled" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
            >{{ $t('button.save') }}</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane :label="$t('lotterSysten.list')">
        <shopList />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
import shopList from './components/shopList'
import { mapGetters } from 'vuex'
import {
  RetrieveLotterySystemConfig,
  UpdateLotterySystemConfig,
  LotterySystemRetrieveAvailableVariables
} from '@/utils/api'
export default {
  components: { shopList },
  data() {
    return {
      form: {
        lotteryInterval: '',
        functionName: '',
        maxWinnerCount: '',
        isEnabled: '',
        lotteryDuration: '',
        currentLotteryCmd: '',
        endLotteryTips: '',
        notWinningTips: '',
        startLotteryTips: '',
        winningTips: ''
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
      LotterySystemRetrieveAvailableVariables().then(res => {
        that.inputLabel = res.data
      })
    },
    getDate() {
      const that = this
      RetrieveLotterySystemConfig().then(res => {
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdateLotterySystemConfig(that.form).then(res => {
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
  margin: 10px 20px 80px 20px;
  box-sizing: border-box;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  padding-bottom: 60px;
}
</style>

