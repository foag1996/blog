import React from 'react'
import Blog from './Blog'

export default function Card() {
    return (

        <div className="container d-flex justify-content-center align-items-center h-100">

            <div className="row">

                <div className=" col-md-4">
                    <Blog/>
                </div>

                <div className=" col-md-4">
                    <Blog/>
                </div>

                <div className=" col-md-4">
                    <Blog/>
                </div>
                
                <div className=" col-md-4">
                    <Blog/>
                </div>

                <div className=" col-md-4">
                    <Blog/>
                </div>

                <div className=" col-md-4">
                    <Blog/>
                </div>

            </div>

        </div>
        
    )
}
