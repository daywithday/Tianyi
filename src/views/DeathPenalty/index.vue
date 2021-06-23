<template>
  <div class="chat-history-container">
    <aside>
      {{ $t("route.DeathPenalty") }}
    </aside>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item :label="$t('DeathPenalty.deductPoints')">
        <el-input v-model="form.deductPoints" />
      </el-form-item>
      <el-form-item :label="$t('DeathPenalty.deductPointsTips')">
        <el-input v-model="form.deductPointsTips" />
      </el-form-item>
      <el-form-item :label="$t('DeathPenalty.allowNegative')">
        <el-switch v-model="form.allowNegative" />
      </el-form-item>
      <el-form-item :label="$t('DeathPenalty.isEnabled')">
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
  RetrieveDeathPenaltyConfig,
  UpdateDeathPenaltyConfig
} from '@/utils/api'
export default {
  data() {
    return {
      form: {
        deductPoints: '',
        deductPointsTips: '',
        isEnabled: true,
        allowNegative:true
      }
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      const that = this
      RetrieveDeathPenaltyConfig().then((res) => {
        console.log(res.data)
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then((_) => {
          UpdateDeathPenaltyConfig(that.form).then((res) => {
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

