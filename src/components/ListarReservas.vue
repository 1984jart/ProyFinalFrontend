<template>
    <div>
    <h2>Reservas Registradas</h2>
    <table>
      <tr>
        <th>Nro. Reserva</th>
        <th>identificacion</th>
        <th>nombre</th>
        <th>Fecha de reserva</th>
        <th>Fecha de entrada</th>
        <th>Fecha de salida</th>
        <th>Habitación</th>
        <th>Valor</th>
      </tr>
      <tr v-for="reserv in reservas" v-bind:key="reserv.num_reserva">
        <td>{{ reserv.num_reserva}}</td>
        <td>{{ reserv.identificacion }}</td>
        <td>{{ reserv.nombre }}</td>
        <td>{{ reserv.fecha }}</td>
        <td>{{ reserv.fecha_inicial }}</td>
        <td>{{ reserv.fecha_final }}</td>
        <td>{{ reserv.tipo_hab }}</td>
        <td>{{ reserv.valor }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ListarReservas",
  data: function() {
    return {
      reservas: []
    };
  },
  beforeCreate: function() {
    axios
      .get("https://final-proymintic-backend.herokuapp.com/reserva/listar")
      .then(respuesta => {
        this.reservas = respuesta.data;
      })
      .catch(error => {
        console.log(error);
        alert("Error en la peticion con codigo" + error.response.status);
      });
  }
};
</script>

<style >


table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid brown;
  font: 'Rock Salt', cursive;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th, td {
  padding: 20px;
}
tbody tr:nth-child(odd) {
  background-color: #ece5ea;
}

tbody tr:nth-child(even) {
  background-color: #302f30;
}
tr:nth-child(even) { background: #ddd }
tr:nth-child(odd) { background: #fff}


</style>