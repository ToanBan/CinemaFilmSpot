import React from "react";

export default function Success(){
    return (
        <>
            <div className="container mt-5">
                <div className="border rounded">
                    <div className="d-flex justify-content-center align-items-center p-5" style={{backgroundColor:"brown"}}>
                        <div className="col-5">
                            <img className="rounded" style={{width:"500px", height:"500px"}} src="https://img.freepik.com/premium-vector/successful-purchase-by-card-concept-vector-illustration_929545-175.jpg?w=740" 
                            alt="" />
                        </div>

                        <div className="col-7 text-center">
                            <div className="mt-5">
                                <h3 className="fw-semibold" style={{color:"cyan"}}>Your order is completed</h3>
                                <p style={{color:"#ffffff"}}>Thank you for your order! <br />
                                Your order is being processed and will be completed within 3-6 hours. <br />
                                You will receive an email confirmation when your order is completed.</p>
                                <a  href="/" className="btn btn-success rounded mt-3">Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}