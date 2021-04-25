<template>
    <div class="general">
        <SliderComponent
        texto="Bienvenido al Curso de Vue con Bryan Blanco 10"
        home="true"
        ></SliderComponent>
        <div class="center">
            <section id="content">
            <h2 class="subheader">Últimos artículos</h2>

            <!--Listado articulos-->
            <div id="articles">
                <Articles :articles="articles"></Articles>
            </div>
            </section>
            <SidebarComponent></SidebarComponent>
          <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Global from '../Global'
import SliderComponent from './SliderComponent.vue'
import SidebarComponent from './SidebarComponent.vue'
import Articles from './Articles.vue'
export default{
    name: 'LastArticles',
    components: {
        SliderComponent,
        SidebarComponent,
        Articles
    },
     data(){
      return{
        url: Global.url,
        articles: null
      }
    },
    mounted(){
      this.getLastArticles();
    },
    methods: {
      getLastArticles(){
        axios.get(this.url + 'articles/true')
             .then(res => {
              if (res.data.status == 'success') {
                this.articles = res.data.articles;
                console.log(this.articles);
              }
             })
      }
    }
};
</script>