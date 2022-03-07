<template>
  <body id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"/>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
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
        responseResult:[]
      }
    },
    methods:{
      login () {
        this.$axios
          .post('/vcoffee/login',{
             username:this.loginForm.username,
             password:this.loginForm.password
          })
          .then(successResponse => {
             if(successResponse.data.code === 200){
                this.$router.replace({path:'/index'})
             }
          })
          .catch(failResponse =>{

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
  .login-container{
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
