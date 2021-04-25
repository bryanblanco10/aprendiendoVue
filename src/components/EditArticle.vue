<template src="./CreateArticle.html"></template>
<script>
import SidebarComponent from './SidebarComponent.vue'
import axios from 'axios'
import Global from '../Global'
import {required} from 'vuelidate/lib/validators'
import Article from '../models/Article'
import swal from 'sweetalert'
export default{
    name: 'EditArticle',
    components: {
        SidebarComponent
    },
    data(){
      return{
        article: new Article('','', null, ''),
        url: Global.url,
        file: '',
        submitted: false,
        isEdit: true
      }
    },
    validations:{
      article: {
        title:{
          required
        },
        content:{
          required
        }
      }
    },
    mounted(){
      var articleId = this.$route.params.id;
      this.getArticle(articleId);
    },
    methods:{
      getArticle(articleId){
        axios.get(this.url + 'article/' + articleId).then(res => {
            if (res.data.status == 'success') {
              this.article = res.data.article;
            }
        })
      },
      save(){
        this.submitted = true;
        var articleId = this.$route.params.id;
        this.$v.$touch();
        if (this.$v.$invalid) {
          return false;
        }else{
          axios.put(this.url + 'article/' + articleId, this.article)
             .then(res => {
                if (res.data.status == 'success') {
                  //subida de archivo
                  //En caso de que se guarde el articulo con imagen
                  if (this.file != null && this.file != undefined && this.file != '' ){
                    const formData = new FormData(); //Formulario ficticio
                    //Añadir campo con el nombre del ficheo
                    formData.append("file0", this.file, this.file.name);
                    //Obtener el id
                    var articleId = res.data.article._id;
                    //Guardar imagen
                    axios.post(this.url + 'upload-image/' + articleId, formData)
                         .then(res => {
                            if (res.data.article) {
                              swal(
                                "Artículo Editado",
                                "El artículo se ha editado correctamente",
                                "success"
                                );
                              this.article = res.data.article;
                                //Redireccionamiento
                              this.$router.push('/articulo/' + this.article._id);
                            }else{
                               swal(
                                "Edición de Articulo Fallida",
                                "El artículo no se ha editado",
                                "error"
                              );
                            }
                         })
                         .catch(error => {
                             console.log(error);
                         })
                  }else{
                     swal(
                        "Artículo Editado",
                        "El artículo se ha editado correctamente",
                        "success"
                     );
                    this.article = res.data.article;
                       //Redireccionamiento
                    this.$router.push("/articulo/"+this.article._id);
                  }
                }
             }).
             catch(error => {
              console.log(error);
             })
        }
      },
      fileChange(){
        //Recoger el fichero
        this.file = this.$refs.file.files[0];
        console.log(this.file);
      }
    }
};
</script>