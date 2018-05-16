<template>
  <div>
    <Table :data="data1" :columns="columns1" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float:right;">
        <Page :total="totalNum" :current="currentNum" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Health_table",
    props: {
      data1: {
        type: Array,
        required: true
      },
      columns1: {
        type: Array,
        required: true
      },
      totalNum: {
        type: Number,
        required: true
      },
      currentNum: {
        type: Number,
        required: true
      }
    },
    methods: {
      changePage(index) {
        this.$emit('on-pageChange', index)
      }
    },
    watch: {
      currentNum: function () {

      }
    }
  }
</script>

<style scoped>

</style>
