<template>
    <div class="general">
        <SliderComponent texto="Pagina de prueba"></SliderComponent>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Pagina de prueba</h2>
                <h3>{{ id_desde_url }}</h3>
                <button @click="redirigirAlBlog()">Redirigir</button>
            </section>
             <SidebarComponent></SidebarComponent>
          <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
import SliderComponent from './SliderComponent.vue'
import SidebarComponent from './SidebarComponent.vue'
export default{
    name: 'Pagina',
    components: {
        SidebarComponent,
        SliderComponent
    },
    mounted(){
        this.id_desde_url = this.$route.params.id;
    },
    data(){
        return{
            id_desde_url : null
        }
    },
    methods:{
        redirigirAlBlog(){
            this.$router.push('/blog');
        }
    }
};
</script>