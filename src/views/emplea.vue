<template>
  <section class="admin-justificantes">
    <header class="header-section">
      <h2>Gestión de Justificantes</h2>
      <p class="subtitle">Administra los documentos enviados por el personal.</p>
    </header>

    <div v-if="store.justificantes && store.justificantes.length" class="table-container">
      <table class="justificantes-table">
        <thead>
          <tr>
            <th>Empleado</th>
            <th>Documento</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="j in store.justificantes" :key="j.id">
            
            <td>
              <div class="empleado-info">
                <span class="avatar">{{ j.nombreEmpleado.charAt(0).toUpperCase() }}</span>
                <span class="nombre">{{ j.nombreEmpleado }}</span>
              </div>
            </td>

            <td>
              <a :href="j.urlPDF" target="_blank" class="btn-link">
                📄 {{ j.nombreArchivo || 'Ver documento' }}
              </a>
            </td>

            <td>
              <span :class="['badge', j.estado || 'pendiente']">
                {{ formatEstado(j.estado || 'pendiente') }}
              </span>
            </td>

            <td class="acciones">
              <button 
                class="btn btn-aceptar" 
                :disabled="j.estado === 'aceptado'"
                @click="cambiarEstado(j.id, 'aceptado')"
                title="Aceptar justificante"
              >
                Aceptar
              </button>
              
              <button 
                class="btn btn-rechazar" 
                :disabled="j.estado === 'rechazado'"
                @click="cambiarEstado(j.id, 'rechazado')"
                title="Rechazar justificante"
              >
                Rechazar
              </button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="empty-state">
      <span class="empty-icon">📭</span>
      <p>No hay justificantes en la bandeja de entrada en este momento.</p>
    </div>

  </section>
</template>

<script>
import { store } from "@/store";

export default {
  data() {
    return {
      store
    };
  },
  methods: {
    // Método para formatear la primera letra del estado en mayúscula
    formatEstado(estado) {
      return estado.charAt(0).toUpperCase() + estado.slice(1);
    },

    // Método que se dispara al hacer clic en Aceptar o Rechazar
    cambiarEstado(idJustificante, nuevoEstado) {
      // 1. Encuentras el justificante en tu store de manera local para actualizar la UI
      const index = this.store.justificantes.findIndex(j => j.id === idJustificante);
      
      if (index !== -1) {
        this.store.justificantes[index].estado = nuevoEstado;
        
        // 2. Aquí deberías llamar a tu API o base de datos para guardar el cambio.
        // Ejemplo:
        // axios.put(`/api/justificantes/${idJustificante}/estado`, { estado: nuevoEstado })
        //   .then(() => console.log('Estado actualizado en BD'))
        //   .catch(err => console.error(err));
      }
    }
  }
};
</script>

<style scoped>
/* Contenedor Principal */
.admin-justificantes {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #333;
}

/* Cabecera */
.header-section {
  margin-bottom: 24px;
}
.header-section h2 {
  margin: 0 0 8px 0;
  font-size: 24px;
  color: #1a1a1a;
}
.subtitle {
  margin: 0;
  color: #666;
  font-size: 15px;
}

/* Contenedor de la Tabla */
.table-container {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

/* Tabla */
.justificantes-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
.justificantes-table th {
  background-color: #f8fafc;
  padding: 16px;
  font-weight: 600;
  color: #475569;
  font-size: 14px;
  border-bottom: 2px solid #e2e8f0;
}
.justificantes-table td {
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: middle;
}
.justificantes-table tbody tr:hover {
  background-color: #f8fafc;
  transition: background-color 0.2s ease;
}
.justificantes-table tbody tr:last-child td {
  border-bottom: none;
}

/* Información del Empleado */
.empleado-info {
  display: flex;
  align-items: center;
  gap: 12px;
}
.avatar {
  background-color: #e2e8f0;
  color: #475569;
  font-weight: bold;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.nombre {
  font-weight: 500;
}

/* Enlace a PDF */
.btn-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: #eff6ff;
  transition: all 0.2s;
}
.btn-link:hover {
  background-color: #dbeafe;
  color: #1d4ed8;
}

/* Etiquetas de Estado (Badges) */
.badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}
.badge.pendiente {
  background-color: #fef08a;
  color: #854d0e;
}
.badge.aceptado {
  background-color: #bbf7d0;
  color: #166534;
}
.badge.rechazado {
  background-color: #fecaca;
  color: #991b1b;
}

/* Botones de Acción */
.acciones {
  display: flex;
  gap: 8px;
}
.btn {
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}
.btn:active {
  transform: scale(0.97);
}
.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}
.btn-aceptar {
  background-color: #22c55e;
  color: white;
}
.btn-aceptar:hover:not(:disabled) {
  background-color: #16a34a;
}
.btn-rechazar {
  background-color: #ef4444;
  color: white;
}
.btn-rechazar:hover:not(:disabled) {
  background-color: #dc2626;
}

/* Estado Vacío */
.empty-state {
  text-align: center;
  padding: 64px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  color: #64748b;
}
.empty-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 16px;
}
</style>