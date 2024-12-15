import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Popular from "../components/Popular";
import Only from "../components/Only";
import Event from "../components/Event";

export default function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [onlyMovies, setOnlyMovies] = useState([]);

    const fetchMoviesData = () => {
        fetch("/moviesdb", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Lỗi...");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.movies);
            setPopularMovies(data.movies.slice(0, 12)); 
            setOnlyMovies(data.movies.slice(12, 24));   
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchMoviesData();
    }, []);

    return (
        <>
            <Title />
            <Popular movies={popularMovies} />
            <Only movies={onlyMovies} />
            <Event />
        </>
    )
}
