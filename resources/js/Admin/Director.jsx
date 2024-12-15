import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
export default function Director() {
    const [director, setDirector] = useState([]);
    const [editDirector, setEditDirector] = useState(null);
    const [editName, setEditName] = useState("");
    const EditDirector = (dir) => {
        setEditDirector(dir);
        setEditName(dir.name_director);
    };

    const fetchDirector = () => {
        fetch("/director")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Lỗi...");
                }
                return response.json();
            })
            .then((data) => {
                setDirector(data);
            })
            .catch((err) => console.error(err));
    };

    const AddDirector = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch("/directors", {
            method: "POST",
            body: formData,
            headers: {
                "X-CSRF-TOKEN": csrfTokenMeta.content,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Lỗi...");
                }
                return response.json();
            })
            .then(() => {
                alert("Đạo Diễn Được Thêm Thành Công");
                fetchDirector();
            });
    };

    const DeleteDirector = (id) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/directors/${id}`, {
            method: "delete",
            headers: {
                "X-CSRF-TOKEN": csrfTokenMeta.content,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Lỗi...");
                }
                return response.json();
            })
            .then(() => {
                alert("Xoá Đạo Diễn Thành Công");
                fetchDirector();
            })
            .catch((err) => console.error(err));
    };

    const handleEditChange = (e) => {
        setEditName(e.target.value); 
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch(`/directors/${editDirector.id}`,{
            method:"POST",
            body: formData,
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
                'X-HTTP-Method-Override': 'PUT'
            }
        })
            .then(response => {
                if(!response.ok){
                    throw new Error("Error...");
                }
                return response.json();
            })
            .then(data => {
                alert("Updated Successful");
                fetchDirector();
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchDirector();
    }, []);

    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className="mt-4">
                    <div style={{borderRadius:'30px'}} className="shadow">
                        <div className="border-bottom">
                            <p style={{padding:"10px 12px"}} className="m-0">Quản Lý Đạo Diễn</p>
                        </div>
                        <form className="" onSubmit={AddDirector} encType="multipart-data" style={{padding:"14px 16px"}}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="name_actor">Tên Đạo Diễn</label>
                                <input
                                    className="form-control w-50 ms-3"
                                    type="text"
                                    placeholder="Nhập Tên Đạo Diễn"
                                    name="name_director"
                                    id="name_director"
                                />
                                <button type="submit" className="btn btn-dark ms-3">
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-4">
                   
                    <table className="table table-hover m-0 shadow">
                            <thead>
                                <tr>
                                    <th >Mã Đạo Diễn</th>
                                    <th >Tên Đạo Diễn</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {director.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name_director}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    DeleteDirector(item.id);
                                                }}
                                                className="btn btn-danger"
                                            >
                                                Xoá
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => EditDirector(item)}
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                className="btn btn-primary"
                                            >
                                                Sửa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                    
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Sửa Đạo Diễn</h4>
                                </div>

                                <div className="modal-body">
                                    {editDirector && (
                                        <form encType="multipart-data" onSubmit={handleUpdate}>
                                            <div className="d-flex">
                                                <label htmlFor="ename_director">Edit Name</label>
                                                <input
                                                    value={editName}
                                                    onChange={handleEditChange}
                                                    type="text"
                                                    name="ename_director"
                                                    id="ename_director"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="mt-3" style={{ float: "right" }}>
                                                <button className="btn btn-danger">Edit</button>
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
    );
}
