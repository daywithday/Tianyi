<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.publicCity') }}
    </aside>
    <el-form
      ref="form"
      :model="form"
      label-width="auto"
    >
      <el-form-item :label="$t('publicCity.availableCityTips')">
        <el-input v-model="form.availableCityTips" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.coolingTips')">
        <el-input v-model="form.coolingTips" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.functionName')">
        <el-input v-model="form.functionName" disabled />
      </el-form-item>
      <el-form-item :label="$t('publicCity.noneCityTips')">
        <el-input v-model="form.noneCityTips" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.pointsNotEnoughTips')">
        <el-input v-model="form.pointsNotEnoughTips" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.queryListCmd')">
        <el-input v-model="form.queryListCmd" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.queryListTips')">
        <el-input v-model="form.queryListTips" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.teleInterval')">
        <el-input v-model="form.teleInterval" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.teleSucceedTips')">
        <el-input v-model="form.teleSucceedTips" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.isEnabled')">
        <el-switch v-model="form.isEnabled" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >{{ $t('button.save') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { RetrieveTeleportCityConfig, UpdateTeleportCityConfig } from '@/utils/api'
import { setToken, setPort } from '@/utils/auth'
export default {
  data() {
    return {
      form: {
        availableCityTips: '',
        coolingTips: '',
        functionName: '',
        isEnabled: true,
        noneCityTips: '',
        pointsNotEnoughTips: '',
        queryListCmd: '',
        queryListTips: '',
        teleInterval: '',
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
      RetrieveTeleportCityConfig().then(res => {
        console.log(res.data)
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdateTeleportCityConfig(that.form).then(res => {
            setToken(that.form.webConfig.accessToken)
            setPort(that.form.webConfig.port)
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
  margin: 10px 20px 0;
  overflow: hidden;
}
</style>

