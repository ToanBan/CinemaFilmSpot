import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ModalBuyTicket from "./ModalButTicket";
export default function Popular({ movies }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6; 
    const urlPath = "https://img.ophim.live/uploads/movies/";

    const handleNextPage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage >= movies.length ? 0 : prevIndex + itemsPerPage
        );
    };

    const handlePrevPage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - itemsPerPage < 0 ? 0 : prevIndex - itemsPerPage
        );
    };

    const translateXValue = -(currentIndex * (100 / itemsPerPage));

    return (
        <div className="container mt-5">
            <h3 className="text-white">Chỉ Có Trên FilmSpot</h3>
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
                            />
                            {hoveredIndex === index && (
                                <div className="button-container" style={{ maxWidth: '100%', textAlign: 'center' }}>
                                    <p className="text-center text-white fw-bold" style={{fontSize:"11px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.name_movie}</p>
                                    <a href={`/movies/${item.id_movie}`} className="btn btn-primary me-3" style={{ fontSize: "13px" }}>Xem Chi Tiết</a>
                                    <button data-bs-toggle="modal" data-bs-target="#modalOnly" className="btn btn-primary" style={{ fontSize: "13px" }}>Mua Vé</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleNextPage} className="button-nextt btn btn-secondary mt-3 icon-next-prev">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button onClick={handlePrevPage} className="button-prevv btn btn-secondary mt-3 icon-next-prev">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <ModalBuyTicket isOpen="modalOnly"/>
        </div>
    );
}
