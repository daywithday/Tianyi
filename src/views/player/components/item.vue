<template>
  <el-col
    v-if="item"
    :xs="{span: 12}"
    :sm="{span: 6}"
    :md="{span: 4}"
    :lg="{span: 3}"
    :xl="{span: 2}"
    class="cardBox"
  >
    <div style="width: 70px; height: 70px;position: relative;">
      <el-image
        style="width: 70px; height: 70px"
        :src="getImage(item)"
        fit="cover"
      />

      <el-progress
        v-if="item.maxUseTimes"
        class="postion"
        :percentage="parseInt(((item.maxUseTimes - item.useTimes) / item.maxUseTimes)*100)"
        :format="format"
      />
      <p
        v-else
        class="postion texts"
      >{{ item.count }}</p>
    </div>
    <span :style="{color:getColor(item.quality)}">
      {{ itemNames }}
    </span>

  </el-col>
</template>
<script>
import { getServer, getPort, getTranslate, setTranslate } from '@/utils/auth'
import { RetrieveLocalization } from '@/utils/api'
export default {
  props: ['item'],
  data() {
    return {
      itemName: ''
    }
  },
  computed: {
    itemNames() {
      return this.itemName
        ? this.itemName
        : this.item
          ? this.item.itemName
            ? this.item.itemName
            : ''
          : ''
    },
    lang: {
      get() {
        return this.$store.state.app.language
      },
      set(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('app/setLanguage', lang)
      }
    }
  },
  watch: {
    lang() {
      this.translate(this.item.itemName)
    }
  },
  mounted() {
    this.translate(this.item.itemName)
  },
  methods: {
    getColor(quality) {
      switch (quality) {
        case 0:
          return '#909090'
          break
        case 1:
          return '#FFFFFF'
          break
        case 2:
          return '#3DD20D'
          break
        case 3:
          return '#2F78FF'
          break
        case 4:
          return '#9132C8'
          break
        case 5:
          return '#F39C12'
          break
        case 6:
          return '#FFFFFF'
          break
        default:
          return 'black'
          break
      }
    },
    translate(name) {
      const that = this
      const TranslateObj = getTranslate()
        ? JSON.parse(getTranslate())
        : { zh: {}, en: {}}
      let nName = ''
      if (TranslateObj[that.lang][name]) {
        nName = TranslateObj[that.lang][name]
      } else {
        RetrieveLocalization({
          language: that.lang === 'zh' ? 'schinese' : 'english',
          itemName: name
        }).then(res => {
          nName = res.data
          TranslateObj[that.lang][name] = nName
          that.itemName = nName
          setTranslate(JSON.stringify(TranslateObj))
        })
      }
      that.itemName = nName
      return nName
    },
    format(percentage) {
      return ''
    },
    getImage(item) {
      if (item.iconcolor !== 'FFFFFF') {
        return (
          'http://' +
          getServer() +
          ':' +
          getPort() +
          '/itemicons/' +
          item.icon +
          '.png' +
          item.iconcolor ? '?iconColor=' + item.iconcolor : ''
        )
      } else {
        if (global_itemicons.has(item.icon)) {
          return `https://cdn.jsdelivr.net/gh/1249993110/7dtd@main/itemicons/${
            item.icon
          }.png`
        } else {
          return (
            'http://' +
            getServer() +
            ':' +
            getPort() +
            '/itemicons/' +
            item.icon +
            '.png'
          )
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cardBox {
  width: 80px;
  height: 80px;
  display: flex;
  position: relative;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 10px;
  .el-progress {
    width: 100%;
  }
  .postion {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .texts {
    color: orange;
    text-shadow: 1px 1px 1px blue;
    font-size: 17px;
    font-weight: bold;
  }
}
</style>
<style lang="scss">
.cardBox .el-progress-bar {
  padding: 0;
  padding-right: 0px;
}
</style>

