import { reactive } from 'vue';
// Cambia esto:
// import data from "../data/datos.json"; 

// A esto (con un solo punto):
import data from "./data/datos.json"; 

export const store = reactive({
  // Importante: Si tu JSON tiene una propiedad "empleados", usa data.empleados.
  // Si tu JSON es solo el array directo [...], usa solo 'data'.
  empleados: data.empleados || data, 
  
  registros: [],
  justificantes: [],
  usuarioLogueado: JSON.parse(localStorage.getItem('usuarioLogueado')) || null,

  iniciarSesion(usuario) {
    this.usuarioLogueado = usuario;
    localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
  },
  
  cerrarSesion() {
    this.usuarioLogueado = null;
    localStorage.removeItem('usuarioLogueado');
  }
});