import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../Actions/Actions"
import { Link } from "react-router-dom";
import s from '../Modules/CreateActivity.module.css'

export default function CreateActivity (){
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries.sort((a,b) => a.name.localeCompare(b.name)))
    const [activities, setActivities] = useState({
        countries:[],
        name: '',
        season: '',
        duration: '',
        difficulty: '',
    })
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await dispatch(createActivity(activities))
        setActivities({
            countries:[],
            name: '',
            season: '',
            duration: '',
            difficulty: '',
        })
        alert("Activity created")
    }
    console.log(activities)
    useEffect(()=>{
            dispatch(getAllCountries())
    },[dispatch])
    
    const handleSelect = (e) => {
        setActivities({...activities, countries:[...activities.countries,e.target.value]})
    }

    const handleChange = e => {
        setActivities({
            ...activities,
            [e.target.name]: e.target.value
        })
    }

    console.log(activities.idCountry)
    return(
        <Fragment>
            <div className={s.container}>
                <div className={s.gral}>
            <form onSubmit={handleSubmit} className={s.form}>
            <h1 className={s.title}>Create your activity!</h1>
                <label>
                    <select name='countries' id='countries' onChange={handleSelect} required>
                        <option value="">Countries</option>
                        {countries.map(e => (<option value={e.alpha3Code}>{e.name}</option>))}
                    </select>
                </label>
                <label onChange={handleChange}>
                    <input type="text" placeholder="name" name="name" value={activities.name} required/>
                </label>
                <label >
                { <select name='season' id='season' onChange={handleChange} required>
                        <option value="">Season</option>
                        {["Spring", "Summer", "Autumn", "Winter"].map(e => (<option value={e}>{e}</option>))}
                    </select>} 
                </label>
                <label >
                    <select name='difficulty' id='difficulty' onChange={handleChange} required>
                        <option value="">Difficulty</option>
                        {["1", "2", "3", "4","5"].map(e => (<option value={e}>{e}</option>))}
                    </select>
                </label>
                <label >
                    <select name='duration' id='duration' onChange={handleChange} required>
                        <option value="">Duration</option>
                        {["1", "2", "3", "4","5","6","7","8","9","10","11","12"].map(e => (<option value={e}>{e}</option>))}
                    </select>
                </label>
                <button type="submit" >Create</button>
            </form>
                </div>
            <div className={s.close}>
            <Link to='/home'><button>X</button></Link>
                 </div>
              </div>
        </Fragment>
    )
}