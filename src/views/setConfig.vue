<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="服务器IP/域名"
        label-for="input-1"
        description="默认服务器地址可不改"
        v-if="show"
      >
        <b-form-input
          id="input-1"
          v-model="form.baseUrl"
          type="text"
          placeholder="请输入服务器IP/域名"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="服务器端口"
        label-for="input-1"
        description="默认服务器端口可不改"
        v-if="show"
      >
        <b-form-input
          id="input-1"
          v-model="form.prot"
          type="number"
          placeholder="请输入服务器端口"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="服务器assestToken"
        label-for="input-1"
        description="AccessToken 生成位置(配置文件)：7 Days to Die Dedicated Server\LSTY\functionConfig.xml"
      >
        <b-form-input
          id="input-1"
          v-model="form.assestToken"
          type="text"
          required
          placeholder="请输入服务器assestToken"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="是否保存配置自动登录">
        <b-form-radio v-model="form.selected" name="some-radios" value="A"
          >保存</b-form-radio
        >
        <b-form-radio v-model="form.selected" name="some-radios" value="B"
          >不保存</b-form-radio
        >
      </b-form-group>

      <b-button type="submit" variant="primary">链接</b-button>
      <b-button type="reset" variant="danger">重置</b-button>
    </b-form>
  </div>
</template>
<script>
import { apiAddress, setToken, setBaseUrl } from "@/utils/api";
export default {
  name: "index",
  data() {
    return {
      form: {
        baseUrl: "",
        prot: "",
        assestToken: "",
        selected: "B",
      },
      show: false,
    };
  },
  mounted() {
      let that =this
    if (location.href.indexOf("localhost:") != -1) {
      this.show = false;
    } else {
      this.show = true;
    }
    let selected = localStorage.getItem("selected") || "";
    if (selected == "A") {
      let token = localStorage.getItem("token");
      let baseUrl = localStorage.getItem("baseUrl");
      let prot = localStorage.getItem("prot");
      that.$globalData.assestToken = token;
      that.$globalData.prot = prot;
      that.$globalData.baseUrl = baseUrl;
      setBaseUrl(baseUrl + ":" + prot);
      setToken(token);
      apiAddress({a:1}).then((res) => {
        console.log(res);
        if (res.code == 200) {
            that.$router.push({name: 'home'})
        }
      });
    }
  },
  methods: {
    onSubmit(evt) {
      let that = this;
      if (this.form.baseUrl && this.form.prot) {
        setBaseUrl("http://" + this.form.baseUrl + ":" + this.form.prot);
      }
      if (this.form.assestToken) {
        setToken(this.form.assestToken);
      }
      evt.preventDefault();
      apiAddress({
          a:1
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
            that.$globalData.assestToken = that.form.assestToken;
            that.$globalData.baseUrl = "http://" + that.form.baseUrl;
            that.$globalData.prot = that.form.prot;
          if (that.form.selected == "A") {
            localStorage.setItem("selected", "A");
            localStorage.setItem("token", that.form.assestToken);
            localStorage.setItem("baseUrl", that.$globalData.baseUrl);
            localStorage.setItem("prot", that.$globalData.prot);
          }
          that.$router.push({name: 'home'})
        } else {
          localStorage.setItem("selected", "");
          localStorage.setItem("token", "");
          localStorage.setItem("baseUrl", "");
          localStorage.setItem("prot", "");
        }
        // 获取数据成功后的其他操作
      });
    },
    onReset(evt) {
      evt.preventDefault();

      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
</style>
