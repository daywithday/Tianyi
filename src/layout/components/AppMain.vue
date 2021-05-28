<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <div class="signName">
      Powered by IceCoffee and daywithday <a target="_blank" href="https://github.com/daywithday/Tianyi">GItHub Tianyi</a> <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=gbKStQR2SoBuqSHrOWgYwJUaaq3hRRab&jump_from=webapi"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="天依七日杀服主群" title="天依七日杀服主群"></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
.signName{
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
