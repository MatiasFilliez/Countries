const axios = require('axios')
const { Country } = require('./db');

const dbInit = async () => {
    try {
        const apiUrl = await axios.get('https://restcountries.com/v3/all')
        const apiInfo = apiUrl.data.map(c => {
            return {
                name: c.name["common"],
                alpha3Code: c.cca3,
                capital: c.capital ? c.capital[0] : "capital not found",
                continents: c.continents[0],
                area: c.area,
                region: c.subregion,
                flags: c.flags.find((flag) => flag.includes("svg")),
                population: c.population
            }
        })
        if (!(await Country.findByPk("ARG"))) {
            await Country.bulkCreate(apiInfo)
        }
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    dbInit
}