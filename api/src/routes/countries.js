const { Router } = require('express');
const { getAllCountries, getIdCountries } = require('../helperFunctions/countryFunctions');

const router = Router();

router.get('/', getAllCountries)
router.get('/:id', getIdCountries)

module.exports = router;