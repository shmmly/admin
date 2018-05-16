<template>
  <health-table :data1="data" :columns1="columns"
                :totalNum="totalNum" :currentNum="currentNum"
                @on-pageChange="pageChange"></health-table>
</template>

<script>
  import healthTable from '../Health_table'
  import getResource from '../../api/resource'

  export default {
    name: "Health_resourceInfo",
    components: {
      healthTable
    },
    data() {
      return {
        data: [],
        totalNum: 100,
        currentNum: 1,
        columns: [
          {
            key: 'id',
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '名称',
            key: "text",
            render: (h, params) => {
              let children = params.row.children
              return h('Tree', {
                props: {
                  data: children
                }
              })
            }
          },
          {
            title: '资源类别',
            key: 'type',
            render: (h, params) => {
              let type = ''
              type = params.row.type === '0' ? '菜单' : '按钮'
              return h('div', {}, type)
            }
          },
          {
            title: "资源地址",
            key: 'url'
          }
        ]
      }
    },
    methods: {
      pageChange(value) {
        //  根据新的页码值 重新获取数据
      },
      async getData() {
        this.data = await getResource()
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
