import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ModalBuyTicket from "./ModalButTicket";

export default function MovieSearch() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTemp = queryParams.get('query');   
    const [movie, setMovie] = useState([]);
    const urlPath = "https://img.ophim.live/uploads/movies";
    const [movieIdShow, setMovieIdShow] = useState(null);
    const [movieShowTime, setMovieShowTime] = useState([]); 
    const UrlPathMain = "http://127.0.0.1:8000/storage/temp_images/"; 
    const [nameActor, setNameActor] = useState([]);
    const handleOpenId = (id) => {
        setMovieIdShow(id);
    }
   
   
    const handleSearch = () => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/search`, {
            method:"POST",
            body: JSON.stringify({search: searchTemp}),
            headers:{
                'Content-Type' : 'application/json',
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Lỗi...");
            }
            return response.json();
        })
        .then(data => {
            setMovie(data)
            setNameActor(data[0].movie_actor);
            console.log(data);
        })
        .catch(err => console.error(err));
    }


    const fetchMovieShow = () => {
        fetch(`/showtime/${movieIdShow}`, {
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
   
    useEffect(()=>{
        handleSearch();
    }, []);

    useEffect(()=>{
        if(movieIdShow){
            fetchMovieShow();
        }
    }, [movieIdShow]);

    const NameActor = nameActor.map((item) => item.actor.name_actor).join(", ");
    console.log(NameActor);

    return (
        <>
            <div className="container">
                <div className="border-bottom">
                    <h3 className="text-white mb-4">Kết Quả Tìm Kiếm</h3>
                </div>
                {movie.map((item) => (
                    <div>
                        <div className='d-flex gap-5 mt-5' >
                            <div>
                                <img className="img" src={`${urlPath}/${item.image_movie}`} 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `${UrlPathMain}${item.image_movie}`;
                                }}/>
                            </div>
                            <div>
                                <h3 className="movie-name text-white">{item.name_movie}</h3>
                                <p className="text-white"><strong>Đạo diễn: {item.director.name_director}</strong></p>
                                <p className="text-white"><strong>Diễn Viên:</strong> {NameActor}</p>
                                <p className="text-white"><strong>Lang: </strong> {item.movie_actor[0].start}</p>
                                <p className="text-white"><strong>Thời Lượng: </strong> {item.movie_actor[0].duration}</p>
                                <p className="text-white"><strong>Khu Vực: </strong> {item.movie_actor[0].area} </p>
                            </div>
                        </div>
                        <button onClick={()=>handleOpenId(item.id_movie)} data-bs-toggle="modal" data-bs-target="#modalSearch" className="btn btn-danger mt-3 mb-5">Mua Vé</button>
                    </div>      
                ))}
                <ModalBuyTicket isOpen="modalSearch" movieShowTime={movieShowTime}/>
            </div>
        </>
    );
}
