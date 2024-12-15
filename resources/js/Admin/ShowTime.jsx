import React, { useEffect, useState} from 'react'
import Toolbar from './Toolbar';
export default function ShowTime(){  
    const [showTime, setShowTime] = useState([]);
    const [moviesName, setMoviesName] = useState([]);
    const [roomsName, setRoomsName] = useState([]);
    const [editShowTime, setEditShowTime] = useState(null);
    const fetchShowTime = () => {
        fetch("/showtime", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            setShowTime(data.showtimes);
            setMoviesName(data.movies);
            setRoomsName(data.rooms);
        })
        .catch(err => console.error("Fetch Error: ", err));
    }
    
    const AddShowTime = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch('/showtime', {
            method:"POST",
            body: formData,
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Lỗi...");
            }
            return response.json();
        })
        .then(data => {
            alert("Add Successful");
            console.log(data);
            fetchShowTime();
        })
        .catch(err => console.error(err));
    }

    const DeleteShowTime = (id) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/showtime/${id}`, {
            method: "DELETE",
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            alert("Deleted succesful");
            console.log(data);
            fetchShowTime();
        })
        .catch(err => console.log(err));
    }
    
    const handleClickUpdate = (item) => {
        setEditShowTime(item);
    }

    const UpdateShowTime = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch(`/showtime/${editShowTime.id}`, {
            method:"POST",
            body: formData,
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
                'X-HTTP-Method-Override': 'PUT'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Updated Successful');
            console.log(data);
            fetchShowTime();
        })
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchShowTime();
    }, []);

    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className="mt-4">
                    <div style={{borderRadius:'30px', overflow:"hidden"}} className="shadow">
                        <div className="border-bottom">
                            <p style={{padding:"10px 12px"}} className="m-0">Quản Lý Suất Chiếu</p>
                        </div>
                        <form  onSubmit={AddShowTime} encType="multipart-data" style={{padding:"14px 16px"}}>
                            <div className="d-flex align-items-center">
                                <label className='col-2' htmlFor="id_movie">Chọn Phim</label>
                                <select style={{width:"85%"}} className='form-control col-10' name="id_movie" id="id_movie">
                                    <option value="">Chọn Phim</option>
                                    {moviesName.map((item) => (
                                        <option key={item.id_movie} value={item.id_movie}>{item.name_movie}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className='col-2' htmlFor="id_room">Chọn Phòng</label>
                                <select style={{width:"85%"}}  className='form-control col-10' name="id_room" id="id_room">
                                    <option value="">Chọn Phòng</option>
                                    {roomsName.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name_room}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className='col-2' htmlFor="showtime">Chọn Thời Gian</label>
                                <input style={{width:"85%"}} className='form-control col-10' type="datetime-local" name="showtime" id='showtime' />
                            </div>

                            <div className='mt-3' style={{float:"right"}}>
                                <button type='submit' className='btn btn-dark'>SEND</button>
                            </div>
                        </form>
                        
                    </div>
                </div>

                <div className="mt-4">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Tên Phim</th>
                                <th>Tên Phòng</th>
                                <th>Giờ Chiếu</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {showTime.length > 0 ? (
                                showTime.map((item) => (
                                    <tr>
                                        <td>{item.movie.name_movie}</td>
                                        <td>{item.room.name_room}</td>
                                        <td>{item.showtime}</td>
                                        <td><button onClick={()=>DeleteShowTime(item.id)} className='btn btn-danger'>XOÁ</button></td>
                                        <td><button onClick={()=>handleClickUpdate(item)} data-bs-toggle="modal" data-bs-target="#editShowTime" className='btn btn-primary'>SỬA</button></td>
                                    </tr>
                                ))
                            ) : 
                            ( <p>Đang Tải Dữ Liêu</p> )
                            }
                        </tbody>
                    </table>

                    <div className="modal fade" id="editShowTime">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>EDIT SHOW TIME</h4>
                                </div>

                                <div className="modal-body">
                                {editShowTime && (
                                    <form  onSubmit={UpdateShowTime} encType="multipart-data">
                                        <div className="d-flex align-items-center">
                                            <label htmlFor="eid_movie">Chọn Phim</label>
                                            <select onChange={(e) => setEditShowTime({...editShowTime, id_movie:e.target.value})} value={editShowTime.id_movie} className='form-control' name="eid_movie" id="eid_movie">
                                                <option value="">Chọn Phim</option>
                                                {moviesName.map((item) => (
                                                    <option key={item.id_movie} value={item.id_movie}>{item.name_movie}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <label htmlFor="eid_room">Chọn Phòng</label>
                                            <select onChange={(e) => setEditShowTime({...editShowTime, id_room:e.target.value})} value={editShowTime.id_room}  className='form-control' name="eid_room" id="eid_room">
                                                <option value="">Chọn Phòng</option>
                                                {roomsName.map((item) => (
                                                    <option key={item.id} value={item.id}>{item.name_room}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <label htmlFor="eshowtime">Chọn Thời Gian</label>
                                            <input onChange={(e) => setEditShowTime({...editShowTime, showtime:e.target.value})} value={editShowTime.showtime} className='form-control' type="datetime-local" name="eshowtime" id='eshowtime' />
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <label htmlFor="edatetime">Chọn Thời Gian</label>
                                            <input onChange={(e) => setEditShowTime({...editShowTime, datetime:e.target.value})} value={editShowTime.datetime} className='form-control' type="datetime-local" name="edatetime" id='edatetime' />
                                        </div>

                                        <div className='mt-3' style={{float:"right"}}>
                                            <button type='submit' className='btn btn-dark'>UPDATE</button>
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