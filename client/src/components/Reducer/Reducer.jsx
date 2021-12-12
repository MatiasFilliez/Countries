import { 
    GET_DETAIL,
    GET_ALL_COUNTRIES,
    GET_COUNTRY_NAME,
    FILTER_BY_CONTINENT,
    FILTER_BY_POPULATION,
    FILTER_BY_LETTER,
    CREATE_ACTIVITY,
    GET_ACTIVITIES,
    FILTER_BY_ACT,
    FILTER_BY_AREA,
    ACT_STATE
} from "../Actions/Actions";

const initialState = {
    countryDetail: [],
    activities: [],
    countries: [],
    auxCountries: [],
    stateActivities: []
}

export default function rootReducer (state=initialState, {type, payload}){
    switch(type){
        case GET_COUNTRY_NAME :{
            return {
                ...state,
                countries: payload
            }
        }
        case GET_ALL_COUNTRIES :{
            return{
                ...state,
                countries: payload,
                auxCountries: payload
            }
        }
        case GET_DETAIL:{
            return {
                ...state,
                countryDetail: payload
            }
        }
        case FILTER_BY_CONTINENT:{
            const allCountries = state.countries
            const continentFiltered = payload === 'Clear'? allCountries : allCountries.filter((e)=> e.continents === payload)
            return{
                ...state,
                countries: continentFiltered,
                auxCountries: continentFiltered
            }
        }
        case FILTER_BY_POPULATION:{
            let allCountries = state.countries
            if(payload === "lowerToHigher") allCountries.sort((a,b)=> a.population - b.population)
            if(payload === "higherToLower")  allCountries.sort((a,b)=> b.population - a.population)
            if(payload === "default") allCountries = state.auxCountries
            console.log(allCountries)
            return{
                 ...state,
                 countries: [...allCountries]
                }    
            }
            case FILTER_BY_AREA:{
                let allCountries = state.countries
                if(payload === "lowerToHigher") allCountries.sort((a,b)=> a.area - b.area)
                if(payload === "higherToLower")  allCountries.sort((a,b)=> b.area - a.area)
                if(payload === "default") allCountries = state.auxCountries
                console.log(allCountries)
                return{
                     ...state,
                     countries: [...allCountries]
                    }    
                }
        case FILTER_BY_LETTER:{
            let allCountries = state.countries
            if(payload === "A-Z") allCountries.sort((a,b) => a.name.localeCompare(b.name))
            if(payload === "Z-A") allCountries.sort((a,b)=> b.name.localeCompare(a.name))
            if(payload === "default") allCountries = state.auxCountries
            return{
                ...state,
                countries: [...allCountries]
            }
        }
        case CREATE_ACTIVITY:{
              return {
                  ...state,
                  activities: [...state.activities, payload]
              }
        }
        case GET_ACTIVITIES:{
            return{
                ...state,
                activities: payload,
            }
        }
        case FILTER_BY_ACT:{
            const act = state.countries
            let result
            if(payload === "default") result = state.auxCountries
            result = act.filter((e)=> e.activities[0]?.name === payload)
            console.log(act.filter((e)=> e.activities[0]?.name === payload))
            return{
                ...state,
                countries: result
            }
        }
        case ACT_STATE:{
            return {
                ...state,
                stateActivities: payload
            }
      }
        default:
             return state;
    }
    
}