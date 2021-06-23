<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.pointsSystem') }}
    </aside>
    <el-tabs :tab-position="device == 'mobile' ?'top':'left'">
      <el-tab-pane :label="$t('route.pointsSystem')">
        <el-form
          ref="form"
          :model="form"
          label-width="auto"
        >
          <el-form-item :label="$t('pointsSystem.initialCount')">
            <el-input v-model="form.initialCount" />
          </el-form-item>
          <el-form-item :label="$t('pointsSystem.neverSignInTips')">
            <el-input v-model="form.neverSignInTips" />
          </el-form-item>
          <el-form-item :label="$t('pointsSystem.queryPointsCmd')">
            <el-input v-model="form.queryPointsCmd" />
          </el-form-item>
          <el-form-item :label="$t('pointsSystem.queryPointsTips')">
            <el-input v-model="form.queryPointsTips" />
          </el-form-item>
          <el-form-item :label="$t('pointsSystem.rewardCount')">
            <el-input v-model="form.rewardCount" />
          </el-form-item>
          <el-form-item :label="$t('pointsSystem.signCmd')">
            <el-input v-model="form.signCmd" />
          </el-form-item>
          <el-form-item :label="$t('pointsSystem.signFailTips')">
            <el-input v-model="form.signFailTips" />
          </el-form-item>
          <el-form-item :label="$t('pointsSystem.signInterval')">
            <el-input v-model="form.signInterval" />
          </el-form-item>
          <el-form-item :label="$t('pointsSystem.signSucceedTips')">
            <el-input v-model="form.signSucceedTips" />
          </el-form-item>
          <el-form-item :label="$t('pointsSystem.isEnabled')">
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
      <el-tab-pane :label="$t('pointsSystem.playerPoints')">
        <playerList />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
import playerList from './components/playerList'
import { mapGetters } from 'vuex'
import {
  RetrievePointsSystemConfig,
  UpdatePointsSystemConfig
} from '@/utils/api'
export default {
  components: { playerList },
  data() {
    return {
      form: {
        functionName: '',
        initialCount: '',
        isEnabled: true,
        neverSignInTips: '',
        queryPointsCmd: '',
        queryPointsTips: '',
        rewardCount: '',
        signCmd: '',
        signFailTips: '',
        signInterval: '',
        signSucceedTips: ''
      }
    }
  },
  computed: {
    ...mapGetters(['device'])
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      const that = this
      RetrievePointsSystemConfig().then(res => {
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdatePointsSystemConfig(that.form).then(res => {
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
  overflow-y:auto;
}
</style>

