import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from "./components/Navigation";
import Address from "./pages/Address"
import Home from "./pages/Home";
import Member from "./pages/Member";
import Food from "./components/Food";
import "../css/app.css"
import "../css/responsive.css"
import Footer from "./components/Footer";
import Benefit from "./components/Benefit";
import MoviesDetails from "./components/MoviesDetails";
import MovieSearch from "./components/MovieSearch"
import Success from "./components/Success";
function App(){
    return (
        <>
            <Router>
                <Navigation/>
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="food" element={<Food/>}></Route>
                  <Route path="member" element={<Member/>}></Route>
                  <Route path="member/benefit" element={<Benefit/>}></Route>
                  <Route path="movies/:id" element={<MoviesDetails/>}></Route>
                  <Route path="/success" element={<Success/>}></Route>
                  <Route path="/search" element={<MovieSearch/>}></Route>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

const container = document.querySelector('.root');
const root = ReactDOM.createRoot(container);
root.render(<App/>)