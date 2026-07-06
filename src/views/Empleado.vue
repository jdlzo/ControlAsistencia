<template>
  <section class="empleado">

    <h1>Panel Empleado</h1>

    <div class="stats">
      <div class="card">
        <h3>Asistencias</h3>
        <p>{{ empleado.asistencias }}</p>
      </div>

      <div class="card">
        <h3>Inasistencias</h3>
        <p>{{ empleado.inasistencias }}</p>
      </div>

      <div class="card">
        <h3>Atrasos</h3>
        <p>{{ empleado.atrasos }}</p>
      </div>
    </div>

    <div class="acciones">

      <button @click="marcarEntrada">Registrar Entrada</button>
      <button @click="marcarSalida">Registrar Salida</button>

    </div>

    <div class="justificante">
      <h3>Justificante PDF</h3>
      <input type="file" accept="application/pdf" @change="subirPDF">
    </div>

  </section>
</template>
<script>
import { store } from "@/store";

export default {
  data() {
    return {
      store,
      empleado: store.empleados[0],

      horaEntradaLimite: "08:00"
    };
  },

  methods: {

    obtenerHora() {
      const now = new Date();
      return now.toTimeString().slice(0,5); // HH:MM
    },

    marcarEntrada() {
      const hora = this.obtenerHora();
      this.empleado.entrada = hora;

      if (hora > this.horaEntradaLimite) {
        this.empleado.atrasos++;
      } else {
        this.empleado.asistencias++;
      }

      this.store.registros.push({
        tipo: "entrada",
        hora,
        empleado: this.empleado.nombre
      });
    },

    marcarSalida() {
      const hora = this.obtenerHora();
      this.empleado.salida = hora;

      this.store.registros.push({
        tipo: "salida",
        hora,
        empleado: this.empleado.nombre
      });
    },

    subirPDF(event) {
      const file = event.target.files[0];

      const pdf = {
        id: Date.now(),
        empleadoId: this.empleado.id,
        nombreEmpleado: this.empleado.nombre,
        nombreArchivo: file.name,
        urlPDF: URL.createObjectURL(file),
        estado: "pendiente",
        fecha: new Date().toLocaleDateString()
      };

      this.store.justificantes.push(pdf);
    }

  }
};
</script>
<style>
/* Contenedor general */
.empleado {
    padding: 25px;
    font-family: Arial, sans-serif;
    color: #1f2937;
}

/* Título */
.empleado h1 {
    margin-bottom: 20px;
    font-size: 22px;
}

/* 📊 tarjetas de estadísticas */
.stats {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.card {
    flex: 1;
    min-width: 150px;

    background: #ffffff;
    padding: 15px;
    border-radius: 12px;

    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    text-align: center;

    transition: 0.2s;
}

.card:hover {
    transform: translateY(-3px);
}

/* números */
.card h3 {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 8px;
}

.card p {
    font-size: 22px;
    font-weight: bold;
    color: #111827;
}

/* botones de acciones */
.acciones {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
}

.acciones button {
    padding: 10px 14px;
    border: none;
    border-radius: 8px;

    cursor: pointer;
    font-weight: 600;

    background: #6366f1;
    color: white;

    transition: 0.2s;
}

.acciones button:hover {
    background: #4f46e5;
    transform: scale(1.03);
}

/* sección justificante */
.justificante {
    margin-top: 10px;
    padding: 15px;

    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
}

.justificante h3 {
    margin-bottom: 10px;
    font-size: 16px;
}

/* input file */
.justificante input {
    width: 100%;
    padding: 10px;

    border-radius: 8px;
    border: 1px solid #d1d5db;

    background: white;
}
</style>