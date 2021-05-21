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
        property="cityName"
        min-width="150"
        label="cityName"
      />
      <el-table-column
        property="command"
        label="command"
        min-width="170"
        sortable
      />
      <el-table-column
        property="pointsRequired"
        min-width="150"
        label="pointsRequired"
        sortable
      />
      <el-table-column
        property="position"
        min-width="150"
        label="position"
        sortable
      />
    </el-table>
    <el-form
      ref="form"
      :model="currentRow"
      :inline="true"
      :rules="rules"
      label-width="auto"
    >
      <el-form-item :label="$t('publicCity.cityName')">
        <el-input v-model="currentRow.cityName" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.command')">
        <el-input v-model="currentRow.command" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.pointsRequired')">
        <el-input v-model="currentRow.pointsRequired" />
      </el-form-item>
      <el-form-item :label="$t('publicCity.position')">
        <el-input v-model="currentRow.position" />
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
  RetrieveCityPosition,
  UpdateCityPosition,
  CreateCityPosition
} from '@/utils/api'
export default {
  data() {
    return {
      list: [],
      currentRow: {},
      rules: {
        cityName: [
          { required: true, message: 'pleace enter cityName', trigger: 'blur' }
        ],
        command: [
          { required: true, message: 'pleace enter command', trigger: 'blur' }
        ],
        pointsRequired: [
          { required: true, message: 'pleace enter pointsRequired', trigger: 'blur' }
        ],
        position: [
          { required: true, message: 'pleace enter pointsRequired', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      const that = this
      RetrieveCityPosition().then(res => {
        that.list = res.data
      })
    },
    handleCurrentChange(val) {
      this.currentRow = val
    },
    onCreate() {
      const that = this
      CreateCityPosition(that.currentRow).then(res => {
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
      UpdateCityPosition(that.currentRow).then(res => {
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
