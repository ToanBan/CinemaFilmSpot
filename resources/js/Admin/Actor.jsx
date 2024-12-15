import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
export default function Actor(){
    const [actor, setActor] = useState([]);
    const [editActor, setEditActor] = useState(null);
    const [actorName, setActorName] = useState(null);
    const fectActor = () => {
        fetch("/actor")
            .then(response => {
                if(!response.ok){
                    throw new Error("Lỗi...");
                }
                return response.json();
            })
            .then(data => {
                setActor(data);
            })
            .catch(err => console.error(err));
    }


    const AddActor = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch("/dienvien", {
            method:"POST",
            body:formData,
            headers:{
                'X-CSRF-TOKEN': csrfTokenMeta.content
            }    
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Lỗi...");
            }
            return response.json();
        })
        .then(data => {
            alert("Đạo Diễn Được Thêm Thành Công");
            fectActor();
        })
    }

    const deleteActor = (id) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/actors/${id}`, {
            method:"delete",
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content
            }
        })
        .then(response => response.json())
        .then(data => {
            alert("Xoá Diễn Viên Thành Công");
            fectActor();
        })
        .catch(err => console.error(err));
    }

    const updateActor = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);

        fetch(`/actors/${editActor.id}`, {
            method:'POST',
            body:formData,
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
                'X-HTTP-Method-Override': 'PUT'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert("Updated Successful");
            fectActor();
        })
    }

    const hanldeClickUpdate = (item) => {
        setEditActor(item);
        setActorName(item.name_actor);
    }

    const handleEditChange = (e) => {
        setActorName(e.target.value);
    }
    useEffect(()=>{
       fectActor();
    }, []);



    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className='mt-4'>
                <div style={{borderRadius:'30px'}} className="shadow">
                        <div className="border-bottom">
                            <p style={{padding:"10px 12px"}} className="m-0">Quản Lý Diễn Viên</p>
                        </div>
                        <form onSubmit={AddActor} method="POST" encType='multipart-data' style={{padding:"14px 16px"}}>
                        <div className="d-flex align-items-center">
                            <label htmlFor="name_actor">Tên Diễn Viên</label>
                            <input className='form-control w-50 ms-3' type="text" placeholder='Nhập Tên Diễn Viên' name='name_actor' id='name_actor' />
                            <button type='submit' className='btn btn-dark ms-3'>SEND</button>
                        </div>   
                    </form>
                    </div>
                    
                </div>

                <div className='mt-4'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Mã Diễn Viên</th>
                                <th>Tên Diễn Viên</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {actor.map((item)=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name_actor}</td>
                                    <td><button onClick={()=>{deleteActor(item.id)}} className="btn btn-danger">Xoá</button></td>
                                    <td>
                                        <button 
                                            onClick={()=>hanldeClickUpdate(item)}
                                            data-bs-toggle="modal" 
                                            data-bs-target="#myModalActor"
                                            className="btn btn-primary">Sửa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="modal" id="myModalActor">
                        <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4>Edit Actor</h4>
                                    </div>

                                    <div className="modal-body">
                                        {editActor && (
                                            <form onSubmit={updateActor} encType="multipart-data">
                                            <label htmlFor="ename_actor">Edit Name</label>
                                            <input value={actorName} onChange={handleEditChange} type="text" name="ename_actor" id="ename_actor" className="form-control mt-3 mb-3" />
                                            <div style={{float:"right"}}>
                                                <button className="btn btn-dark" type="submit">UPDATE</button>
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