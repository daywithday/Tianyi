<template>
  <div class="chat-history-container">
    <aside>
      {{ $t("route.TeleportFriend") }}
    </aside>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item :label="$t('TeleportFriend.coolingTips')">
        <el-input v-model="form.coolingTips" />
      </el-form-item>
      <el-form-item :label="$t('TeleportFriend.pointsNotEnoughTips')">
        <el-input v-model="form.pointsNotEnoughTips" />
      </el-form-item>
      <el-form-item :label="$t('TeleportFriend.pointsRequired')">
        <el-input v-model="form.pointsRequired" />
      </el-form-item>
      <el-form-item :label="$t('TeleportFriend.targetNotFoundTips')">
        <el-input v-model="form.targetNotFoundTips" />
      </el-form-item>
      <el-form-item :label="$t('TeleportFriend.targetNotFriendTips')">
        <el-input v-model="form.targetNotFriendTips" />
      </el-form-item>
      <el-form-item :label="$t('TeleportFriend.teleCmd')">
        <el-input v-model="form.teleCmd" />
      </el-form-item>
      <el-form-item :label="$t('TeleportFriend.teleInterval')">
        <el-input v-model="form.teleInterval" />
      </el-form-item>
      <el-form-item :label="$t('TeleportFriend.teleSucceedTips')">
        <el-input v-model="form.teleSucceedTips" />
      </el-form-item>
      <el-form-item :label="$t('TeleportFriend.isEnabled')">
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
  RetrieveTeleportFriendConfig,
  UpdateTeleportFriendConfig
} from '@/utils/api'
export default {
  data() {
    return {
      form: {
        coolingTips: '',
        pointsNotEnoughTips: '',
        pointsRequired: '',
        functionName: '',
        targetNotFoundTips: '',
        targetNotFriendTips: '',
        queryListTips: '',
        isEnabled: true,
        teleCmd: '',
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
      RetrieveTeleportFriendConfig().then((res) => {
        console.log(res.data)
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then((_) => {
          UpdateTeleportFriendConfig(that.form).then((res) => {
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

