<template>
  <div class="downloader">
    <div class="downloader-container">
      <div class="downloader__avatar">
      </div>
      <h1>
        {{documentData.welcome}}
      </h1>
      <p>
        {{documentData.sharedText}}<br><br>
        <small v-if="documentData.name"><span>Nombre:</span> {{documentData.name}}<br></small>
        <small v-if="documentData.created"><span>Creación:</span> {{documentData.created}}<br></small>
      </p>
      <a class="download__button" :href="documentData.button.link" :download="documentData.exist">
        {{documentData.button.text}}
      </a>
    </div>
  </div>
</template>

<script>
import { searchDocument } from './utils/downloads'

export default {
  name: 'Downloads',
  computed: {
    documentData(){
      const id = this.$route.params.id;
      const data = searchDocument(id);
      if(data !== undefined){
        return {
          exist: true,
          welcome: `¡Hola ${data.receiver}!`,
          sharedText: 'Te comparto el siguiente documento',
          name: data.name,
          created: data.created,
          button: {
            text:'Descargar',
            link: data.path,
          },
        }
      }

      return {
        exist: false,
        welcome: `¡404!`,
        sharedText: 'No se encontró el documento especificado',
        button: {
          text:'Visitar sitio',
          link: '/',
        }
      }
    }
  },
}
</script>

<style scoped>

  .downloader{
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
    background: #f1f1f1;
  }
  .downloader-container{
    margin: auto;
    height: 93vh;
    width: 40%;
    border-radius: 57px;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: center;
    padding: 50px 0px;
    box-shadow:  5px 5px 10px #cdcdcd,
                -5px -5px 10px #ffffff;

  }
  .downloader__avatar{
    width: 150px;
    height: 150px;
    border-radius: 150px;
    margin: auto;
    background-image: url('./assets/vectors/main.svg');
    background-size: 230%;
    background-position-y: -85px;
    background-position-x: -65px;
    box-shadow:  5px 5px 10px #cdcdcd,
                -5px -5px 10px #ffffff;
  }

  .download__button{
    cursor: pointer;
    width: fit-content;
    background: #0c3f6a;
    color: #fff;
    padding: 20px 50px;
    margin: auto;
    border-radius: 20px;
    transition: .5s;
    box-shadow:  5px 5px 10px #cdcdcd,
                -5px -5px 10px #ffffff;
  }
  .download__button:hover{
    transform: scale(1.03);
    box-shadow:  15px 15px 30px #cdcdcd,
                -15px -15px 30px #ffffff;
  }
  h1{
    margin: auto;
    font-size: 35px;
    color: #0c3f6a;
  }
  p{
    margin: auto;
    color: #555;
    text-align: center;
  }
  span{
    color: #036a93
  }

  @media only screen and (orientation: portrait){
    .downloader-container{
      width: 90%
    }
  }

</style>
