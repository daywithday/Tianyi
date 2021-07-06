<template>
  <div class="chat-history-container">
    <aside>
      {{ $t('route.shop') }}
    </aside>
    <inputLable :input-label="inputLabel" />
    <el-tabs :tab-position="device == 'mobile' ?'top':'left'">
      <el-tab-pane :label="$t('route.shop')">
        <el-form
          ref="form"
          :model="form"
          label-width="auto"
        >
          <el-form-item :label="$t('shop.buySuccessfullyTips')">
            <el-input v-model="form.buySuccessfullyTips" />
          </el-form-item>
          <el-form-item :label="$t('shop.goodsNoFoundTips')">
            <el-input v-model="form.goodsNoFoundTips" />
          </el-form-item>
          <el-form-item :label="$t('shop.pointsNotEnoughTips')">
            <el-input v-model="form.pointsNotEnoughTips" />
          </el-form-item>
          <el-form-item :label="$t('shop.queryListCmd')">
            <el-input v-model="form.queryListCmd" />
          </el-form-item>
          <el-form-item :label="$t('shop.queryListPreTips')">
            <el-input v-model="form.queryListPreTips" />
          </el-form-item>
          <el-form-item :label="$t('shop.queryListTips')">
            <el-input v-model="form.queryListTips" />
          </el-form-item>
          <el-form-item :label="$t('shop.isEnabled')">
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
      <el-tab-pane :label="$t('shop.list')">
        <shopList />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
import shopList from './components/shopList'
import { mapGetters } from 'vuex'
import { RetrieveGameStoreConfig, UpdateGameStoreConfig, GameStoreRetrieveAvailableVariables } from '@/utils/api'
export default {
  components: { shopList },
  data() {
    return {
      form: {
        buySuccessfullyTips: '',
        functionName: '',
        goodsNoFoundTips: '',
        isEnabled: '',
        pointsNotEnoughTips: '',
        queryListCmd: '',
        queryListPreTips: '',
        queryListTips: ''
      },
      inputLabel: ''
    }
  },
  computed: {
    ...mapGetters(['device'])
  },
  mounted() {
    this.getDate()
    this.getinputLabel()
  },
  methods: {
    getinputLabel() {
      const that = this
      GameStoreRetrieveAvailableVariables().then(res => {
        that.inputLabel = res.data
      })
    },
    getDate() {
      const that = this
      RetrieveGameStoreConfig().then(res => {
        that.form = res.data
      })
    },
    onSubmit() {
      const that = this
      this.$confirm('确定保存？')
        .then(_ => {
          UpdateGameStoreConfig(that.form).then(res => {
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
  margin: 10px 20px 80px 20px;
  box-sizing: border-box;
  max-height: calc(100vh - 80px);
  overflow-y:auto;
  padding-bottom: 60px;
}
</style>

