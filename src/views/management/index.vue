<template>
    <div class="chat-history-container">
        <aside>
            {{$t('route.management')}}
        </aside>
        <el-form
            ref="form"
            label-width="auto"
        >
            <el-form-item v-for="(item,index) in form" v-bind:key="index" :label="$t('management.' + item.functionName)">
                <el-switch v-model="item.isEnabled"></el-switch>
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
import { RetrieveFunctionState, UpdateFunctionState,RongUpdateFunctionState } from "@/utils/api";
export default {
  data() {
    return {
      form: []
    };
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      let that = this;
      RetrieveFunctionState().then(res => {
        that.form = res.data;
      });
    },
    onSubmit() {
      let that = this;
      this.$confirm("确定保存？")
        .then(_ => {
          // UpdateFunctionState(that.form).then(res => {
            RongUpdateFunctionState(that.form).then(res => {
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

