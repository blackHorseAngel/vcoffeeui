<template>
  <body id="poster">
    <el-form :model="loginForm" :rules="rules" ref="loginForm"  class="login_container" label-position="left" label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 30%;background: #505458;border: none" v-on:click="login">登录</el-button>
        <el-button type="primary" style="width: 30%;background: #505458;border: none" v-on:click="reset">重置</el-button>
        <el-button type="primary" style="width: 30%;background: #505458;border: none" v-on:click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
  export default{
    name:'Login',
    data(){
      return {
        loginForm:{
          username:'',
          password:''
        },
        rules:{
          username:[
            {required: true,message:'请输入姓名',trigger:'blur'},
            {min: 2,max: 30,message: "长度在2到30个字符",trigger: 'blur'}
          ],
          password:[
            {required: true,message: '请输入密码',trigger:'blur'},
            {min: 6,max: 20,message:'密码长度6-20个字符，包含大小写字母和数字',trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      register(){
        this.$router.replace({path:'/register'});
      },
      reset(){
        this.loginForm = {};
        this.$nextTick(() => {
          this.$refs[loginForm].resetFields();
        });
      },

      login () {
        this.$axios
          .post('/vcoffee/login',{
             username:this.loginForm.username,
             password:this.loginForm.password
          })
          .then(successResponse => {
            console.log(successResponse);
             if(successResponse.data.code === 1000){
               this.$message.success(successResponse.data.message);
                this.$router.replace({path:'/index'})
             }else if(successResponse.data.code === 1001){
               this.$message.error(successResponse.data.message);
             }else if(successResponse.data.code === 1002){
               this.$message.error(successResponse.data.message);
             }else if(successResponse.data.code === 500){
               this.$router.replace({path:'/error'})
             }else{
               this.$router.replace({path:'/login'})
             }
          })
          .catch(failResponse =>{
            console.error("登录时报错，错误信息是：" + failResponse);
            this.$message.error("登录时报错，错误信息是：" + failResponse.data.message);
            this.$router.replace({path:'/error'})
          })
      }
    }
  }
</script>
<style>
  #poster{
    background: url("../../assets/coffee.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: fixed;
  }
  .login_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  body{
    magin:0px;
  }
  .login_container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #a0cfff;
  }

</style>
