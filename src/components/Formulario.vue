<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Formulario</h2>
                <form class="mid-form" @submit.prevent="mostrarUsuario()">
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" v-model="user.nombre" />
                        <div v-if="submitted && !$v.user.nombre.required">
                            El campo es requerido.
                        </div>
                         <div v-if="submitted && !$v.user.nombre.minLength">
                            Este campo debe tener mas caracteres.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" v-model="user.apellidos"/>
                        <div v-if="submitted && !$v.user.apellidos.required">
                            El campo es requerido.
                        </div>
                        <div v-if="submitted && !$v.user.apellidos.minLength">
                            Este campo debe tener mas caracteres.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="bio">Biografia</label>
                        <textarea name="bio" v-model="user.biografia"></textarea>
                        <div v-if="submitted && !$v.user.biografia.required">
                            El campo es requerido.
                        </div>
                        <div v-if="submitted && !$v.user.biografia.minLength">
                            Este campo debe tener mas caracteres.
                        </div>
                    </div>
                    <div class="form-group radibuttons">
                        <input type="radio" name="genero" value="hombre" checked v-model="user.genero" /> Hombre
                        <input type="radio" name="genero" value="mujer" v-model="user.genero" /> Mujer
                        <input type="radio" name="genero" value="otro" v-model="user.genero" /> Otro
                    </div>
                    <div class="clearfix"></div>
                    <input type="submit" value="Enviar" class="btn btn-success" />
                </form>
                <div class="datos" v-if="user.nombre && user.apellidos">
                    <h3>{{user.nombre + ' ' + user.apellidos}} </h3>
                </div>
            </section>
            <SidebarComponent></SidebarComponent>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators"
import SidebarComponent from './SidebarComponent.vue'
export default{
    name: 'Formulario',
    components: {
        SidebarComponent
    },
    validations:{
        user:{
            nombre: {
                required,
                minLength: minLength(2)
            },
              apellidos: {
                required,
                minLength: minLength(2)
            },
              biografia: {
                required,
                minLength: minLength(10)
            }
        }
    },
    data(){
        return{
            submitted: false,
            user:{
                nombre: '',
                apellidos: '',
                biografia: '',
                genero: ''
            }
        }
    },
    methods:{
        mostrarUsuario(){
            console.log(this.user);
            this.submitted = true;

            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            }

            alert("Validacion pasada");
        }
    }
};
</script>