import { useEffect, Fragment } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getDetail } from "../Actions/Actions";
import styles from '../Modules/CountryDetails.module.css'

export default function CountryDetails(){
    
    const country = useSelector((state) => state.countryDetail)

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id]);

    return(
        <Fragment>
            <div className={styles.container}>
                <div className={styles.name}>
                <h1>Country: {country.name}</h1>
                </div>
                <div className={styles.x}>
            <Link to='/home'><button>X</button></Link>
            </div>
            <div className={styles.flag}>
                <img src={country.flags} alt='img flag' />
            </div>
            <div className={styles.detail}>
              
                    <div>
                    <label>ID: {country.alpha3Code}, </label>
                    <label>Continent: {country.continents}, </label>
                    <label>Capital: {country.capital}</label>
                    <li>Population: {country.population}</li>
                    <li>Area: {country.area} Km^2</li>
              </div>
                {
                   country?country.activities?.map((e)=>{
                       return(
                       <div className={styles.act}>
                        <h2>Activity: {e.name}</h2>
                        <label>Difficulty: {e.difficulty}</label>
                        <label>Duration: {e.duration} hours</label>
                        <label>Season: {e.season}</label>
                       </div>)

                   })
                    :<div>No activities to show</div>
                }
           </div>
         </div>
        </Fragment>
    )
}