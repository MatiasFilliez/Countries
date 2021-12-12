import styles from '../Modules/CountryCard.module.css'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
export default function CountryCard ({Name, Continent, flag, id}){
    return(<Fragment>
         <div className={styles.gral}>
                 <div className={styles.card}>
                    <h3 className={styles.name}>Country: {Name}</h3>
                    <div className={styles.sflag}>
                     <img src={flag} alt='img flag'/>    
                    </div>
                </div>
                <div className={styles.cont}>
                    <p>Continent: {Continent}</p>
                </div>                
                <Link to={`/home/${id}`} className={styles.helper}>
                     <button className={styles.aboutButtom}>ABOUT COUNTRY</button>
                </Link>
                </div>
            </Fragment>
    )
}