import VueRouter from "vue-router";
import CrearReserva from "./components/CrearReserva";
import ConsultarReserva from "./components/ConsultarReserva";
import ListarReservas from "./components/ListarReservas";


const router = new VueRouter
(
    {
        //mode: "history",
        routes:
            [
                {
                name:"crear",
                path: "/crear",
                component: CrearReserva  
                },
                {
                name:"consulta",
                path: "/ConsultaReserva",
                component: ConsultarReserva 
                },
                {
                name:"listar",
                path: "/ListarReservas",
                component: ListarReservas 
                    }
            ]
    }
);

export default router;