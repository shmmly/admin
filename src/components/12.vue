<template>
  <!--这里渲染img的时候使用v-for-->
  <img src="url" alt="" v-for="url in item.avatar">
</template>

<script>
  export default {
    name: "12",
    methods: {
      gender() {
        axios.get(url).then(res => {
          if (res.code === 200) {
            res.body.forEach(item => {
              let avatars = item.avatar.split(',')
              let urls = []
              avatars.forEach(item => {
                urls.push(api.imgview(item))
              })
              //  这里的urls就是所有图片的地址
              // 这个时候 对象里面的avatar就是一个数组
              item.avatar = urls
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
