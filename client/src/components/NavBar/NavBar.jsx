import React from "react"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"
import styles from '../Modules/NavBar.module.css'
import { getAllCountries, getCountry } from "../Actions/Actions"

export default function NavBar ({setCurrentPage}){
    
    const dispatch = useDispatch()
    const[name, setName] = useState("")

    const handleInputChange= (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await dispatch(getAllCountries())
        await setCurrentPage(1)
        dispatch(getCountry(name))
        setName("")
    }

    return (
        <div>
        <div className={styles.all}>
            <div className={styles.link}>
                <NavLink to='/'><button>Landing</button></NavLink>
            </div>
            <div>
            <input
            type='text'
            placeholder="buscar..."
            value={name}
            onChange={(e) => handleInputChange(e)}
            />
            <button type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
            </div>
            <NavLink to='/addActivity' className={styles.create}><button >Create activity</button></NavLink>
        </div>
        </div>
    )
}