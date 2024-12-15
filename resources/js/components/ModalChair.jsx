import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Food from "./Food";
export default function ModalChair({isOpen, showChair,  idShowTime, idMovie, orderded}) {
    const [chooseChair, setChooseChair] = useState([]); 
    const location = useLocation();
    const id_movie = location.pathname.split('/')[2] || idMovie;
    const [selectedChair, setSelectedChair] = useState([]);
    

    const GetSelectedChair = () => {
        fetch(`/chairs/selected/${id_movie}`)
            .then(response => response.json())
            .then(data => {
                setSelectedChair(data);
            })
            .catch(err => console.error(err));
    }

    const handle = (id) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch("/chair/datachairsid", {
            method: "POST",
            body: JSON.stringify({ chair_id: id}),
            headers: {
                "X-CSRF-TOKEN": csrfTokenMeta.content,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setChooseChair((prevChairs) => {
                    const exists = prevChairs.some((chair) => chair.id == data[0].id);
                    if (!exists) {
                        return [...prevChairs, data[0]];
                    } else {
                        return prevChairs.filter((chair) => chair.id !== data[0].id);
                    }
                });
            })
            .catch((err) => console.error(err));
    };

    


    const Cost = chooseChair.reduce((sum, item) => {
        return sum + (item.typechair?.price_chair || 0); 
    }, 0);

    const handleOrder = () => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch('/checkout', {
            method:"POST",
            body: JSON.stringify({listChair: chooseChair,  id_showtime: idShowTime, orderded: orderded}),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = data.url
        })
        .catch(err => console.error(err));
    }

  
    

    useEffect(()=>{
        GetSelectedChair();
    }, [selectedChair]);

    
    return (
        <>
            <div className="modal fade" id={isOpen}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="fs-title">Vui Lòng Chọn Ghế</p>
                        </div>

                        <div className="modal-body mt-3 mb-3">
                            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                                {showChair.map((item) => (
                                    <div
                                    onClick={() => !selectedChair.some((sel) => sel.chair_id === item.id) && handle(item.id)}
                                    className="square-sm"
                                    style={{
                                        backgroundColor: 
                                            chooseChair.some((chair) => chair.id === item.id) ||
                                            selectedChair.some((sel) => sel.chair_id === item.id)
                                                ? "red"
                                                : "aqua",
                                        cursor: selectedChair.some((sel) => sel.chair_id === item.id)
                                            ? "not-allowed"
                                            : "pointer",
                                        pointerEvents: selectedChair.some((sel) => sel.chair_id === item.id)
                                            ? "none"
                                            : "auto",
                                    }}
                                >
                                    <p className="text-chair">{item.name_chair}</p>
                                </div>
                                
                                ))}
                            </div>
                        </div>

                        <div className="modal-footer d-flex justify-content-between align-items-center">

                            <div className="d-flex justify-content-center align-items-center gap-2">
                                <p className="m-0">
                                    Cost: <strong>{Cost}</strong>
                                </p>
                                <button onClick={handleOrder} className="btn btn-success">Mua Vé</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
           

        </>
    );
}
