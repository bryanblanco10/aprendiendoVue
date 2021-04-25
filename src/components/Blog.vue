<template>
    <div class="general">
        <div class="center">
          <section id="content">
            <h1 class="subheader">Blog</h1>
              <!--Listado articulos-->
            <div id="articles" v-if="articles">
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
import SidebarComponent from './SidebarComponent.vue'
import Articles from './Articles.vue'
export default{
    name: 'Blog',
    components: {
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
      this.getArticles();
    },
    methods: {
      getArticles(){
        axios.get(this.url + 'articles')
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