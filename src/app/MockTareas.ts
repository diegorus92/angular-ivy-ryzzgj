import { ITarea } from "./Interfaces/ITarea";


export const TAREAS:ITarea[] = [
    {
        id: 1, 
        descripcion: "Terminar módulo de Angular",
        dia: "Agosto 5 a las 12:00",
        recordatorio: false,
        orden: 0
    },

    {
        id: 2, 
        descripcion: "Comprar pan y vino",
        dia: "Agosto 10 a las 18:00",
        recordatorio: true,
        orden: 1
    },

    {
        id: 3, 
        descripcion: "Viciar en la PC",
        dia: "Septiembre 8 a las 12:30",
        recordatorio: false,
        orden: 2
    },

    {
        id: 4, 
        descripcion: "Terminar Aplicación web para empresa",
        dia: "Septiembre 25 a las 22:00",
        recordatorio: true,
        orden: 4
    },
]