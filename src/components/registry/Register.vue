<template>
  <body id="poster">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"  class="register_container">
        <h3 class="register_title">用户注册</h3>
        <el-form-item  label="姓名" label-width="50px" prop="username">
            <el-input  type="text" v-model="ruleForm.username"   autocomplete="off"/>
        </el-form-item>
        <el-form-item  label="密码" label-width="50px"  prop="password" >
            <el-input type="password" status-icon="true" v-model="ruleForm.password" autocomplete="off"/>
        </el-form-item>
        <el-form-item label-width="80px" label="确认密码"  prop="confirmPassword">
            <el-input  type="password" status-icon="true" v-model="ruleForm.confirmPassword" autocomplete="off"/>
        </el-form-item>
        <el-form-item label-width="80px" label="联系方式" prop="telephoneNumber">
            <el-input  type="text" v-model ="ruleForm.telephoneNumber" />
        </el-form-item>
        <el-form-item label-width="80px" label="电子邮箱" prop="email">
            <el-input type="text" v-model="ruleForm.email"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 30%;background: #505458;border: none" v-on:click="submit">注册</el-button>
          <el-button type="primary" style="width: 30%;background: #505458;border: none" v-on:click="reset">重置</el-button>
        </el-form-item>
      </el-form>
  </body>
</template>
  <script>
  export default {
    name:'Register',
    data() {
      return {
        ruleForm: {
          username: '',
          password: '',
          confirmPassword: '',
          telephoneNumber: '',
          email:''
        },
        rules: {
          username: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
          ],
          password:[
            {required: true,message:'请输入密码',trigger:'blur'},
            {min: 6,max: 20,message: '密码长度6-20个字符，包含大小写字母和数字',trigger: 'blur'}
          ],
          confirmPassword: [
            {required: true,message:'请重新输入密码',trigger:'blur'},
            {min: 6,max: 20,message: '密码长度6-20个字符，包含大小写字母和数字',trigger: 'blur'}
          ],
          telephoneNumber: [
            { required: true, message: '请选择联系方式', trigger: 'blur' },
            {min: 7,max: 11,message: '电话长度为7-11位数字',trigger: 'blur'}
          ],
          email: [
            {required: true,message:'请输入电子邮件',trigger:'blur'},
          ]
        }
      };
    },
    methods: {
      submit() {
        this.$axios
          .post('/vcoffee/register',{
          username:this.ruleForm.username,
          password:this.ruleForm.password,
          confirmPassword:this.ruleForm.confirmPassword,
          telephoneNumber:this.ruleForm.telephoneNumber,
          email:this.ruleForm.email
        })
        .then(successResponse => {
          console.log(successResponse);
          if(successResponse.data.code === 1000){
            this.$message.success(successResponse.data.message)
            this.$router.replace({path:'/login'})
          }else if(successResponse.data.code === 1003){
            this.$message.error(successResponse.data.message)
          }else if(successResponse.data.code === 1004){
            this.$message.error(successResponse.data.message)
          }else if(successResponse.data.code === 1005){
            this.$message.error(successResponse.data.message)
          }else if(successResponse.data.code === 1006){
            this.$message.error(successResponse.data.message)
          }else if(successResponse.data.code === 1007){
            this.$message.error(successResponse.data.message)
          }else if(successResponse.data.code === 500){
            this.$router.replace({path:'/error'})
          }

        })
        .catch(failResponse => {
          console.error("注册时报错，错误信息是："+failResponse);
          this.$message.error("注册时报错，错误信息是："+failResponse.data.message);
          this.$router.replace({path:'/register'});
        })
      },
      reset() {
        this.ruleForm = {};
        this.$nextTick(() => {
          this.$refs[ruleForm].resetFields();
        });
      }
    }
  }
</script>

<style>
  body{
    magin:0px;
  }
  #poster{
    background: url("../../assets/coffee.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: fixed;
  }
  .register_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .register_container{
    border-radius: 45px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 400px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #a0cfff;
  }
</style>
