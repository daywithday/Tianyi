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
        property="name"
        min-width="150"
        label="name"
      />
      <el-table-column
        property="buyCmd"
        label="buyCmd"
        min-width="170"
      />
      <el-table-column
        property="content"
        min-width="150"
        label="content"
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
        property="price"
        min-width="150"
        label="price"
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
        @click.stop=""
      >
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="small"
            @click="delete(scope.$index, scope.row)"
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
      <el-form-item :label="$t('shop.buyCmd')">
        <el-input v-model="currentRow.buyCmd" />
      </el-form-item>
      <el-form-item :label="$t('shop.content')">
        <el-input v-model="currentRow.content" />
      </el-form-item>

      <el-form-item :label="$t('shop.name')">
        <el-input v-model="currentRow.name" />
      </el-form-item>
      <el-form-item :label="$t('shop.price')">
        <el-input v-model="currentRow.price" />
      </el-form-item>
      <el-form-item :label="$t('shop.count')">
        <el-input v-model="currentRow.count" />
      </el-form-item>
      <el-form-item :label="$t('shop.quality')">
        <el-input v-model="currentRow.quality" />
      </el-form-item>
      <el-form-item :label="$t('shop.position')">
        <el-select
          v-model="currentRow.contentType"
          :placeholder="$t('shop.contentType')"
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
  RetrieveGoods,
  UpdateGoods,
  CreateGoods,
  // DeleteGoods,
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
          name: '¾Õ»¨',
          buyCmd: '/shop1',
          content: '¾Õ»¨',
          count: 1,
          quality: 1,
          price: 1,
          contentType: 'Item'
        }
      ],
      currentRow: {
        buyCmd: '',
        content: '',
        contentType: '',
        count: '',
        name: '',
        price: '',
        quality: ''
      },
      selectList: [],
      value: '',
      rules: {
        buyCmd: [
          { required: true, message: 'pleace enter buyCmd', trigger: 'blur' }
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
    delete(data) {
      console.log(data)
    },
    getList() {
      const that = this
      RetrieveGoods().then(res => {
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
      CreateGoods(that.currentRow).then(res => {
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
      UpdateGoods(that.currentRow).then(res => {
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
