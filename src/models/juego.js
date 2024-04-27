const mongoose = require("mongoose"); // importando el componente mogoose
const juegosSchema = mongoose.Schema({
    nombreJuego: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    plataforma: {
        type: String,
        required: true,
    },
    clasificacion: {
        type: String,
        requiered: true,
    },
    dlcs: {
        type: Number,
        requiered: true,
    },
    modoJuego: {
        type: String,
        requiered: true,
    },
    dificultad:{
        type: Number,
        requiered: true,
    },
    logros:{
        type: Number,
        requiered: true,
    }
});
module.exports = mongoose.model("Juego", juegosSchema);
