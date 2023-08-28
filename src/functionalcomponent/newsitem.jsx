import React from 'react'
import pic1 from "../assets/image/pic1.jpg"
export default function Newsitem(props){
   
        return (
            <>
            
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
                <div className="container-fluid">
                <div className="card crd">
                    <img src={props.pic?props.pic:pic1} height="200px" className="card-img-top " alt="..."/>
                        <div className="card-body">
                            <p className='card-text date'>Date-{props.date}</p>
                            <h5 className="card-title heading">{props.title?props.title.slice(0,50)+"...":""}</h5>
                            <p className='card-text text-center bg-secondary'>{props.source}</p>
                            <p className="card-text des mb-1">{props.description}</p>
                            <a href={props.url} className="btn btn-primary">Read Full Article</a>
                        </div>
                </div>
                
                </div>
                </div>
            </>
        )
    }

