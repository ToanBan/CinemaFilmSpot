import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
export default function Chair(){
    const [chair, setChair] = useState([]);
    const [room, setRoom] = useState([]);
    const [typeChairs, setTypeChairs] = useState([]);
    const [editChair, setEditChair] = useState(null);

    const EditChair = (item) => {
        setEditChair(item);
    }

    const fetchChair = () => {
        fetch("/chair")
            .then(response => response.json())
            .then(data => {
                 console.log(data.rooms);
                 setRoom(data.rooms);
                 console.log(data.chairs);
                 setChair(data.chairs);
                 setTypeChairs(data.typechairs);
                 console.log(data.typechairs);
            })
            .catch(err => console.error(err))
    }

    const AddChair = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch("/chair", {
            method: "POST",
            body: formData,
            headers: {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Successful");
        })
        .catch(err => console.error(err));
    }

    const DeleteChair = (id) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/chair/${id}`, {
            method: "DELETE",
            headers: {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("DELETE SUCCESSFUL");
            fetchChair();
        })
        .catch(err => console.error(err));
    }

    const UpdateChair = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch(`/chair/${editChair.id}`, {
            method: "POST", 
            body: formData, 
            headers: {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
                'X-HTTP-Method-Override': 'PUT'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("UPDATE SUCCESSFUL");
            fetchChair();
        })
        .catch(err => console.error(err));
    }

    useEffect(()=> {
        fetchChair();
    }, [chair]);

    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className='mt-4'>
                    <div style={{borderRadius:'30px', overflow:"hidden"}} className="shadow">
                        <div className="border-bottom">
                            <p style={{padding:"10px 12px"}} className="m-0">Quản Lý Đạo Diễn</p>
                        </div>
                        <form method="POST" onSubmit={AddChair} encType='multipart-data' style={{padding:"14px 16px"}}>
                            <div className="d-flex align-items-center mt-3">
                                <label className="col-2" htmlFor="id_room">Chọn Phòng</label>
                                <select name="id_room" id="id_room" className="form-control col-10">
                                    <option value="">Chọn Phòng</option>
                                    {room.map((item) => (
                                        <option value={item.id}>{item.name_room}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="d-flex align-items-center mt-3">
                                <label className="col-2" htmlFor="id_chair">Chọn Loại Ghế</label>
                                <select name="id_chair" id="id_chair" className="form-control col-10">
                                    <option value="">Chọn Loại Ghế</option>
                                    {typeChairs.map((item)=>(
                                        <option key={item.id} value={item.id}>{item.name_type_chair}</option>
                                    ))}
                                </select>
                            </div>           

                            <div className="d-flex align-items-center mt-3">
                                <label className="col-2" htmlFor="name_chair">Tên Ghế</label>
                                <input className='form-control col-10' type="text" placeholder='Nhập Tên Ghế' name='name_chair' id='name_chair' />
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
                                <th>Tên Phòng</th>
                                <th>Tên Ghế</th>
                                <th>Loại Ghế</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {chair.length > 0 ? (
                                chair.map((item) => (
                                    <tr>
                                        <td>{item.room.name_room}</td>
                                        <td>{item.name_chair}</td>
                                        <td>{item.typechair.name_type_chair}</td>
                                        <td><button onClick={()=>DeleteChair(item.id)} className="btn btn-danger">XOÁ</button></td>
                                        <td><button onClick={()=>EditChair(item)} data-bs-toggle="modal" data-bs-target="#modalChairEdit" className="btn btn-primary">SỬA</button></td>
                                    </tr>
                                ))
                            ):(
                                <p>Đang Tải Dữ Liệu</p>
                            )}
                        </tbody>
                    </table>

                    <div className="modal fade" id="modalChairEdit">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>EDIT CHAIR</h4>
                                </div>

                                {editChair && (
                                    <div className="modal-body">
                                    <form method="POST" onSubmit={UpdateChair} encType='multipart-data'>
                                        <div className="d-flex align-items-center mt-3">
                                            <label htmlFor="eid_room">Chọn Phòng</label>
                                            <select value={editChair.id_room} onChange={(e)=>setEditChair({...editChair, id_room:e.target.value })} name="eid_room" id="eid_room" className="form-control">
                                                <option value="">Chọn Phòng</option>
                                                {room.map((item) => (
                                                    <option value={item.id}>{item.name_room}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <label htmlFor="ename_chair">Tên Ghế</label>
                                            <input onChange={(e)=>setEditChair({...editChair, name_chair: e.target.value})} value={editChair.name_chair} className='form-control ms-3' type="text" placeholder='Nhập Tên Ghế' name='ename_chair' id='ename_chair' />
                                        </div>

                                
                                        <div className="mt-3">
                                            <button type='submit' className='btn btn-dark ms-3' style={{ float: 'right' }}>UPDATE</button>
                                        </div>
                                    
                                    </form>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}