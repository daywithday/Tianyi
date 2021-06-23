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
        property="content"
        min-width="150"
        label="content"
      />
      <el-table-column
        property="name"
        label="name"
        min-width="170"
      />
      <el-table-column
        property="count"
        min-width="150"
        label="count"
        sortable
      />
      <el-table-column
        property="quality"
        min-width="150"
        label="quality"
        sortable
      />
      <el-table-column
        min-width="150"
        label="contentType"
      >
        <template slot-scope="scope">
          {{ scope.row.contentType }}
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
      <el-form-item :label="$t('lotterSysten.content')">
        <el-input v-model="currentRow.content" />
      </el-form-item>

      <el-form-item :label="$t('lotterSysten.count')">
        <el-input v-model="currentRow.count" />
      </el-form-item>
      <el-form-item :label="$t('lotterSysten.name')">
        <el-input v-model="currentRow.name" />
      </el-form-item>
      <el-form-item :label="$t('lotterSysten.quality')">
        <el-input v-model="currentRow.quality" />
      </el-form-item>
      <el-form-item :label="$t('lotterSysten.contentType')">
        <el-select
          v-model="currentRow.contentType"
          :placeholder="$t('lotterSysten.contentType')"
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
  RetrieveLottery,
  UpdateLottery,
  CreateLottery,
  DeleteLottery,
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
          name: '�ջ�',
          content: '/shop1',
          count: 1,
          quality: 1,
          contentType: 'Item'
        }
      ],
      currentRow: {
        content: '',
        contentType: '',
        count: '',
        name: '',
        quality: ''
      },
      selectList: [],
      value: '',
      rules: {
        content: [
          { required: true, message: 'pleace enter content', trigger: 'blur' }
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
        DeleteLottery({ ids: [id] }).then(res => {
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
      RetrieveLottery().then(res => {
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
      CreateLottery(that.currentRow).then(res => {
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
      UpdateLottery(that.currentRow).then(res => {
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
