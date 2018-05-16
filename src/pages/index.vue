<template>
  <div class="main">
    <div class="main-head">
      <health-header title="健康监控平台" auth="北斗天汇" :topMenu="topMenu"/>
    </div>
    <div class="main-body">
      <div class="main-body-side">
        <health-side/>
      </div>
      <div class="main-body-right">
        <health-tab/>
      </div>
    </div>


  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import HealthHeader from '@/components/Health_header'
  import HealthSide from '@/components/Health_side'
  import HealthTab from '@/components/Health_tab'

  export default {
    name: "index",
    components: {
      HealthHeader,
      HealthSide,
      HealthTab
    },
    async beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.dispatch('getMenus')
      })
    },
    computed: {
      ...mapGetters([
        'menu'
      ]),
      topMenu: function () {
        let obj = []
        this.menu.forEach(item => {
          obj.push({
            id: item.id,
            title: item.title
          })
        })
        return obj
      },
      secondMenu: function () {

      }

    }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/index";
</style>
