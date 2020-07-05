<template>
  <div id="app">
    <div class="image"></div>
    <div class="main">
      <Logo class="logo"></Logo>
      <p class="hello">
        💻 Web developer <br>
        💚 Co-founder <a href="https://vuecba.com" target="_blank">@VueCba</a><br>
        ✍️ Escribo cosas en <a href="https://dev.to/fecocode" target="_blank">dev.to</a><br>
        🔬 Amante de la ciencia <br>
        😄 Pelado
      </p>
      <PostsList class="posts"></PostsList>
      <ProjectsList class="posts"></ProjectsList>
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo"
import PostsList from "./components/PostsList"
import ProjectsList from "./components/ProjectsList"

export default {
  name: 'app',
  components:{
    Logo,
    PostsList,
    ProjectsList,
  }
}
</script>

<style>

@font-face {
  font-family: "logofeco";
  src: url("assets/fonts/texgyrecursor-regular.otf") format("otf");
}

html{
  width: 100%;
  margin: 0;
  padding: 0;
}

body{
  position:relative;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  width: 100%;
}

hr{
  width: 100%;
  margin: 1em auto;
  background: #ddd;
}


#app {
  font-family: "logofeco" !important;
  display: flex;
  align-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}

.image{
  background-image: url("assets/vectors/main.svg");
  background-size: auto 100%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 45%;
  margin:0;
  padding: 0;
}

.main{
  height: 100vh;
  width: 55%;
  position: relative;
  overflow-y: scroll;
}

.hello{
  margin-top: 1.5em;
  margin-left: 1em;
}

.posts{
  margin-top: 1em;
}


@media only screen and (orientation: portrait){
  #app{
    flex-direction: column-reverse;
    justify-items: center;
    width: 100%;
    margin:0px !important;
  }
  .logo{
    margin-left: .2em;
  }
  .main{
    width: 100%;
    margin: auto;
    position: relative;
    overflow-y: visible;
    margin:0px !important;
  }
  .image{
    display: none !important;
  }
}


</style>
