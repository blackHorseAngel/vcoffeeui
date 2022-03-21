<template>
  <el-dialog :visible="logoutDialogVisible" :before-close="closeLogoutDialog" width="30%">
    <h3>是否退出登录</h3>
    <div slot="footer" class="dialog-footer" >
      <el-button type="primary" v-on:click="logout">确 定</el-button>
      <el-button type="primary" v-on:click="logoutDialogVisible = false">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>

    export default {
      name: "Logout",
      data(){
        return{
          logoutDialogVisible:true
        }
      },
      methods:{
          logout(){
            this.$axios
              .post('/vcoffee/logout')
              .then(successResponse => {
                console.log("登出成功："+successResponse);
                this.$message.success("登出成功："+successResponse.data.message);
                this.$router.replace({path:'/login'});
              }).catch(failResponse => {
                console.error("登出是报错，错误信息是："+failResponse);
                this.$message.error("登出是报错，错误信息是："+failResponse.data.message);
            })
          },
        closeLogoutDialog(){
          this.logoutDialogVisible = false;
        },
      }
    }
</script>

<style scoped>

</style>
