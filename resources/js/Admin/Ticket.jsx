import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
export default function Ticket(){
    const [bills, setBills] = useState([]);

    const fetchBill = () => {
        fetch('/bills')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBills(data);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchBill();
    }, []);

    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className='mt-4'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Mã Hoá Đơn</th>     
                                <th>Khách Hàng</th>
                                <th>Số Ghế</th>
                                <th>Bộ Phim</th>
                                <th>Suất Chiếu</th>
                                <th>Tổng Tiền</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {bills.length > 0 ? (
                                bills.map((item, index) => (
                                    <tr>
                                        <td>Hoá Đơn {index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.chair_id}</td>
                                        <td>{item.name_movie}</td>
                                        <td>{item.showtime}</td>
                                        <td>{item.total_price}</td>
                                        <td><button className="btn btn-danger">XOÁ</button></td>
                                        <td><button className="btn btn-primary">SỬA</button></td>
                                    </tr>
                                ))
                            ):(
                                <p>Đang Tải Dữ Liệu</p>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
    
}