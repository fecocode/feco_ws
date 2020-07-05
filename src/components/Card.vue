<template>
  <div
    class="card-container"
    @click="expand=!expand"
    >
    <div class="card-title">
      <span class="card-title-text">
        <label v-if="star">⭐ </label>
        <b>{{ index ? `#${index} ${title}` : title }}</b>
      </span>
      <b-button
        :icon-right="expand ? 'open-in-new' : 'arrow-down'"
        class="card-button"
        type="is-dark"
        size="is-small"
        tag="button"
        rounded
        :outlined="!expand"
        @click.stop="expand ? goTo(url): expand=true"
        >
      </b-button>
    </div>
    <transition name="fade">
      <div class="card-content" v-if="expand">        
        <div class="card-tags" v-if="tags && tags.length">
          <b-tag class="tag" type="is-light" v-for="(tag,index) in tags" :key="`tag-${index}`">{{tag}}</b-tag>
        </div>
        <hr>
        <p>{{text}}</p>
        <hr>
        <div class="card-redirection-info" v-if="redirectionInfo && redirectionInfo !== ''">
          <span>
            <b>Click/Tap en 
            <b-icon
                icon="open-in-new"
                type="is-dark"
                size="is-small">
            </b-icon>
            </b> para verlo en <b>{{redirectionInfo}}</b>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:"Card",
  props:{
    title: String,
    text: String,
    url: String,
    redirectionInfo: String,
    index: Number,
    tags: Array,
    star: Boolean,
  },
  data(){
    return{
      expand: false,
    }
  },
  methods:{
    goTo(url){
      if(this.expand)
        window.open(url,'_blank');
      else
        this.expand = true;
    },
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
    background: #ffffffdd;
  }
  .card-container:hover{
    background: #f4fdfbdd;
    box-shadow: 0px 0px 3px #31a8ae55;    
  }
  p{
    margin: 1em 0;
    font-size: .85em;
  }
  .card-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-title-texts{
    max-width:95%;
    margin-right: 1.5em;
  }
  .card-button{
    min-width:4%;
  }
  .card-content{
    margin: 0;
    padding: 0;
  }
  .card-tags{
    padding: .5em 0;
  }
  .tag{
    margin: 0 .2em;
  }
  .card-redirection-info{
    margin: 1em 0 0 0;
    font-size: .7em;
  }
  hr{
    background: #eee;
    margin: .5em 0;
  }
</style>
