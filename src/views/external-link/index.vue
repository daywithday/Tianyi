<template>
  <div class="block">
    <aside>
      {{ $t('route.externalLink') }}
    </aside>
    <iframe style="width:100%;height: calc(100vh - 200px);" src="/swagger-ui/index.html" frameborder="0" />
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
