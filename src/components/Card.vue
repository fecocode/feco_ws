<template>
  <div
    class="card-container"
    @click="goTo(url)"
    >
    <h1><b>{{`#${index} ${title}`}}</b></h1>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name:"Card",
  props:{
    title: String,
    text: String,
    url: String,
    index: Number,
  },
  methods:{
    goTo(url){
      window.open(url,'_blank');
    }
  }
}
</script>

<style scoped>
  .card-container{
    margin: 1em;
    cursor: pointer;
    padding: 1em;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #ffffffdd
  }
  .card-container:hover{
    background: #f4fdfbdd;
  }
  p{
    margin: .5em 0;
  }
</style>
