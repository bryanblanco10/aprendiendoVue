<template>
    <div class="general">
        <div class="center">
          <section id="content">
            <h1 class="subheader" v-if="articles">Articulos encontrados</h1>
             <h1 class="subheader" v-else>Sin resultados</h1>
              <!--Listado articulos-->
            <div id="articles" v-if="articles">
                <Articles :articles="articles"></Articles>
            </div>
            <div v-else>
              <h2>No hay articulos que coincidan con tu busqueda</h2>
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
import SidebarComponent from './SidebarComponent.vue'
import Articles from './Articles.vue'
export default{
    name: 'Search',
    components: {
        SidebarComponent,
        Articles
    },
    data(){
      return{
        url: Global.url,
        articles: null,
        searchString: null
      }
    },
    mounted(){
      this.searchString = this.$route.params.searchString;
      this.getArticlesBySearch(this.searchString);
    },
    methods: {
      getArticlesBySearch(searchString){
        axios.get(this.url + 'search/' + searchString)
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