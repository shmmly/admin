<template>
  <Row class-name="bdth_header" :style="{backgroundColor:bgColor}"
       type="flex" align="middle">
    <Col span="2" class-name="middle">
      <img src="../assets/logo.png" alt="北斗天汇">
    </Col>
    <Col span="2">{{title}}</Col>
    <Col span="1" class-name="middle" @click.native="handleChange"><i :class=btnClass></i></Col>
    <Col span="2" class-name="middle menuclick" v-for="item in topMenu" :key="item.id">
      <i class="fa fa-hand-pointer-o"></i>
      <p @click="handlerMenu(item.id)">{{item.title}}</p>
    </Col>
    <Col span="2" offset="5">
      <div class="right-border">
        <i class="fa fa-user"></i>
        <span>{{auth}}</span>
      </div>
    </Col>
    <Col span="2">
      <div class="right-border">
        <i class="fa fa-cog"></i>
        <Dropdown transfer>
          设置
          <Icon type="arrow-down-b"></Icon>
          <DropdownMenu slot="list">
            <DropdownItem>个人信息</DropdownItem>
            <DropdownItem>修改密码</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Col>
    <Col span="2">
      <div class="right-border">
        <i class="fa fa-cog"></i>
        <Dropdown transfer @on-click="handleColor">
          主题
          <Icon type="arrow-down-b"></Icon>
          <DropdownMenu slot="list">
            <DropdownItem name="1">
              <i class="fa fa-tree" :style={color:greenTree}></i>&nbsp&nbsp
              默认主题
            </DropdownItem>
            <DropdownItem name="2">
              <i class="fa fa-tree" :style="{color:redTree}"></i>&nbsp&nbsp
              红色主题
            </DropdownItem>
            <DropdownItem name="3">
              <i class="fa fa-tree" :style="{color:blueTree}"></i>&nbsp&nbsp
              蓝色主题
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Col>
    <Col span="2">
      <div @click="logout" class="middle">
        <i class="fa fa-sign-out"></i>
        <span>注销</span>
      </div>
    </Col>


  </Row>
</template>

<script>
  export default {
    name: "Health_header",
    data() {
      return {
        bgColor: '#00a65a',
        btnClass: 'fa fa-chevron-circle-left',
        redTree: '#dd4b39',
        greenTree: '#00a65a',
        blueTree: '#3c8dbc'
      }
    },
    props: {
      title: {
        required: true,
        type: String
      },
      auth: {
        required: true,
        type: String
      },
      topMenu: {
        required: true,
        type: Array
      }
    },
    methods: {
      //注销退出
      logout() {
      },
      handleChange() {
        if (this.btnClass === 'fa fa-chevron-circle-left') {
          this.btnClass = 'fa fa-chevron-circle-right'
        } else {
          this.btnClass = 'fa fa-chevron-circle-left'
        }
      },
      handleColor(name) {
        if (name === '1') {
          this.bgColor = this.greenTree
        } else if (name === '2') {
          this.bgColor = this.redTree
        } else if (name === '3') {
          this.bgColor = this.blueTree
        }
      },
      //切换子菜单
      handlerMenu(id) {
        console.log(id)
        this.$store.commit('setSecondMenu', {menuId: id})
      }

    },
    created() {
      this.$store.commit('setSecondMenu', {menuI: 1})
    }

  }
</script>

<style scoped lang="less">
  @import "../assets/less/Health_header";
</style>
