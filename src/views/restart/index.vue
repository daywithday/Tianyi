<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.restart') }}
    </aside>
    <el-form
      ref="form"
      label-width="auto"
    >
      <el-form-item :label="$t('restart.restart')">
        <el-switch v-model="isEnabled" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >{{ $t('button.run') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { RestartServer } from '@/utils/api'
export default {
  data() {
    return {
      isEnabled: false
    }
  },
  mounted() {},
  methods: {
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

