<template>
  <div id="home">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200">
        <div class="logoBox">
          <p>
            <img src="../assets/favicon1.jpg" alt="logo" />
          </p>
          <p class="logo-title">{{logoTitle}}</p>
        </div>

        <!-- 下拉菜单 -->

        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :collapse="isCollapse"
              router
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>在线测试</span>
                </template>
                <el-menu-item-group v-for="(item,i) in testing" :key="i">
                  <el-menu-item :index="item.name" @click="addTab1(item)">{{item.navItem}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>基础数据</span>
                </template>
                <el-menu-item-group v-for="(item,i) in baseData" :key="i">
                  <el-menu-item :index="item.name" @click="addTab1(item)">{{item.navItem}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>

        <!-- 下拉菜单结束 -->
      </el-aside>
      <!-- 侧边栏结束 -->

      <el-container>
        <el-header>
          <div class="nav-show" @click="navShow()">
            <i class="el-icon-caret-left"></i>
          </div>
          <!-- 头部导航栏 -->
          <el-tabs type="card" v-model="editableTabsValue" closable @tab-remove="removeTab">
            <el-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >{{item.content}}</el-tab-pane>
          </el-tabs>

          <ul class="hea-right">
            <li class="hea-portrait">
              <i class="el-icon-s-custom"></i>
            </li>
            <li>退出</li>
            <li>
              <i class="el-icon-s-custom"></i>
            </li>
            <li>中文</li>
          </ul>

          <!-- 头部导航栏结束 -->
        </el-header>

        <!-- 内容主体 -->
        <el-main>
          <router-view name="key" />
        </el-main>
        <!-- 内容主体结束 -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      logoTitle: "智学无忧教育", //logo标题
      isCollapse: false, //控制侧边栏收展
      //侧边栏内容
      testing: [
        { name: "/viewTestPaper", navItem: "老师出卷" },
        { name: "/testPaperManage", navItem: "试卷管理" },
        { name: "/makeTestPaper", navItem: "安排测试" },
        { name: "/testResult", navItem: "测试成绩" }
      ],
      baseData: [
        { name: "/classManage", navItem: "班级管理" },
        { name: "/studentManage", navItem: "学生管理" },
        { name: "/teacherManage", navItem: "老师管理" },
        { name: "/modifyPassword", navItem: "修改密码" }
      ],
      editableTabsValue: "0", //默认选中第2个
      editableTabs: [], //侧边栏二级导航添加时的数组
      barName: "", //侧边栏二级导航名
      barUrl: "", //侧边栏二级导航路由路径
      tabIndex: 1 //从第哪个下标开始
    };
  },
  methods: {
    //定义方法
    /**
     * 收展侧边栏
     * */
    navShow() {
      this.isCollapse = !this.isCollapse;
      var _this = this;
      if (this.isCollapse) {
        this.logoTitle = "";
      } else {
        setTimeout(function(){
          _this.logoTitle = "智学无忧教育";
        },500)
      }
    },
    /**
     * 侧边栏
     */
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    /**
     * 侧边栏结束
     */

    /**
     * 头部导航栏
     */
    // 添加调用

    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: this.barName,
        name: newTabName,
        urlR: this.barUrl
      });
      this.editableTabsValue = newTabName;
    },
    addTab1(targetName) {
      var navItem = targetName.navItem;
      this.barUrl = targetName.name;
      this.barName = navItem;

      for (const key in this.editableTabs) {
        console.log(this.editableTabs[key]);
        if (navItem == this.editableTabs[key].title) {
          console.log(this.editableTabs[key].name);
          this.editableTabsValue = this.editableTabs[key].name;
          return false;
        }
      }

      this.addTab();
    },
    //关闭
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }

    /**
     * 头部导航栏结束
     */
  }
};
</script>
<style lang="less" scoped>
#home {
  height: 100%;
  /**
  * 头部导航栏
  */
  .el-container {
    height: 100%;
  }
  .el-header::after {
    display: table;
    height: 0;
    clear: both;
    content: "";
  }
  .el-header {
    background-color: #fafafa;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding-left: 0;
    padding-right: 0;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: flex-start;

    /** 左边
 * 收展侧边栏按钮
 */
    .nav-show {
      height: 100%;
      max-width: 30px;
      background: #008181;
      cursor: pointer;
      i {
        &.el-icon-caret-left {
          color: #fafafa;
          font-size: 25px;
        }
      }
    }
    /** 左边
    * 可弹可关闭
    */
    /deep/.el-tabs {
      border: 0;
      width: 80%;
      min-width: 100px;
      overflow: hidden;
      padding-left: 20px;
      /deep/.el-icon-arrow-right,
      /deep/.el-icon-arrow-left {
        margin-top: 30px;
      }
      /deep/.el-tabs__nav-scroll {
        margin-top: 15px;
        line-height: 45px;
        height: 45px;
        /deep/.el-tabs__item.is-active {
          border-bottom: 2px solid #409eff;
        }
      }
    }
    /**
* 右边有退出登录的那排
**/
    .hea-right {
      width: 200px;
      height: 100%;
      flex: none;
      li {
        float: right;
        margin-left: 20px;
        line-height: 60px;
        cursor: pointer;
      }
      .hea-portrait {
        .el-icon-s-custom {
          line-height: 40px;
          border-radius: 50%;
          text-align: center;
          height: 40px;
          width: 40px;
          color: #fff;
          background: #ccc;
          font-size: 20px;
        }
      }
    }
  }
  /**
  * 头部导航栏结束
  */

  /**
  * 侧边栏样式
  */
  .el-aside {
    background-color: #545c64;
    color: #fafafa;
    text-align: center;
    line-height: 200px;
    display: flex;
    /**
* logo+标题
*/
    .logoBox {
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: #ffeb3a;
      display: flex;
      text-align: center;
      p {
        flex: 1;
        img {
          /**
* 图片和文字一起的时候，图片会影响盒子的垂直居中
*/
          height: 35px;
          width: 35px;
          border-radius: 50%;
          vertical-align: middle;
          border: #008181 1px solid;
          box-shadow: #008181 0 0 8px 2px;
        }
      }
      .logo-title {
        flex: 2;
        height: 100%;
        color: #008181;
        font-weight: 800;
      }
    }

    /**
* logo+标题结束
*/

    /**
* 下拉导航
*/
    .tac {
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        min-height: 400px;
      }
      /deep/.el-col-12 {
        width: 100%;
        text-align: left;
        border: 0;
        .el-icon-menu {
          color: #eee;
        }
        /deep/.el-menu {
          border: 0;
        }
      }
    }
  }
  /**
* 侧边栏样式结束
*/

  /**
* 内容主体
*/
  .el-main {
    background-color: #fafafa;
    color: #333;
    .h-title {
      text-align: left;
      font-size: 16px;
    }
  }
  /**
  * 内容主体结束
  */
}
</style>