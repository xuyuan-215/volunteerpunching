<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/homepage"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/find"
      >发现</van-tabbar-item>
      <van-tabbar-item
        icon="friends-o"
        to="/organization"
      >组织页</van-tabbar-item>
      <van-tabbar-item
        icon="setting-o"
        to="/my"
      >我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
