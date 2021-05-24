<template>
  <div class="chat-history-container">
    <aside>
      {{$t('route.telnet')}}
    </aside>
    <div class="telnet " ref="telnet">
      <ul>
        <li
          v-for="(item,index) in commonList"
          v-bind:key="index"
        >
          <p style="color:blue;">{{$t('telnet.server')}} {{getTime(item)}} </p>
          {{item}}
        </li>
      </ul>
    </div>

    <el-form
      :inline="true"
      class="demo-form-inline container"
    >
      <el-form-item label="">
        <el-input
          v-model="commond"
          :placeholder="$t('telnet.placeholder')"
          @keyup.enter.native="send"
          clearable
          label-width='auto'
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="send()"
        >{{$t('telnet.send')}}</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>
<script>
import { getServer, getPort, getToken } from "@/utils/auth";
import { RetrieveCommonConfig } from "@/utils/api";
export default {
  name: "telnet",
  data() {
    return {
      websock: null,
      commonList: [],
      commond: ""
    };
  },
  created() {
    let that = this;
    RetrieveCommonConfig().then(res => {
      that.initWebSocket(res.data.webConfig.webSocketPort);
    });
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  },
  methods: {
    getTime(item){
      return item.split('T')[1]?item.split('T')[1].slice(0,9):''
    },
    send() {
      let commond = this.commond;
      if (commond) {
        this.websocketsend(commond);
      }
    },
    initWebSocket(port) {
      //初始化weosocket
      const wsuri =
        "ws://" + getServer() + ":" + port + "?access-token=" + getToken();
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      this.websocketsend("admin");
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      this.commonList.push(e.data);
    },
    websocketsend(Data) {
      //数据发送
      let that = this
      this.websock.send(Data);
      this.commond = "";
      setTimeout(() => {
        that.$refs.telnet.scrollTo(0, 999999);
      }, 100);
      
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.chat-history-container {
  margin: 10px 20px 0;
  overflow: hidden;
}
.telnet {
  overflow-y: auto;
  height: 350px;
}
</style>

