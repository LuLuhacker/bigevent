<template>
<div class="bg">
  <div class="reg">
    <div class="ti"></div>
    <el-form
      :model="user"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账户名称" prop="username">
        <el-input v-model="user.username" type="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="user.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input
          type="password"
          v-model="user.repassword"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="$router.push('/login')" type="success">登录</el-button>
        <el-button @click="resetForm('ruleForm')" type="info">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
import {reg} from '@/api/user.js'
export default {
  name: "regIndex",
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.user.password) {
        callback(new Error("两次输入密码不一致!"));
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
        repassword: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        repassword: [{ validator: validatePass2, trigger: "blur" }],
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
   async submitForm() { 
      // console.log(this.user);
      try {
        const {data}=await reg({
          username:this.user.username,
          password:this.user.password,
          repassword:this.user.repassword
        })
       console.log(data);
       if(data.code==1){
        return  this.$message.error('用户名被占用，请更换其他用户名！');
       }else{
          this.$message({
          message: '注册成功！欢迎',
          type: 'success'
        });
       }
       this.$router.push('/login')
      } catch (err) {
        console.log(err);
        this.$message.error('注册失败，请重试');
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
.reg {
  width: 400px;
  height: 300px;
  margin: 300px auto;
  padding: 20px 40px 0px 0px;
  border: 1px solid #c0c4cc;
  background-color: #fff;
}
.anniu {
  margin-left: 70px;
}

</style>