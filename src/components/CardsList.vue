<template>
  <div>
    <hr>
    <div class="list-title">
      <h1><b>{{title}}</b></h1>
      <div class="search-container">
        <transition name="fade">
          <b-input 
            v-model="search"
            type="is-light"
            rounded
            size="is-small"
            :placeholder="`Buscar en ${cleanTitle}`"
            class="search-input"
            v-if="searchActive"
            >
          </b-input>
        </transition>
        <b-button
          :icon-left="searchActive ? 'close' : 'magnify'"
          class="card-button"
          type="is-text"
          size="is-small"
          tag="button"
          rounded
          @click.stop="searchActive=!searchActive"
          >
        </b-button>
      </div>
    </div>
    <transition name="fade">
      <div class="empty-search" v-if="paginatedItems.length === 0">
        <span>🤔 No se encontraron {{cleanTitle}}</span>
      </div>
    </transition>
    <Card v-for="(item,index) in paginatedItems" :key="`${title}-${index}`"
      :title="item.title"
      :text="item.text"
      :url="item.url"
      :redirectionInfo="item.redirectionInfo"
      :index="showNumber ? items.length - index: null"
      :tags="item.tags"
      :star="item.star"
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
  props:{
    items: Array,
    title: String,
    showNumber: Boolean,
  },
  data(){
    return{
      search: '',
      searchActive: false,
    }
  },
  methods:{
    normalize(str){
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
  },
  computed:{
    cleanTitle(){
      return this.title.slice(3,-1);
    },
    normalizedSearch(){
      return this.searchActive ? this.normalize(this.search) : '';
    },
    tagGroups(){
      const response = {};

      // Build Tags Object
      this.items.forEach(item=>{
        const currentTags = Object.keys(response)

        item.tags.forEach(tag=>{
          const normalizedTag = this.normalize(tag).slice(1);
          if(currentTags.includes(normalizedTag)){
            response[normalizedTag]['items'].push(item);
          }else{
            response[normalizedTag] = {
                title: normalizedTag,
                items:[item]
            }
          }
        })
      })

      return response
    },
    itemsToShow(){

      let response = [];

      if(this.normalizedSearch.length < 2){
        return this.items;
      }
      const regExp = new RegExp(`.*${this.normalizedSearch}.*`);

      Object.keys(this.tagGroups).forEach(tag => {  
        if(tag.match(regExp)){
          response = response.concat(this.tagGroups[tag].items);
        }
      })

      response = response.concat(this.items.filter(item=>{
        return this.normalize(item.title).match(regExp);
      }))

      const titles = []
      return response.filter(item=>{
        const includes = titles.includes(item.title);
        if(!includes){
          titles.push(item.title);
        }
        return !includes;
      })

    },
    paginatedItems(){
      return this.itemsToShow.slice(0,4)
    }
  }
}
</script>

<style scoped>
  h1{
    font-size: 1.2em;
  }
  .list-title{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
  }
  .search-container{
    display:flex;
    align-items: center;
    justify-content: flex-end;
  }
  .search-input{
    width: 70%;
    margin: .2em;
  }
  .empty-search{
    width: 100%;
    text-align: center;
    padding:2em 0;
  }
</style>
