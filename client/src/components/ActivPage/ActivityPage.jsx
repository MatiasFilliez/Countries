import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activities } from "../Actions/Actions";

export default function ActivitiesPage (){

    const stateActivities = useSelector((state) => state.stateActivities)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(activities())
    }, [dispatch])
    console.log(stateActivities)
    return(
        <div>
            {
              stateActivities? stateActivities.map((e)=>{
                  return(
                    <ul>
                        <li>{e.name}</li>
                    </ul>
                )}): <h1>Activities Not Found</h1>
            
            }  
        </div>
    )
}