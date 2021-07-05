<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.restart') }}
    </aside>
    <el-form
      ref="form"
      label-width="auto"
    >
      <el-form-item v-for="(value,key,index) in form" :key="index" :label="$t('restart.' + key)?$t('restart.' + key):''">
        <el-input v-if="key != 'isEnabled' && key != 'functionName'" v-model="form[key]" />
        <el-switch v-else-if="key != 'functionName'" v-model="form[key]" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmitconfig"
        >{{ $t('button.save') }}</el-button>
      </el-form-item>
    </el-form>
    <el-form
      ref="form"
      label-width="auto"
    >
      <el-form-item :label="$t('restart.restart')">
        <el-switch v-model="isEnabled" />
        <el-button
          type="primary"
          @click="onSubmit"
        >{{ $t('button.runNow') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  RestartServer,
  RetrieveAutoRestartConfig,
  UpdateAutoRestartConfig
} from '@/utils/api'
export default {
  data() {
    return {
      isEnabled: false,
      form: ''
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      const that = this
      RetrieveAutoRestartConfig().then(res => {
        that.form = res.data
      })
    },
    onSubmitconfig() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdateAutoRestartConfig(that.form).then(res => {
            that.getDate()
            that.$notify({
              title: 'Success',
              dangerouslyUseHTMLString: true,
              type: 'success'
            })
          })
        })
        .catch(_ => {})
    },
    onSubmit() {
      const that = this
      this.$confirm('确定重启？')
        .then(_ => {
          RestartServer({
            force: that.isEnabled
          }).then(res => {
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
  margin: 10px 20px 0;
  overflow: hidden;
}
</style>

