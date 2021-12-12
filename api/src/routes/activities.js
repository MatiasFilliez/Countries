const { getActivities, addActivity } = require('../helperFunctions/activityFunctions');
const { Router } = require('express');

const router = Router();

router.get('/', getActivities)
router.post('/', addActivity)

module.exports = router;