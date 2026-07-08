import { reactive } from 'vue'; 
import datosIniciales from '../src/data/datos.json';


const empleadosGuardados = localStorage.getItem('empleados');
const justificantesGuardados = localStorage.getItem('justificantes');
const registrosGuardados = localStorage.getItem('registros');

export const store = reactive({
  empleados: empleadosGuardados ? JSON.parse(empleadosGuardados) : datosIniciales,
  justificantes: justificantesGuardados ? JSON.parse(justificantesGuardados) : [],
  registros: registrosGuardados ? JSON.parse(registrosGuardados) : [],

  // Función auxiliar para guardar los cambios fácilmente en cualquier componente
  guardarEnLocal() {
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    localStorage.setItem('justificantes', JSON.stringify(this.justificantes));
    localStorage.setItem('registros', JSON.stringify(this.registros));
  }
});