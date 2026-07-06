import { reactive } from "vue";

export const store = reactive({

  empleados: [
    {
      id: 1,
      nombre: "María González",
      departamento: "RRHH",

      asistencias: 0,
      inasistencias: 0,
      atrasos: 0,

      entrada: null,
      salida: null
    }
  ],

  justificantes: [],

  registros: []
});