import { Schema, model} from "mongoose";

const EsquemaJugadores = new Schema({
    name:String,
    apepat:String,
    numero:Number
})

export const modeloJugadores = new model("Tabla de jugadores", EsquemaJugadores)

