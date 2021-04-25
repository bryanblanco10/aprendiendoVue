<template>
	<article class="article-item">
        <div class="image-wrap">
            <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title" style="width: 100%; height: 100%;" />
        </div>

        <h2>{{pelicula.title}}</h2>
            <span class="date" :class="{
                yeargreen: pelicula.year >= 2019,
                yearred: pelicula.year <= 2017
             }">
                {{pelicula.year}}
            </span>
            <a href="#">Leer más</a>
            <input type="button" value="Marca como favorita"
                @click="pasarFavoritaAlPadre(pelicula)"
            >
            <div class="clearfix"></div>
    </article>
</template>
<script>
export default{
	name: 'Pelicula',
	props:['pelicula'],
	methods:{
        //Pasar variable al Padre
       pasarFavoritaAlPadre(pelicula){
        this.$emit('favorita', pelicula);
       }
    }
};
</script>