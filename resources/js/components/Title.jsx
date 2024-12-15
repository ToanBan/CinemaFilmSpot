import React from "react";

export default function Title(){
    return (
        <>
            <div className="bg-image border rounded mt-3 relative" style={{height:"650px", margin: "0 20px", maxWidth: "1480px", margin: "0 auto"}}>
                <img className="img-sm" src="https://s.studiobinder.com/wp-content/uploads/2019/12/Best-Movies-on-Netflix-Dec-2019-Featured-StudioBinder.jpg" 
                alt="" 
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity:"0.35" }}/>
                
                <p className="absolute absolute-sm text-white">Đặt Vé Xem Phim <br />
                    Nhanh Chóng <br />
                    Lựa Chọn Phim Yêu Thích <br />
                    Giữ Chỗ Ngay Hôm Nay!</p>
            </div>
        </>
    )
}