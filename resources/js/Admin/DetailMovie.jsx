import React, { useEffect, useState } from 'react'
import Toolbar from './Toolbar';
export default function DetailMovie(){
    
    const [movieActor, setMovieActor] = useState([]);
    const [movies, setMovies] = useState([]);
    const [actors, setActors] = useState([]);
    const [editMovieActor, setEditMovieActor] = useState(null);

    const EditMovieActor = (item) => {
        setEditMovieActor(item);
    }

    const fetchMovieActor = () => {
        fetch('/movieactor')
            .then(response => response.json())
            .then(data => {
                setMovieActor(data.movie_actors);
                setMovies(data.movies);
                setActors(data.actors);              
            })
            .catch(err => console.error(err))
    }

    const AddMovieActor = (e) => {
        e.preventDefault();
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const formData = new FormData(e.target);
        fetch('/movieactor', {
            method: "POST", 
            body: formData,
            headers: {
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Add Successful');
            console.log(data);
            fetchMovieActor();
        })
        .catch(err => console.error(err));
    }

    const DeleteMovieActor = (id, id_actor) => {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
    
        fetch(`/movieactor/${id}/${id_actor}`, {
            method : "DELETE",
            headers: {
                'X-CSRF-TOKEN': csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('delete successful');
            fetchMovieActor();
            console.log(data);
        })
        .catch(err => console.error(err));
    }

    const UpdateMovieActor = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        fetch(`/movieactor/${editMovieActor.id_movie}/${editMovieActor.id_actor}`, {
            method: "POST", 
            body: formData, 
            headers: {
                'X-HTTP-Method-Override' : 'PUT', 
                'X-CSRF-TOKEN' : csrfTokenMeta.content,
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('update successful');
        })
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchMovieActor();
    }, [movieActor] );
    return (
        <>
            <div className="container mt-4 ms-full">
                <Toolbar/>
                <div className='mt-4'>
                    <div style={{borderRadius:'30px', overflow:"hidden"}} className="shadow">
                        <div className="border-bottom">
                            <p style={{padding:"10px 12px"}} className="m-0">Quản Lý Chi Tiết Phim</p>
                        </div>
                        <form method="POST" onSubmit={AddMovieActor} encType='multipart-data' style={{padding:"14px 16px"}}>
                            <div className="d-flex align-items-center mt-3">
                                <label className='col-2' htmlFor="id_movie">Chọn Phim</label>
                                <select name="id_movie" id="id_movie" className="form-control col-10">
                                    <option value="">Chọn Phim</option>
                                    {movies.map((item) => (
                                    <option key={item.id_movie} value={item.id_movie}>{item.name_movie}</option>))}
                                </select>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className='col-2' htmlFor="start">Phiên Dịch</label>
                                <input className='form-control col-10' type="text" placeholder='Nhập Phiên Dịch' name='start' id='start' />
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className='col-2' htmlFor="area">Khu Vực</label>
                                <input className='form-control col-10' type="text" name='area' id='area'  placeholder='Nhập Khu Vực'/>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className='col-2' htmlFor="duration">Thời Lượng</label>
                                <input className='form-control col-10' type="text" placeholder='Nhập Thời Lượng Phim' name='duration' id='duration' />
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <label className='col-2' htmlFor="id_actor">Chọn Diễn Viên</label>
                                <select name="id_actor" id="id_actor" className="form-control col-10">
                                    <option value="">Chọn Diễn Viên</option>
                                    {actors.map((item)=>(
                                        <option key={item.id} value={item.id}>{item.name_actor}</option>
                                    ))}
                                </select>
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
                                <th>Tên Phim</th>
                                <th>Bản Dịch</th>
                                <th>Khu Vực</th>
                                <th>Thời Lượng</th>
                                <th>Tên Tác Giả</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {movieActor.length > 0 ? (
                                movieActor.map((item)=>(
                                    <tr>
                                        <td>{item.movie.name_movie}</td>
                                        <td>{item.start}</td>
                                        <td>{item.area}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.actor.name_actor}</td>
                                        <td><button onClick={()=>DeleteMovieActor(item.id_movie, item.id_actor)} className='btn btn-danger'>XOÁ</button></td>
                                        <td><button onClick={()=>EditMovieActor(item)} data-bs-toggle='modal' data-bs-target='#editMovieActor' className='btn btn-primary'>SỬA</button></td> 
                                    </tr>
                                ))
                            ): (
                                <p>Đang Tải Dữ Liệu</p>
                            )}
                        </tbody>
                    </table>

                    <div className="modal fade" id='editMovieActor'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Edit Chi Tiết Phim</h4>
                                </div>

                                <div className="modal-body">
                                {editMovieActor && (
                                     <form onSubmit={UpdateMovieActor} method="POST" encType='multipart-data'>
                                  
                                     <div className="d-flex align-items-center mt-3">
                                         <label htmlFor="start">Phiên Dịch</label>
                                         <input onChange={(e)=>setEditMovieActor({...editMovieActor, start:e.target.value})} value={editMovieActor.start} className='form-control ms-3' type="text" placeholder='Nhập Phiên Dịch' name='start' id='start' />
                                     </div>
 
                                     <div className="d-flex align-items-center mt-3">
                                         <label htmlFor="area">Khu Vực</label>
                                         <input onChange={(e)=>setEditMovieActor({...editMovieActor, area:e.target.value})} value={editMovieActor.area} className='form-control ms-3' type="text" name='area' id='area'  placeholder='Nhập Khu Vực'/>
                                     </div>
 
                                     <div className="d-flex align-items-center mt-3">
                                         <label htmlFor="duration">Thời Lượng</label>
                                         <input onChange={(e)=>setEditMovieActor({...editMovieActor, duration:e.target.value})} value={editMovieActor.duration} className='form-control ms-3' type="text" placeholder='Nhập Thời Lượng Phim' name='duration' id='duration' />
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