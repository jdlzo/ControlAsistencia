import {createRouter,createWebHistory} from "vue-router";

import Login from "../views/Login.vue";

import Dashboard from "../views/Dashboard.vue";

import Empleado from "../views/Empleado.vue";

import emplea from "../views/emplea.vue";

const routes=[

{
    path:"/",
    component:Login
},

{
    path:"/admin",
    component:Dashboard
},

{
    path:"/Empleado",
    component:Empleado
},

{
    path:"/emplea",
    component:emplea
}

];

export default createRouter({

history:createWebHistory(),

routes

});