<template>
  <div>
    <CardsList
      title="🚀 Proyectos!"
      :items="projects"
    >
    </CardsList>
  </div>
</template>

<script>
import CardsList from "./CardsList"

export default {
  name: 'Projects',
  components:{
    CardsList
  },
  data(){
    return{
      projects:[
        {
          title: "feco_ws",
          text: "Repositorio de este sitio web",
          url: "https://github.com/fecocode/feco_ws",
          redirectionInfo: 'github.com',
          tags: ['#html','#javascript','#vue.js','#css','#babel'],
          star: true,
        },
        {
          title: "meli-frontend-challenge",
          text: "Desafío front-end de Mercado Libre. Consiste en construir un cuadro de búsqueda y la visualización de sus resultados.",
          url: "https://github.com/fecocode/meli-frontend-challenge",
          redirectionInfo: 'github.com',
          tags: ['#node.js','#express','#javascript','#react','#webpack','#babel','#sass'],
          star: true,
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
