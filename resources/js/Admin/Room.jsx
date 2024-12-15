import React, { useEffect, useState } from 'react'
import Toolbar from './Toolbar';
import { data } from 'autoprefixer';
export default function Room (){
    const [rooms, setRooms] = useState([]);
    const [editRoom, setEditRoom] = useState(null);
    const fetchRoom = () => {
        fetch('/rooms')
            .then(response => response.json())
            .then(data => {
                setRooms(data.rooms);
            })
            .catch(err => console.error(err));
    }


    const AddRoom = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch("/rooms", {
            method:"POST",
            body:formData,
            headers:{
                "X-CSRF-TOKEN": csrfTokenMeta.content,
            },
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Lỗi...");
            }
            return response.json();
        })
        .then(data => {
            alert('thêm thành công');
        }).catch(err => console.error(err));
    };

    const DeleteRoom = (id) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/rooms/${id}`, {
            method : "delete", 
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Delete Successful');
            fetchRoom();
        })
        .catch(err => console.error(err));
    }

    const EditRoom = (item) => {
        setEditRoom(item);
    }

    const UpdateRoom = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/rooms/${editRoom.id}`, {
            method: 'POST', 
            body: formData,
            headers: {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
                'X-HTTP-Method-Override' : "PUT"
            }
        })
        .then(response => response.json())
        .then(data => {
            alert("Update successful");
            fetchRoom();
        })
        .catch(err => console.error(err));
    }

    useEffect(()=> {
        fetchRoom();
    }, [rooms]);
    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className='mt-4'>
                    <form onSubmit={AddRoom} method="POST" encType='multipart-data'>
                        <div className="d-flex align-items-center">
                            <label htmlFor="name_room">Phòng Phim</label>
                            <input className='form-control w-50 ms-3' type="text" placeholder='Nhập Tên Phòng Phim' name='name_room' id='name_room' />
                            <button type='submit' className='btn btn-dark ms-3'>SEND</button>
                        </div>  
                    </form>
                </div>

                <div className='mt-4'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã Phòng Phim</th>
                                <th>Tên Phòng Phim</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {rooms.length > 0 ? (
                                rooms.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name_room}</td>
                                        <td><button onClick={()=>DeleteRoom(item.id)} className='btn btn-danger'>XOÁ</button></td>
                                        <td><button onClick={()=>EditRoom(item)} data-bs-toggle="modal" data-bs-target="#editRooom" className='btn btn-primary'>SỬA</button></td>
                                    </tr>
                                ))
                            ): (
                                <p>Đang Tải Dữ Liệu</p>
                            )}
                        </tbody>
                    </table>

                    <div className="modal" id='editRooom'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>EDIT ROOM</h4>
                                </div>

                                <div className="modal-body">
                                    {editRoom && (
                                        <form onSubmit={UpdateRoom} method="POST" encType='multipart-data'>
                                            <div className="d-flex align-items-center">
                                                <label htmlFor="name_room">Phòng Phim</label>
                                                <input onChange={(e) => setEditRoom({...editRoom, name_room:e.target.value})} value={editRoom.name_room} className='form-control w-50 ms-3' type="text" placeholder='Nhập Tên Phòng Phim' name='name_room' id='name_room' />
                                            </div> 

                                            <div style={{float:"right"}}>
                                                <button type='submit' className='btn btn-dark ms-3'>UPDATE</button>
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