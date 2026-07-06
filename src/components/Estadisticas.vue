<template>

  <section class="panel-estadisticas">

    <div class="tarjeta-estadistica">
      <h4>Asistencias Hoy</h4>
      <h2>128</h2>
      <p>82% del total</p>
    </div>

    <div class="tarjeta-estadistica">
      <h4>Faltas Hoy</h4>
      <h2>18</h2>
      <p>12% del total</p>
    </div>

    <div class="tarjeta-estadistica">
      <h4>Atrasos Hoy</h4>
      <h2>9</h2>
      <p>6% del total</p>
    </div>

    <div class="tarjeta-estadistica">
      <h4>Empleados Activos</h4>
      <h2>155</h2>
      <p>Total empleados</p>
    </div>

  
    <div class="tarjeta-estadistica justificantes">
      <h4>Justificantes Pendientes</h4>

      <div class="justificantes-bloque">
        <h2>5</h2>

        <router-link to="/emplea" class="btn-editar">
          <i class="fa-solid fa-pen"></i>
        </router-link>
      </div>

      <p>Por revisar</p>
    </div>

  </section>


</template>

<script>
export default {};
</script>
<style>
.justificantes {
    position: relative;
}

.justificantes-bloque {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-editar {
    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    background: #6366f1;
    color: white;

    text-decoration: none;

    transition: 0.3s;
}

.btn-editar:hover {
    background: #4f46e5;
    transform: scale(1.05);
}
</style>