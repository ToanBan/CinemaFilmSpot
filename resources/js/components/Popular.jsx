import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Search from "./Search";
import ModalBuyTicket from "./ModalButTicket";

export default function Popular({ movies }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6; 
    const urlPath = "https://img.ophim.live/uploads/movies/";
    const [movieIdShow, setMovieIdShow] = useState(null);
    const [movieShowTime, setMovieShowTime] = useState([]);  
    const UrlPathMain = "http://127.0.0.1:8000/storage/temp_images/";
    const handleOpenId = (id) => {
        setMovieIdShow(id);   
    }

    const handleNextPage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage >= movies.length ? 0 : prevIndex + itemsPerPage
        );
    };

    const handlePrevPage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - itemsPerPage <= 0 ? 0 : prevIndex - itemsPerPage
        );
    };

    const translateXValue = -(currentIndex * (100 / itemsPerPage));

    useEffect(()=>{
        if(movieIdShow){
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
                console.log(data);
                setMovieShowTime(data);
            })
            .catch(err => console.error(err));
        }
    }, [movieIdShow]);

   
    return (
        <div className="container mt-5">

            <Search/>
            <h3 className="text-white">Hiện Đang Thịnh Hành</h3>
            <div className="container-flex">
                <div
                    className="movie-list"
                    style={{
                        transform: `translateX(${translateXValue}%)`,
                    }}
                >
                    {movies.map((item, index) => (
                        <div 
                            className="col-sm-2 img-hover" 
                            key={item.id}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img 
                                src={`${urlPath}${item.image_movie}`} 
                                alt={item.name_movie} 
                                className="img mt-3 rounded" 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `${UrlPathMain}${item.image_movie}`;
                                }}
                                
                            />
                            {hoveredIndex === index && (
                                <div className="button-container">
                                    <p className="text-center text-white fw-bold" style={{fontSize:"11px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.name_movie}</p>
                                    <a href={`/movies/${item.id_movie}`} className="btn btn-primary me-3" style={{ fontSize: "13px" }}>Xem Chi Tiết</a>
                                    <button onClick={()=>handleOpenId(item.id_movie)} data-bs-toggle="modal" data-bs-target="#modalPopular" className="btn btn-primary" style={{ fontSize: "13px" }}>Mua Vé</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleNextPage} className="button-next btn btn-secondary mt-3 icon-next-prev">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button onClick={handlePrevPage} className="button-prev btn btn-secondary mt-3 icon-next-prev">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <ModalBuyTicket isOpen="modalPopular" movieShowTime={movieShowTime}/>
        </div>
    );
}
