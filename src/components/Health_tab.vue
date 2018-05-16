<template>
  <Tabs v-model="tapValue" type="card">
    <TabPane v-for="tab in tabs" :key="tab" :label="title">
      <router-view name="rightBody"/>
    </TabPane>
  </Tabs>
</template>

<script>
  export default {
    name: "Health_tab",
    data() {
      return {
        tabs: 2,
        title: 'ceshi ',
        tapValue: 0
      }
    }
  }
</script>

<style scoped>

</style>
