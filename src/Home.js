import React from 'react'
import img1 from './data/img1.jpg'
import img2 from './data/img2.jpg'
import img3 from './data/img3.jpg'

export default function Home()
{
    return(
        <div>
            <div className="row">
                <div className="col-md-8 mx-auto" style={{width:"12rem"}}>
                    <p style={{display: "inline-block"}}>
                    Welcome to my page! My name is Bob, I'm a tattoo artist.
                    If you are interested in getting a tattoo from me, 
                    write an email to me.
                    </p>
                    <h6>bobart@gmail.com</h6>
                </div>
            </div>
            <div className="form-group m-4" style={{display: "inline-block"}}>
                <h3>My works</h3>
                <div className="card m-3" style={{width: "18rem"}}>
                    <img src={img1} className="card-img-top"/>
                <div className="card-body">
                <p className="card-text">Some cool sleeves</p>
                </div>
            </div>
            <div className="card m-3" style={{width: "18rem"}}>
                    <img src={img2} className="card-img-top"/>
                <div className="card-body">
                <p className="card-text">A spooky Krampus</p>
                </div>
            </div>
            <div className="card m-3" style={{width: "18rem"}}>
                    <img src={img3} className="card-img-top"/>
                <div className="card-body">
                <p className="card-text">My older works</p>
                </div>
            </div>
            </div>
        </div>
    )
}