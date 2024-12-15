import React, { useEffect, useState } from 'react';
import ModalChair from './ModalChair';
import Food from './Food';
export default function ModalBuyTicket({ isOpen, movieShowTime}) {
   
    const [typeRoom, setTypeRoom] = useState(null);
    const [chairs, setChairs] = useState([]);
    const [showTimeId, setShowTimeId] = useState(null);
    const [movieId, setMovieId] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [foods, setFoods] = useState([]);
    const [orderded, setOrderded] = useState(null);
    const OpenModal = () => {
        setIsOpenModal(true);
    }

    const fetchFoods = () => {
        fetch('/foods')
            .then(response => response.json())
            .then(data => {
                setFoods(data);
            })
            .catch(err => console.error(err));
    }
 

    const GetShowTimeId = (id) => {
        setShowTimeId(id);
    }

    const GetTypeRoom = (id) => {
        setTypeRoom(id);
    }
    
    const GetIdMovie = (id) => {
        setMovieId(id);
    }

    const fetchChair = () => {
        fetch(`/chair/${typeRoom}`)
            .then(response => response.json())
            .then(data => {
                setChairs(data);
            })
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        if(typeRoom){
            fetchChair();
        }
        OpenModal();
        fetchFoods();
    }, [typeRoom, isOpenModal, foods]);
    return (
        <>
            <div className="modal fade" id={isOpen}>
            <div className="modal-dialog modal-xl">
                    <div className="modal-content" style={{backgroundColor:"beige"}}>
                        <div className="modal-body row gap-3 justify-content-between">                                                   
                                <div className="mt-4 col-3 ms-5">
                                    <p className="text-dark" style={{fontSize:"20px"}}>FilmSpot Cinema</p>
                                    <div>
                                        {movieShowTime && (
                                            movieShowTime.length > 0 ? (
                                                movieShowTime.map((item)=> (                                    
                                                    <div className="mt-3" >
                                                        <p>{item.room?.name_room || 'Phòng không xác định'}</p>
                                                        <button onClick={()=>{GetTypeRoom(item.id_room);GetShowTimeId(item.id); GetIdMovie(item.id_movie); OpenModal()}} data-bs-toggle="modal" data-bs-target="#modalChair" className='btn btn-light border rounded me-2'>{item.showtime}</button>                      
                                                    </div>
                                                ))
                                   
                                            ) : (
                                                <p>Không Có Suất Chiếu</p>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className='col-8'>
                                    <Food dbfoods={foods} orderded={orderded} setOrderded={setOrderded}/>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
                                                
            {isOpenModal && <ModalChair isOpen="modalChair" showChair = {chairs} idShowTime={showTimeId} idMovie={movieId}
            orderded ={orderded}
            />}
            
        </>
    );
}
