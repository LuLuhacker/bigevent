<template>
<div class="bg">
  <div class="login">
    <div class="ti"></div>
    <el-form
      :model="user"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账户名称" prop="info">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="user.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm"
          >登录</el-button
        >
        <el-button @click="$router.push('/reg')" type="warning">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
import {login} from '@/api/user.js'
export default {
  name: "loginIndex",
  // 变量声明,函数声明
  data() {
    var reg = new RegExp(/^[\S]{6,12}$/);
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("密码必须6到12位，且不能出现空格"));
      } else {
        callback();
      }
    }; 
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
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
  methods: {
  async  submitForm(){
      try {
        const {data} =await login({
          username:this.user.username,
          password:this.user.password
        })
        console.log(data);
        if(data.code!=0){
          return this.$message.error('登陆失败，请重试');
        }
        localStorage.setItem('token',data.token)
        this.$router.push('/home')
      } catch (err) {
        console.log(err);
         this.$message.error('操作失败，请重试');
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style scoped lang="less">
  .bg{overflow: hidden;
  width: 100%;
  height: 100vh;
  background:url(~@/assets/login_bg.jpg);
  background-size: cover; 
}
.ti{
  width: 100%;
  height: 60px;
  background:url(~@/assets/login_title.png) no-repeat;
  margin-left: 132px;
}
.login {
  width: 400px;
  height: 240px;
  margin: 300px auto;
  border: 1px solid #c0c4cc;
   padding: 20px 40px 0px 0px;
   background-color: #fff;
}
.anniu {
  margin-left: 130px;
}
</style>