import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
    const [clickNav, setClickNav] = useState(false);


    const hanldeClick = (id) => {
        setClickNav(id)
    }

    const style = {
        backgroundColor: "#0085DB1F",
        borderRadius: "30px",
    }
    
    return (
        <>
            <nav className="navbar bg-light me-3 shadow"
             style={{height:"100vh", width:"300px", position:"fixed", margin: "16px 0 0 16px", maxWidth:"270px", borderRadius:"30px"}}>
                <div style={{ height: "calc(100vh - 50px)", overflowY: "auto", paddingRight: "8px" }}>
                <ul className="navbar-nav">
                    <li className="nav-item mb-2 nav-div m-0">
                        <Link to="/admin" className="navbar-brand mb-3">
                            <div className="d-flex align-items-center justify-content-center">
                            <img style={{width:"100px", height:"auto", mixBlendMode:"multiply", color:"white"}}
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3aKQFIa1eXQM0BHZdouMl2g8Y6_MISycrw&s" alt="" />
                            <p className="m-0">FilmSpot</p>
                            </div>
                        </Link>
                    </li>

                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'dashboard' ? 'active' : ''}`} onClick={()=>hanldeClick('dashboard')}>
                        <Link to="/admin" className="nav-link text-dark text-ssm">
                            Dashboard
                        </Link>
                    </li>
                    
                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'room' ? 'active' : ''}`} onClick={()=>hanldeClick('room')}>
                        <Link to="/admin/room" className="nav-link text-dark text-ssm">
                            Quản Lý Phòng Phim
                        </Link>
                    </li>


                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'director' ? 'active' : ''}`} onClick={()=>hanldeClick('director')}>
                        <Link to="/admin/director" className="nav-link text-dark text-ssm">
                            Quản Lý Đạo Diễn
                        </Link>
                    </li>

                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'actor' ? 'active' : ''}`} onClick={()=>hanldeClick('actor')}>
                        <Link to="/admin/actor" className="nav-link text-dark text-ssm">
                            Quản Lý Diễn Viên
                        </Link>
                    </li>


                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'movie' ? 'active' : ''}`} onClick={()=>hanldeClick('movie')}>
                        <Link to="/admin/movie" className="nav-link text-dark text-ssm">
                            Quản Lý Phim
                        </Link>
                    </li>
                    

                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'showtime' ? 'active' : ''}`} onClick={()=>hanldeClick('showtime')}>
                        <Link to="/admin/showtime" className="nav-link text-dark text-ssm">
                            Quản Lý Suất Chiếu
                        </Link>
                    </li>

                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'detail' ? 'active' : ''}`} onClick={()=>hanldeClick('detail')}>
                        <Link to="/admin/detailmovie" className="nav-link text-dark text-ssm">
                            Quản Lý Chi Tiết Phim
                        </Link>
                    </li>

                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'typechair' ? 'active' : ''}`} onClick={()=>hanldeClick('typechair')}>
                        <Link to="/admin/typechair" className="nav-link text-dark text-ssm">
                            Quản Lý Loại Ghế
                        </Link>
                    </li>

                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'chair' ? 'active' : ''}`} onClick={()=>hanldeClick('chair')}>
                        <Link to="/admin/chair" className="nav-link text-dark text-ssm">
                            Quản Lý Ghế 
                        </Link>
                    </li>

                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'ticket' ? 'active' : ''}`} onClick={()=>hanldeClick('ticket')}>
                        <Link to="/admin/ticket" className="nav-link text-dark text-ssm">
                            Quản Lý Vé
                        </Link>
                    </li>

                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'food' ? 'active' : ''}`} onClick={()=>hanldeClick('food')}>
                        <Link to="/admin/food" className="nav-link text-dark text-ssm">
                            Quản Lý ComboFood
                        </Link>
                    </li>

                    <li className={`nav-item mb-2 nav-div m-0 ${clickNav == 'userfood' ? 'active' : ''}`} onClick={()=>hanldeClick('userfood')}>
                        <Link to="/admin/userfood" className="nav-link text-dark text-ssm">
                            Quản Lý Combo Được Mua
                        </Link>
                    </li>
                
                </ul>
                </div>
            </nav>
        </>
    )
}