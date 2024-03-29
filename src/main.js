import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'moment/locale/es'
import Blog from './components/Blog.vue'
import Formulario from './components/Formulario.vue'
import Pagina from './components/Pagina.vue'
import LastArticles from './components/LastArticles.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import MiComponente from './components/MiComponente.vue'
import Peliculas from './components/Peliculas.vue'
import Search from './components/Search.vue'
import Redirect from './components/Redirect.vue'
import Article from './components/Article.vue'
import CreateArticle from './components/CreateArticle.vue'
import EditArticle from './components/EditArticle.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment, {
	moment
});

const routes = [
	{path: '/home', component: LastArticles},
	{path: '/', component: LastArticles},
	{path: '/blog', component: Blog},
	{path: '/crear-articulo', name: 'create',component: CreateArticle},
	{path: '/editar-articulo/:id', name: 'editar',component: EditArticle},
	{path: '/articulo/:id', name: 'article', component: Article},
	{path: '/formulario', component: Formulario},
	{path: '/mi-component', component: MiComponente},
	{path: '/busqueda/:searchString', component: Search},
	{path: '/redirect/:searchString', component: Redirect},
	{path: '/peliculas', name: 'peliculas', component: Peliculas},
	{path: '/pagina/:id?',name: 'pagina', component: Pagina}, //con el ? es opcional el parametro
	{path: '*', component: ErrorComponent}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
