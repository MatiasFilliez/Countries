const { Router } = require('express');
const Activity = require('./activities');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Countries = require('./countries')

const router = Router();
router.use('/countries', Countries)
router.use('/activities', Activity)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
