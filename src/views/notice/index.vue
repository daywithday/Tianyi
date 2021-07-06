<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.notice') }}
    </aside>
    <inputLable :input-label="inputLabel" />
    <el-form
      ref="form"
      :model="form"
      label-width="auto"
    >
      <el-form-item :label="$t('notice.alternateInterval')">
        <el-input v-model="form.alternateInterval" />
      </el-form-item>
      <el-form-item :label="$t('notice.alternateNotice')+' 1'">
        <el-input v-model="form.alternateNotice" type="textarea" />
      </el-form-item>
      <el-form-item :label="$t('notice.alternateNotice')+' 2'">
        <el-input v-model="form.alternateNotice1" type="textarea" />
      </el-form-item>
      <el-form-item :label="$t('notice.alternateNotice')+' 3'">
        <el-input v-model="form.alternateNotice2" type="textarea" />
      </el-form-item>
      <el-form-item :label="$t('notice.alternateNotice')+' 4'">
        <el-input v-model="form.alternateNotice3" type="textarea" />
      </el-form-item>
      <el-form-item :label="$t('notice.alternateNotice')+' 5'">
        <el-input v-model="form.alternateNotice4" type="textarea" />
      </el-form-item>
      <el-form-item :label="$t('notice.welcomeNotice')">
        <el-input v-model="form.welcomeNotice" type="textarea" />
      </el-form-item>
      <el-form-item :label="$t('notice.isEnabled')">
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
import { RetrieveGameNoticeConfig, UpdateGameNoticeConfig, RetrieveAvailableVariables } from '@/utils/api'
export default {
  data() {
    return {
      form: {
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
      RetrieveAvailableVariables().then(res => {
        that.inputLabel = res.data
      })
    },
    getDate() {
      const that = this
      RetrieveGameNoticeConfig().then(res => {
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdateGameNoticeConfig(that.form).then(res => {
            that.getDate()
            that.$notify({
              title: 'Success',
              dangerouslyUseHTMLString: true,
              type: 'success'
            })
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

