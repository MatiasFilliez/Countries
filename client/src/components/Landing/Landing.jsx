import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Modules/Landing.module.css'


export default function Landing(){
    return(
        <div className={styles.fondo}>
            <div className={styles.saludo}>
           <Link to='/home'>GoHome</Link>
            </div>
        </div>
    )
}