const express = require("express");
const router = express.Router(); //manejador de rutas de express
const juegosSchema = require("../models/juego");

//Nuevo Juego (POST)
router.post("/juegos", (req, res) => {
    const juego = juegosSchema(req.body);
    juego
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

//Consultar Juegos (GET)
router.get("/juegos", (req, res) => {
    juegosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar juego en especifico (GET)
router.get("/juegos/:id", (req, res) => {
    const { id } = req.params;
    juegosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar o Actualizar un juego por ID
router.put("/juegos/:id", (req, res) => {
    const { id } = req.params;
    const { nombreJuego, genero, plataforma, clasificacion, dlcs, modoJuego, dificultad, logros } = req.body;
    juegosSchema
        .updateOne({ _id: id }, {
            $set: { nombreJuego, genero, plataforma, clasificacion, dlcs, modoJuego, dificultad, logros }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar juego por ID
router.delete("/juegos/:id", (req, res) => {
    const { id } = req.params;
    juegosSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
