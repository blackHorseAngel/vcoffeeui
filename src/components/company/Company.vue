<template>
  <el-table
    ref="multipleTable" :data="companyData" tooltip-effect="dark" style="width: 100%"  @selection-change="handleSelectionChange">
    <el-table-column type="selection"  width="55"/>
    <el-table-column prop="companyName" label="公司名称" width="120"/>
    <el-table-column prop="companyNickName" label="公司简称" width="120"/>
    <el-table-column prop="companyPhoneNUmber" label="公司电话" width="120"/>
    <el-table-column prop="companyAddress" label="公司地址" show-overflow-tooltip/>
  </el-table>
</template>

<script>
  export default {
    name: "Company",
    data(){
      return {
        companyData:[]
      }
    },
    methods:{
      getCompanyData(){
        this.$axios
          .post('/vcoffee/queryCompany')
          .then(successResponse => {
            console.log("查询公司信息成功"+successResponse);
            this.companyData = successResponse.data;
          }).catch(failResponse => {
             console.error("查询公司信息时报错，错误信息是："+failResponse);
             this.$message.error("查询公司信息时报错，错误信息是："+failResponse.message);
        });
      }
    }

  }
</script>

<style scoped>

</style>
