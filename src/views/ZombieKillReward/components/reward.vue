<template>
  <div>
    <el-table
      ref="singleTable"
      :data="list"
      highlight-current-row
      height="350"
      @current-change="handleCurrentChange"
    >
      <el-table-column
        type="index"
        min-width="100"
        width="100"
        label="index"
        sortable
      />
      <el-table-column
        property="friendlyName"
        min-width="150"
        label="friendlyName"
      />
      <el-table-column
        property="steamIdOrEntityName"
        label="steamIdOrEntityName"
        min-width="170"
      />
      <el-table-column
        property="rewardContent"
        min-width="150"
        label="rewardContent"
      />
      <el-table-column
        property="rewardCount"
        min-width="150"
        label="rewardCount"
        sortable
      />
      <el-table-column
        property="rewardQuality"
        min-width="150"
        label="rewardQuality"
        sortable
      />
      <el-table-column
        property="spawnedTips"
        min-width="150"
        label="spawnedTips"
        sortable
      />
      <el-table-column
        property="killedTips"
        min-width="150"
        label="killedTips"
        sortable
      />
      <el-table-column
        min-width="150"
        label="rewardContentType"
      >
        <template slot-scope="scope">
          {{ scope.row.rewardContentType }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('table.actions')"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="small"
            @click.native.stop="deleteItem(scope.$index)"
          >{{ $t('button.delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-form
      ref="form"
      :model="currentRow"
      :inline="true"
      :rules="rules"
      label-width="auto"
    >
      <el-form-item :label="$t('ZombieKillReward.steamIdOrEntityName')">
        <el-input v-model="currentRow.steamIdOrEntityName" />
      </el-form-item>
      <el-form-item :label="$t('ZombieKillReward.rewardContent')">
        <el-input v-model="currentRow.rewardContent" :placeholder="$t('ZombieKillReward.rewardContentType')" />
      </el-form-item>

      <el-form-item :label="$t('ZombieKillReward.friendlyName')">
        <el-input v-model="currentRow.friendlyName" />
      </el-form-item>
      <el-form-item :label="$t('ZombieKillReward.spawnedTips')">
        <el-input v-model="currentRow.spawnedTips" />
      </el-form-item>
      <el-form-item :label="$t('ZombieKillReward.killedTips')">
        <el-input v-model="currentRow.killedTips" />
      </el-form-item>
      <el-form-item :label="$t('ZombieKillReward.rewardCount')">
        <el-input v-model="currentRow.rewardCount" />
      </el-form-item>
      <el-form-item :label="$t('ZombieKillReward.rewardQuality')">
        <el-input v-model="currentRow.rewardQuality" />
      </el-form-item>
      <el-form-item :label="$t('ZombieKillReward.rewardContentType')">
        <el-select
          v-model="currentRow.rewardContentType"
          :placeholder="$t('ZombieKillReward.rewardContentType')"
        >
          <el-option
            v-for="item in selectList"
            :key="item.name"
            :label="item.description"
            :value="item.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          @click="onCreate"
        >{{ $t('button.create') }}</el-button>
        <el-button
          type="primary"
          @click="onUpdate"
        >{{ $t('button.save') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  RetrieveKillReward,
  UpdateKillReward,
  CreateKillReward,
  DeleteKillReward,
  RetrieveLocalization,
  RetrieveContentTypes
} from '@/utils/api'
export default {
  data() {
    return {
      list: [
        {
          id: '6270db57-67c9-483f-928d-1355c5c794b1',
          createdDate: '2021-06-08 11:55:58.000',
          friendlyName: '�ջ�',
          steamIdOrEntityName: '/shop1',
          rewardContent: '�ջ�',
          rewardCount: 1,
          rewardQuality: 1,
          spawnedTips: 1,
          killedTips: '',
          rewardContentType: 'Item'
        }
      ],
      currentRow: {
        steamIdOrEntityName: '',
        rewardContent: '',
        rewardContentType: 'Item',
        rewardCount: '',
        friendlyName: '',
        spawnedTips: '',
        killedTips: '',
        rewardQuality: ''
      },
      selectList: [],
      value: '',
      rules: {
        steamIdOrEntityName: [
          { required: true, message: 'pleace enter steamIdOrEntityName', trigger: 'blur' }
        ],
        command: [
          { required: true, message: 'pleace enter command', trigger: 'blur' }
        ],
        pointsRequired: [
          {
            required: true,
            message: 'pleace enter pointsRequired',
            trigger: 'blur'
          }
        ],
        position: [
          {
            required: true,
            message: 'pleace enter pointsRequired',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    lang: {
      get() {
        return this.$store.state.app.language
      },
      set(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('app/setLanguage', lang)
      }
    }
  },
  created() {
    this.getList()
    this.getSelectList()
  },
  methods: {
    getcontentType(data) {
      const that = this
      RetrieveLocalization({
        language: that.lang === 'zh' ? 'schinese' : 'english',
        itemName: data
      }).then(res => {
        console.log(res)
      })
    },
    deleteItem(data) {
      const that = this
      if (data >= 0) {
        const id = this.list[data].id
        DeleteKillReward({ ids: [id] }).then(res => {
          that.$notify({
            title: 'Success',
            dangerouslyUseHTMLString: true,
            type: 'success'
          })
          that.getList()
        })
      }
    },
    getList() {
      const that = this
      RetrieveKillReward().then(res => {
        that.list = res.data
      })
    },
    getSelectList() {
      const that = this
      RetrieveContentTypes().then(res => {
        that.selectList = res.data
      })
    },
    handleCurrentChange(val) {
      this.currentRow = val
    },
    onCreate() {
      const that = this
      CreateKillReward(that.currentRow).then(res => {
        that.$notify({
          title: 'Success',
          dangerouslyUseHTMLString: true,
          type: 'success'
        })
        that.getList()
      })
    },
    onUpdate() {
      const that = this
      UpdateKillReward(that.currentRow).then(res => {
        that.$notify({
          title: 'Success',
          dangerouslyUseHTMLString: true,
          type: 'success'
        })
        that.getList()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
