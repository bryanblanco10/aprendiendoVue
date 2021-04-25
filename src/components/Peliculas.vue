<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h1 class="subheader">Peliculas</h1>
                <div class="mis-datos" v-if="misDatos">
                    <p v-html="misDatos"></p>
                    <p>{{web | mayusculas | concatenaYear('Este es el mejor año')}}</p>
                </div>
                <div class="favorita" v-if="favorita">
                    La pelicula marcada es:
                   <h3>{{favorita.title}}</h3>
                </div>
                <!--Listado articulos-->
                <div id="articles">
                    <div v-for="pelicula in peliculasMayusculas" v-bind:key="pelicula.title" >
                        <Pelicula
                            :pelicula="pelicula"
                            @favorita="hallegadolapeliculafavorita"
                        ></Pelicula>
                    </div>
                </div>
            </section>
            <SidebarComponent></SidebarComponent>
          <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
import Pelicula from './Pelicula.vue';
import SidebarComponent from './SidebarComponent.vue'
export default{
    name: 'Peliculas',
    components:{
        Pelicula,
        SidebarComponent
    },
    methods:{
        //Usando la variable pasada del hijo
        hallegadolapeliculafavorita(favorita){
            this.favorita = favorita;
        }
    },
    computed:{
        peliculasMayusculas(){
            var peliculaMod = this.peliculas;
            for (var i = 0; i < this.peliculas.length; i++) {
                peliculaMod[i].title = peliculaMod[i].title.toUpperCase();
            }
            return peliculaMod;
        },
        misDatos(){
            return this.nombre + ' ' + this.apellidos + '<br>' + '<strong>Sitio web:</strong> ' + this.web;
        }
    },
    filters:{
        mayusculas(value){
            return value.toUpperCase();
        },
        concatenaYear(value, message){
            var date = new Date();
            return value + ' ' +date.getFullYear()+ ' ' + message;
        }
    },
    data(){
        return{
            nombre: 'Bryan de Jesus',
            apellidos: 'Blanco Villero',
            web: 'bryan10.com.co',
            favorita: null,
            peliculas: [
                {title:'Batman vs Superman', year: 2017, image:'https://4.bp.blogspot.com/-SGjUrESCfMI/VvPnkvT38TI/AAAAAAAAI5g/fpMu_-EHY_ITxFg_AvzU_y1bnIi4-GD8A/s1600/45228.jpg'},
                {title:'Spiderman 3', year: 2019, image:'https://images-na.ssl-images-amazon.com/images/I/51tQzS5jp1L._SY445_.jpg'},
                {title:'Titanic', year: 1997, image:'https://i.pinimg.com/originals/45/e4/74/45e4742ebb8f61ebe34c4e3234bb88e9.jpg'},
                {title:'Silicon Valley', year: 2020, image:'https://i.pinimg.com/originals/89/45/46/894546c1e0a7c4b36211b0a37b825b1e.jpg'}
            ]
        }
    }
};
</script>