import { useDispatch, useSelector} from "react-redux";
import {getAllCountries, filterCountriesByContinent, filterByPopulation, filterByL, getAllActivities, filterByAct, filterByArea} from '../Actions/Actions'
import CountryCard from "../CountryCard/CountryCard";
import {useEffect} from 'react'
import { Fragment, useState  } from "react";
import NavBar from "../NavBar/NavBar";
import Paged from "../Paged/Paged";
import s from '../Modules/Home.module.css'
import notFound from "../../img/NOT_FOUND.jpg"


export default function Home() {
    const dispatch = useDispatch()
    const country = useSelector((state) => state.countries)
    const activity = useSelector((state) => state.activities)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(10)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = currentPage === 1 ? 
    country.slice(indexOfFirstCountry, indexOfLastCountry -1) :
    country.slice(indexOfFirstCountry, indexOfLastCountry)
    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(getAllCountries())
    }

    const handleFilterByContinent = async (e)=>{
        await dispatch(getAllCountries())
        setCurrentPage(1)
        dispatch(filterCountriesByContinent(e.target.value))
    }

    const handleFilterByPopulation = (e)=>{
        setCurrentPage(1)
        dispatch(filterByPopulation(e.target.value))

    }
    const handleFilterByArea = (e)=>{
        setCurrentPage(1)
        dispatch(filterByArea(e.target.value))
    }
    const handleFilterByLetter = (e)=>{
        dispatch(filterByL(e.target.value))
    }

     const handleFilterByAct = async (e)=>{
        setCurrentPage(1)
        if(e.target.value === "default"){
            dispatch(getAllCountries())
            setCurrentPage(1)
        }
        dispatch(filterByAct(e.target.value))
    } 

    useEffect(()=>{
        dispatch(getAllCountries())
    }, [dispatch])

    useEffect(()=>{
        dispatch(getAllActivities())
    }, [dispatch])

    return (
        <Fragment >
            <div className={s.alll}>
            <NavBar className={s.nav} setCurrentPage={setCurrentPage}/>
            <Paged
            countriesPerPage={countriesPerPage}
            country={country.length}
            paginado={paginado}
            />
           
            <div className={s.gral}>
                <div className={s.filters}>
                <select onChange={(e) => handleFilterByContinent(e)}>
                    <option value='Clear'>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                    <option value='Antarctica'>Antarctica</option>
                </select>
              
                <select onChange={(e) => handleFilterByPopulation(e)}>
                    <option value='default'>Order Population By</option>
                    <option value='higherToLower'>Desc</option>
                    <option value='lowerToHigher'>Asc</option>
                </select>
                <select onChange={(e) => handleFilterByArea(e)}>
                    <option value='default'>Order Area By</option>
                    <option value='higherToLower'>Desc</option>
                    <option value='lowerToHigher'>Asc</option>
                </select>
                <select onChange={(e) => handleFilterByLetter(e)}>
                    <option value='default'>Order Alphabeth by</option>
                    <option value='A-Z'>A-z</option>
                    <option value='Z-A'>Z-a</option>
                </select>
               { 
               <select onChange={(e) => handleFilterByAct(e)}>
                    <option value="default">---</option>
                    {activity?activity.map(e => (<option value={e.name}>{e.name}</option>)):<option>NULL</option>}
                </select>
                }
                </div>
                <div className={s.card}>
                {currentCountries.length? currentCountries.map((e)=>{
                    return(
                        <Fragment key = {e.alpha3Code}>
                            <CountryCard 
                                id={e.alpha3Code}
                                flag={e.flags} 
                                Name = {e.name}
                                Continent = {e.continents}
                            />
                        </Fragment>
                    )
                }):<div>
                    <h1>Country Not Found!</h1>
                    <img src={notFound}></img>
                   <button onClick={(e)=> handleSubmit(e)}>RELOAD</button>
                   </div>
                    }
                </div>
            </div>
           </div>
        </Fragment>
    )
}


/* export const mapStateToProps = (state) => {
    return {
    country: state.countries
    }
}

export const mapDispatchToProps = {
    getAllCountries,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home) */;