<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.publicCity') }}
    </aside>
    <el-tabs :tab-position="device == 'mobile' ?'top':'left'">
      <el-tab-pane :label="$t('route.publicCity')">
        <el-form
          ref="form"
          :model="form"
          label-width="auto"
        >
          <el-form-item :label="$t('publicCity.availableCityTips')">
            <el-input v-model="form.queryListPreTips" />
          </el-form-item>
          <el-form-item :label="$t('publicCity.coolingTips')">
            <el-input v-model="form.coolingTips" />
          </el-form-item>
          <el-form-item :label="$t('publicCity.functionName')">
            <el-input
              v-model="form.functionName"
              disabled
            />
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
      </el-tab-pane>
      <el-tab-pane :label="$t('publicCity.availableCityTips')">
        <cityList />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
import cityList from './components/cityList'
import { mapGetters } from 'vuex'
import {
  RetrieveTeleportCityConfig,
  UpdateTeleportCityConfig
} from '@/utils/api'
export default {
  components: { cityList },
  data() {
    return {
      form: {
        queryListPreTips: '',
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
  computed: {
    ...mapGetters(['device'])
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      const that = this
      RetrieveTeleportCityConfig().then(res => {
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdateTeleportCityConfig(that.form).then(res => {
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

