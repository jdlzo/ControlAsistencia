// src/store.js
import { reactive } from "vue";

export const store = reactive({
  empleados: [
    {
      id: 1,
      nombre: "María González",
      departamento: "Recursos Humanos",
      estado: "Presente",
      entrada: "08:00",
      salida: "17:30",
      faltas: 0,
      atrasos: 0,
      justificantes: []
    }
  ],

  actividades: []
});