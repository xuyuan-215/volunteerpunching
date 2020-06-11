<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {},
  created() {
    // 刷新的时候  如果 不是当前首页  则 跳到首页
    if (this.$router.path !== '/homepage') {
      this.$router.replace('/homepage')
    }
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style lang="scss">


</style>
