import React from "react";
import { useState } from "react";
export default function NowShowing(){
    const [isHovered, setIsHovered] =useState(false);
    return(
        <>
            <div className="container mt-5">
                <h3 className="text-white">Phim Đang Chiếu</h3>
                <div className="d-flex">
                    <div className="col-2  img-hover"
                    onMouseEnter={()=>setIsHovered(true)}
                    onMouseLeave={()=>setIsHovered(false)}
                    >
                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUFEiO-S1eKH8VZMxbQVuGWRim8MF8XF8ZW0AtL6lyIgrNdZngwwVWRFyZRN_V1g5jfMb6SzDUCEsFIugF_WkfnMgjHCuFIx4LnAP_44qQ6SWp_DaxEhjJoNjqRN7N68Bo6Lqg.webp?r=847" 
                        alt="" 
                        className="img mt-3 rounded"
                        />
                        {isHovered && (
                             <div className="button-container">
                                <button className="btn btn-primary me-3" style={{fontSize:"13px"}}>Xem Chi Tiết</button>
                                <button className="btn btn-primary" style={{fontSize:"13px"}}>Mua Vé</button>
                             </div>
                        )}
                    </div>

                    <div className="col-2  img-hover"
                    onMouseEnter={()=>setIsHovered(true)}
                    onMouseLeave={()=>setIsHovered(false)}
                    >
                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUFEiO-S1eKH8VZMxbQVuGWRim8MF8XF8ZW0AtL6lyIgrNdZngwwVWRFyZRN_V1g5jfMb6SzDUCEsFIugF_WkfnMgjHCuFIx4LnAP_44qQ6SWp_DaxEhjJoNjqRN7N68Bo6Lqg.webp?r=847" 
                        alt="" 
                        className="img mt-3 rounded"
                        />
                        {isHovered && (
                             <div className="button-container">
                                <button className="btn btn-primary me-3" style={{fontSize:"13px"}}>Xem Chi Tiết</button>
                                <button className="btn btn-primary" style={{fontSize:"13px"}}>Mua Vé</button>
                             </div>
                        )}
                    </div>

                    <div className="col-2  img-hover"
                    onMouseEnter={()=>setIsHovered(true)}
                    onMouseLeave={()=>setIsHovered(false)}
                    >
                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUFEiO-S1eKH8VZMxbQVuGWRim8MF8XF8ZW0AtL6lyIgrNdZngwwVWRFyZRN_V1g5jfMb6SzDUCEsFIugF_WkfnMgjHCuFIx4LnAP_44qQ6SWp_DaxEhjJoNjqRN7N68Bo6Lqg.webp?r=847" 
                        alt="" 
                        className="img mt-3 rounded"
                        />
                        {isHovered && (
                             <div className="button-container">
                                <button className="btn btn-primary me-3" style={{fontSize:"13px"}}>Xem Chi Tiết</button>
                                <button className="btn btn-primary" style={{fontSize:"13px"}}>Mua Vé</button>
                             </div>
                        )}
                    </div>

                    <div className="col-2  img-hover"
                    onMouseEnter={()=>setIsHovered(true)}
                    onMouseLeave={()=>setIsHovered(false)}
                    >
                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUFEiO-S1eKH8VZMxbQVuGWRim8MF8XF8ZW0AtL6lyIgrNdZngwwVWRFyZRN_V1g5jfMb6SzDUCEsFIugF_WkfnMgjHCuFIx4LnAP_44qQ6SWp_DaxEhjJoNjqRN7N68Bo6Lqg.webp?r=847" 
                        alt="" 
                        className="img mt-3 rounded"
                        />
                        {isHovered && (
                             <div className="button-container">
                                <button className="btn btn-primary me-3" style={{fontSize:"13px"}}>Xem Chi Tiết</button>
                                <button className="btn btn-primary" style={{fontSize:"13px"}}>Mua Vé</button>
                             </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}