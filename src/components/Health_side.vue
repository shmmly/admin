<template>
  <Menu :theme="skin" accordion style="height: 100%" @on-select="menuSelect">
    <template v-for="(secondMenu,index) in secondMenus">
      <Submenu :name="secondMenu.id">
        <template slot="title">
          <!--<Icon :type="item.type"></Icon>-->
          {{secondMenu.title}}
        </template>
        <template v-for="item in secondMenu.children">
          <MenuItem :name="item.id">{{item.title}}</MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "Health_side",
    data() {
      return {
        skin: 'dark',
        sideHeight: 0
      }
    },
    //这里从vuex中获取到菜单
    computed: {
      ...mapGetters([
        'secondMenus'
      ])
    },
    methods: {
      getSideHeight() {
        this.sideHeight = document.body.clientHeight
      },
      menuSelect(menuId) {
        this.$router.push('/resource')
      }
    },
    created() {
      this.getSideHeight()
    }
  }
</script>

<style lang="less">
  @import "../assets/less/Health_side";
</style>
