<template>
    <div>
        <el-table
            ref="singleTable"
            :data="player"
            highlight-current-row
            @current-change="handleCurrentChange"
            height="350"
        >
            <el-table-column
                type="index"
                min-width="100"
                width="100"
                label="index"
            >
            </el-table-column>
            <el-table-column
                property="name"
                min-width="150"
                label="name"
            >
            </el-table-column>
            <el-table-column
                property="steamId"
                label="steamID"
                min-width="170"
                sortable
            >
            </el-table-column>
            <el-table-column
                property="ip"
                min-width="150"
                label="ip"
            >
            </el-table-column>
            <el-table-column
                property="totalPlayTime"
                min-width="150"
                label="totalPlayTime"
                sortable
            >
            </el-table-column>
            <el-table-column
                property="lastOnline"
                min-width="200"
                label="lastOnline"
            >
            </el-table-column>
        </el-table>
        <el-dialog
            title="背包"
            :width="device == 'mobile'?'100%':'70%'"
            center
            :visible.sync="drawer"
        >
            <div class="package">
                <myPackage :packageList="packageList"></myPackage>
            </div>
        </el-dialog>
        <div style="margin-top: 20px">
            <el-button @click="reFresh()">刷新列表</el-button>
            <el-button @click="getPack()">查看背包</el-button>
        </div>
    </div>

</template>
<script>
import { RetrieveInventory } from "@/utils/api";
import myPackage from "./myPackage";
export default {
  props: ["player", "device"],
  data() {
    return {
      currentRow: "",
      drawer: false,
      direction: "rtl",
      packageList: ""
    };
  },
  mounted() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://cdn.jsdelivr.net/gh/1249993110/7dtd@main/itemicon.js";
    document.body.appendChild(s);
  },
  components: { myPackage },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getPack() {
      let that = this;
      if (this.currentRow) {
        let steamId = this.currentRow.steamId;
        RetrieveInventory({ steamId: steamId }).then(res => {
          that.packageList = res.data;
          that.drawer = true;
        });
      }
    },
    reFresh() {
      this.$emit("reFresh");
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
