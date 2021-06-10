<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.config') }}
    </aside>
    <el-form
      ref="form"
      :model="form"
      label-width="auto"
    >
      <el-form-item :label="$t('config.chatCommandCacheMaxCount')">
        <el-input v-model="form.chatCommandCacheMaxCount" />
      </el-form-item>
      <el-form-item :label="$t('config.chatCommandPrefix')">
        <el-input v-model="form.chatCommandPrefix" disabled />
      </el-form-item>
      <el-form-item :label="$t('config.functionName')">
        <el-input v-model="form.functionName" disabled />
      </el-form-item>
      <el-form-item :label="$t('config.handleChatMessageError')">
        <el-input v-model="form.handleChatMessageError" />
      </el-form-item>
      <el-form-item :label="$t('config.serverName')">
        <el-input v-model="form.serverName" />
      </el-form-item>
      <el-form-item :label="$t('config.accessToken')">
        <el-input v-model="form.webConfig.accessToken" />
      </el-form-item>
      <el-form-item :label="$t('config.enableGzip')">
        <el-switch v-model="form.webConfig.enableGzip" />
      </el-form-item>
      <el-form-item :label="$t('config.openInDefaultBrowser')">
        <el-switch v-model="form.webConfig.openInDefaultBrowser" />
      </el-form-item>
      <el-form-item :label="$t('config.webApiPort')">
        <el-input v-model="form.webConfig.webApiPort" />
      </el-form-item>
      <el-form-item :label="$t('config.webSocketPort')">
        <el-input v-model="form.webConfig.webSocketPort" />
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
import { RetrieveCommonConfig, UpdateCommonConfig } from '@/utils/api'
import { setToken, setPort } from '@/utils/auth'
export default {
  data() {
    return {
      form: {
        chatCommandCacheMaxCount: '',
        chatCommandPrefix: '',
        functionName: '',
        handleChatMessageError: '',
        serverName: '',
        webConfig: {
          accessToken: '',
          enableGzip: '',
          openInDefaultBrowser: '',
          port: ''
        }
      }
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      const that = this
      RetrieveCommonConfig().then(res => {
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdateCommonConfig(that.form).then(res => {
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
  margin: 10px 20px 20px 20px;
  box-sizing: border-box;
  max-height: calc(100vh - 120px);
  overflow-y:auto;
}
</style>

