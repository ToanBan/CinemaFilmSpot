import React from "react";

export default function Toolbar(){
    return (
        <>
            <div className="d-flex toolbar shadow justify-content-between align-items-center">
                    <img className="ms-4" style={{width:'50px', height:"50px"}} src="http://127.0.0.1:8000/storage/image/cinema.png" alt="" />
                    <p style={{color: 'dimgray'}} className="m-0 me-4 fst-italic">FilmSpot</p>
            </div>
        </>
    )
}