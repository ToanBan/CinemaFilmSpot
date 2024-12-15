import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalBuyTicket from "./ModalButTicket";
export default function MoviesDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    const urlPath = "https://img.ophim.live/uploads/movies";
    const [movieIdShow, setMovieIdShow] = useState(null);
    const [movieShowTime, setMovieShowTime] = useState([]); 
    const [nameActor, setNameActor] = useState([]); 
    const UrlPathMain = "http://127.0.0.1:8000/storage/temp_images/";
    const fetchMovieTimeShow = () => {
        fetch(`/showtime/${id}`, {
            method : "GET"
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Lỗi...");
            }
            return response.json();
        })
        .then(data => {
            setMovieShowTime(data);
        })
        .catch(err => console.error(err));
    }


    const fetchMovieDetail = () => {
        fetch(`/movieactor/${id}`, {
            method:"GET",
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setNameActor(data);
        })
        .catch(err => console.error(err));
    }

    const fetchMovieById = () => {
        fetch(`/movie/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching data...");
            }
            return response.json();
        })
        .then(data => {     
            setMovie(data);         
        })
        .catch(err => console.error(err));
    }


    const handleOpenShowMovie = (id) => {
        setMovieIdShow(id);
    }

    useEffect(() => {
        if (id) {
            fetchMovieById();
            fetchMovieDetail();
        }
        fetchMovieTimeShow();
    }, [id]);


    const NameActor = nameActor.map(item => item.actor.name_actor).join(', ');
    

    return (
        <>
            <div className="container">
                <div className="border-bottom">
                    <h3 className="text-white mb-4">Nội Dung Phim</h3>
                </div>
                {movie && movie.length > 0 ? (
                    <div className="d-flex gap-5 mt-5">
                        <div>
                            <img className="img" src={`${urlPath}/${movie[0].movie.image_movie}`} alt={movie[0].movie.name_movie}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `${UrlPathMain}${movie[0].movie.image_movie}`;
                            }}
                            />
                        
                        </div>
                        <div>
                            <h3 className="movie-name text-white">{movie[0].movie.name_movie}</h3>
                            <p className="text-white"><strong>Đạo diễn: </strong>{movie[0].movie.director.name_director}</p>
                            <p className="text-white"><strong>Diễn Viên: </strong>{NameActor}</p>
                            <p className="text-white"><strong>Lang: </strong>{movie[0].start}</p>
                            <p className="text-white"><strong>Thời Lượng: </strong>{movie[0].duration}</p>
                            <p className="text-white"><strong>Khu Vực: </strong>{movie[0].area}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-white">Đang tải dữ liệu...</p>
                )}
                <button onClick={()=>handleOpenShowMovie(movie[0].id_movie)} data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-danger mt-3 mb-5">Mua Vé</button>

                <div className="mb-5 border-bottom">
                    <p className="text-white mb-4">{movie?.content}</p>
                </div>
                
                <ModalBuyTicket isOpen="myModal" movieShowTime={movieShowTime}/>
                
            </div>
        </>
    );
}
