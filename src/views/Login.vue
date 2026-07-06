<template>
  <div class="login-page">
    <div class="login">

      <h1>Control de Asistencia</h1>

      <input type="text" placeholder="Usuario" v-model="usuario">
      <input type="password" placeholder="Contraseña" v-model="password">

      <button @click="iniciarSesion">
        Iniciar Sesión
      </button>

    </div>
  </div>
</template>

<script>
import "../assets/CSS/login.css";
import usuarios from "../data/datos.json";

export default{

    data(){

        return{

            usuario:"",

            password:""

        }

    },

    methods:{

        iniciarSesion(){

            const user = usuarios.find(

                usuario=>

                usuario.usuario===this.usuario &&

                usuario.password===this.password

            );

            if(!user){

                alert("Usuario o contraseña incorrectos");

                return;

            }

            localStorage.setItem(

                "usuario",

                JSON.stringify(user)

            );

            if(user.rol==="admin"){

                this.$router.push("/admin");

            }

            else{

                this.$router.push("/empleado");

            }

        }

    }

}

</script>