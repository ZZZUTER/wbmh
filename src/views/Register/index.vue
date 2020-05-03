<template>
  <div class="page-register">
    <div class="view_login">
      <div class="nav_layout login_nav">
        <div class="com_nav white_nav">
          <div class="nav_content">
            <div class="nav_left" @click="$router.back()">
              <div class="back_btn l_con"></div>
            </div>
            <div class="nav_middle"></div>
            <router-link to="/login">
              <div class="nav_right">
                <span class="reg_btn">立即登录</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="form_bg">
        <div class="form_logo"></div>
        <div class="form_outer">
          <div class="input_outer input_unfocus">
            <input type="email" placeholder="请输入邮箱" class="comic_input" v-model="Email" />
          </div>
          <div class="input_outer input_unfocus">
            <input
              type="password"
              placeholder="请输入密码(8-16位数字or英文)"
              maxlength="16"
              class="comic_input"
              v-model="Passsword"
            />
          </div>
          <div class="input_outer input_unfocus">
            <input type="text" placeholder="请输入用户名" class="comic_input" v-model="Username" />
          </div>
          <div class="button_header form_btn disable" type="button">
            <el-button :plain="true" @click="goRegister(Email, Passsword, Username)">注册</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',

  data () {
    return {
      Email: '',
      Passsword: '',
      Username: ''
    }
  },

  methods: {
    goRegister (Email, Passsword, Username) {
      var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!Email) {
        this.$message.error('请输入邮箱')
        return
      }
      if (!regEmail.test(Email)) {
        this.$message.error('请输入正确邮箱')
        return
      }
      if (!Passsword) {
        this.$message.error('请输入密码')
        return
      }
      if (!Username) {
        this.$message.error('请输入用户名')
        return
      }
      this.$axios
        .post('/user/register', {
          email: Email,
          password: Passsword,
          nickname: Username
        })
        .then(data => {
          this.$message.success(data.data.msg)
          this.$router.push('/login')
        })
    }
  },

  created () {}
}
</script>

<style lang="scss" sscoped>
.page-register {
  .view_login {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .com_nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: none;
  }
  .nav_content {
    flex-direction: row;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    z-index: 1;
    height: 44px;
    .nav_left {
      float: left;
      width: 44px;
      height: 44px;
      background: url(../../assets/icon/back2.png);
    }
    .nav_right {
      float: right;
      width: 56px;
      line-height: 44px;
      height: 44px;
      margin-right: 20px;
      color: #fff;
      font-size: 14px;
    }
  }
  .form_bg {
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    background-image: url(../../assets/icon/register.png);
    background-size: cover;
    height: 516px;
    overflow: hidden;
  }
  .form_outer {
    padding: 0px 32px 0px;
    border-radius: 8px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px 0;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    background: #fff;
    overflow: hidden;
    width: 313px;
    box-sizing: border-box;
    margin: 244px auto;
    .form_bg .input_outer {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    .input_outer {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-top: 16px;
      padding: 0 8px;
      width: 250px;
      height: 50px;
      border: 1px solid #efefef;
      border-radius: 4px;
      overflow: hidden;
      .comic_input {
        font-size: 14px;
        height: 46px;
        line-height: 22px;
      }
      input {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        line-height: 46px;
        font-size: 14px;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
  }
  .reset_btn {
    margin-top: 8px;
    padding-right: 8px;
    line-height: 24px;
    font-size: 14px;
    color: #634fa4;
    text-align: right;
  }
  .form_btn {
    margin: 16px auto 0;
    margin-bottom: 10px;
    .disable button {
      background: #ccc;
      -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 3px 4px 0;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
    }
    .el-button {
      width: 231px;
      height: 48px;
      font-size: 14px;
      border-radius: 4px;
      background: #f75d79;
    }
    .is-plain:hover {
      background: #f75d79;
      border-color: #409eff;
      color: #fff;
    }
    button {
      display: block;
      margin: 0 auto;
      outline: none;
      border: none;
      font-size: 14px;
      text-align: center;
      border-radius: 4px;
      color: #fff;
      white-space: nowrap;
      background: #f75d79;
    }
  }
}
</style>
