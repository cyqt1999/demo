<template>
  <div id="login">
    <!-- <img class="bcImg" src="../assets/background.jpg" alt="背景图"> -->
    <div class="bcBox">
      <div class="leftBox">
        <div class="imgBox">
          <img src="../assets/favicon.jpg" alt="logo" />
        </div>
        <h2>智学无忧教育系统</h2>
        <h5>做最有态度、责任、良心的IT教育</h5>
      </div>
      <div class="centerBox"></div>
      <div class="rightBox">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="user">
            <el-input type="text" prefix-icon="el-icon-s-custom" v-model="user"></el-input>
          </el-form-item>

          <el-form-item prop="pass">
            <el-input type="password" prefix-icon="el-icon-lock" v-model="pass" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-checkbox v-model="checked">记住密码</el-checkbox>
          </el-form-item>

          <el-form-item>
            <el-button type="success">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: "", //用户名框
      pass: "", //密码框
      checked: true,//记住密码
      show: true
    };
  },
  methods:{
    changeBox(){
      //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
      let w = document.documentElement.offsetWidth || document.body.offsetWidth;
      console.log(w);
      if (w < 768) {
        this.show = false;
      } else {
        this.show  = true;
      }
    }
  },
  beforeMount (){
    this.changeBox();
  }
};
</script>



<style lang="less" scoped>
body {
  overflow: hidden;
}

#login {
  width: 100%;
  height: 800px;
  background: url(../assets/background.jpg) no-repeat;
  background-size: cover;
  .bcBox {
    max-width: 500px;
    height: 45%;
    margin: 0 auto;
    position: relative;
    bottom: -25%;
    box-shadow: #4e8ee6 0px 0px 10px 10px;
    border-radius: 10px;
    background: #d8ecf5;
    display: flex;
    .leftBox {
      min-width: 49%;

      .imgBox {
        width: 130px;
        height: 130px;
        margin: 40px auto;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: #ccc 0 0 5px 5px;
        }
      }
      h2 {
        color: #00937d;
        margin-bottom: 40px;
      }
      h5 {
        color: #999;
      }
    }
    .centerBox {
      // 线性渐变一条线
      width: 1px;
      background: repeating-linear-gradient(#d8ecf5, #65c23d, #00937d, #d8ecf5);
    }
    .rightBox {
      width: 50%;
      margin-top: 30px;
      text-align: left;
      div {
        margin: 15px auto;
        width: 220px;

        /deep/.el-input__prefix,
        .el-input__suffix {
          font-size: 30px;
          color: #65c23d !important;
        }
        /deep/.el-input .el-input__clear {
          font-size: 20px;
        }
        /deep/.el-input__inner {
          border: #65c23d 1px solid;
          text-indent: 15px;
          border-radius: 0;
        }
        button {
          width: 100%;
          &.el-button {
            width: 100%;
          }
        }
      }
    }
  }
}








</style>