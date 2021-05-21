<template>
  <div class="package">
    <div class="bigTitle">{{ $t('player.equipment') }}：</div>
    <el-row
      :gutter="0"
      class="panel-group"
    >
      <slot v-for="item in packageList.equipment">
        <item v-if="item" :item="item" />
      </slot>

    </el-row>
    <div class="bigTitle">{{ $t('player.belt') }}：</div>
    <el-row
      :gutter="0"
      class="panel-group"
    >
      <slot v-for="item in packageList.belt">
        <item v-if="item" :item="item" />
      </slot>

    </el-row>
    <div class="bigTitle">{{ $t('player.bag') }}：</div>
    <el-row
      :gutter="0"
      class="panel-group"
    >
      <slot v-for="item in packageList.bag">
        <item v-if="item" :item="item" />
      </slot>

    </el-row>
  </div>
</template>
<script>

import item from './item'
export default {
  components: { item },
  props: ['packageList'],
  data() {
    return {}
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.package{
  height: 60vh;
  overflow-y:auto;
}
.bigTitle{
    color: rgb(255, 163, 3);
      text-shadow: 1px 1px 1px white;
      font-size: 22px;
      font-weight: bold;
      margin: 10px 0;
}
</style>
