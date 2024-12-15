import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch("/auth/check")
            .then(response => response.json())
            .then(data => {
                if(data.authenticated){
                    setUserName(data.user.name);
                    console.log(data.user.name);
                }
            }).catch(err => console.error(err))
    }, [])

    const handleLogout = () => {
        fetch('/logout', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                setUser(false); 
                setUserName('');
                window.location.href = '/'; 
            }
        })
        .catch(err => console.log(err));
    };


    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav w-100 d-flex align-items-center">
                            <li className="nav-item">
                                <Link to='/' className="nav-link fs-1 fst-italic" style={{ color: "chartreuse" }}>FilmSpot</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/food' className="nav-link text-white fs-5">Food</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to='/member' className="nav-link dropdown-toggle text-white fs-5" id="memberDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Member</Link>
                                <ul className="dropdown-menu bg-light" aria-labelledby="memberDropdown">
                                    <li><Link to='/member/benefit' className="dropdown-item hover">Benefit</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {userName ? (
                                <li className="nav-item ms-auto dropdown btn-ab">
                                <a href="#" data-bs-toggle ="dropdown" className="button text-decoration-none nav-link dropdown-toggle">{userName}</a>
                                <ul className="dropdown-menu">
                                    <li><button onClick={handleLogout} className="dropdown-item">Logout</button></li>
                                </ul>
                                </li>
                            ):(
                                <li className="nav-item ms-auto">
                                    <a href="/login" className="button text-decoration-none">Đăng Nhập</a>
                                </li>

                    )}
                </div>
            </nav>
        </>
    );
}