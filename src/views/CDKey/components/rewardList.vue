<template>
  <div>
    <el-table
      ref="singleTable"
      :data="list"
      highlight-current-row
      height="350"
    >
      <el-table-column
        type="index"
        min-width="100"
        width="100"
        label="index"
        sortable
      />
      <el-table-column
        property="cDKey"
        min-width="150"
        label="cDKey"
      />
      <el-table-column
        property="createdDate"
        label="createdDate"
        min-width="170"
      />
      <el-table-column
        property="steamId"
        min-width="150"
        label="steamId"
      />
      <el-table-column
        property="id"
        min-width="150"
        label="id"
        sortable
      />
    </el-table>
  </div>
</template>
<script>
import {
  RetrieveCDKeyExchangeLogPaged
} from '@/utils/api'
export default {
  data() {
    return {
      list: [
        
      ]
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
    this.getList(1)
  },
  methods: {
    getList(index) {
      const that = this
      RetrieveCDKeyExchangeLogPaged({
        pageIndex:index,
        pageSize:'10'
      }).then(res => {
        that.list = that.list.concat(res.data.items)
        if (res.data.items.length >= 10) {
          that.getList(index + 1 )
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
