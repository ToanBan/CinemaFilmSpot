import React, { useState, useEffect } from "react";
import ModalChair from "./ModalChair";



export default function Food({ dbfoods, orderded, setOrderded }) {
    const [counts, setCounts] = useState({});
    const urlPath = "http://127.0.0.1:8000/storage/images_food/";
    const [selectedFood, setSelectedFood] = useState(null); 
    const [quantityFood, setQuantityFood] = useState(null);
    const [isOpenModalFromFood, setIsOpenModalFromFood] = useState(false);
    const OpenModal = () => {
        setIsOpenModalFromFood(true);
    }

    const SendOrderFood = (foodId, quantity, name, price) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch('/userfood', {
            method: "POST",
            body: JSON.stringify({ selectedFood: foodId, quantityFood: quantity , nameFood : name, priceFood: price}),
            headers: {
                'X-CSRF-TOKEN': csrfTokenMeta.content,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
           
            setOrderded(data);
        })
        .catch(err => console.error(err));
    }

    

    const IncrementCount = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 1) + 1,
        }));
    };

    const DecrementCount = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 1) - 1, 1),
        }));
    };

    const RemoveOrderFood = () => {
        setSelectedFood(null);
    }

    const handleSelectedFood = (foodId, name, price) => {
        const quantity = counts[foodId] || 1;
        setSelectedFood(foodId);
        setQuantityFood(quantity);
        SendOrderFood(foodId, quantity, name, price);
    } 
  
   

    return (
        <>
             {dbfoods.map((item) => (
                                <div
                                    key={item.id}
                                    className="border mt-3"
                                    style={{ borderRadius: "30px" }}
                                >
                                    <div
                                        className="d-flex gap-3 p-3"
                                        style={{
                                            backgroundColor: "burlywood",
                                            borderRadius: "30px",
                                        }}
                                    >
                                        <div>
                                            <img
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                    mixBlendMode: "multiply",
                                                }}
                                                className="rounded"
                                                src={`${urlPath}${item.image_combo_food}`}
                                                alt=""
                                            />
                                        </div>
                                        <div className="ms-3 item-right">
                                            <p className="text-dark">{item.name_combo_food}</p>
                                            <p className="text-dark">{item.des_combo_food}</p>
                                            <p className="text-dark">{item.price_combo_food}</p>
                                            <div className="btn-group me-3">
                                                <button
                                                    onClick={() => DecrementCount(item.id)}
                                                    type="button"
                                                    className="btn btn-light"
                                                >
                                                    -
                                                </button>
                                                <button type="button" className="btn btn-light">
                                                    {counts[item.id] || 1}
                                                </button>
                                                <button
                                                    onClick={() => IncrementCount(item.id)}
                                                    type="button"
                                                    className="btn btn-light"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            {selectedFood === item.id ? (
                                                <button onClick={RemoveOrderFood} className="btn btn-secondary">
                                                     Bỏ Chọn
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={()=>handleSelectedFood(item.id, item.name_combo_food, item.price_combo_food)}
                                                    className="btn btn-success"
                                                >
                                                    Chọn
                                                </button>
)}
                                        </div>
                                    </div>
                                </div>
                            ))}
        </>
    )
}
