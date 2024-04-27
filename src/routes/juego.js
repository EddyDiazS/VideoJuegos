const express = require("express");
const router = express.Router(); //manejador de rutas de express
const juegosSchema = require("../models/juego");

router.post("/juegos", (req, res) => {
    const juego = juegosSchema(req.body);
    juego
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
