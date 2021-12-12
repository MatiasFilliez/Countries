const { Activity, Country } = require('../db')

const getActivities = async (req, res) => {
    try {
        const result = await Activity.findAll()
        res.json(result)

    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}
const addActivity = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body
        const act = await Activity.create({ name, difficulty, duration, season, })
        countries.map((e) => act.addCountry(e))
        res.send(act)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    addActivity,
    getActivities,
}