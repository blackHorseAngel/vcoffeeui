<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item v-for="(item,i) in navList":key="i":index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <el-button type="primary" v-on:click="logout">退出登录</el-button>
  </el-menu>

</template>

<script>
    export default {
        name: "NavMenu",
        data () {
          return {
            navList:[
              {name:"/index",navItem:"首页"},
              {name:"/company",navItem:"公司"},
              {name:"/user",navItem:"用户"},
              {name:"/equipment",navItem:"设备"},
              {name:"/account",navItem:"账户"},
              {name:"/consume",navItem:"消费"},
            ]
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
        }
      }

    }
</script>

<style scoped>

</style>
