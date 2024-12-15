import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
export default function MMovie(){
    const [movies, setMovies] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [editMovie, setEditMovie] = useState(null);
    const urlPath = "https://img.ophim.live/uploads/movies/";
    const fetchMovie = () => {
        fetch("/moviesdb")
            .then(response => {
                if(!response.ok){
                    throw new Error("Lỗi...")
                }
                return response.json();
            })
            .then(data => {
                console.log(data.movies);
                setMovies(data.movies);
                setDirectors(data.directors);
            })
            .catch(err => console.error(err));
    }
    

    const AddMovie = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch("/movies", {
            method:"POST",
            body: formData,
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content
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
        })
        .catch(err => console.error(err));
    }


    const DeleteMovie = (id) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/movies/${id}`, {
            method:"delete",
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Xoá Phim Thành Công");
            fetchMovie();
        })
        .catch(err => console.error(err));
    }


    const UpdateMovie = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch(`/movies/${editMovie.id_movie}`, {
            method:"POST",
            body: formData, 
            headers:{
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
                'X-HTTP-Method-Override': 'PUT'
            }   
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Lỗi...");
            }
            return response.json();
        })
        .then(data => {
            alert("Updated Successful");
            fetchMovie();
        })
        .catch(err => console.error(err));
    }

    const hanldeClickUpdate = (item) => {
        setEditMovie(item)
    }



    useEffect(()=>{
        fetchMovie();
    }, []);

    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className='mt-4'>
                    <div style={{borderRadius:'30px', overflow:"hidden"}} className="shadow">
                        <div className="border-bottom">
                            <p style={{padding:"10px 12px"}} className="m-0">Quản Lý Phim</p>
                        </div>
                        <form onSubmit={AddMovie} method="POST" encType='multipart-data' style={{padding:"14px 16px"}}>
                            <div className="d-flex align-items-center">
                                <label className="col-2" htmlFor="id_movie">Mã Phòng Phim</label>
                                <input className='form-control  col-10' type="text" placeholder='Nhập Mã Phim' name='id_movie' id='id_movie' />
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className="col-2" htmlFor="name_movie">Tên Phòng Phim</label>
                                <input className='form-control  col-10' type="text" placeholder='Nhập Tên Phim' name='name_movie' id='name_movie' />
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className="col-2" htmlFor="image_movie">Hình Ảnh Phim</label>
                                <input className='form-control  col-10' type="file" name='image_movie' id='image_movie' />
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className="col-2" htmlFor="id_director">Chọn Tác Giả</label>
                                <select name="id_director" id="id_director" className="form-control col-10">
                                    <option value="">Chọn Tác Giả</option>
                                    {directors.map((item) => (<option key={item.id} value={item.id}>{item.name_director}</option>))}
                                </select>
                            </div>

                            <div className="mt-3">
                                <button type='submit' className='btn btn-dark ' style={{ float: 'right' }}>SEND</button>
                            </div>
                        
                        </form>    
                    </div>
                </div>

                <div className='mt-4'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Tên Phim</th>
                                <th>Poster Phim</th>
                                <th>Tên Tác Giả</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {movies.length > 0 ? (
                                movies.map((item)=>(
                                <tr>
                                    <td>{item.name_movie}</td>
                                    <td>
                                        <img style={{width:"100x", height:"100px", objectFit:"cover"}} src={`${urlPath}${item.image_movie}`} alt="" />
                                    </td> 
                                    <td>{item.director.name_director}</td>                          
                                    <td><button onClick={()=>{DeleteMovie(item.id_movie)}} className="btn btn-danger">XOÁ</button></td>
                                    <td><button onClick={()=>{hanldeClickUpdate(item)}} data-bs-toggle="modal" data-bs-target="#myModalMovie" className="btn btn-primary">Sửa</button></td>
                                </tr>
                                ))
                            ) : 
                                    <p>Đang Tải Dữ Liệu</p>
                            }
                        </tbody>
                    </table>

                    <div className="modal" id="myModalMovie">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Edit Movie</h4>
                                </div>

                                <div className="modal-body">
                                    {editMovie && (
                                        <form onSubmit={UpdateMovie} method="POST" encType='multipart-data'>
                                        <div className="d-flex align-items-center mt-3">
                                            <label htmlFor="ename_movie">Tên Phòng Phim</label>
                                            <input onChange={(e) => setEditMovie({...editMovie, name_movie: e.target.value})} className='form-control ms-3' value={editMovie.name_movie} type="text" placeholder='Nhập Tên Phim' name='ename_movie' id='ename_movie' />
                                        </div>

                                        <div className="d-flex align-items-center mt-3">
                                            <label htmlFor="eimage_movie">Hình Ảnh Phim</label>
                                            <input onChange={(e)=>setEditMovie({...editMovie, image_movie:e.target.value})} className='form-control ms-3' type="file" name='eimage_movie' id='eimage_movie' />
                                        </div>

                                        <div className="d-flex align-items-center mt-3">
                                            <label htmlFor="eid_director"></label>
                                            <select onChange={(e)=>setEditMovie({...editMovie, id_director:e.target.value})} value={editMovie.id_director} name="eid_director" id="eid_director" className="form-control">
                                                <option value="">Chọn Tác Giả</option>
                                                {directors.map((item) => (<option key={item.id}  value={item.id}>{item.name_director}</option>))}
                                            </select>
                                        </div>

                                        <div className="mt-3">
                                            <button type='submit' className='btn btn-dark ms-3' style={{ float: 'right' }}>UPDATE</button>
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