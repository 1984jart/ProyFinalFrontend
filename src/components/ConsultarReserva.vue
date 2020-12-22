<template>
  <div>
     
      <label for='cod_reserva'>Código de Reserva: </label>
      <input v-model="cod_reserva" id='cod_reserva'>
      <button v-on:click="verRsrv">Consultar</button>
       <h2>Detalle de la Reserva</h2>
      <br/><br/>
      <label for='nombre'>Nombre Usuario:</label>
    <input v-model="nombre" id='nombre' disabled>
        <label for='identificacion'>Identificación:</label>
        <input v-model="identificacion" id='identificacion' disabled>
        <label for='fecha'>Fecha de reserva</label>
        <input v-model="fecha" id='fecha' disabled><br/>
        <label for='fecha_inicio'>Fecha Inicio:</label>
        <input v-model="fecha_inicio" id='fecha_inicio' disabled>
        <label for='fecha_fin'>Fecha Fin</label>
        <input v-model="fecha_fin" id='fecha_fin'  disabled>
        <label for='tipo_habitacion'>Tipo Habitación</label>
        <input v-model="tipo_habitacion" id='tipo_habitacion' disabled>
        
        <label for='valor'>Valor</label>
        <input v-model="valor" id='valor' disabled>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ConsultarReserva",
    data: function() {
        return {
            cod_reserva:"",
            nombre:"",
            identificacion:"",
            fecha_inicio:"",
            fecha_fin:"",
            tipo_habitacion:"",
            fecha:"",
            valor:0          
        };

    },
    methods:{
        verRsrv:function()
        {
             axios
            .get("https://frontend-proyhotel.herokuapp.com/reserva/vista/"+this.cod_reserva)
            .then(respuesta=>{
            respuesta.data;
            this.nombre=respuesta.data.nombre;
            this.identificacion=respuesta.data.identificacion;
            this.fecha_inicio=respuesta.data.fecha_inicial;
            this.fecha_fin=respuesta.data.fecha_final;
            this.tipo_habitacion=respuesta.data.tipo_hab
            this.fecha=respuesta.data.fecha;
            this.valor=respuesta.data.valor
             
            
            
        })
            .catch(error=>{
                if(error.response.status =="404")
                    alert("La reserva no existe");
        });
        }

    }
    
};

</script>

<style scoped>
</style>