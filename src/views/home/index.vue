<template>
  <div class="layui-layout-body">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <!-- 左上角logo区域 -->
        <div class="layui-logo">
          <img src="~@/assets/logo.png" alt="" />
        </div>
        <!-- 头部区域（可配合layui已有的水平导航）水平用户信息头像栏 -->
        <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item">
            <a href="javascript:;" class="userinfo">
              <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
              <span class="text-avatar">A</span>
              个人中心
            </a>
            <dl class="layui-nav-child">
              <dd><a href="./user/user-info.html" target="fm">基本资料</a></dd>
              <dd><a href="./user/user-img.html" target="fm">更换头像</a></dd>
              <dd><a href="./user/user-pwd.html" target="fm">重置密码</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href="javascript:;" id="tuichu"
              ><span class="iconfont icon-tuichu"></span>退出</a
            >
          </li>
        </ul>
      </div>
      <!-- 左侧栏 -->
      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧用户信息头像栏 -->
          <div class="userinfo">
            <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
            <span class="text-avatar">A</span>
            <span id="welcome">欢迎 ***</span>
          </div>
          <!-- 左侧导航区域（可配合layui已有的垂直导航） lay-shrink="all"互斥作用 -->
          <ul class="layui-nav layui-nav-tree" lay-shrink="all">
            <li class="layui-nav-item layui-this">
              <a href="./home/dashboard.html" target="fm"
                ><span class="iconfont icon-home"></span>首页</a
              >
            </li>
            <li class="layui-nav-item">
              <a class="" href="javascript:;"
                ><span class="iconfont icon-16"></span>文章管理</a
              >
              <dl class="layui-nav-child">
                <dd>
                  <a href="./article/art-cate.html" target="fm"
                    ><i class="layui-icon layui-icon-read"></i>文章类别</a
                  >
                </dd>
                <dd>
                  <a href="./article/art-list.html" target="fm"
                    ><i class="layui-icon layui-icon-list"></i>文章列表</a
                  >
                </dd>
                <dd>
                  <a href="./article/art-pub.html" target="fm"
                    ><i class="layui-icon layui-icon-edit"></i>发布文章</a
                  >
                </dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;"
                ><span class="iconfont icon-user"></span>个人中心</a
              >
              <dl class="layui-nav-child">
                <dd>
                  <a href="./user/user-info.html" target="fm"
                    ><i class="layui-icon layui-icon-form"></i>基本资料</a
                  >
                </dd>
                <dd>
                  <a href="./user/user-img.html" target="fm"
                    ><i class="layui-icon layui-icon-picture-fine"></i
                    >更换头像</a
                  >
                </dd>
                <dd>
                  <a href="./user/user-pwd.html" target="fm"
                    ><i class="layui-icon layui-icon-set-fill"></i>重置密码</a
                  >
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>

      <div class="layui-body">
        <!-- 内容主体区域 -->
    <tubiao></tubiao>
        <!-- <iframe name="fm" src="../../../public/dashboard.html" frameborder="0"></iframe> -->
      </div>
      <!-- 底部固定区域 -->
      <div class="layui-footer">© www.itheima.com - 黑马程序员</div>
    </div>
  </div>
</template>

<script>
import '@/style/fonts/iconfont.css'
import '@/style/index.css'
import tubiao from './components/tubiao.vue'
export default {
  name: "homeIndex",
  // 变量声明,函数声明
  data() {
    return {};
  },
  props: {},
  // 注册
  components: {
    tubiao
  },
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
  created() {
     const _this = this;
    layui.use(['layer'],function(){
      _this.layer = layui.layer,
      this.layer.msg('欢迎');
    })
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style scoped lang="less">
</style>