<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { setlang } from './utils/auth.js'
export default {
  name: 'App',
  computed: {
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
    lang(nval, oval) {
      setlang(nval)
    }
  },
  created() {
    setlang(this.lang)
  }
}
</script>
