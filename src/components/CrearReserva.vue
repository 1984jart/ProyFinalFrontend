<template>
  <div id='crearReserva'>
    <h3>Crear Reserva</h3>
    <label for='nombre'>Nombre Usuario:</label>
    <input v-model="nombre" id='nombre' required=true><br/>
    <label for='identificacion'>Identificación:</label>
    <input v-model="identificacion" id='identificacion'><br/>
    <label for='fecha_inicio'>Fecha Inicio:</label>
    <input v-model="fecha_inicio" id='fecha_inicio' type="date"><br/>
    <label for='fecha_fin'>Fecha Fin</label>
    <input v-model="fecha_fin" id='fecha_fin' type="date"><br/>
    <label for='tipo_habitacion'>Tipo Habitación</label>
    <!--<input v-model="tipo_habitacion" id='tipo_habitacion'>-->
        <select v-model = "tipo_habitacion">
            <option>Sencilla</option>
            <option>Doble</option>
            <option>Multiple</option>
        </select>
        <br7>
    <button v-on:click="agregarRsrv">Crear Reserva</button>
  </div>
</template>

<script>
import axios from 'axios'
    export default {
    name: "CrearReserva" ,
    data:function(){
        return{
            nombre:"",
            identificacion:"",
            fecha_inicio:"",
            fecha_fin:"",
            tipo_habitacion:""
        }

        
    }, 
    methods:{
        agregarRsrv:function(){
          
          var feci = Date.parse(this.fecha_inicio)
          var fa =new Date()
          var validar=true
                    
          
          if(feci<fa)
          {
            alert("La fecha inicial debe ser mayor que la fecha actual!")
            validar=false
          }
          if(Date.parse(this.fecha_inicio)>Date.parse(this.fecha_fin))
          {
            alert("La fecha final debe ser mayor que la fecha actual!")
            validar=false
          }
          
          if(validar)
          {
           var rsrvJSON = {
                nombre: this.nombre,
                identificacion: this.identificacion,
                fecha_inicial: this.fecha_inicio,
                fecha_final: this.fecha_fin,
                tipo_hab: this.tipo_habitacion
            }
            axios.post("https://final-proymintic-backend.herokuapp.com/reserva/crear", rsrvJSON).then(respuesta=>{
                alert(respuesta.data.mensaje);
                this.identificacion="";
                this.nombre="";
                this.fecha_inicio="",
                this.fecha_fin="",
                this.tipo_habitacion=""
                
            }).catch(error=>{
                alert("Error en la creación. ")
            })

        }
        
    }
    }   
}
</script>

<style scoped>
    
#crearReserva {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  align-content: initial;
  align-items: initial;
  align-self: initial;

  
}
#crearReserva button{

  color: #e5e7e9;
  background:brown;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;

}
#crearReserva button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
    
</style>