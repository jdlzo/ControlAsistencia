<template>
  <section class="empleados">

    <h2>Justificantes</h2>

    <div v-if="store.justificantes && store.justificantes.length">

      <div
        v-for="j in store.justificantes"
        :key="j.id"
        class="card-justificante"
      >

        <p><strong>{{ j.nombreEmpleado }}</strong></p>
        <p>{{ j.nombreArchivo }}</p>

        <a :href="j.urlPDF" target="_blank">
          📄 Ver PDF
        </a>

      </div>

    </div>

    <p v-else>
      No hay justificantes aún
    </p>

  </section>
</template>

<script>
import { store } from "@/store";

export default {
  data() {
    return {
      store
    };
  }
};
</script>

<style scoped>
.empleados {
  padding: 20px;
}

.card-justificante {
  background: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
</style>