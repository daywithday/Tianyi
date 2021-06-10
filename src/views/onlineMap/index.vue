<template>
  <div class="block">
    <aside>
      {{ $t('route.onlineMap') }}
    </aside>
    <iframe style="width:100%;height: calc(100vh - 200px);" src="/onlineMap/index.html" frameborder="0" />
    <iframe style="width:100%;height: calc(100vh - 200px);" src="/onlineMap/index.html" frameborder="0" />
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.block {
  padding: 20px;
  box-sizing: border-box;
  max-height: calc(100vh - 80px);
  overflow-y:auto;
}
</style>
