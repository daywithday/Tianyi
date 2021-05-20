<template>
    <div class="chat-history-container">
        <aside>
            {{$t('route.notice')}}
        </aside>
        <el-form
            ref="form"
            :model="form"
            label-width="auto"
        >
            <el-form-item :label="$t('notice.alternateInterval')">
                <el-input v-model="form.alternateInterval"></el-input>
            </el-form-item>
            <el-form-item :label="$t('notice.alternateNotice')">
                <el-input type="textarea" v-model="form.alternateNotice"></el-input>
            </el-form-item>
            <el-form-item :label="$t('notice.functionName')">
                <el-input disabled v-model="form.functionName"></el-input>
            </el-form-item>
            <el-form-item :label="$t('notice.welcomeNotice')">
                <el-input type="textarea" v-model="form.welcomeNotice"></el-input>
            </el-form-item>
            <el-form-item :label="$t('notice.isEnabled')">
                <el-switch v-model="form.isEnabled"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    @click="onSubmit"
                >{{$t('button.save')}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { RetrieveGameNoticeConfig, UpdateGameNoticeConfig } from "@/utils/api";
export default {
  data() {
    return {
      form: {
        
      }
    };
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      let that = this;
      RetrieveGameNoticeConfig().then(res => {
        that.form = res.data;
      });
    },
    onSubmit() {
      let that = this;
      this.$confirm("确定保存？")
        .then(_ => {
          UpdateGameNoticeConfig(that.form).then(res => {
            that.getDate();
            that.$notify({
              title: 'Success',
              dangerouslyUseHTMLString: true,
              type: 'success'
            })
          });
        })
        .catch(_ => {});
    }
  }
};
</script>
<style lang="scss" scoped>
.chat-history-container {
  margin: 10px 20px 0;
  overflow: hidden;
}
</style>

