<template>
  <div>
    <div class="container">
      <p>{{ $t('inputLabel.tip') }}</p>
      <div class="line line1">
        <span>{{ $t('inputLabel.select') }} : </span>
        <el-tooltip v-for="(item,index) in inputLabel" :key="index" class="item" effect="dark" :content="$t('inputLabel.selectTip')" placement="top-start">
          <el-button @click="selectInput(item)">{{ item }}</el-button>
        </el-tooltip>
      </div>

      <div class="line line2">
        <span>{{ $t('inputLabel.colorselect') }} : </span>
        <el-color-picker v-model="color" color-format="hex" />
        <el-tooltip class="item" effect="dark" :content="$t('inputLabel.selectTip')" placement="top-start">
          <el-button @click="selectColor(color)">{{ $t('inputLabel.color') }}</el-button>
        </el-tooltip>
      </div>
      <div class="line line3">
        <span>{{ $t('inputLabel.input') }} : </span>
        <el-input v-model="input" type="textarea" :placeholder="$t('inputLabel.inputTip')" />
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: ['inputLabel'],
  data() {
    return {
      input: '',
      color: ''
    }
  },
  mounted() {
    if (this.inputLabel) {
      console.log(this.inputLabel)
    }
  },
  methods: {
    selectInput(item) {
      this.input = this.input + item
    },
    selectColor(color) {
      if (color) {
        const color2 = color.split('#')
        this.input = this.input + '[' + color2[1] + ']'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
    padding: 20px 20px 0 20px;
    border: 1px dotted gray;
    margin-bottom: 20px;
    .line{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 20px;
        padding-left: 20px;
        span{
            display: inline-block;
            width: 100px;
            color: #333;
        }
    }
}
</style>
