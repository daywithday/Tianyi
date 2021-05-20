<template>
    <div>
        <div class="bigTitle">装备：</div>
        <el-row
            :gutter="8"
            class="panel-group"
        >
            <slot v-for="item in packageList.equipment">
                <item v-if="item" :item="item"></item>
            </slot>

        </el-row>
        <div class="bigTitle">腰带：</div>
        <el-row
            :gutter="8"
            class="panel-group"
        >
            <slot v-for="item in packageList.belt">
                <item v-if="item" :item="item"></item>
            </slot>

        </el-row>
        <div class="bigTitle">背包：</div>
        <el-row
            :gutter="8"
            class="panel-group"
        >
            <slot v-for="item in packageList.bag">
                <item v-if="item" :item="item"></item>
            </slot>

        </el-row>
    </div>
</template>
<script>

import item from './item'
export default {
  props: ["packageList"],
  data() {
    return {};
  },
  components:{item},
  methods: {
    
  }
};
</script>
<style lang="scss" scoped>
.bigTitle{
    color: rgb(255, 163, 3);
      text-shadow: 1px 1px 1px white;
      font-size: 22px;
      font-weight: bold;
}
</style>
