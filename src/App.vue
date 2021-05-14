<template>
  <div id="app">
    <div class="blurbackground"></div>
    <Header></Header>
    <router-view />
    <b-modal id="modalPopover" title="提示" ok-only>
      <p>
        {{ tip }}
      </p>
    </b-modal>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: { Header },
  data() {
    return {
      tip: this.$globalData.tip,
    };
  },
  mounted() {
    let that = this;
    this.$root.eventHub.$on("showtip", (data) => {
      that.tip = data;
      that.$bvModal.show('modalPopover')
    })
  },
};
</script>
<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.blurbackground {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: url("/static/images/background.png") no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: multiply;
  filter: blur(4px);
}
</style>
