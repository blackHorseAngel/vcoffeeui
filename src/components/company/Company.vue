<template>
    <el-table :data="companyData"  ref="multipleTable"   >
      <el-table-column type="selection"  width="55"/>
      <el-table-column prop="companyName" label="公司名称" width="120px"/>
      <el-table-column prop="companyNickName" label="公司简称" width="120px"/>
      <el-table-column prop="companyPhoneNumber" label="公司电话" width="120px"/>
      <el-table-column prop="companyAddress" label="公司地址" width="120px"/>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" v-on:click="editCompany(scope.row)" >编辑</el-button>
          <el-button type="text" size="small" v-on:click="deleteCompany(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
  export default {
    name: "Company",
    data(){
      return {
        companyData:[],
      }
    },
    methods:{
      created(){
        this.$axios
          .post('/vcoffee/queryCompany')
          .then(successResponse => {
            console.log("查询公司信息成功"+successResponse);
            this.companyData = successResponse.data;
          }).catch(failResponse => {
             console.error("查询公司信息时报错，错误信息是："+failResponse);
             this.$message.error("查询公司信息时报错，错误信息是："+failResponse.message);
        });
      },
      editCompany(){
        this.deleteCompany();
      },
      deleteCompany(){
          this.editCompany();
      }
    }

  }
</script>

<style scoped>

</style>
