<template>
  <div id="app">
    <body>
        <div class="header">
      <h2></h2>
  </div>
    <nav>
       <h1>Modulo Reservas</h1>
       <div align="center">
       <img src="./assets/logoT.png">
       </div>
      <button v-on:click="Consultar_Reserva1">Consultar Reserva</button>
    
      <button v-on:click="Crear_Reserva1">Crear Reserva</button>
      <button v-on:click="Listar_Reservas1">Ver Reservas</button>
     
      
      <p></p>
      <p></p>
      <router-view> </router-view>
    </nav>
    </body>
        <div class="footer">
      <h2>Grupo 3 Monitoría 2 Equipo 4</h2>
    </div>
  </div>

</template>

<script>
import CrearReserva from "./components/CrearReserva";
import ConsultarReserva from "./components/ConsultarReserva";
import ListarReservas from "./components/ListarReservas";

export default {
  name: 'App',
  components: {CrearReserva,ConsultarReserva, ListarReservas}  ,
  data: function(){
    return{
      nombre: 10
    }
  },
  methods:{
    Consultar_Reserva1: function(){
      if (this.$route.name != "consulta"){
        this.$router.push({name:"consulta"});
      }
    },
    Crear_Reserva1: function(){
      if (this.$route.name != "crear"){
      this.$router.push({name:"crear"});
      }
    },
     Listar_Reservas1: function(){
      if (this.$route.name != "listar"){
      this.$router.push({name:"listar"});
      }
    }
  }
  //,
  //beforeCreate: function() {
  //  localStorage.setItem("usuario_actual","Equipo4");
  //  this.$router.push({name:"consulta"})
  //}
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  
}
#app body {
  margin: 0 0 0 0;
  background: white;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color:  brown;
  color: #e5e7e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#app header h1 {
  width: 20%;
  text-align: center
  co;
}
#app h1 {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  color: brown;
  display: flex;
  align-items: center;
 justify-content: center;
}
#app h3 {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 150px;
  color: grey;
  display: flex;
  align-items: center;
 justify-content: center;
}
#app header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
#app header nav button {
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
#app header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
#app main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color:  brown;
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app header body button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
#app div nav button {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
#app button{

  color: #e5e7e9;
  background:brown;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight:bold

}
#app button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}

</style>
