<template>
  <div class="block">
    <aside>
      {{ $t('route.onlineMap') }}
    </aside>
    <iframe style="width:100%;height: 100vh;" src="/static/onlineMap/index.html" frameborder="0" />
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
  height: 100%;
}
</style>
