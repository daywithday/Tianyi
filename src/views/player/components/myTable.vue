<template>
  <div>
    <el-table
      ref="singleTable"
      :data="player"
      highlight-current-row
      height="350"
      @current-change="handleCurrentChange"
    >
      <el-table-column
        type="index"
        min-width="100"
        width="100"
        :label="$t('player.index')"
      />
      <el-table-column
        property="name"
        min-width="150"
        :label="$t('player.name')"
      />
      <el-table-column
        property="steamId"
        label="steamID"
        min-width="170"
        sortable
      />
      <el-table-column
        property="ip"
        min-width="150"
        label="ip"
      />
      <el-table-column
        property="totalPlayTime"
        min-width="180"
        :label="$t('player.totalPlayTime')"
        sortable
      />
      <el-table-column
        property="lastOnline"
        min-width="200"
        :label="$t('player.lastOnline')"
      />
    </el-table>
    <el-dialog
      :title="$t('player.package')"
      :width="device == 'mobile'?'100%':'70%'"
      center
      :visible.sync="drawer"
    >
      <div class="package">
        <myPackage :package-list="packageList" />
      </div>
    </el-dialog>
    <div style="margin-top: 20px">
      <el-button @click="reFresh()">{{ $t('player.refresh') }}</el-button>
      <el-button @click="getPack()">{{ $t('player.package') }}</el-button>
    </div>
  </div>

</template>
<script>
import { RetrieveInventory } from "@/utils/api";
import myPackage from "./myPackage";
export default {
  components: { myPackage },
  props: ["player", "device"],
  data() {
    return {
      currentRow: "",
      drawer: false,
      direction: "rtl",
      packageList: ""
    };
  },
  watch: {
    player(nval, oval) {
      if (nval && nval.length > 0) {
        for (let item of nval) {
          //for of 推荐用在遍历数组
          // console.log(item);
          item.totalPlayTime = parseInt(item.totalPlayTime / 1440) +this.$t('player.day')+ parseInt(item.totalPlayTime / 60) +this.$t('player.hour')+ parseInt(item.totalPlayTime % 60) + this.$t('player.minit')
          item.lastOnline = item.lastOnline.split('.')[0]
        }
      }
    },
    lang(nval,oval){
      console.log('change')
    }
  },
  mounted() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://cdn.jsdelivr.net/gh/1249993110/7dtd@main/itemicon.js";
    document.body.appendChild(s);
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getPack() {
      const that = this;
      if (this.currentRow) {
        const steamId = this.currentRow.steamId;
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
      this.currentRow =JSON.parse(JSON.stringify(val));
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
