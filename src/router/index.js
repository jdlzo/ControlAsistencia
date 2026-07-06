import {createRouter,createWebHistory} from "vue-router";

import Login from "../views/Login.vue";

import Dashboard from "../views/Dashboard.vue";

import Empleado from "../views/Empleado.vue";

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
    path:"/empleado",
    component:Empleado
}

];

export default createRouter({

history:createWebHistory(),

routes

});