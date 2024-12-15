import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";



export default function Food(){
    const [foods, setFoods] = useState([]);
    const [editFood, setEditFood] = useState(null);
    const [editFoodId, setEditFoodId] = useState(null);
    const urlPath = 'http://127.0.0.1:8000/storage/images_food/'
    const fetchFoods = () => {
        fetch('/foods')
            .then(response => response.json())
            .then(data => {
                setFoods(data);
            })
    }

    const AddFood = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch('/foods', {
            method: "POST", 
            body: formData,
            headers: {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
            .then(response => response.json)
            .then(data => {
                alert("Add Successful");
                fetchFoods();
                
            })
            .catch(err => console.error(err));
    }
    
    const DeleteFood = (id) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/foods/${id}`, {
            method:"DELETE",
            headers: {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('deleted successful');
            fetchFoods();
        })
        .catch(err => console.error(err));
    }

    const EditFood = (item) => {
        setEditFood(item);
        setEditFoodId(item.id);
    }

    const UpdateFood = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch(`/foods/${editFoodId}`, {
            method :"POST",
            body: formData,
            headers : {
                'X-CSRF-TOKEN' :csrfTokenMeta.content,
                'X-HTTP-Method-Override' : "PUT"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('updated successful');
            fetchFoods();
        })
        .catch(err => console.error(err));
    }

    useEffect(()=> {
        fetchFoods();
    }, []);

    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className="mt-4">
                    <div style={{borderRadius:'30px'}} className="shadow">
                        <div className="border-bottom">
                            <p style={{padding:"10px 12px"}} className="m-0">Quản Lý Combo Food</p>
                        </div>
                        <form onSubmit={AddFood} encType="multipart-data" style={{padding:"14px 16px", overflow:"hidden"}}>
                            <div className="d-flex align-items-center">
                                <label className="col-2" htmlFor="name_combo_food">Tên Combo</label>
                                <input
                                    className="col-10 form-control"
                                    type="text"
                                    placeholder="Nhập Tên Combo"
                                    name="name_combo_food"
                                    id="name_combo_food"
                                />
                            </div>

                            <div className="d-flex mt-3 align-items-center">
                                <label className="col-2" htmlFor="des_combo_food">Mô Tả Combo</label>
                                <textarea className="form-control" name="des_combo_food" id="des_combo_food" cols="30" rows="10"></textarea>
                            </div>

                            <div className="d-flex mt-3 align-items-center">
                                <label className="col-2" htmlFor="price_combo_food">Giá Combo</label>
                                <input
                                    className="col-10 form-control"
                                    type="text"
                                    placeholder="Nhập Tên Combo"
                                    name="price_combo_food"
                                    id="price_combo_food"
                                />
                            </div>

                            <div className="d-flex mt-3 align-items-center">
                                <label className="col-2" htmlFor="quantity_combo_food">Số Lượng</label>
                                <input
                                    className="col-10 form-control"
                                    type="text"
                                    placeholder="Nhập Số Lượng Combo"
                                    name="quantity_combo_food"
                                    id="quantity_combo_food"
                                />
                            </div>

                            <div className="d-flex mt-3 align-items-center">
                                <label className="col-2" htmlFor="image_combo_food">Hình Ảnh</label>
                                <input
                                    className="col-10 form-control"
                                    type="file"
                                    name="image_combo_food"
                                    id="image_combo_food"
                                />
                            </div>

                            <div className="mt-3">
                                <button type='submit' className='btn btn-dark' style={{ float: 'right' }}>SEND</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên Combo</th>
                                <th>Mô Tả</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Hình Ảnh</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {foods.length > 0 ? (
                                foods.map((item) => (
                                    <tr>
                                        <td>{item.name_combo_food}</td>
                                        <td>{item.des_combo_food}</td>
                                        <td>{item.price_combo_food}</td>
                                        <td>{item.quantity_combo_food}</td>
                                        <td><img style={{width:"100px", height:"auto"}} src={`${urlPath}${item.image_combo_food}`} alt="" /></td>
                                        <td><button onClick={()=>DeleteFood(item.id)} className="btn btn-danger">XOÁ</button></td>
                                        <td><button data-bs-target="#editFood"
                                        data-bs-toggle="modal" 
                                        onClick={()=>EditFood(item)}
                                        className="btn btn-primary">SỬA</button></td>
                                    </tr>
                                ))
                            ):(
                                <p>Đang Tải Dữ Liệu</p>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="modal" id="editFood">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Edit Combo Food</h4>
                            </div>

                            <div className="modal-body">
                                {editFood && (
                                        <form onSubmit={UpdateFood} encType="multipart-data" style={{padding:"14px 16px", overflow:"hidden"}}>
                                            <div className="d-flex align-items-center">
                                                <label className="col-2" htmlFor="name_combo_food">Tên Combo</label>
                                                <input onChange={(e)=>setEditFood({...editFood, name_combo_food:e.target.value})}
                                                    className="col-10 form-control"
                                                    type="text"
                                                    placeholder="Nhập Tên Combo"
                                                    name="name_combo_food"
                                                    id="name_combo_food"
                                                    value={editFood.name_combo_food}
                                                />
                                            </div>
        
                                            <div className="d-flex mt-3 align-items-center">
                                                <label className="col-2" htmlFor="des_combo_food">Mô Tả Combo</label>
                                                <textarea 
                                                onChange={(e)=>setEditFood({...editFood, des_combo_food:e.target.value})}
                                                value={editFood.des_combo_food}
                                                className="form-control" name="des_combo_food" id="des_combo_food" cols="30" rows="10"></textarea>
                                            </div>
        
                                            <div className="d-flex mt-3 align-items-center">
                                                <label className="col-2" htmlFor="price_combo_food">Giá Combo</label>
                                                <input onChange={(e)=>setEditFood({...editFood, price_combo_food:e.target.value})}
                                                    value={editFood.price_combo_food}
                                                    className="col-10 form-control"
                                                    type="text"
                                                    placeholder="Nhập Tên Combo"
                                                    name="price_combo_food"
                                                    id="price_combo_food"
                                                />
                                            </div>

                                            <div className="d-flex mt-3 align-items-center">
                                                <label className="col-2" htmlFor="quantity_combo_food">SL Combo</label>
                                                <input onChange={(e)=>setEditFood({...editFood, quantity_combo_food:e.target.value})}
                                                    value={editFood.quantity_combo_food}
                                                    className="col-10 form-control"
                                                    type="text"
                                                    placeholder="Nhập Tên Combo"
                                                    name="quantity_combo_food"
                                                    id="quantity_combo_food"
                                                />
                                            </div>
                                            
        
                                            <div className="d-flex mt-3 align-items-center">
                                                <label className="col-2" htmlFor="image_combo_food">Hình Ảnh</label>
                                                <input onChange={(e)=>setEditFood({...editFood, image_combo_food:e.target.value})}
                                                    className="col-10 form-control"
                                                    type="file"              
                                                    name="image_combo_food"
                                                    id="image_combo_food"
                                                />
                                            </div>
        
                                            <div className="mt-3">
                                                <button type='submit' className='btn btn-dark' style={{ float: 'right' }}>SEND</button>
                                            </div>
                                        </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}