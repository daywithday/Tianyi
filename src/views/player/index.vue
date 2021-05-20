<template>
  <div class="chat-history-container">
    <aside>
      {{$t('route.player')}}
    </aside>
    <el-tabs :tab-position="device == 'mobile' ?'top':'left'">
      <el-tab-pane :label="$t('player.onlinePlayer')">
        <my-table :player="onlinePlayer" @reFresh="reFresh" :device="device"></my-table>
      </el-tab-pane>
      <el-tab-pane :label="$t('player.allPlayer')">
        <my-table :player="player" @reFresh="reFresh" :device="device"></my-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  RetrieveKnownPlayer,
  RetrieveOnlinePlayer
} from "@/utils/api";
import { setToken, setPort } from "@/utils/auth";
import myTable from './components/myTable'
export default {
  data() {
    return {
      player: [],
      onlinePlayer: []
    };
  },
  components:{myTable},
  computed: {
    ...mapGetters(["device"])
  },
  mounted() {
    this.getDate();
  },
  methods: {
    reFresh(){
      this.getDate()
      this.$notify({
              title: 'Success',
              dangerouslyUseHTMLString: true,
              type: 'success'
            })
    },
    getDate() {
      let that = this;
      RetrieveKnownPlayer().then(res => {
        that.player = res.data;
      });
      RetrieveOnlinePlayer().then(res => {
        res.data = JSON.stringify(res.data)==="{}" ? [] : res.data;
        let arry = []
        if (typeof res.data == "object") {
          for (const key in res.data) {
            arry.push(res.data[key])
          }
        } else {
          arry = res.data
        }
        that.onlinePlayer = arry;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.chat-history-container {
  margin: 10px 20px 0;
  overflow: hidden;
}
</style>

