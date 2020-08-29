<template>
  <div>
    <CardsList
      title="🏆 Logros!"
      :items="posts"
    >
    </CardsList>
  </div>
</template>

<script>
import CardsList from "./CardsList"

export default {
  name: 'GoalsList',
  components:{
    CardsList
  },
  data(){
    return{
      posts:[
        {
          title: "¿La PC sirve al código o el código sirve a la PC?",
          text: "Introducción a las especificaciones, una manera más óptima de aproximarnos a un programa.",
          url: "https://bit.ly/3f6IBko",
          redirectionInfo: 'dev.to',
          tags: ['#introducción', '#teoría', '#ciencias', '#dev.to', '#computación', '#matemática'],
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
