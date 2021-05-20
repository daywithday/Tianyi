<template>
  <el-col :xs="24" :sm="12" :lg="8">
    <p>
      <span class="title">{{ keyName }}：</span>
      <!-- <span class="title">{{ $t(('serverInfo.'+ keyName)) }}：</span> -->
      <span class="value">{{ keyValue }}</span>
    </p>
  </el-col>
</template>

<script>
export default {
  components: {},
  props: { keyName: String, keyValue: String },
  methods: {}
}
</script>

<style lang="scss" scoped>
.title {

  font-size: 20px;
  font-weight: 700;
  color: #666;
}
.value {
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
}
</style>
