import React, { useEffect, useState } from 'react'
import Toolbar from './Toolbar';
export default function TypeChair(){
    const [typeChair, setTypeChair] = useState([]);
    const [editTypeChair, setEditTypeChair] = useState(null);

    const EditTypeChair = (item) => {
        setEditTypeChair(item);
    }

    const fetchTypeChair = () => {
        fetch('/typechair')
            .then(response => response.json())
            .then(data => {
                setTypeChair(data);
            })
            .catch(err => console.error(err))
    }

    const AddTypeChair = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');

        fetch("/typechair", {
            method: "POST",
            body: formData,
            headers: {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Lỗi....");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert("Add Successful");
        })
        .catch(err => console.error(err));
    }

    const DeleteTypeChair = (id) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/typechair/${id}`, {
            method: "DELETE",
            headers: {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            alert("DELETE SUCCESSFUL");
            fetchTypeChair();
        })
        .catch(err => console.log(err));
    }

    const UpdateTypeChair = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/typechair/${editTypeChair.id}`, {
            method: "POST", 
            body: formData, 
            headers : {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
                'X-HTTP-Method-Override' : "PUT",
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('UPDATE SUCCESSFUL');
            fetchTypeChair();
        })
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchTypeChair();
    }, []);

    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className='mt-4'>
                    <div style={{borderRadius:'30px', overflow:"hidden"}} className="shadow">
                        <div className="border-bottom">
                            <p style={{padding:"10px 12px"}} className="m-0">Quản Lý Loại Ghế</p>
                        </div>
                        <form method="POST" onSubmit={AddTypeChair} encType='multipart-data' style={{padding:"14px 16px"}}>
                            <div className="d-flex align-items-center">
                                <label className='col-2' htmlFor="name_type_chair">Tên Loại Ghế</label>
                                <input className='form-control col-10' type="text" placeholder='Nhập Tên Loại Ghế' name='name_type_chair' id='name_type_chair' />
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className='col-2' htmlFor="price_chair">Giá Ghế</label>
                                <input className='form-control col-10' type="text" placeholder='Nhập Giá Ghế' name='price_chair' id='price_chair' />
                            </div>

                    
                            <div className="mt-3">
                                <button type='submit' className='btn btn-dark ms-3' style={{ float: 'right' }}>SEND</button>
                            </div>
                        
                        </form>
                    </div>
                </div>

                <div className='mt-4'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Tên Loại Ghế</th>
                                <th>Giá Ghế</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {typeChair.length > 0 ? (
                                typeChair.map((item) => (
                                    <tr>
                                        <td>{item.name_type_chair}</td>
                                        <td>{item.price_chair}</td>
                                        <td><button onClick={()=>DeleteTypeChair(item.id)} className='btn btn-danger'>XOÁ</button></td>
                                        <td><button onClick={()=>EditTypeChair(item)} data-bs-toggle="modal" data-bs-target="#typechair" className='btn btn-primary'>SỬA</button></td>
                                    </tr>
                                ))
                            ) : (
                                <p>Đang Tải Dữ Liệu</p>
                            )}
                        </tbody>
                    </table>

                    <div className="modal fade" id='typechair'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>EDIT TYPE CHAIR</h4>
                                </div>

                                <div className="modal-body">
                                    {editTypeChair && (
                                        <form method="POST" onSubmit={UpdateTypeChair} encType='multipart-data'>
                                            <div className="d-flex align-items-center">
                                                <label htmlFor="ename_type_chair">Tên Loại Ghế</label>
                                                <input onChange={(e) => setEditTypeChair({...editTypeChair, name_type_chair: e.target.value})} value={editTypeChair.name_type_chair} className='form-control ms-3' type="text" placeholder='Nhập Tên Loại Ghế' name='ename_type_chair' id='ename_type_chair' />
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <label htmlFor="eprice_chair">Giá Ghế</label>
                                                <input onChange={(e) => setEditTypeChair({...editTypeChair, price_chair: e.target.value})} value={editTypeChair.price_chair} className='form-control ms-3' type="text" placeholder='Nhập Giá Ghế' name='eprice_chair' id='eprice_chair' />
                                            </div>

                                    
                                            <div className="mt-3">
                                                <button type='submit' className='btn btn-dark ms-3' style={{ float: 'right' }}>SEND</button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}