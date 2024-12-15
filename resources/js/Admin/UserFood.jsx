import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";

export default function UserFood(){
    const [userFood, setUserFood] = useState([]);

    const fetchUserFood = () => {
        fetch('/userfood')
            .then(response => response.json())
            .then(data => {setUserFood(data) ; console.log(data)})
            .catch(err => console.error(err))
    }

    useEffect(()=>{
        fetchUserFood();
    }, []);
    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className='mt-4'>
                    <p className="fs-title">Thống Kế Những Người Dùng Mua Combo</p>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Tên Khách Hàng</th>     
                                <th>Tên Combo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {userFood.length > 0 ? (
                                userFood.map((item) => 
                                <tr>
                                    <td>{item.user.name}</td>
                                    <td>{item.food.name_combo_food}</td>
                                </tr>)
                            ): (
                                <p>Đang Tải Dữ Liệu</p>
                            )}
                        </tbody>
                     
                    </table>

                </div>
            </div>
        </>
    )    
}