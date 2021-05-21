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
        property="count"
        min-width="150"
        label="count"
      />
      <el-table-column
        property="lastSignDay"
        label="lastSignDay"
        min-width="170"
        sortable
      />
      <el-table-column
        property="steamId"
        min-width="150"
        label="steamId"
        sortable
      />
      <el-table-column
        property="createdDate"
        min-width="150"
        label="createdDate"
        sortable
      />
    </el-table>
    <el-form
      ref="form"
      :model="currentRow"
      :inline="true"
      label-width="auto"
    >
      <el-form-item :label="$t('pointsSystem.steamId')">
        <el-input v-model="currentRow.steamId" />
      </el-form-item>
      <el-button
        type="success"
        @click="getList"
      >{{ $t('button.search') }}</el-button>
      <el-form-item :label="$t('pointsSystem.count')">
        <el-input v-model="currentRow.count" />
      </el-form-item>

      <el-form-item>

        <el-button
          type="primary"
          @click="onUpdate"
        >{{ $t('button.send') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  RetrievePlayerPoints,
  UpdatePlayerPoints
} from '@/utils/api'
export default {
  data() {
    return {
      list: [],
      currentRow: {}
    }
  },
  mounted() {},
  methods: {
    getList() {
      const that = this
      RetrievePlayerPoints({ steamId: that.currentRow.steamId }).then(res => {
        res.data = JSON.stringify(res.data) === '{}' ? [] : res.data
        let arry = []
        if (typeof res.data === 'object') {
          arry.push(res.data)
        } else {
          arry = res.data
        }
        that.list = arry
      })
    },
    handleCurrentChange(val) {
      this.currentRow = JSON.parse(JSON.stringify(val))
    },
    onUpdate() {
      const that = this
      UpdatePlayerPoints(that.currentRow).then(res => {
        that.$notify({
          title: 'Success',
          dangerouslyUseHTMLString: true,
          type: 'success'
        })
        that.getList({ steamId: that.currentRow.steamId })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
