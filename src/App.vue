<template>
  <div class="bigEvent">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "bigIndex",
  // 变量声明,函数声明
  data() {
    return {};
  },
  props: {},
  // 注册
  components: {},
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {
    deep: true,
    handler(newVal, oldVal) {},
    immediate: true,
  },
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style scoped lang="less">
</style>