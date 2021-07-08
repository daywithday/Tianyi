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
        label="index"
        sortable
      />
      <el-table-column
        property="maxExchangeCount"
        :label="$t('CDKey.maxExchangeCount')"
      />
      <el-table-column
        property="expiryDate"
        :label="$t('CDKey.expiryDate')"
      />
      <el-table-column
        property="itemContent"
        :label="$t('CDKey.itemContent')"
      />
      <el-table-column
        property="itemCount"
        :label="$t('CDKey.itemCount')"
        sortable
      />
      <el-table-column
        property="itemName"
        :label="$t('CDKey.itemName')"
        sortable
      />
      <el-table-column
        property="itemQuality"
        :label="$t('CDKey.itemQuality')"
        sortable
      />
      <el-table-column
        property="key"
        :label="$t('CDKey.key')"
        sortable
      />
      <el-table-column
        :label="$t('CDKey.contentType')"
      >
        <template slot-scope="scope">
          {{ scope.row.contentType }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('CDKey.limitUseOnceEachPlayer')"
      >
        <template slot-scope="scope">
          {{ scope.row.limitUseOnceEachPlayer }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('table.actions')"
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
      <el-form-item :label="$t('CDKey.expiryDate')">
        <!-- <el-input v-model="currentRow.expiryDate" /> -->
        <el-date-picker
      v-model="currentRow.expiryDate"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :picker-options="pickerOptions">
    </el-date-picker>
      </el-form-item>
      <el-form-item :label="$t('CDKey.itemContent')">
        <el-input v-model="currentRow.itemContent" :placeholder="$t('CDKey.contentTypeValue')" />
      </el-form-item>

      <el-form-item :label="$t('CDKey.maxExchangeCount')">
        <el-input v-model="currentRow.maxExchangeCount" />
      </el-form-item>
      <el-form-item :label="$t('CDKey.itemQuality')">
        <el-input v-model="currentRow.itemQuality" />
      </el-form-item>
      <el-form-item :label="$t('CDKey.key')">
        <el-input v-model="currentRow.key" />
      </el-form-item>
      <el-form-item :label="$t('CDKey.itemCount')">
        <el-input v-model="currentRow.itemCount" />
      </el-form-item>
      <el-form-item :label="$t('CDKey.itemName')">
        <el-input v-model="currentRow.itemName" />
      </el-form-item>
      <el-form-item :label="$t('CDKey.limitUseOnceEachPlayer')">
            <el-switch v-model="currentRow.limitUseOnceEachPlayer" />
          </el-form-item>
      <el-form-item :label="$t('CDKey.contentType')">
        <el-select
          v-model="currentRow.contentType"
          :placeholder="$t('CDKey.contentType')"
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
  RetrieveCDKeyPaged,
  UpdateCDKey,
  CreateCDKey,
  DeleteCDKey,
  RetrieveLocalization,
  RetrieveContentTypes
} from "@/utils/api";
export default {
  data() {
    return {
      list: [],
      currentRow: {
        expiryDate: "",
        itemContent: "",
        contentType: "Item",
        itemCount: "",
        maxExchangeCount: "",
        itemQuality: "",
        key: "",
        itemName: ""
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "明天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      selectList: [],
      value: "",
      rules: {
        expiryDate: [
          {
            required: true,
            message: "pleace enter expiryDate",
            trigger: "blur"
          }
        ],
        command: [
          { required: true, message: "pleace enter command", trigger: "blur" }
        ],
        pointsRequired: [
          {
            required: true,
            message: "pleace enter pointsRequired",
            trigger: "blur"
          }
        ],
        position: [
          {
            required: true,
            message: "pleace enter pointsRequired",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    lang: {
      get() {
        return this.$store.state.app.language;
      },
      set(lang) {
        this.$i18n.locale = lang;
        this.$store.dispatch("app/setLanguage", lang);
      }
    }
  },
  created() {
    this.getList(1);
    this.getSelectList();
  },
  methods: {
    getcontentType(data) {
      const that = this;
      RetrieveLocalization({
        language: that.lang === "zh" ? "schinese" : "english",
        itemName: data
      }).then(res => {
        console.log(res);
      });
    },
    deleteItem(data) {
      const that = this;
      if (data >= 0) {
        const id = this.list[data].id;
        DeleteCDKey({ ids: [id] }).then(res => {
          that.$notify({
            title: "Success",
            dangerouslyUseHTMLString: true,
            type: "success"
          });
          that.getList(1);
        });
      }
    },
    getList(index) {
      const that = this;
      RetrieveCDKeyPaged({
        pageIndex: index,
        pageSize: "10"
      }).then(res => {
        if (index == 1) {
          that.list = res.data.items
        }else{
          that.list = that.list.concat(res.data.items);
        }
        
        if (res.data.items.length >= 10) {
          that.getList(index + 1);
        }
      });
    },
    getSelectList() {
      const that = this;
      RetrieveContentTypes().then(res => {
        that.selectList = res.data;
      });
    },
    handleCurrentChange(val) {
      this.currentRow =JSON.parse(JSON.stringify(val));
    },
    onCreate() {
      const that = this;
      if(that.currentRow.createdDate){
        that.$notify({
          title: "Can't",
          dangerouslyUseHTMLString: true,
          type: "Fails"
        });
        return
      }
      that.currentRow.expiryDate = that.dateFormat("YYYY-mm-dd HH:MM:SS",that.currentRow.expiryDate)
      CreateCDKey(that.currentRow).then(res => {
        that.$notify({
          title: "Success",
          dangerouslyUseHTMLString: true,
          type: "success"
        });
        that.getList(1);
      });
    },
    onUpdate() {
      const that = this;
      UpdateCDKey(that.currentRow).then(res => {
        that.$notify({
          title: "Success",
          dangerouslyUseHTMLString: true,
          type: "success"
        });
        that.getList(1);
      });
    },
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
