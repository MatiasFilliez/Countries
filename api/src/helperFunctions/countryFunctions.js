const { Activity, Country } = require('../db')
const { Op } = require('sequelize')
const getAllCountries = async (req, res) => {
    const { name } = req.query
    if (!name) {
        try {
            const result = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ["name", "difficulty", "duration", "season"],
                    through: {
                        attributes: [],
                    }
                }
            })
            return await res.send(result)
        } catch (err) {
            console.log(err)
        }
    } else {
        try {
            const findCountry = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `${name}%`
                    }
                }
            })
            return res.send(findCountry)
        } catch (err) {
            console.log(err)
        }
    }
}

const getIdCountries = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Country.findByPk(id.toUpperCase(), {
            include: [{
                model: Activity,
                through: {
                    attributes: []
                }
            }]
        })
        if (!result) {
            res.send({ msg: "please insert alpha 3 code valid" })
        }
        res.json(result)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllCountries,
    getIdCountries,
}