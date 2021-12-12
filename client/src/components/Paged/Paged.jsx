import React from "react";
import s from '../Modules/Paged.module.css'
export default function Paged ({countriesPerPage,country, paginado}){
    const pageNumbers = []
    for(let i=1; i<=Math.ceil(country/countriesPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div >
            <div className={s.paged} >
                {pageNumbers && 
                pageNumbers.map(n =>(
                    <>
                        <p><button onClick={() => paginado(n)} key={n}>{n}</button> </p>
                    </>
                ))
                }
            </div>
        </div>
    )
}