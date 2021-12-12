import { Fragment } from "react"
import { Route } from 'react-router'
import Landing from '../Landing/Landing';
import Home from "../Home/Home";
import {Routes } from 'react-router-dom';
import CountryDetails from "../CountryDetails/CountryDetails";
import CreateActivity from "../CreateAct/CreateActivity";
import ActivitiesPage from "../ActivPage/ActivityPage";


export default function rootRoutes(){
    return(
        <Fragment>
            <Routes>
                <Route exact path='/' element={<Landing />} />
                <Route exact path='/home' element={<Home />} /> 
                <Route exact path='/home/:id' element={<CountryDetails/>}/>
                <Route exact path='/addActivity' element={<CreateActivity/>}/>
                <Route exact path='/activities' element={<ActivitiesPage/>}/>
            </Routes>
        </Fragment>
    )
}