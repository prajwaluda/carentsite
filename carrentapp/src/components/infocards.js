import React from "react";
import './stil.css';
import imag1 from './labrador.jpeg'
// import data from "./cardata";
import { Link } from "react-router-dom";
import Carcard from "./carcard";
const products=['<-',1,2,3,4,5,6,7,8,9,10,'->']

const Cards=({dat})=>{
        return(
            <div className="cards">
                {dat&&dat.map((car,index)=>{
                        return(
                            <div key={index}>
                                {console.log(car.name)}
                                <span className="carcard">
                                    <img src={imag1} alt="image not found" className="imag"/>
                                    <div className="new">
                                        <div className="carname">{car.name}</div>
                                        <div className="launchyear">{car.year}</div>
                                    </div>
                                    <div className="features1">
                                        <span> {car.capacity}</span>
                                        <span>{car.fuel}</span>
                                    </div>
                                    <div className="features2">
                                        <span>{car.mileage}</span>
                                        <span>{car.gear}</span>
                                    </div>
                                    <div className="amount2">
                                        <h3 className="amount">{car.rent}</h3><span>/month</span>
                                        <button className="wish" >3</button>
                                        <button className="rent">Rent now</button>
                                    </div>
                                </span>
                            </div>
                        )
                    })}
                </div>
        )

}

export default Cards