<template>
  <div>
    <h1><b>✍️ Posts!</b></h1>
    <Card v-for="(post,index) in posts" :key="`post-${index}`"
      :title="post.title"
      :text="post.text"
      :url="post.url"
      :index="posts.length - index"
    >
    </Card>
  </div>
</template>

<script>
import Card from "./Card"

export default {
  name: 'PostsList',
  components:{
    Card
  },
  data(){
    return{
      posts:[
        {
          title: "¿La PC sirve al código o el código sirve a la PC?",
          text: "¿Especificaciones? ¿Qué son? Sin duda una manera más óptima de aproximarnos a un programa.",
          url: "https://bit.ly/3f6IBko"
        },
      ]
    }
  }
}
</script>

<style scoped>
  h1{
    margin-left: 1em;
    font-size: 1.2em;
  }
</style>
