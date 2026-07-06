<template>

<section class="seccion-empleados">

                <div class="encabezado-empleados">

                    <h2>Resumen de Empleados</h2>

                    <input type="search" id="buscar-empleado" placeholder="Buscar empleado...">

                </div>

                <table id="tabla-empleados">

                    <thead>

                        <tr>
                            <th>Empleado</th>
                            <th>Departamento</th>
                            <th>Estado</th>
                            <th>Entrada</th>
                            <th>Salida</th>
                            <th>Faltas</th>
                            <th>Atrasos</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>María González</td>
                            <td>Recursos Humanos</td>
                            <td>Presente</td>
                            <td>08:00 AM</td>
                            <td>05:30 PM</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>Carlos Ruiz</td>
                            <td>Contabilidad</td>
                            <td>Presente</td>
                            <td>08:10 AM</td>
                            <td>05:30 PM</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <td>Ana López</td>
                            <td>Marketing</td>
                            <td>Ausente</td>
                            <td>-</td>
                            <td>-</td>
                            <td>1</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>Luis Martínez</td>
                            <td>Sistemas</td>
                            <td>Presente</td>
                            <td>07:58 AM</td>
                            <td>05:30 PM</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>Sofía Herrera</td>
                            <td>Administración</td>
                            <td>Presente</td>
                            <td>08:05 AM</td>
                            <td>05:30 PM</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>

                    </tbody>

                </table>

            </section>

</template>

<script>
import { store } from "@/store";

export default {
  props: ["empleados"],

  data() {
    return {
      store
    };
  },

  methods: {
    subirPDF(event, empleado) {
      const file = event.target.files[0];

      if (!file) return;

      const nuevoPDF = {
        nombre: file.name,
        url: URL.createObjectURL(file),
        fecha: new Date().toLocaleDateString()
      };

      empleado.justificantes.push(nuevoPDF);

      this.store.actividades.push({
        texto: `${empleado.nombre} subió un justificante`,
        tiempo: "Ahora"
      });
    }
  }
};
</script>