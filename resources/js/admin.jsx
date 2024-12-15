import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Admin/Navigation";
import Room from "./Admin/Room";
import Chair from "./Admin/Chair";
import Ticket from "./Admin/Ticket";
import Dashboard from "./Admin/Dashboard";
import MMovie from "./Admin/MMoive";
import Director from "./Admin/Director";
import Actor from "./Admin/Actor";
import DetailMovie from "./Admin/DetailMovie";
import ShowTime from "./Admin/ShowTime";
import TypeChair from "./Admin/TypeChair";
import Food from "./Admin/Food";
import UserFood from "./Admin/UserFood";
import "../css/app.css";

function Admin(){
    return (
        <>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/admin" element={<Dashboard/>}></Route>
                    <Route path="/admin/room" element={<Room/>}></Route>
                    <Route path="/admin/movie" element={<MMovie/>}></Route>
                    <Route path="/admin/director" element={<Director/>}></Route>
                    <Route path="/admin/actor" element={<Actor/>}></Route>
                    <Route path="/admin/showtime" element={<ShowTime/>}></Route>
                    <Route path="/admin/detailmovie" element={<DetailMovie/>}></Route>
                    <Route path="/admin/typechair" element={<TypeChair/>}></Route>
                    <Route path="/admin/chair" element={<Chair/>}></Route>
                    <Route path="/admin/ticket" element={<Ticket/>}></Route>
                    <Route path="/admin/food" element={<Food/>}></Route>
                    <Route path="/admin/userfood" element={<UserFood/>}></Route>
                </Routes>     
            </Router>
        </>
    )
}

const container = document.querySelector('.root-admin');
const root = ReactDOM.createRoot(container);
root.render(<Admin/>)

