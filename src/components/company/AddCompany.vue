<template>
  <el-dialog title="新增公司信息" :visible.sync="addCompanyDialogFormVisible">
    <el-form :model="companyForm" :rules="companyRules"  ref="companyForm" >
      <el-form-item label="公司名称"  prop="companyName" label-width="80px">
        <el-input v-model="companyForm.companyName" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="公司简称" label-width="80px" prop="companyNickName">
        <el-input v-model="companyForm.companyNickName" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="公司电话" label-width="80px" prop="companyPhoneNumber">
        <el-input v-model="companyForm.companyPhoneNumber" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="公司地址"  label-width="80px" prop="companyAddress">
        <el-input v-model="companyForm.companyAddress" autocomplete="off"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" v-on:click="insertCompany">确 定</el-button>
      <el-button type="primary" v-on:click="addCompanyDialogFormVisible = false">取 消</el-button>
    </div>
  </el-dialog>

</template>

<script>
    export default {
      name: "AddCompany",
      data(){
        return{
          addCompanyDialogFormVisible:true,
          companyName:'',
          companyNickName:'',
          companyPhoneNumber:'',
          companyAddress:''
        }
      },
      companyRules:{
        companyName: [
          {required:true, message:"请输入公司姓名",trigger:'blur'},
          {min:3,max:255,message:"长度在30到255个字节",trigger: 'blur'}
        ],
        companyNickName: [
          {message:"请输入公司简称",trigger:'blur'},
          {min:6,max:100,message: "长度在6到100个字节",trigger: 'blur'}
        ],
        companyPhoneNumber: [
          {required:true,message:"请输入公司电话",trigger:'blur'},
          {min:10,max:12,message:"电话长度在8到12位数字，包含区号",trigger: 'blur'}
        ],
        companyAddress: [
          {required:true,message:"请输入公司地址",trigger:'blur'},
          {min:3,max:255,message:"长度在30到255个字节",trigger: 'blur'}
        ]
      },
      methods:{
        insertCompany(){
          this.$axios
            .post('/vcoffee/insertCompany',{
              companyName:this.companyForm.companyName,
              companyNickName:this.companyForm.companyNickName,
              companyPhoneNumber:this.companyForm.companyPhoneNumber,
              companyAddress:this.companyForm.companyAddress
            })
            .then(successResponse => {
              console.log("新增公司成功"+successResponse);
              if(successResponse.data.code === 1000){
                this.$router.replace({path:'/company'});
              }else if(successResponse.data.code === 1008){
                this.$message.error(successResponse.data.message);
              }else if(successResponse.data.code === 1009){
                this.$message.error(successResponse.data.message);
              }else if(successResponse.data.code === 1010){
                this.$message.error(successResponse.data.message);
              }
            }).catch(failResponse => {
            console.error("新增公司报错"+failResponse);
            this.$message.error(failResponse.data.message);
          })
        }
      }
    }
</script>

<style scoped>

</style>
